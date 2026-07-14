# 防音Lab:週間タスク

アクセスデータの格納先[.workspace\access-data]

---

### Do（実施施策）
- [[06-W25]]のActを実施：`/ja/diy/bass-trap-installation-guide/`の内部リンク強化、`/ja/money/streamer-tax-strategy/`のタイトル改善、AdSense収益追跡を継続（PV55・クリック0・推定収益2に拡大）

### Check（前週からの改善・要因仮説）
- 数値変化: UU19→40（+110.5%）、PV28→59（+110.7%）、直帰率37.5%→57.4%（+53.1%、悪化）、滞在時間55.0秒→20.4秒（-63.0%、悪化）
- 推定要因（LP/ページのどれに起因？）: PVはほぼ倍増したが、主要流入元のトップページ「/ja/」（CTR0%・直帰53.1%）とbass-trap-installation-guide（直帰69.2%）の直帰率が高く、サイト全体の質的指標を悪化させている。多数記事へのPV1〜2件の長尾流入が分散増加した点もPV増の一因
- ⚠️ `/ja/soundproof-rental/bouon-rental-market-guide/`と`/ja/soundproof-rental/bouonrental-market-research2025/`は類似タイトル・類似URLで、URL設計の重複/typoの可能性があり要確認

### Act（次週のToDo・優先度つき）
- [x] `/ja/diy/bass-trap-installation-guide/`（表示14・順位10.64・CTR14.3%）は被リンク・内部導線強化で順位5位以内への押し上げを狙う → 2026-06-21：`streaming-room-reverb-absorption`（ベーストラップ言及箇所）にリンク追加。既存3記事（gamer-acoustic-placement・diy-soundproofing-tips・streamer-soundproof-room-comprehensive-guide）と合わせて計4記事から内部リンク
- [x] `/ja/`（トップページ、表示14・順位19.57・CTR0%）はタイトル・meta descriptionを見直しクリック獲得を狙う → 2026-06-21：`src/pages/[lang]/index.astro`のtitle/descriptionを問いかけ・悩み別フレームに変更（旧:「あなたの環境に合わせた防音ガイド」）。合わせてen側もlang分岐で個別に設定（従来ja/en共通で誤っていたバグも修正）
- [x] `bouon-rental-market-guide`と`bouonrental-market-research2025`のURL重複/統合を確認する → 2026-06-21確認：重複/typoではなく「完全ガイド（2026版・エリア相場・ブランド比較）」と「市場トレンド分析（2025年データ・需要背景）」で住み分け済み。ただし相互リンクが皆無だったため両記事に追加（カニバリ対策）

### 2026-06-21 追加棚卸し：Act未掲載の見逃しポイント（実行済み）
- [x] **最優先**: `/ja/use-case/vtuber-family-privacy-rules/`（実家・同棲VTuberの親フラ・身バレ対策記事）→ 2026-05-02revuildで削除・リダイレクト未設定のままだったが、W26のGSCで表示1・クリック1・順位6.0と検索需要が実証されていたため復元。`/ja/creator/vtuber-family-privacy-rules/`として本文・カバー画像をgit履歴から復元し、`astro.config.mjs`に旧URL`/ja/use-case/vtuber-family-privacy-rules/`からのリダイレクトを追加（既存ランキング・クリック実績の引き継ぎ狙い）。`vtuber-soundproof-environment-complete-guide`と相互リンクも設置。`pnpm build`で181ページ生成・リダイレクト正常動作を確認済み
- [x] `/ja/business/datacenter-soundproof-technology-facts/`（順位10.6・表示8・クリック0）→ 2026-06-21：タイトルを「なぜデータセンターは静かなのか｜防音技術から学ぶBtoB提案の作り方」に問いかけ型へ変更、descriptionも同フレームに統一
- [x] 監視のみ・優先度低: `bass-trap-installation-guide`へのGA4セッション1件で英語タイトルが記録された事象（サイト内に英語版は存在せず、ブラウザ自動翻訳orボットの可能性。n=1のため再発時のみ調査、対応不要と結論）