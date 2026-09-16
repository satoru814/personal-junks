/*
  いいねカウント API (Cloudflare Pages Functions)。
  GET  /api/like?slug=<post-slug>  -> {count}
  POST /api/like?slug=<post-slug>  -> {count} (インクリメント後)

  デプロイ後に必要な設定（1回だけ）:
    Cloudflare ダッシュボード → Workers & Pages → 対象プロジェクト
    → Settings → Bindings → KV namespace binding を追加
    → Variable name: LIKES / 新規 namespace（例: personal-junks-likes）を作成して紐付け

  注意: KV は結果整合なので同時クリックでまれに取りこぼすが、
  個人ブログのいいね用途では許容する（厳密にするなら D1 か Durable Objects）。
*/

const json = (data, status = 200) =>
	new Response(JSON.stringify(data), {
		status,
		headers: { 'content-type': 'application/json' },
	});

const getSlug = (request) => {
	const slug = new URL(request.url).searchParams.get('slug');
	return slug && /^[a-z0-9-]{1,100}$/.test(slug) ? slug : null;
};

export async function onRequestGet({ request, env }) {
	const slug = getSlug(request);
	if (!slug) return json({ error: 'bad slug' }, 400);
	if (!env.LIKES) return json({ error: 'KV not bound' }, 503);
	const count = Number((await env.LIKES.get(slug)) ?? 0);
	return json({ count });
}

export async function onRequestPost({ request, env }) {
	const slug = getSlug(request);
	if (!slug) return json({ error: 'bad slug' }, 400);
	if (!env.LIKES) return json({ error: 'KV not bound' }, 503);
	const count = Number((await env.LIKES.get(slug)) ?? 0) + 1;
	await env.LIKES.put(slug, String(count));
	return json({ count });
}
