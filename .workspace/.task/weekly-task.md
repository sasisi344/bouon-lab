# 週報PDCA

最終整理: 2026-09-16（W28〜W36累積分の完了・重複項目を`archive/weekly-task-archive-20260916.md`へ移行、未完了のみ残存）

> 過去の分析記録（W28〜W36のPlan/Do/Check/Act全文、判断の経緯）は `archive/weekly-task-archive-20260916.md` を参照。横断タスク（複数週にまたがる継続課題）は `task-list.md` に一本化する運用とし、本ファイルは週次PDCAのAct（次回データで確認すべき事項）のみを保持する。

---

## W39定点観測（2026-09-12〜09-19、W37・W38はエクスポート未取得のためスキップ）

サイト全体（GSC、W36単体週ベースライン`ページ_single-period-baseline.csv`と比較可能な形式）:

- クリック数: 111 → 114（+2.7%）
- 表示回数: 5,456 → 6,864（+25.8%）
- CTR: 2.03% → 1.66%（-0.37pt）
- 表示の伸びに対してクリックがほぼ横ばいで、CTRが悪化。伸びの主因はグランドループ/ノイズ アース系・音大生地域系クエリなど低CTRの新規表示（詳細は`task-list.md`各項目を参照）

GA4（同期間、セッション180・エンゲージメント率51.1%・平均エンゲージメント時間50.4秒）の参照元内訳: bing 114 > (direct) 62 > (not set) 38 > google系(search.google.com+google) 21 > chatgpt.com 4 / duckduckgo 2 / yahoo 1 / copilot.com 1。詳細は`task-list.md`「Google経由の実流入低迷とBing優位の実態」を参照。

軽微な新規発見（要対応ではなくメモ）: 「ワンタッチ 防音 壁 買う前」クエリが新規出現（表示22・クリック0・順位17.05）。`onetouch-soundproof-wall-review`に購入前の懸念点セクションがあるか、次回リライト時に確認する程度で可。

---

## 404リダイレクト全面対応フォローアップ（2026-09-05実施、詳細は`archive/redirect-check.md`）

- [x] **2026-09-10**（期日超過分、2026-09-16にGSC UIで確認完了）: GSC「非表示」画面で4件（`/tags/` `/categories/` `/index.xml` `/en/`）すべて「一時的に非表示になりました」（完了）ステータスを確認。削除リクエスト自体は全件処理済み
- [ ] **2026-10-05**（目安・再クロール完了後）: GSC「ページ」→「見つかりません（404）」の件数が対応前の2,592件から減少しているか確認。減少していれば同じ手順（CSVエクスポート→全件解析→`astro.config.mjs`追記→ビルド→デプロイ）をもう一度実施し、残る`/posts/{slug}/`・旧トップレベルカテゴリURLを追加監査する
  - 2026-09-16時点の早期確認（本番の目安日より前だが参考値）: GSC「ページのインデックス登録」で「見つかりませんでした（404）」は<strong>2,595件</strong>（対応前2,592件からほぼ横ばい、+3件で誤差範囲）。ステータスは「開始前」ではなく「開始」（Googleが再評価を開始した状態）に変わっているが、件数への反映はまだ出ていない。「クロール済み-インデックス未登録」も623件で同様に「開始」。2026-10-05の本確認まで様子見

---

## 既存記事の構造強化タスク（Tier A〜D）効果測定フォローアップ（2026-09-06、`archive/content-structure-*.md`より移管）

Tier A（内部リンク83記事）・Tier B（拡充候補34記事・統合検討36記事）・Tier C（情報鮮度29記事）・Tier D（重複整理）はすべて実施完了。**W36データは施策前のベースラインのため使用不可**（`.workspace/access-data/2026/`はW36が最新で、2026-09-16時点でW37以降のエクスポートは未入手）。**W37以降のエクスポート入手後に以下を実施**する。

- [ ] 拡充候補34記事のうち、直近週の急伸・急落シグナルがあった優先記事の順位・CTR変化を確認: `streamer-noise-quick-fix`（順位急落からの回復有無）・`wifi-connection-guide`・`d-value-vs-rw-value-confusion`・`osaka-soundproof-rental-guide`・`daiwa-house-jiyuku-soundproof-review`・`housing-builder-soundproof-comparison`
- [ ] `construction-types-cost-comparison`（Tier A内部リンク・本音リライト済み、lastmod 2026-09-05）— W36時点で順位40.3・表示63・クリック0のままで効果未確認。W37以降も改善しなければ内部リンクだけでなく構成見直しを検討
- [ ] 統合削除した8記事（`soundproof-room-fatigue-ventilation`・`diy-soundproof-ventilation-heat-exhaust`・`streamer-soundproof-evolution-story`・`streamer-budget-temp-soundproof`・`streamer-discord-noise-cancel-vs-physical`・`soundproof-window-merit-demerit`・`report-japan-soundproof-unit-resale-value-simulation`・`streaming-room-reverb-absorption`）について、301リダイレクトが統合先記事の表示回数増としてGSCに反映されているか確認する
- [ ] `content-structure-tier-b-thin-content.md`（`archive/`移管済み）で「未判断」だった8記事（`streamer-regional-studio-move`・`asmr-external-noise-elimination`・`streamer-pet-noise-balance`・`diy-soundproof-truth`・`mental-health-benefits-of-silence`・`hiroshima-soundproof-rental-guide`・`saxophone-apartment-practice-guide`・`sleep-quality-soundproof-room`）を、次回GSCデータで「拡充候補」「統合検討」「現状維持」のいずれかに再分類する
- [ ] 「維持」確定8記事のうち`cable-noise-ground-loop-prevention`以外の7記事（`voice-chat-soundleak-fix`・`vtuber-family-privacy-rules`・`pet-noise-soundproof-measures`・`bouon-size-choice`・`night-streaming-neighbor-tips`・`danbocchi-floor-protection`・`soundproof-room-large-size`）の実績継続確認（`cable-noise-ground-loop-prevention`は2026-09-06にカニバリ疑いを確認済み・`task-list.md`で追跡中のため対象外）
