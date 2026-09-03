# 検証は納得の生産である — 生成が安くなる時代の組織設計

同じ能力水準のLLM推論コストは、毎年およそ一桁下がり続けている。GPT-4相当の出力は3年で千分の一になった。生成は潤沢になった。しかし、その出力が正しいかどうかを確かめるコストは、同じ曲線に乗っていない。検証は依然として人間の時間とアテンションに張り付いており、相対的には毎年「値上がり」している。数十分で生成されたものの検証に数日かかる。この非対称が2026年の議論の中心にあり、「経済は検証できる以上に生成できるようになった」という診断まで現れた。

ここで検証という言葉を、テストが通るかどうかの話だと受け取ると本質を外す。検証には二層ある。正しさを判定する技術的な層と、人が納得するという社会的な層だ。そして組織で効いているのは、ほとんどの場合後者である。人はある事象をいくつもの側面から眺め、アラを探す生き物だ。全ての面から見て完璧な検証は存在しないし、完璧に見えるものほど疑いたくなる。科学ですら、実験の正しさは装置の正しさに依存し、装置の正しさは実験結果でしか確かめられないという循環を、最終的には共同体の合意で切断している。検証とは、突き詰めれば納得の生産なのである。

だとすれば、組織とは何か。組織経済学の古典は、階層組織をそもそも検証の装置として描いてきた。現場は定型を処理し、判断できない例外だけが上に運ばれる。上司の仕事は例外の検証であり、一人が見られる部下の数は検証キャパシティで決まる。人的資本を追加で投下すれば、検証の需要は必ず増える。つまり組織構造は検証コストの関数だった。生成コストがゼロに近づいた今、この関数だけが残る。AI時代の組織設計とは、検証の設計のことである。

では何を設計するのか。第一に、検証面の独立性だ。安全工学のスイスチーズモデルが教えるのは、層の数ではなく穴の相関が事故を決めるということである。全ての検証層が同じ仮定・同じ情報・同じ利害を共有していれば、穴は最初から一列に並んでいて、何枚重ねても素通しになる。レビュアーを増やすことより、違う専門・違う立場・違う情報源から見る面を用意することが効く。ただし投資判断への適用には非対称性がいる。下振れ——破滅リスク——には層を厚く張り、上振れの判断には層を薄くする。全会一致だけを通すフィルターは、外れ値の勝者を系統的に殺すからだ。

第二に、主張の側を検証可能に作ることだ。スコープを絞り、なぜ取り組むのか、世の潮流とどう整合し、自分たちに何をもたらすのかを先に整理する。主張は反証可能な形——何が観測されたらこの主張は死ぬか——まで絞り、予測は結果を見る前に固定する。比較対象を必ず置く。そして弱いところは弱いと先に認める。アラはどうせ探される。先に自分で挙げて処理方針とセットで示せば、アラ探しの獲物を奪えるだけでなく、自分を検証済みであることの証明になる。ただし弱点の告白は、スコープの再宣言か次の一手とペアになって初めて信頼に変換される。認めるだけの弱点は放置に見える。

第三に、検証器そのものを検証することだ。人間は自分の検証能力を大きく過信する——正しさを確かめられると自信を持つ人の半数近くが、実際には確かめられないという測定がある。だから検証プロセスには答えを知っている問題を混ぜ、検出率を実測する。検出率を測っていない検証層は、穴のサイズが不明なチーズである。定量化は信頼の技術だが、指標が目標になった瞬間に指標として壊れるので、最適化に使う指標と検証に使う指標を分け、実物を読む定性チェックを廃止しないこと。

第四に、検証の経済を設計することだ。全てを重い検証にかければ処理量が死ぬ。安く高速な検証を手前に、高価で確実な検証を奥に並べ、手前で大半を落とす。どの検証を意図的に薄くするかを明示的に決めない組織では、検証は無秩序に薄くなる。そして検証を都度の労働ではなく蓄積される資本として扱うこと。評価基準、テストスイート、ゴールデンセット、再現パッケージ——これらは一度作れば他人の検証コストを恒久的に下げる。いつでも検証できるという状態は、実際に検証されなくても信頼を生む。

つまり、生成が安くなる時代に組織が投資すべきは、生成能力ではなく検証資本である。AIプロジェクトがスケールするかどうかは、モデルの賢さよりも、独立した検証面をいくつ持ち、検証器の較正を測り、検証コストの勾配を設計できているかで決まる——これが本稿の賭けである。そしてこの賭け自体も、上の作法に従って検証されるべきものだ。何が観測されたらこの主張は死ぬか。検証設計の巧拙とプロジェクトの成否が相関しない、という観測である。

---

## 参考文献

- a16z, [LLMflation — LLM inference cost is going down fast](https://a16z.com/llmflation-llm-inference-cost/)
- Epoch AI, [LLM inference prices have fallen rapidly but unequally across tasks](https://epoch.ai/data-insights/llm-inference-price-trends)
- Dogonowski, [A New Theory of the Firm for the Age of Artificial Intelligence](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7053918)（verification capital / safe throughput）
- Garicano (2000), [Hierarchies and the Organization of Knowledge in Production](https://www.researchgate.net/publication/24104149_Hierarchies_and_the_Organization_of_Knowledge_in_Production)
- Ide & Talamàs, [Artificial Intelligence in the Knowledge Economy](https://arxiv.org/pdf/2312.05481)
- Klein & Wieczorek, [The Headless Firm](https://arxiv.org/html/2602.21401v1)
- [Some Simple Economics of AGI](https://arxiv.org/pdf/2602.20946)（未検証デプロイの誘因）
- Derick Chen, [The New Asymmetry](https://www.buildwithdc.co/posts/the-new-asymmetry-when-generation-outpaces-verification-in-ai-native-development/)（verification debt）
- [AI, Metacognition, and the Verification Bottleneck](https://arxiv.org/pdf/2601.17055)（検証能力の過信の測定）
- [Human Oversight and Overload](https://arxiv.org/pdf/2606.05770)（oversight burden）
- Porter, *Trust in Numbers*（定量化＝信頼の代替技術）
- Reason のスイスチーズモデル、Three Lines of Defense
- Petty & Cacioppo の精緻化見込みモデル、Hovland の両面提示、Tyler の手続き的公正
- Jason Wei, Asymmetry of Verification / Verifier's Law
