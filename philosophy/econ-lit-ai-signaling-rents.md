# AI×シグナリング／専門家レント／検証の経済学 — 文献サーベイ（2026-09 時点）

3スレッド並列調査の統合。全エントリはアブストラクトページ取得等で実在確認済み（確認不能だったものは除外）。
知識の希少性はどこに残るか（knowledge-scarcity.md）・verification-as-persuasion.md の理論的裏付け資料。

---

## I. シグナリングへの影響（実証＋理論）

**収束しつつあるストーリーは二段階**: 書字支援は個人の送り手を最初は助けるが、集団レベルでシグナルの情報量を侵食し、均衡はプーリング（実力の識別不能化）へ向かう。

### 実証

- **Wiles (van Inwegen), Munyikwa & Horton** — "Algorithmic Writing Assistance on Jobseekers' Resumes Increases Hires" (NBER WP 30886, 2023 → Management Science 2025)。約48万人の RCT: レジュメの AI 支援で採用 +8%・時給 +8.4%、雇用主満足は低下せず。著者ら自身が「安価な文章技術は文章というシグナルを壊す」と予言。
- **Cui, Dias & Ye** — "Signaling in the Age of AI: Evidence from Cover Letters" (arXiv:2509.25054, 2025)。Freelancer.com の AI カバーレター機能導入前後の diff-in-diff: 整合度とコールバックの相関が **−51%**。雇用主は職歴へ重み付けを移す。AI 下書きを「編集した時間」はまだ採用を予測する。
- **Galdin & Silbert** — "Making Talk Cheap: Generative AI and Labor Market Signaling" (arXiv:2511.08785, 2025)。実証＋構造 Spence モデル。シグナル費用ゼロの反実仮想では**能力上位五分位の採用が −19%、下位五分位が +14%** — 市場は非実力主義化する。シグナル崩壊の定量化として現状最重要。
- **Cowgill, Hernández-Lagos & Wright** — "Does AI Cheapen Talk?" (Management Science 2026)。候補者の ChatGPT 利用で評価者のスクリーニング誤差 +4〜9%、評価者は非テキストシグナル（経歴照会等）を 6〜9% 多く要求。ただし非英語圏送り手のスクリーニング精度は改善（シグナルの民主化の側面）。
- **Wiles & Horton** — "Generative AI and Labor Market Matching Efficiency" (WP 2026)。求人票側の実験: AI で求人 +19%・作成時間 −44% だが**マッチは増えず**。低意図の求人が「雇う気の真剣さ」シグナルを希釈し、求職者の無駄な応募時間は雇用主の節約の約6倍 — 需要側の情報公害。
- **Zhu & Molnar** — "Blissful (A)Ignorance" (arXiv:2501.15678, 2025)。受け手は AI 生成かもしれない文章を割り引いて**いない**（開示されると急に否定的になる）。理論上死んだシグナルを受け手がまだ再価格付けしていない不均衡状態の証拠。

### 理論

- **Qiu, Yu & Xu** — "Performance Manipulation" (arXiv:2604.22230, 2026)。take-home 廃止の動きを動機にしたスクリーニングモデル: AI 能力が閾値を超え、評価が定型的内容に支配されると、成果ベースのスクリーニングは**無情報プーリング均衡に崩壊**。創造的内容が十分残れば生存。Kaggle スクリプト約1,500本の裏付け。
- **Immorlica, Lucier & Slivkins** — "Generative AI as Economic Agents" (arXiv:2406.00477, 2024)。全プレイヤーを人間＋AI として通信ゲームを再定式化する枠組み論文（推薦状の costly signaling 例を含む）。
- **Steigenberger** — "Deceptive signalling" (IJMR 2025)。シグナリング理論×欺瞞の系統的レビュー（122本）。生成 AI は欺瞞シグナルの生産費用と検出費用を同時に下げると明示。

### 研究の空白（＝書く価値のある場所）

- 監督付き試験・対面面接への回帰: 経済学論文はまだ無し（業界調査のみ: Robert Half 2026 で HR リーダーの67%が AI 応募で採用が遅延と回答等）。
- LLM 時代の sheepskin effect（学位シグナル）再検証: 見当たらず。
- 労働市場の signal jamming 理論（Fudenberg–Tirole 的な意味で）: 専用論文なし。

---

## II. 専門家レント・賃金分布への影響

**実証の対立軸**: 閉じた定型タスクでは「圧縮」（下位が最も得する）、開いたタスク・自律型 AI では「拡大」（上位が得し、下位はむしろ損）。理論の到達点はこの2つの調停。

### 閉じたタスク → 圧縮（既存専門家の暗黙知レントの再分配）

