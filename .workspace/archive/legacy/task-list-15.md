# Tier C記事16本の事実確認・更新要否判断（2026-09-30実施）

`.workspace/.task/archive/content-structure-tier-a-round2-20260916.md`のTier C（`lastmod`半年以上未更新）として記録された16記事について、個別に事実確認・更新要否を判断した。

## 対象リスト（`lastmod`が2026-03-30以前の14記事＋しきい値接近中の2記事）

1. `soundproof-rental/bourental-syaouseid-choiceindi`（2025-10-12）
2. `soundproof-rental/remote-work-family-harmony-soundproof`（2025-12-17）
3. `knowledge/why-your-80-percent-rug-rule-fails`（2026-02-19）
4. `money/small-business-soundproof-subsidy-guide`（2026-02-23）
5. `creator/soundproof-rental-life-streamer`（2026-02-28）
6. `creator/streaming-room-layout-guide`（2026-02-28）
7. `diy/wooden-apartment-soundproof-guide`（2026-02-28）
8. `knowledge/diy-soundproof-truth`（2026-02-28）
9. `money/soundproof-subsidy-check-guide`（2026-02-28）
10. `soundproof-rental/noise-canceling-headphones-sleep`（2026-02-28）
11. `soundproof-rental/rental-caution-cello`（2026-02-28）
12. `soundproof-room/shimamura-music-soundproof-room-guide`（2026-02-28）
13. `soundproof-room/million-yen-soundproof-room-professional`（2026-03-10）
14. `knowledge/biophilic-acoustics`（2026-03-11）
15. `soundproof-room/sound-reduction-simulation`（2026-04-08、しきい値まで約1週間）
16. `soundproof-rental/home-theater-karaoke-soundproof-design`（2026-04-14、しきい値まで約2週間）

## 判断結果

### 要修正・実施済み

- **`money/small-business-soundproof-subsidy-guide`**: WebSearchで小規模事業者持続化補助金の2026年度制度を裏取り。補助上限額（通常枠50万円・特例併用で最大250万円）自体は正確だったが、「特定の要件（創業枠など）を満たせば」という記載が制度上不正確（実際はインボイス特例+50万円・賃金引上げ特例+150万円の併用が正しいメカニズム）だったため修正。`lastmod`を2026-09-30に更新

### 検証済み・内容維持（一次情報で裏取りし現状も正確と確認、`lastmod`を更新）

- **`soundproof-room/shimamura-music-soundproof-room-guide`**: 限定モデル「S-OTODASU II LIGHT」の価格帯「12万円台〜13万円台」をWebSearchで裏取り（実勢価格119,900円〜129,900円）。記載内容は現状も正確と確認
- **`soundproof-rental/noise-canceling-headphones-sleep`**: 紹介機種「SONY WH-1000XM6」が2026-09時点でも後継機なしの現行モデルであることをWebSearchで確認

### 内容維持（一般的な技術・概念・体験談記事のため、時間経過で陳腐化する具体的数値・固有名の記載が少なく、緊急の更新は不要と判断。`lastmod`は実修正がないため据え置き）

- `soundproof-rental/bourental-syaouseid-choiceindi`（D値と楽器別の一般解説）
- `soundproof-rental/remote-work-family-harmony-soundproof`（在宅ワークと家族の暮らし方の一般解説）
- `knowledge/why-your-80-percent-rug-rule-fails`（物理法則の解説、時間経過で変わらない）
- `creator/soundproof-rental-life-streamer`（体験談形式のコンテンツ）
- `creator/streaming-room-layout-guide`（レイアウト・カメラ画角の一般解説）
- `diy/wooden-apartment-soundproof-guide`（DIY手法の一般解説）
- `knowledge/diy-soundproof-truth`（物理法則ベースの解説）
- `money/soundproof-subsidy-check-guide`（調べ方の手順解説、具体的な補助額の記載なし）
- `soundproof-rental/rental-caution-cello`（楽器別の防振対策の一般解説）
- `knowledge/biophilic-acoustics`（音響設計手法の解説）
- `soundproof-room/million-yen-soundproof-room-professional`（ROI・減価償却の考え方の解説。法定耐用年数「多くは15年」等は制度の一般的傾向として妥当）
- `soundproof-room/sound-reduction-simulation`（物理シミュレーションの解説、しきい値接近中だが内容自体は陳腐化なし）
- `soundproof-rental/home-theater-karaoke-soundproof-design`（設計手順の解説、しきい値接近中だが内容自体は陳腐化なし）

## 方針メモ

lastmodは「実際に内容を確認・修正した」場合のみ更新し、修正のない記事に対して見せかけの鮮度シグナルを付けることは避けた。今後のTier C対応でも同じ基準を維持する。

## 参照

- 親調査: `.workspace/.task/archive/content-structure-tier-a-round2-20260916.md`
- 関連ルール追加: `.agents/bouon-writer.md`「AI Overview対策：直接回答型クエリの一次情報戦略」
