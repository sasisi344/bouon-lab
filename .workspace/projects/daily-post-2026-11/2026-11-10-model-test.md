# T-60 Codex gpt-5.5（推論 medium）で新規5記事を作り、完成稿の力を試す（2026-11-10）

- タスク: `.task-management/task.md` の T-60
- ルール: [README.md](README.md)（§3 判定、§3-6 アウトラインと体験チェッカー、§3-7 モデル、§4 要素、§6 公開前チェック、§8 体験チェッカー）
- 作り手: Codex `--model gpt-5.5 --effort medium`。比べるときの Claude Code 側は Sonnet 5.5

## 目的

完成稿を Codex の gpt-5.5 medium に任せて、Claude の検収とユーザーの確認で「公開してよい記事」に仕上がるかを確かめる。足りれば README §3-7 の既定のまま運用し、足りなければ推論 high か Sonnet 5.5 に切り替える。

## 候補（README 付録の「新規」候補から。当日に段階B・Cで重複を再確認して5本に確定）

| # | メインKW（仮） | クエリ型 | 重複の確認先 |
|---|---|---|---|
| 1 | 遮音シート 効果 | 効果確認 | `soundproof-sheet-heavy-diy-tips`・`diy-soundproofing-tips` |
| 2 | 吸音材 防音材 違い | 直接回答 | `diy-soundproofing-tips`・`gamer-acoustic-placement` |
| 3 | ルームチューニング | 手順／直接回答 | `bass-trap-installation-guide` |
| 4 | 床 防音 等級 | 直接回答 | `vibration-reduction-science`・`gaming-floor-impact-noise-fix` |
| 5 | 騒音 苦情 どこに言えばいい | 探索 | `noise-complaint-legal-precedent-manual` |
| 予備 | 防音カーテン 効果 | 効果確認 | `hsp-soundproof-curtain-guide`（T-57 で統合予定。統合先との役割分担を先に決める） |

重複の確認でリライト判定になった候補は外し、予備から補う。

### 確定した5本（2026-11-10、段階A〜C済み。段階Cは API の GSC page×query m08〜m10）

| # | メインKW | slug（仮カテゴリ） | 判定表# | アウトライン |
|---|---|---|---|---|
| 1 | 遮音シート 効果 | `diy/sound-insulation-sheet-effect` | 7 | `_draft/sound-insulation-sheet-effect-outline.md` |
| 2 | ルームチューニング | `diy/room-tuning-basics` | 9 | `_draft/room-tuning-basics-outline.md` |
| 3 | 床 防音 等級 | `knowledge/floor-soundproof-rating` | 5 | `_draft/floor-soundproof-rating-outline.md` |
| 4 | 防音カーテン 効果（予備から） | `diy/soundproof-curtain-effect` | 7 | `_draft/soundproof-curtain-effect-outline.md` |
| 5 | 騒音 苦情 手紙 例文（追加） | `soundproof-rental/noise-complaint-letter-template` | 9 | `_draft/noise-complaint-letter-template-outline.md` |

- 外した2本: 「吸音材 防音材 違い」は `absorption-vs-soundproofing-materials` が同じ答え（判定表#3、リライト）。「騒音 苦情 どこに言えばいい」は `noise-complaint-landlord-negotiation-guide` の H2 が窓口を答えている（判定表#3、リライト）。どちらも台帳に記録し、起票は別に行う
- 予備が1本しかなかったため、「騒音 苦情」シードのグループ2（手紙 例文。既存記事に H2 なし）を5本目にした
- 台帳: `triage/` の6ファイル

## 手順

1. **Claude**: 5本の台帳（`triage/`）を書き、重複を段階A〜Cで確認する
2. **Claude**: 5本のアウトラインを `_draft/<slug>-outline.md` に作り、体験チェッカー（§8）の質問を書く
3. **ユーザー**: callout で答える
4. **Claude**: 答えを反映し、指示書を `.workspace/codex/orders/2026-11-10-T-60.md` に1本で書く（5記事まとめて。規模 L なので `--background`）。画像欄は `生成しない（図解マーカーを置く。image-style.md §5-2）` とする
5. **Codex**: gpt-5.5 medium で5本を書き、図解マーカーを置き、報告書を出す
6. **Claude**: `site-admin` で検収し、下の評価表を埋める。差し戻しは最大2回
7. **Claude**: 確定した数値から、図解（SVG → PNG）・メモ画像・サムネイル（Gemini API）を作り、マーカーを画像に差し替える。ビルドを通す
8. **ユーザー**: 画像入りの5本を読み、評価表の「ユーザー判定」を埋める
9. **Claude**: 結論を出し、README §3-7 の既定を確定（または変更）して records に記録する。公開まで進めた記事は効果測定の行を足す

目標（2026-11-10、ユーザー指示）: Claude の使用量に余裕がある日なので、5本のテストを公開できる完成状態（画像入り）まで終える。

## 評価表（検収のときに埋める）

| # | slug | 公開前チェック（README §6）の不合格数 | 差し戻し回数 | 事実の誤り | 体験の創作 | 数字の4点セット | 図解マーカーの質（そのまま描けたか） | 読者の体験の型（数） | Claude 判定 | ユーザー判定 | メモ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | | | |
| 2 | | | | | | | | | | | |
| 3 | | | | | | | | | | | |
| 4 | | | | | | | | | | | |
| 5 | | | | | | | | | | | |

判定は `十分`（そのまま公開できる）／`要修正`（差し戻しで直った）／`不足`（2回差し戻しても直らない、または Claude が書き直した）。

## 判定基準

- **gpt-5.5 medium を既定にする**: 5本中4本以上が `十分` か `要修正`（差し戻し1回以内）。かつ、事実の誤りと体験の創作が0件
- **推論を high に上げて再テスト**: 差し戻し2回が2本以上、または数字・図解・体験の型の抜けが目立つ
- **Sonnet 5.5 を既定にする／併用する**: 事実の誤りか体験の創作が1件でもある、またはユーザー判定で `不足` が2本以上

検収にかかった Claude の時間も記録する（hq の作業時間の見積もりに使う）。