- **Noy & Zhang** (Science 2023) — 文章 RCT: 時間 −40%・品質 +18%、**低能力者が最も改善**。AI はスキルの補完でなく努力の代替。
- **Brynjolfsson, Li & Raymond** — "Generative AI at Work" (QJE 2025)。コールセンター5,179人: 平均 +15%、**新人・低スキルは +30%超、最熟練はほぼゼロ** — AI がトップの暗黙知を符号化して新人に配る＝レント再分配の実測。
- **Dell'Acqua et al.** — "Jagged Technological Frontier" (2023 → Organization Science 2025)。BCG コンサル758人: フロンティア内で品質 +40%、**下位半分 +43% vs 上位半分 +17%**。ただしフロンティア外のタスクでは AI 利用者の誤答が +19pp。
- **Peng et al.** (arXiv:2302.06590) — Copilot で 55.8% 高速化、経験の浅い開発者ほど利得大。
- **Cui et al.** — 3社フィールド実験 (Management Science 2025)、開発者4,867人: タスク完了 +26%、若手ほど利得大。反例: METR 2025 RCT は熟練 OSS 開発者が慣れたリポジトリでは**遅くなる**ことを発見。

### 開いたタスク → 拡大（判断が希少要素になる）

- **Otis et al.** — ケニア起業家実験 (Management Science 2026)。GPT-4 メンターで**上位実績者は +15%、下位は −10%**（一般論の助言を文脈に合わず実行）— 判断力が AI の補完財である場では格差拡大。

### 理論による調停

- **Ide & Talamàs** — "Artificial Intelligence in the Knowledge Economy" (**JPE 133(12), 2025**; arXiv:2312.05481)。Garicano 階層に AI を実装。**自律型 AI は最上位知識者を利し（AI ワーカーを大スパンで管理）、copilot 型は最下位を利する** — 実証2陣営の対立を AI の自律性次元で調停する旗艦論文。
- **Ide & Talamàs** — "The Turing Valley" (arXiv:2408.16443, 2026改訂)。労働所得は AI 能力の U 字型: 人間が勝る次元での AI 改善は賃金を**下げ**、既に AI が勝る次元での改善は上げる — 漸進的進歩はまず賃金を圧迫する。
- **Autor** — "Applying AI to Rebuild Middle Class Jobs" (NBER w32140, 2024)。コンピュータ化はエリート専門家に意思決定レントを集中させたが、AI は**専門性を下方に拡張**して（中スキル層が医師・弁護士の業務の一部を担えるように）エリートレントを侵食しつつ中間層賃金を上げ得る、という規範的議論。
- **Autor & Thompson** — "Expertise" (NBER w33941 → JEEA 2025, Schumpeter Lecture)。自動化の賃金効果は「タスク束の専門的部分と非専門的部分のどちらが除去されるか」で決まる一般枠組み。非専門部分の除去→要求専門性と賃金上昇、専門部分の除去→脱スキル化と賃金低下。職業ごとの予測装置。
- **Garicano & Rayo** — "The Economics of Superabundant AI" (NBER 巻収録予定, 2025-26)。自律性×計算資源の希少性が補完/代替を決める。
- **Korinek & Stiglitz** (NBER w24174) / **Korinek & Suh** — "Scenarios for the Transition to AGI" (NBER w32255, 2024)。マクロ側: タスク複雑性の裾が有界なら完全自動化で賃金崩壊、無界なら永続上昇 — 自動化と資本蓄積の競争。

### 集計データ（2024–26）

- **Hui, Reshef & Zhou** (Organization Science 2024) — Upwork: 曝露職種で仕事・収入が減少、**トップ評価フリーランサーほど打撃** — 評判レントは守ってくれなかった。
- **Humlum & Vestergaard** (NBER w33777, 2025) — デンマーク行政データ: チャットボット導入2年で賃金・労働時間への効果は**精密なゼロ**（CI で 1–2% 超を棄却）。
- **Brynjolfsson, Chandar & Chen** — "Canaries in the Coal Mine?" (Stanford DEL, 2025-26)。ADP 給与データ: **22–25歳の AI 曝露職種で相対雇用 −13〜16%**（2026年央で差 ~19%）、自動化型で集中、調整は賃金でなく雇用マージン、経験者は安定 — **侵食されているのは現職者のレントではなく梯子の下段**。

### 研究の空白

- 資格・免許レント×AI の直接推定: 専用論文なし（Autor w32140 が最接近）。

---

## III. 生成 vs 検証の経済学

