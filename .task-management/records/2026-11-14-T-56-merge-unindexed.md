# T-56 未登録記事の統合 先行3本

- 完了日: 2026-11-14
- 種別: 施策
- テーマ: 統合, 301, インデックス, Codex
- 対象: soundproof-rental/noise-canceling-headphones-sleep → soundproof-rental/earplugs-for-sleep、money/soundproof-window-subsidy-2025-guide → money/soundproof-subsidy-news-2025、diy/danbocchi-floor-protection → soundproof-rental/apartment-weight-limit-500kg
- 起票元: T-47 の判定表（統合）

## 何をしたか

- 予定は 11/18 だったが、T-65 の耳栓の記事の公開と同時に済ませた（ユーザー指示）。統合元の固有の内容を Codex が統合先へ移し、CC が検収
- CC: 統合元3本を削除、`astro.config.mjs`・`public/.htaccess` に301を追加し、旧URL（/posts/・旧カテゴリ）からの既存の転送も統合先へ付け替えた（二重301なし）。他の記事6本のリンクを統合先へ。本番で301を確認
- 補助金: みらいエコ住宅2026の節を足し、公式ページ（11/06更新）で直した（定めた組み合わせの工事、上限は1戸40万〜100万円、予約11/16・交付申請12/31）
- 床の耐荷重: 出典のない数値を外して本文が 3,939→2,048字になったため、タイトルを「マンションに防音室を置ける？床の耐荷重の確かめ方と、500kg級・だんぼっちの荷重分散」に変更
- 11/14 デプロイ（7af43f5）、統合先2本はユーザーが URL 検査で申請（耳栓は T-65 の新規として申請）

## 使ったデータ・資料

- 判定表: `.workspace/projects/rewrite-priority/2026-11-06-t47-unindexed-decisions.md`
- 指示書・報告書: `.workspace/codex/orders/2026-11-14-T-69-T-56.md`、`.workspace/codex/reports/2026-11-14-T-69-T-56.md`
- 監査記録: `.workspace/admin-review/2026-11-14-T-65.md`

## 結果

- 3本とも統合・301済み。統合元の16か月の実績はノイキャン 41表示・1クリックのみ。旧URLが索引から外れたかは T-59 で見る

## 次に使える知見

- 統合元にかかっていた旧URLの転送は、`astro.config.mjs` と `.htaccess` の両方で、転送先を文字列置換すると漏れなく付け替えられる
- 残り: T-66 の horror-game の統合（受け入れ先 `creator/game-streamer-sound-types`）は未着手
