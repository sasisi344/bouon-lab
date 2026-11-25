# アウトライン: エアコンの音がマイクに入るときの対策｜録音・ASMR・配信で変わる消し方

- 記事: `src/content/ja/creator/aircon-noise-mic/index.mdx`（新規）
- タスク: T-79 ／ 作成: 2026-11-25（CC）／ 元ネタ: `new-article-ideas-2026-10-10.md` の C

## 1. 誰の、どの問いに答えるか

- メインの検索の言葉: エアコンの音 マイク（GSC に表示なし。Bing で「賃貸 防音室 asmr 録音 空調 換気 遮音 吸音 注意点」2表示・4位、「配信 マイク ファン音 対策」を含む語が1表示・1位。どれも少数）
- 一緒に答える言葉: エアコン ノイズ 録音／配信 エアコンの音／ASMR エアコン／ファンの音 ノイズ除去
- クエリ型: 手順型
- 読者: 夏や冬にエアコンを止められず、マイクに「サー」「ゴー」が乗る人。録音・ASMR・ライブ配信のどれか
- 答え（冒頭）: エアコンの音がマイクに入るときの対策は、用途で変わる。録音はマイクの位置を直して、残りを後からノイズ除去で引く。ASMR は録る間だけ止め、PC などの音源を部屋の外に出す。ライブ配信は、エアコンのような一定の音なら配信ソフトのノイズ抑制で減らしやすい
- AI に引かれたい問い: 「エアコンの音は配信で消せる？」「ノイズ除去で消しやすい音・消しにくい音は？」「ASMR でエアコンはつけてよい？」「マイクを半分の距離にするとどれだけ変わる？」
- 検索結果で完結しない理由: 用途別の判断表と、自分の部屋で試す確かめ方がある
- カニバリ: PC のファン音の切り分け・防振は `creator/streaming-pc-fan-noise-mic`。静けさの目標値（NC 値）は `knowledge/report-japan-asmr-vtuber-streaming-studio-standard`。ASMR の外音は `creator/asmr-external-noise-elimination`。エアコンの機種・防音室の空調は `soundproof-room/proofroom-aircondition-select`。この記事は「止められないエアコンと、用途別の付き合い方」だけ。PC の防振、NC 値の表、機種選びは書かずリンクで送る
- マントラ: 冒頭で用途別に答え、公式の説明と計算で比べる
- 読み終えてほしいこと: エアコンを入り・切りで10秒ずつ録って聞き比べる

## 2. 上位と比べて足すもの

上位（bloomeria・streamhub・Elgato など。2026-11-25 の検索）はマイクのノイズ全般の解説で、用途別にエアコンを止めるか・残すかの判断はない（未実査、検索結果の要約から）。足すもの: 用途別の表、一定の音と変わる音の違い、防音室で止められない夏の運用。

## 3. 事実の材料（確認日 2026-11-25）

| 事実 | 出典 URL | 使う節 |
|---|---|---|
| OBS のノイズ抑制フィルターは、軽い背景ノイズやホワイトノイズを減らすのに使える。大量の背景ノイズ（騒がしい部屋）には一般に効きにくいが、PC のファン音などの環境音を減らすにはよく効くことがある。方式は RNNoise（音質が高い・CPU を多く使う）と Speex（強さを調整できる）。NVIDIA Noise Removal は別の部品が要る | https://obsproject.com/kb/noise-suppression-filter | 配信 |
| OBS のノイズゲートは、話していない間の背景ノイズを切る。閉じる値はノイズより上、開く値は声より少し下に合わせる。初期値は閉じる −32dB・開く −26dB | https://obsproject.com/kb/noise-gate-filter | 配信 |
| NVIDIA Broadcast の要件 GeForce RTX 2060 以上、RAM 8GB 以上 | https://www.nvidia.com/ja-jp/geforce/guides/broadcast-app-setup-guide/ | 配信 |
| Audacity のノイズ低減は、ハム・ヒス・ファン音のような一定の背景音を減らせる。交通や観客のような不規則な音には向かない。ノイズだけの区間が要る。ノイズが大きい、変わる、声とあまり差がない場合はうまく消せないことがある。かけると多少のひずみが出る。初期設定の低減量は6dB。許せる範囲まで減る、いちばん小さい値を使う | https://manual.audacityteam.org/man/noise_reduction.html | 録音 |
| 6畳用エアコンの室内機の運転音の例: パナソニック CS-J223DS（冷房2.2kW）は冷房59dB・暖房60dB（仕様表の表記は「運転音（音響レベル）」） | https://panasonic.jp/aircon/p-db/CS-J223DS_spec.html | 音の大きさ |
| 三菱電機 MSZ-AXV2525（室内機）の騒音特性: 強ノッチ運転で冷房63dB・暖房64dB（A特性音響パワーレベル、JIS C 9612:2013、参考値） | https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/S_TEC/mszaxv2525-in-nc.pdf | 音の大きさ |
| 音響パワーレベルは、機械が出す音そのものの大きさ。マイクの位置で測る dB とは物差しが違う（距離と部屋で変わるので、60dB＝会話の大きさ、と読み替えない）。パナソニックの「音響レベル」がどちらの物差しかは書かず、「メーカーの仕様表の値」とだけ書く | 一般的な定義（CC） | 音の大きさ |
| 点音源の式: 距離が半分になると 20log10(2)≒6dB 大きくなる（反射のない場所の計算。部屋では差が小さくなる） | 計算（CC） | 録音・配信 |
| 防音室は熱がこもりやすい。人の発熱は安静時で約100W、PC も熱源 | 自サイト `soundproof-room/proofroom-aircondition-select` | 防音室 |
| ささやき声 約30dB、ふつうの会話 約60dB／ASMR の目標は NC-20 以下、ゲーム実況は NC-30 前後（自サイトの目安） | 自サイト `knowledge/report-japan-asmr-vtuber-streaming-studio-standard` | ASMR |
| 0.5〜1畳の小型ブースはエアコンを置く場所がないことが多く、PC を外に出す・親部屋を冷やす | 自サイト `soundproof-room/proofroom-aircondition-select` | 防音室 |