- **Catalini, Hui & Wu** — "Some Simple Economics of AGI" (arXiv:2602.20946 / MIT Sloan, 2026)。自動化コスト曲線（指数的低下）と検証コスト曲線（生物学的ボトルネック）の衝突として AGI を定式化。**Measurability Gap** と「測定可能性バイアス型技術変化」（skill-biased でなく measurability-biased）。レントは検証・説明責任（来歴、ground-truth レジストリ、責任引受）へ移動。「missing junior loop」「codifier's curse」「AI が AI を検証する相関エラーの罠」。主流経済学者による現状最良の定式化。
- **Dogonowski** — "A New Theory of the Firm for the Age of AI" (SSRN 7053918, 2026)。**Cost Floor Theorem**（検証基準が拘束的である限り、使用可能な出力あたり期待費用はモデル能力に依らずゼロから離れて下界を持つ）と Incentive Irrelevance（デプロイ済み AI は誘因に反応しない固定方針なのでガバナンスは事前設計であるべき）。
- **Bauer** — "The Last Costly Signal: How Generative AI Collapses Competence Signaling and Why Liability Sustains Markets for Expert Services" (arXiv:2607.26327, 2026)。Spence＋信用財モデル: AI 出力品質が閾値を超えると**生産費用ベースの分離均衡は全滅**（レモン化と専門家退出）。**成果連動の保証・賠償責任が AI 能力に依らず分離を回復**する一方、来歴スタンプ（C2PA）では回復不能なことを証明。→「専門家が売っているのは知識でなく保証」の形式版。
- **Gans & Goldfarb** — "O-Ring Automation" (NBER w34639, 2026)。乗法的タスク補完性の下では、安いタスクの自動化が残る人間ボトルネック（検証・判断）の価値を増幅。線形の曝露指数は置換を過大評価。
- **Agrawal, Gans & Goldfarb** — "The Economics of Bicycles for the Mind" (NBER w34034, 2025)。実装スキルは代替されるが、「機会の判断」は常に AI の補完財。人間の役割は「何をやる価値があるか・うまくいったか」の評価へ移動。
- **Klein & Wieczorek** — "The Headless Firm" (arXiv:2602.21401, 2026)。調整コストは O(n²)→O(n) に潰れるが**検証はタスク処理量に比例して残る** → 砂時計型均衡。注意: 著者はこのインフラを売る企業の創業者（COI 開示あり）。批判論文 "Going Headless?" (arXiv:2605.17812): 顧客が「責任ある判断」を買っている領域では headless 化は破壊的で「ルール負債」を生む。
- **Galdin & Silbert / Hasan** — 情報経済学側: 前者は I 節参照。Hasan "Attention Lemons" (arXiv:2507.22435): エージェントのトラフィックが注意市場のレモンになる逆選抜モデル。
- **Ivanov, Dütting, Talgam-Cohen, Wang & Parkes** — "Principal-Agent Reinforcement Learning" (arXiv:2407.18074, 2024)。AI エージェントへの委任を成果連動契約で制御するアルゴリズム的契約理論の起点。ACM EC 2026 に LLM×メカニズムデザインのワークショップが発足。
- **Korinek** — JEL 2023 サーベイ＋ "AI Agents for Economic Research" (2025)。通奏低音は「経済学者の生産性利得はマイクロタスク出力を安く検証できるかに依存」。
- 除外: "The Economics of Model Collapse"(arXiv:2605.20279) は**2026-08 に著者取り下げ**（均衡証明の数学的誤り）。引用不可。
- 用語メモ: "verification capital" という語をそのまま使う論文は未発見（"verification infrastructure/bandwidth/standard" が近い）— **用語の空き地**。

---

## IV. 自分の枠組みとの突合

1. **Bauer (arXiv:2607.26327) は「シグナリング崩壊→保証が分離を回復」をそのまま形式化しており**、この会話で独立に導いた「専門家の商品は保証」「検証装置は single-crossing の再建インフラ」テーゼの学術的裏付けになる。エッセイから直接引用可能。
2. **Ide–Talamàs の自律性二分法は図4の2チャネルに写像できる**: copilot = 学習コスト低下チャネル c̃（下位を利する）、自律型 = 実効供給チャネル p̃（上位を利する）。ヴィンテージモデルの拡張ポイント。
3. **Canaries の「entry rungs の侵食」と Catalini らの「missing junior loop」は、梯子仮定の下段が壊れる話** — 誰もフロンティアへ登り始められなくなるなら N_f の再生産が止まる。§6 の動学への重要な逆風で、モデルにまだ入っていない。
4. **Measurability-biased technical change は ρ(a) = ρ₀p^γ の一般化**: 検証可能・文書化済みのものから自動化される、という同じ非一様性を「測定可能性」軸で言っている。
5. **実証の対立（圧縮 vs 拡大）は「タスクが閉じているか開いているか」で割れており**、これは検証フィードバックの安さで探索の主体が決まるという以前の議論（探索は検証ループの速さで分かれる）と同型。
6. 空白地帯（sheepskin×LLM、資格レント×AI、監督付き試験への回帰、verification capital の語）は、ブログ三部作が先行できる場所。

## 関連

- [[knowledge-scarcity]] / [[verification-as-persuasion]] / [[ideas]]（AI時代の転職エントリ）
