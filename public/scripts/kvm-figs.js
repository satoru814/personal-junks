/*
  「知識の希少性はどこに残るか」の図版描画。
  図1: 梯子仮定（静的）
  図2: LLM前後 — 上段: レント曲線（対数） / 下段: 収益分布（線形、人数密度×賃金）。
       β・ρ₀・γ スライダーとカーソルが両段に連動。
  図3: 知識球（静的）
  ※ 完全版ノート用の p(a)・レント曲線単体の図 (fig2/fig3 コンテナ) も残してある。
*/
(function () {
	const NS = 'http://www.w3.org/2000/svg';
	function el(p, n, a) {
		const e = document.createElementNS(NS, n);
		for (const k in a) e.setAttribute(k, a[k]);
		p.appendChild(e);
		return e;
	}
	function txt(p, x, y, s, cls, anchor) {
		const t = el(p, 'text', { x, y, 'text-anchor': anchor || 'start' });
		t.setAttribute('class', cls || 'albl');
		t.textContent = s;
		return t;
	}
	function path(pts) {
		return pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('');
	}
	function svg(c, w, h) {
		return el(c, 'svg', { viewBox: `0 0 ${w} ${h}`, role: 'img' });
	}
	function div(parent, cls, before) {
		const d = document.createElement('div');
		d.className = cls;
		if (before) parent.insertBefore(d, before);
		else parent.appendChild(d);
		return d;
	}
	function hover(s, W, ml, cw, cb) {
		const hit = el(s, 'rect', { x: ml, y: 0, width: cw, height: '100%', fill: 'transparent' });
		hit.addEventListener('pointermove', (ev) => {
			const r = s.getBoundingClientRect();
			const px = (ev.clientX - r.left) * (W / r.width);
			cb(Math.min(1, Math.max(0, (px - ml) / cw)));
		});
		return hit;
	}

	/* ---------- 図1: 梯子仮定 ---------- */
	(function () {
		const c = document.getElementById('fig1');
		if (!c) return;
		const W = 680,
			H = 330,
			m = { l: 14, r: 58, t: 24, b: 40 },
			cw = W - m.l - m.r,
			ch = H - m.t - m.b;
		const s = svg(c, W, H);
		const N = 18,
			beta = 2;
		const X = (a) => m.l + a * cw;
		const g = el(s, 'g', {});
		const bh = ch / N;
		for (let i = 1; i <= N; i++) {
			const ai = Math.pow((i - 0.5) / N, 1 / beta);
			const y = m.t + ch - i * bh;
			el(g, 'rect', { x: X(ai), y: y + 1.5, width: X(1) - X(ai), height: bh - 3, rx: 2, class: 'bar' });
		}
		const pts = [];
		for (let k = 0; k <= 100; k++) {
			const p = k / 100;
			pts.push([X(Math.pow(p, 1 / beta)), m.t + ch - p * ch]);
		}
		el(s, 'path', { d: path(pts), class: 'l1' });
		const ax = el(s, 'g', { class: 'axis' });
		el(ax, 'line', { x1: m.l, y1: m.t + ch, x2: m.l + cw, y2: m.t + ch });
		txt(ax, m.l, H - 12, 'a = 0（フロンティア）', 'tick');
		txt(ax, m.l + cw, H - 12, 'A₀（教科書）', 'tick', 'end');
		txt(ax, m.l + cw / 2, H - 12, '生産からの経過時間 a →', 'tick', 'middle');
		el(ax, 'line', { x1: m.l + cw + 6, y1: m.t, x2: m.l + cw + 6, y2: m.t + ch });
		txt(ax, m.l + cw + 12, m.t + ch + 4, '0', 'tick');
		txt(ax, m.l + cw + 12, m.t + 6, '1', 'tick');
		txt(ax, m.l + cw + 12, m.t + ch / 2, 'p', 'tick');
		txt(s, X(0.16) + 6, m.t + ch - 1.2 * bh, '一番先端に届いている人（希少）', 'albl');
		txt(s, X(Math.pow(0.55, 1 / beta)) + 10, m.t + ch - 0.55 * ch - 6, '左端の包絡線 ＝ p(a)', 't1');
	})();

	/* ---------- 完全版ノート用: p(a) と β（コンテナがあれば描画） ---------- */
	(function () {
		const c = document.getElementById('fig2');
		if (!c) return;
		const W = 680,
			H = 300,
			m = { l: 46, r: 20, t: 18, b: 40 },
			cw = W - m.l - m.r,
			ch = H - m.t - m.b;
		const s = svg(c, W, H);
		const X = (a) => m.l + a * cw,
			Y = (p) => m.t + ch - p * ch;
		const grid = el(s, 'g', { class: 'grid' });
		[0.5, 1].forEach((p) => el(grid, 'line', { x1: m.l, y1: Y(p), x2: m.l + cw, y2: Y(p) }));
		const ax = el(s, 'g', { class: 'axis' });
		el(ax, 'line', { x1: m.l, y1: m.t + ch, x2: m.l + cw, y2: m.t + ch });
		txt(ax, m.l - 8, Y(0) + 4, '0', 'tick', 'end');
		txt(ax, m.l - 8, Y(0.5) + 4, '0.5', 'tick', 'end');
		txt(ax, m.l - 8, Y(1) + 4, '1', 'tick', 'end');
		txt(ax, m.l, H - 12, 'a = 0（フロンティア）', 'tick');
		txt(ax, m.l + cw, H - 12, 'A₀', 'tick', 'end');
		txt(ax, 14, m.t + 2, '拡散度 p(a)', 'tick');
		[
			{ b: 0.5, cls: 'l1-lite' },
			{ b: 1, cls: 'l1-mid' },
			{ b: 2, cls: 'l1' },
		].forEach(({ b, cls }) => {
			const pts = [];
			for (let k = 0; k <= 120; k++) {
				const a = k / 120;
				pts.push([X(a), Y(Math.pow(a, b))]);
			}
			el(s, 'path', { d: path(pts), class: cls });
		});
		txt(s, X(0.18), Y(Math.pow(0.18, 0.5)) - 8, 'β = 0.5（速い拡散）', 'albl');
		txt(s, X(0.52), Y(0.52) - 8, 'β = 1', 'albl');
		txt(s, X(0.78), Y(Math.pow(0.78, 2)) - 10, 'β = 2（先端が薄い）', 't1');
	})();

	/* ---------- 完全版ノート用: レント曲線（コンテナがあれば描画） ---------- */
	(function () {
		const c = document.getElementById('fig3');
		if (!c) return;
		const W = 680,
			H = 320,
			m = { l: 52, r: 20, t: 20, b: 40 },
			cw = W - m.l - m.r,
			ch = H - m.t - m.b;
		const s = svg(c, W, H);
		const beta = 1.5,
			a0 = 0.02,
			astar = 0.15;
		const wf = (a) => Math.pow(1 / a, beta);
		const lmax = Math.log(wf(a0)),
			lmin = Math.log(1);
		const X = (a) => m.l + ((a - a0) / (1 - a0)) * cw;
		const Y = (w) => m.t + ((lmax - Math.log(w)) / (lmax - lmin)) * ch;
		const grid = el(s, 'g', { class: 'grid' });
		[1, 10, 100].forEach((v) => {
			if (Math.log(v) <= lmax) el(grid, 'line', { x1: m.l, y1: Y(v), x2: m.l + cw, y2: Y(v) });
		});
		const ax = el(s, 'g', { class: 'axis' });
		el(ax, 'line', { x1: m.l, y1: m.t + ch, x2: m.l + cw, y2: m.t + ch });
		[1, 10, 100].forEach((v) => {
			if (Math.log(v) <= lmax) txt(ax, m.l - 8, Y(v) + 4, '×' + v, 'tick', 'end');
		});
		txt(ax, m.l, H - 12, 'a = 0', 'tick');
		txt(ax, m.l + cw, H - 12, 'A₀', 'tick', 'end');
		txt(ax, 14, m.t + 2, 'レント w(a)（対数）', 'tick');
		const area = [];
		for (let k = 0; k <= 100; k++) {
			const a = astar + (1 - astar) * (k / 100);
			area.push([X(a), Y(wf(a))]);
		}
		area.push([X(1), m.t + ch]);
		area.push([X(astar), m.t + ch]);
		el(s, 'path', { d: path(area) + 'Z', class: 'w1' });
		const pts = [];
		for (let k = 0; k <= 140; k++) {
			const a = a0 + (1 - a0) * (k / 140);
			pts.push([X(a), Y(wf(a))]);
		}
		el(s, 'path', { d: path(pts), class: 'l1' });
		el(s, 'line', { x1: X(astar), y1: m.t + ch, x2: X(astar), y2: Y(wf(astar)), class: 'cross' });
		txt(s, X(astar), H - 12, 'a*', 'tick', 'middle');
		txt(s, X(astar) + 14, Y(wf(astar)) + 34, '塗り面積 ＝ V(a*)', 't1');
		txt(s, X(a0) + 10, Y(wf(a0)) + 16, 'フロンティアで発散（β > 1 なら V も発散）', 'albl');
	})();

	/* ---------- 図2: LLM前後（スライダー + ホバー、上下2段連動） ---------- */
	(function () {
		const c = document.getElementById('fig4');
		if (!c) return;
		const ro = document.getElementById('ro4');
		const ctrl = div(c.parentElement, 'controls', c);
		const params = [
			{ key: 'beta', label: 'β（先端の薄さ）', min: 0.5, max: 3, step: 0.1, val: 1.5 },
			{ key: 'rho0', label: 'ρ₀（LLM被覆の上限）', min: 0, max: 1, step: 0.05, val: 0.9 },
			{ key: 'gamma', label: 'γ（文書化ラグ）', min: 1, max: 3, step: 0.1, val: 1.5 },
		];
		const inputs = {};
		params.forEach((p) => {
			const lab = document.createElement('label');
			const name = document.createElement('span');
			name.textContent = p.label;
			const valEl = document.createElement('b');
			valEl.textContent = p.val.toFixed(2).replace(/0$/, '');
			const inp = document.createElement('input');
			inp.type = 'range';
			inp.min = p.min;
			inp.max = p.max;
			inp.step = p.step;
			inp.value = p.val;
			inp.addEventListener('input', () => {
				valEl.textContent = Number(inp.value).toFixed(2).replace(/0$/, '');
				render();
			});
			inputs[p.key] = inp;
			lab.append(name, inp, valEl);
			ctrl.appendChild(lab);
		});

		let lastA = 0.3;
		function render() {
			const beta = Number(inputs.beta.value),
				rho0 = Number(inputs.rho0.value),
				gamma = Number(inputs.gamma.value);
			const a0 = 0.02;
			const P = (a) => Math.min(1, Math.pow(a, beta));
			const w = (a) => 1 / P(a);
			const ret = (a) => {
				const p = P(a);
				return p / (p + (1 - p) * Math.min(1, rho0 * Math.pow(p, gamma)));
			};
			const wt = (a) => w(a) * ret(a);

			/* --- 上段: レント曲線（対数） --- */
			c.innerHTML = '';
			const W = 680,
				H = 340,
				m = { l: 52, r: 20, t: 22, b: 40 },
				cw = W - m.l - m.r,
				ch = H - m.t - m.b;
			const s = svg(c, W, H);
			const lmax = Math.log(w(a0)),
				lmin = Math.log(0.9);
			const X = (a) => m.l + ((a - a0) / (1 - a0)) * cw;
			const Y = (v) => m.t + ((lmax - Math.log(v)) / (lmax - lmin)) * ch;
			const A = (t) => a0 + (1 - a0) * t;
			let amin = 0.5,
				rmin = 1;
			for (let k = 1; k <= 400; k++) {
				const a = a0 + (1 - a0) * (k / 400);
				const r = ret(a);
				if (r < rmin) {
					rmin = r;
					amin = a;
				}
			}
			let bl = amin,
				br = amin;
			for (let k = 1; k <= 400; k++) {
				const a = a0 + (1 - a0) * (k / 400);
				if (ret(a) < rmin * 1.6) {
					bl = Math.min(bl, a);
					br = Math.max(br, a);
				}
			}
			/* 先端（a ≈ 0）の残存率。γ → 1 では ρ/p が ρ₀ で下げ止まり、ここも崩れる。 */
			const retFront = ret(a0);
			const frontHit = retFront < 0.9;
			/* 中腹の谷は「先端より明確に深い」ときだけ中腹と呼ぶ。 */
			const midCollapse = rmin < 0.98 && rmin < retFront * 0.97;
			if (midCollapse)
				el(s, 'rect', { x: X(bl), y: m.t, width: X(br) - X(bl), height: ch, class: 'w2' });
			const grid = el(s, 'g', { class: 'grid' });
			[1, 10, 100].forEach((v) => {
				if (Math.log(v) <= lmax) el(grid, 'line', { x1: m.l, y1: Y(v), x2: m.l + cw, y2: Y(v) });
			});
			const ax = el(s, 'g', { class: 'axis' });
			el(ax, 'line', { x1: m.l, y1: m.t + ch, x2: m.l + cw, y2: m.t + ch });
			[1, 10, 100].forEach((v) => {
				if (Math.log(v) <= lmax) txt(ax, m.l - 8, Y(v) + 4, '×' + v, 'tick', 'end');
			});
			txt(ax, m.l, H - 12, 'a = 0（フロンティア）', 'tick');
			txt(ax, m.l + cw, H - 12, 'A₀（内部）', 'tick', 'end');
			txt(ax, 14, m.t + 2, 'レント（対数）', 'tick');
			const mk = (f, cls) => {
				const pts = [];
				for (let k = 0; k <= 200; k++) {
					const a = a0 + (1 - a0) * (k / 200);
					pts.push([X(a), Y(Math.max(0.9, f(a)))]);
				}
				el(s, 'path', { d: path(pts), class: cls });
			};
			mk(w, 'l1');
			mk(wt, 'l2');
			txt(s, X(0.05) + 8, Y(w(0.05)) + 4, 'w(a)　LLM 前', 't1');
			txt(s, X(0.06) + 8, Y(Math.max(0.9, wt(0.06))) + 22, 'w̃(a)　LLM 後', 't2');
			if (midCollapse) txt(s, X(amin), m.t + 14, '中腹：レント崩壊', 't2', 'middle');
			txt(
				s,
				X(a0) + 6,
				Y(w(a0)) + 14,
				frontHit
					? '先端も崩壊（残存 ' + Math.round(retFront * 100) + '%）'
					: '先端：無傷',
				frontHit ? 't2' : 'albl strong',
			);
			txt(s, X(0.97), Y(1) - 8, '内部：もともとゼロ', 'albl', 'end');
			const cross = el(s, 'line', { y1: m.t, y2: m.t + ch, class: 'cross', opacity: 0 });
			const d1 = el(s, 'circle', { r: 4, class: 'dot1', opacity: 0 });
			const d2 = el(s, 'circle', { r: 4, class: 'dot2', opacity: 0 });

			/* --- 下段: 収益分布（線形） ---
			   人数密度 g(a) = p'(a) = β·a^(β−1)、
			   位置 a の人の収益 V(a) = Σ 保有ヴィンテージのレント（数値積分）。
			   収益密度 D(a) = g(a)·V(a)。面積 ＝ 労働収益の総量。 */
			const c2el = document.getElementById('fig4b');
			let sync2 = null,
				incomeRetAt = null;
			if (c2el) {
				c2el.innerHTML = '';
				const W2 = 680,
					H2 = 250,
					m2 = { l: 52, r: 20, t: 18, b: 36 },
					cw2 = W2 - m2.l - m2.r,
					ch2 = H2 - m2.t - m2.b;
				const s2 = svg(c2el, W2, H2);
				const K = 300;
				const as = [],
					wsArr = [],
					rsArr = [];
				for (let i = 0; i <= K; i++) {
					const a = a0 + (1 - a0) * (i / K);
					as.push(a);
					wsArr.push(w(a));
					rsArr.push(ret(a));
				}
				const V = new Array(K + 1).fill(0),
					Vt = new Array(K + 1).fill(0);
				for (let i = K - 1; i >= 0; i--) {
					const da = as[i + 1] - as[i];
					V[i] = V[i + 1] + ((wsArr[i] + wsArr[i + 1]) / 2) * da;
					Vt[i] =
						Vt[i + 1] + ((wsArr[i] * rsArr[i] + wsArr[i + 1] * rsArr[i + 1]) / 2) * da;
				}
				const D0 = as.map((a, i) => beta * Math.pow(a, beta - 1) * V[i]);
				const D1 = as.map((a, i) => beta * Math.pow(a, beta - 1) * Vt[i]);
				const dmax = Math.max(...D0);
				const X2 = (a) => m2.l + ((a - a0) / (1 - a0)) * cw2;
				const Y2 = (d) => m2.t + ch2 - (d / dmax) * (ch2 - 10);
				const up = as.map((a, i) => [X2(a), Y2(D0[i])]);
				const dn = as.map((a, i) => [X2(a), Y2(D1[i])]).reverse();
				el(s2, 'path', { d: path(up.concat(dn)) + 'Z', class: 'w2' });
				el(s2, 'path', {
					d:
						path(
							as
								.map((a, i) => [X2(a), Y2(D1[i])])
								.concat([
									[X2(1), m2.t + ch2],
									[X2(a0), m2.t + ch2],
								]),
						) + 'Z',
					class: 'w1',
				});
				el(s2, 'path', { d: path(as.map((a, i) => [X2(a), Y2(D0[i])])), class: 'l1' });
				el(s2, 'path', { d: path(as.map((a, i) => [X2(a), Y2(D1[i])])), class: 'l2' });
				const ax2 = el(s2, 'g', { class: 'axis' });
				el(ax2, 'line', { x1: m2.l, y1: m2.t + ch2, x2: m2.l + cw2, y2: m2.t + ch2 });
				txt(ax2, m2.l, H2 - 10, 'a = 0（フロンティア）', 'tick');
				txt(ax2, m2.l + cw2, H2 - 10, 'A₀（内部）', 'tick', 'end');
				txt(ax2, 14, m2.t + 2, '収益の密度（人数 × 収益、線形）', 'tick');
				let gi = 0,
					gv = 0;
				for (let i = 0; i <= K; i++) {
					const d = D0[i] - D1[i];
					if (d > gv) {
						gv = d;
						gi = i;
					}
				}
				if (gv > 0.03 * dmax) {
					txt(
						s2,
						X2(as[gi]),
						(Y2(D0[gi]) + Y2(D1[gi])) / 2 + 4,
						as[gi] < 0.12 ? '失われる収益（先端にも及ぶ）' : '失われる中腹の収益',
						't2',
						'middle',
					);
				}
				txt(s2, X2(0.04) + 6, Y2(D0[Math.round(0.02 * K)]) + 16, 'LLM 前', 't1');
				txt(s2, X2(0.62), Y2(D1[Math.round(0.6 * K)]) + 18, 'LLM 後', 't2');
				const cross2 = el(s2, 'line', { y1: m2.t, y2: m2.t + ch2, class: 'cross', opacity: 0 });
				sync2 = (a) => {
					const x = X2(a);
					cross2.setAttribute('x1', x);
					cross2.setAttribute('x2', x);
					cross2.setAttribute('opacity', 1);
				};
				incomeRetAt = (a) => {
					const i = Math.min(K, Math.max(0, Math.round(((a - a0) / (1 - a0)) * K)));
					return V[i] > 0 ? Vt[i] / V[i] : 1;
				};
				hover(s2, W2, m2.l, cw2, (t) => show(t));
			}

			const show = (t) => {
				lastA = t;
				const a = A(t),
					x = X(a);
				cross.setAttribute('x1', x);
				cross.setAttribute('x2', x);
				cross.setAttribute('opacity', 1);
				d1.setAttribute('cx', x);
				d1.setAttribute('cy', Y(w(a)));
				d1.setAttribute('opacity', 1);
				d2.setAttribute('cx', x);
				d2.setAttribute('cy', Y(Math.max(0.9, wt(a))));
				d2.setAttribute('opacity', 1);
				if (sync2) sync2(a);
				if (ro) {
					let html =
						'<span>位置 a／A₀ = <b>' +
						a.toFixed(2) +
						'</b></span><span>拡散度 p = <b>' +
						(P(a) * 100).toFixed(1) +
						'%</b></span><span class="k1">w = ×' +
						w(a).toFixed(1) +
						'</span><span class="k2">w̃ = ×' +
						wt(a).toFixed(1) +
						'</span><span>レント残存率 <b>' +
						(ret(a) * 100).toFixed(0) +
						'%</b></span>';
					if (incomeRetAt)
						html +=
							'<span>この位置の人の収益残存 <b>' +
							(incomeRetAt(a) * 100).toFixed(0) +
							'%</b></span>';
					ro.innerHTML = html;
				}
			};
			show(lastA);
			hover(s, W, m.l, cw, show);
		}
		render();
	})();

	/* ---------- 図3: 知識球 ---------- */
	(function () {
		const c = document.getElementById('fig5');
		if (!c) return;
		const W = 680,
			H = 300;
		const s = svg(c, W, H);
		const cx = 250,
			cy = 155,
			r1 = 78,
			r2 = 112;
		el(s, 'circle', {
			cx,
			cy,
			r: r2,
			fill: 'none',
			stroke: 'var(--c2)',
			'stroke-width': 2,
			'stroke-dasharray': '5 5',
		});
		el(s, 'circle', {
			cx,
			cy,
			r: (r1 + r2) / 2,
			fill: 'none',
			stroke: 'var(--c2)',
			'stroke-width': r2 - r1,
			opacity: 0.16,
		});
		el(s, 'circle', { cx, cy, r: r1, fill: 'var(--c1-wash)', stroke: 'var(--c1)', 'stroke-width': 2 });
		[
			[1, 0],
			[0.5, -0.87],
			[-0.5, -0.87],
			[-1, 0],
			[0.5, 0.87],
			[-0.5, 0.87],
		].forEach(([dx, dy]) => {
			el(s, 'line', {
				x1: cx + dx * (r1 + 4),
				y1: cy + dy * (r1 + 4),
				x2: cx + dx * (r2 - 2),
				y2: cy + dy * (r2 - 2),
				stroke: 'var(--c2)',
				'stroke-width': 2,
			});
		});
		txt(s, cx, cy - 6, '内部（コーデックス化済み）', 'albl strong', 'middle');
		txt(s, cx, cy + 14, 'LLM が安価に供給', 'albl', 'middle');
		txt(s, 420, 86, '球（ストック）は縮まない —', 'albl strong');
		txt(s, 420, 108, '社会的に単調に蓄積する', 'albl');
		txt(s, 420, 150, '表面積（フロンティア）は', 't2');
		txt(s, 420, 172, '半径とともに増え続ける', 't2');
		txt(s, 420, 214, 'dStock／dt ＝ λ·N_f：', 'albl strong');
		txt(s, 420, 236, '先端人口が球の成長速度を決め、', 'albl');
		txt(s, 420, 258, '成長が新たな希少領域を生む', 'albl');
	})();
})();