- 書かないこと: Krisp・iZotope・Audition の仕様（確かめていない）、弱運転の dB（公表値を確かめていない）、「特定の周波数を切れば消える」（エアコンの「サー」は広い帯域に散らばるので、特定の周波数を切るだけでは消えない。低い「ブーン」は低音を切る設定で減らせることがある、までは書いてよい。数値の周波数は書かない）
- マイクの位置の例: 口とマイク 20cm→10cm で、声は計算上 約6dB 大きく入る。その分マイクの感度を下げられるので、離れたエアコンの音は声に対して約6dB 小さくなる

## 4. 収益の設計

| # | 勧めるもの | 見込みの根拠 | 場面 | 形 |
|---|---|---|---|---|
| 1 | `reflection-filter` | 未取得。ASMR の記事で使用中 | 録音の節: マイクを近づけた後、まだ部屋の響きごと入る場面（フィルターはエアコンの音を消す道具ではなく、部屋からの跳ね返りを減らす道具と書く） | AffiliateCard 1枚 |
| 2 | 防音室の記事へ送る（`creator/asmr-external-noise-elimination`、`soundproof-room/budget-soundproof-booth-comparison`） | CtaBox のある記事への回遊 | ASMR・防音室の節 | 文中リンク |

- CtaBox は置かない（防音室を買ってもエアコンの音は消えない、が記事の答えなので場面がない）

## 5. 見出しの構成（文字数の上限 5,000字）

| H2 | 直下で答えること | 置くもの |
|---|---|---|
| エアコンの音がマイクに入るときの対策は用途で決まる | 録音・ASMR・ライブ配信の3つで言い切る | 判断表（用途／エアコン／PC・ファン／ソフト／許せる残り方）。fig-01 のマーカー |
| エアコンの音は「一定の音」だから配信では消しやすい | 一定の音は見分けて減らせる。風量が変わる瞬間、車や人の声のような不規則な音は苦手。Audacity・OBS の公式の説明を根拠にする | 表: 消しやすい音・消しにくい音。仕様表の値の注意（例2つ）。風量を「自動」から固定にすると音が変わりにくい（一般論） |
| 録音｜マイクを近づけて、残りを後から引く | 手順: ①入り・切りで10秒ずつ録る ②マイクを半分の距離へ（約6dB）③単一指向性ならマイクの背をエアコンに向ける ④録音の頭に無音を数秒残す ⑤Audacity のノイズ低減を小さい値で | カード1 |
| ASMR｜録る間は止め、音源を部屋の外に出す | ささやき声は約30dB。声とノイズの差が小さいと、ノイズ除去はうまくいかないことがある（公式の説明）。先に部屋を冷やし、止めて録り、合間に冷やす。PC は部屋の外 | NC 値の記事・ASMR の記事へ |
| ライブ配信｜止めずに、ノイズ抑制とゲートで減らす | OBS の順番: マイク位置→ノイズ抑制→ゲート。方式の違い。強くかけるほど声も変わる | 手順。`creator/streaming-pc-fan-noise-mic` へ（PC の音が原因のとき） |
| 防音室でエアコンを止められない夏はどうする？ | 防音室に入れても室内の機械の音は減らない。PC を外、先に冷やす、合間に冷やす。暑さを我慢して録り続けない | `soundproof-room/proofroom-aircondition-select`、`soundproof-room/budget-soundproof-booth-comparison` |
| よくある質問 | H3 で3問: 「ホワイトノイズとエアコンの音は同じ？」（同じではないが、どちらも広い帯域に散らばる音）「エアコンの設定で音を小さくできる？」（風量を下げる・固定する。値は機種の公表値を確認）「『ジー』という音も同じ直し方？」（電源・配線の可能性 → `knowledge/ground-loop-noise-basics`） | H3 |
| まとめ｜まず入り・切りで10秒ずつ録る | 次にやること1つ | — |

- 読者の体験の型: 入り・切り10秒の聞き比べ、用途の判定、次にやること1つ

## 6. 内部リンク

| 向き | 相手 | 置く所 |
|---|---|---|
| 出す | `creator/streaming-pc-fan-noise-mic`・`knowledge/report-japan-asmr-vtuber-streaming-studio-standard`・`creator/asmr-external-noise-elimination`・`soundproof-room/proofroom-aircondition-select`・`soundproof-room/budget-soundproof-booth-comparison`・`knowledge/ground-loop-noise-basics`・`creator/streaming-audio-first-low-budget` | §5 のとおり、各1回。最後の1つは配信の節 |
| 受ける | `creator/streaming-pc-fan-noise-mic`・`knowledge/report-japan-asmr-vtuber-streaming-studio-standard`・`creator/asmr-external-noise-elimination` | CC が足す |

## 7. 筆者の体験

- 使える記録: BT イヤホンで ASMR や動画を聴きながら眠ることがある（`author-experience.md`）。ふだん収録はしない。使うなら「聞く側として」1文まで。収録の体験は書かない
- 筆者に聞く質問: なし

## 8. 画像

- カバー: マイクと壁掛けエアコンのある部屋（CC が API で作る。frontmatter に `image` は書かない）
- 説明画像: fig-01 memo-flow（用途→エアコンを止められるか→やること）1枚だけ
