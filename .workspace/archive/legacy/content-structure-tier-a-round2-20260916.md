# Tier A 再調査・第2ラウンド（2026-09-16）

- **背景**: `.workspace/.task/archive/content-structure-strengthening-survey.md`（2026-09-05）のTier A（内部リンク孤立・希薄記事83本）修正後、9月中の記事統合・削除（本音と建前Tier施策の統合8記事、カニバリクラスタA〜D 7記事、`cable-noise-ground-loop-prevention`統合）でリンク元記事が消え、一部記事が再び孤立・希薄化した。ユーザー指示「構造強化タスクを実行」→「Tier A〜Dの再調査（最新化）」を受けて全195記事を再スキャンし、修正した。
- **調査方法**: `src/content/ja/**/index.mdx`を全件走査し、本文中の`/ja/{category}/{slug}/`形式リンクからinbound数を集計するNode스크립트（使い捨て、`.gitignore`対象の一時スクリプトのため本リポジトリには残していない）。

## 再調査結果（修正前）

| 指標 | 2026-09-05時点 | 2026-09-16再調査 |
|---|---|---|
| 総記事数 | 211 | 195（8+7+1記事の統合削除により減少） |
| 孤立（0本） | 44 | 2（`asmr-vtuber-booth-guide`・`future-ssi-silent-speech-interface-revolution`。いずれも唯一のリンク元記事が統合削除で消滅） |
| 希薄（1本のみ） | 39 | 42（9月のTier A第1ラウンドで「1本だけ追加」された記事の多くが、そのままの状態で残っていたため） |
| 3,000字未満 | 84 | 100（Tier B、未着手のまま。GSCデータでの絞り込みは次回） |
| `lastmod`半年以上未更新 | 29 | 16（Tier C、この間の本音と建前リライト等で自然に更新が進んだ） |

## 実施内容（Tier A：孤立2件＋希薄42件、計44記事に修正1件を追加した45記事）

各記事について、既存のリンク元とは別の記事から文脈に沿った内部リンクを1本追加した（本文の書き直しは行わず、リンク元記事に1文〜1段落を追記する方式。対象記事自体は編集せず、リンク元記事の`lastmod`も変更していない）。カテゴリ別に6並列のサブエージェントで実施し、最後に1記事（`asmr-external-noise-elimination`）の割り当て漏れをユーザーへの報告前に手動で追加。

