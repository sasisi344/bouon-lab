# 補足リサーチ（2026-06-10）— 権威性UP対象記事用データ収集

`.workspace\.task\task-list.md` ①権威性UPのうち、既存データセットでカバーできなかった項目をWeb検索で補完。
各記事のリライト時に出典付きで反映する。

---

## 1. プライバシーポッド／個室ワークブース市場（`business/privacy-pod-market-growth` 用）

- ワークブース（個室型）市場：**2020年度 約2,850台 → 2026年度 約17,000台**の予測（市場調査）
- 個室型ワークブース市場：**2025年に約24億円規模**（日本能率協会総合研究所）
- フレキシブルオフィス市場全体：**2026年度 約2,300億円**規模の見込み
- 用途：集中ブース＝1人作業・Web会議向け。「周囲の音や視線を遮る」価値訴求が中心

**出典**:
- [ワークブース市場規模の動向と今後の成長予測を解説 | ITトレンド](https://it-trend.jp/work-booth/article/1119-5998)
- [個室ワークブースとは？市場規模とトレンド | バルテック](https://www.webjapan.co.jp/blog/automated-system_work-booth/)
- [フレキシブルオフィスとは？市場規模 | オカムラ](https://www.okamura.co.jp/office/column/008453.html)

---

## 2. Silent Speech Interface（SSI）研究動向（`knowledge/future-ssi-silent-speech-interface-revolution` 用）

- **MIT Media Lab「AlterEgo」**：EMG（筋電位）センサーで喉・顎の筋肉の微弱な動き（subvocalization）を検出し、機械学習でテキスト化。**認識精度92%**を達成
- 2025年4月21日、AlterEgoの知財が**Alterego AI, Inc.**に移管され、研究段階から商用化フェーズへ移行
- 技術原理：発話を意図すると脳から喉・首の筋肉に電気信号が送られ、声帯を振動させなくても微細な筋収縮（subvocalization）が発生 → これをEMGで検出
- 課題：個人ごとの筋肉特性差により、ユーザーごとのキャリブレーション（既知フレーズの発話によるトレーニング）が必要。リアルタイム変換の実現が次の壁
- 関連研究：「SilentWear」（EMGベースの超低消費電力ウェアラブル）、テキスタイルEMGセンサーをヘッドホンに統合する研究なども進行中（2026年公開のarXiv論文）

**出典**:
- [Silent Speech Technology: How MIT Media Lab AlterEgo is Transforming AI Communication](https://torontostarts.com/2026/01/02/silent-speech-technology-alterego/)
- [Decoding Silent Speech: The Mechanics of EMG-Powered Subvocalization](https://science-technology.news-articles.net/content/2026/04/20/decoding-silent-speech-the-mechanics-of-emg-powered-subvocalization.html)
- [SilentWear: an Ultra-Low Power Wearable System for EMG-based Silent Speech Recognition (arXiv)](https://arxiv.org/pdf/2603.02847)
- [Wireless Silent Speech Interface Using Multi-Channel Textile EMG Sensors (arXiv)](https://arxiv.org/pdf/2504.13921)

**記事への反映方針**: 「2030年に常識を破壊する」という誇大な未来予測トーンは弱め、「2025年に研究→商用化フェーズへ移行した実例（AlterEgo）」を軸に、配信者が将来活用できる可能性を誠実に提示する構成へ。

---

## 3. 防音室向け加湿器の具体製品（`soundproof-room/bouon-humidifier-comparison` 用）

### 静音性に優れる主な機種

| 製品名 | メーカー | 方式 | 運転音 | タンク容量 |
| :--- | :--- | :--- | :--- | :--- |
| **HD-LX1225** | ダイニチ | ハイブリッド | 最小13dB / 最大40dB | 7L |
| **HD-N925-H** | ダイニチ | 気化ハイブリッド（2025/8発売） | 最小約13dB | - |
| **HD-C900H-H** | ダイニチ | ハイブリッド（2025/8発売） | 最小約15dB | - |
| **HV-T75** | シャープ | ハイブリッド | 静音時23dB / 強41dB | 4L |
| **HV-R120** | シャープ | ハイブリッド | 弱30dB / 強41dB | 7L |

### 結露・方式の整理
- **スチーム式**：加湿スピード速・衛生的だが、加湿量が多く窓際で結露しやすい
- **気化式**：消費電力小・結露しにくいが、ファン音が発生（防音室内では音源になりうる）
- **ハイブリッド式（温風気化式）**：結露しにくさと加湿力のバランス型。上記静音モデルは全てハイブリッド式
- 防音室内の暗騒音目標（40dB以下＝図書館レベル）と比較すると、**最小運転音13〜15dBのハイブリッド機種なら防音室内でも実用域**

**出典**:
- [《2026年》加湿器おすすめ22選 | 価格.comマガジン](https://kakakumag.com/seikatsu-kaden/?id=11485)
- [ダイニチ HD-N925-H/HD-C900H-H 仕様](https://www.dainichi-net.co.jp/products/humidifier/spec/)
- [結露しにくい加湿器のおすすめ | ECナビ比較](https://hikaku.ecnavi.jp/osusume/36274)
- [加湿器選び方ガイド | watts-online](https://watts-online.jp/blogs/column/humidifier-how-to-select)

---

## 4. ニトリ製品の吸音・遮音効果（`soundproof-room/nitori-soundproof-acoustic-guide` 用）

- ニトリの遮音カーテンは生地裏に**樹脂コーティング**を施し、質量・密度を上げて音を反射する「壁」として機能する仕組み
- 防音カーテン全般で**騒音を約20〜50%軽減**という目安（一般的な比較サイトの評価）
- 吸音パネルは複数枚設置することで体感効果が出るとのユーザー評価あり
- 既存の `05_商品/product_specifications.md`（NRC・周波数帯別吸音特性）と組み合わせ、「ニトリ製品はどの周波数帯・どの程度の軽減率が現実的か」を物理的根拠（質量則・NRC）で裏付ける構成にする

**出典**:
- [ニトリの遮音カーテンを徹底レビュー｜元ラッパ吹きの防音研究所（実測ブログ）](https://minnnanorappa.com/nitori-soundproof-curtains-effectiveness/)
- [【ニトリが最強】防音カーテンのおすすめ人気ランキング | monocow](https://monocow.jp/19759)

---

## 反映先記事まとめ

| 記事 | データソース | 補強内容 |
| :--- | :--- | :--- |
| `business/privacy-pod-market-growth` | 本ファイル §1 | 市場規模・成長率の出典付きデータ追加 |
| `knowledge/future-ssi-silent-speech-interface-revolution` | 本ファイル §2 | AlterEgo実例で誇大予測を是正、研究フェーズを正確に記述 |
| `soundproof-room/bouon-humidifier-comparison` | 本ファイル §3 | ダイニチ/シャープの型番・運転音dBを追記 |
| `soundproof-room/nitori-soundproof-acoustic-guide` | 本ファイル §4 + `05_商品/product_specifications.md` | 実測ブログ・NRC理論で効果を定量化 |