| # | 対象記事（修正前inbound） | 新規リンク元 | 備考 |
|---|---|---|---|
| 1 | creator/asmr-vtuber-booth-guide（孤立） | creator/streaming-room-layout-guide | |
| 2 | creator/cramped-booth-gaming-chair-health | soundproof-room/budget-soundproof-booth-comparison | |
| 3 | creator/dance-fitness-streamer-soundproof | diy/electronic-drum-vibration-fuwafuwa-system | |
| 4 | creator/family-home-soundproof-reno-negotiation | money/soundproof-contractor-selection-guide | |
| 5 | creator/farmland-prefab-streaming-room-legal | creator/kominka-renovation-streaming-room | |
| 6 | creator/female-streamer-privacy-soundproof | creator/voice-chat-soundleak-fix | |
| 7 | creator/horror-game-scream-soundproof-mic | diy/gamer-acoustic-placement | |
| 8 | creator/parenting-streamer-soundproof | money/quiet-space-budget-decision-guide | |
| 9 | creator/podcast-collab-recording-acoustics | creator/utaite-vs-streamer-soundproof | |
| 10 | creator/streamer-soundproof-rental-share | money/soundproof-room-rental-cost | |
| 11 | creator/vtuber-soundproof-environment-complete-guide | knowledge/d-value-truth-and-myths | |
| 12 | creator/young-streamer-smartphone-monetization-roadmap | creator/one-room-streaming-soundproof | |
| 13 | creator/asmr-external-noise-elimination | creator/asmr-vtuber-booth-guide | 当初のカテゴリ別割り当てから漏れていたため、再調査後に手動で追加 |
| 14 | knowledge/future-ssi-silent-speech-interface-revolution（孤立） | business/japan-soundproof-market-size | 旧リンク元`streamer-discord-noise-cancel-vs-physical`は統合削除済み |
| 15 | knowledge/hsp-self-check-sound-sensitivity | knowledge/mental-health-benefits-of-silence | |
| 16 | knowledge/neighborhood-noise-seasonal-pattern-statistics | soundproof-rental/noise-complaint-landlord-negotiation-guide | |
| 17 | knowledge/proofroom-maker-2025productcheck | money/used-soundproof-room-buying-guide | |
| 18 | knowledge/soundproof-app-review-2026 | diy/diy-soundproofing-tips | |
| 19 | knowledge/soundproof-culture-japan-vs-america | knowledge/d-value-vs-rw-value-confusion | |
| 20 | knowledge/tokyo-bouon-whitekyuon-okudake-review | business/workbooth-office-soundproof-trend | |
| 21 | knowledge/biophilic-acoustics | knowledge/absorption-vs-soundproofing-materials | |
| 22 | business/bouonrental-areasec-newbusiness | soundproof-rental/bouonrental-market-research2025 | |
| 23 | business/datacenter-soundproof-technology-facts | diy/outdoor-soundproof-curtain-market-guide | |
| 24 | business/japan-soundproof-market-size | business/shared-streaming-studio-growth-pricing-utilization | |
| 25 | business/soundproof-industry-news-2026-06 | knowledge/proofroom-maker-2025productcheck | |
| 26 | business/web-meeting-voice-soundleak-prevention | money/telework-soundproof-loan-strategy | |
| 27 | diy/diy-internal-window-road-noise-reduction | money/soundproof-subsidy-news-2025 | soundproof-room/shanon-vs-bouon-windowとの相互リンクのみだった状態を解消 |
| 28 | diy/diy-led-acoustic-panels | creator/streaming-mic-noise-room | |
| 29 | diy/diy-refrigeration-noise-reduction | creator/streamer-noise-quick-fix | |
| 30 | diy/free-cardboard-soundproof-tech | diy/danbotchi-diy-blueprints | |
| 31 | diy/outdoor-soundproof-curtain-market-guide | soundproof-room/hsp-soundproof-curtain-guide | |
| 32 | diy/soundproof-room-diy-cost | money/soundproof-room-price-market | |
| 33 | diy/treadmill-apartment-soundproofing-layering | creator/dance-fitness-streamer-soundproof | |
| 34 | soundproof-rental/home-theater-karaoke-soundproof-design | knowledge/absorption-vs-soundproofing-materials | |
| 35 | soundproof-rental/owner-renovation-musician-24h-practice-strategy | soundproof-rental/apartment-weight-limit-500kg | |
| 36 | soundproof-rental/owner-renovation-shibuya-shinjuku-vtuber-strategy | creator/bourentakl-streamer-settingsetubi | |
| 37 | soundproof-rental/saxophone-apartment-practice-guide | knowledge/d-value-truth-and-myths | |
| 38 | soundproof-room/daiwa-house-jiyuku-soundproof-review | money/custom-home-soundproof-price-guide | |
| 39 | soundproof-room/million-yen-soundproof-room-professional | money/bouon-asset-value-analysis | |
| 40 | soundproof-room/onetouch-soundproof-wall-review | diy/diy-wall-soundproofing-room-guide | |
| 41 | soundproof-room/shanon-vs-bouon-window | money/soundproof-window-subsidy-2025-guide | diy/diy-internal-window-road-noise-reductionとの相互リンクのみだった状態を解消 |
| 42 | soundproof-room/sleep-quality-soundproof-room | knowledge/mental-health-benefits-of-silence | |
| 43 | soundproof-room/soundproof-room-demolition-guide | money/used-soundproof-room-buying-guide | |
| 44 | soundproof-room/wifi-connection-guide | business/report-japan-asmr-vtuber-streaming-studio-standard | |

## 検証

- `pnpm build` 成功（207ページ、エラー0）。全44+1件の反映後に実施。
- 再調査スクリプトで確認: 孤立2→0、希薄42→2に減少。残る2件（`asmr-vtuber-booth-guide`・`future-ssi-silent-speech-interface-revolution`）は今回「孤立→リンク1本追加」で対応したため、定義上まだ「希薄（1本のみ）」に該当する。2025-09-05の第1ラウンドでも同じパターン（孤立記事は1本追加で「希薄」に格上げされるのみ）だったため、追加のリンクを重ねる場合は次回ラウンドで対応する。
- 複数エージェントが同一ファイル（`knowledge/absorption-vs-soundproofing-materials`・`knowledge/mental-health-benefits-of-silence`・`money/used-soundproof-room-buying-guide`）に同時編集を行ったケースが3件あったが、いずれも競合を解消し両方の追記が正しく共存していることを目視確認済み。

## 未着手（今回のスコープ外）

- **Tier B（3,000字未満、現在100記事）**: GSCデータとの突き合わせによる「拡充候補」「現状維持」の選別が未実施のまま。次回GSCエクスポート入手後に着手。
- **Tier C（`lastmod`半年以上未更新、現在16記事）**: 事実確認・情報更新が必要かどうかの個別判断が未実施。特に法制度・価格情報を含む記事は優先度が高い可能性がある。
- **Tier D（重複整理）**: カニバリ関連の重複タスクは`task-list.md`側で継続管理中（グランドループ記事統合など）。

## 参照

- 親調査: `.workspace/.task/archive/content-structure-strengthening-survey.md`
- 第1ラウンドの実施記録: `.workspace/.task/archive/content-structure-tier-a-internal-links.md`
- 効果測定は`task-list.md`「Tier A内部リンク再強化の効果測定」へ記録
