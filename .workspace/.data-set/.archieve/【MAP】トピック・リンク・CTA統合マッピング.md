# 【MAP】トピック・リンク・CTA統合マッピング (Topic-CTA Engine)

> **概要**: 記事執筆時に特定のトピックや製品名が登場した際、自動的に挿入すべき「内部リンク（relref）」および「CTAボックス（ctabox）」の対応表です。アフィリエイト収益化と内部回遊率（トピッククラスター）を同時に最適化します。

---

## 1. 凡例 (Schema)
| トピック (Keyword) | 内部リンク先 (Slug) | CTAパターン | CTAパラメータ (ctabox) |
| :--- | :--- | :--- | :--- |
| 話題のキーワード | リンクすべき自社記事のslug | A/B/C | ボタン文言やカラーの推奨設定 |

---

## 2. 防音室カテゴリ (Soundproof Room Cluster)

### 総合メーカー (High-Ticket / O2O)
| トピック (Keyword) | 内部リンク先 (Slug) | CTA | 推奨パラメータ |
| :--- | :--- | :--- | :--- |
| **ヤマハ, アビテックス, セフィーネNS** | `yamaha-avitecs-cefine-ns-guide` | A | title: "ヤマハ アビテックスをショールームで体感する", slug: "yamaha-avitecs-cefine-ns-guide", color: "#e63946" |
| **カワイ, ナサール** | `kawai-nasal-soundproof-room-guide` | A | title: "カワイ 防音室 ナサールの詳細・体験予約", slug: "kawai-nasal-soundproof-room-guide", color: "#2a9d8f" |
| **製品比較, メーカー比較** | `proofroom-maker-2025productcheck` | B | title: "2025年最新メーカー比較をチェック", slug: "proofroom-maker-2025productcheck", color: "#2a9d8f" |
| **価格・相場** | `soundproof-room-price-complete-guide-2025` | B | title: "防音室の価格相場を詳しく見る", slug: "soundproof-room-price-complete-guide-2025", color: "#2a9d8f" |

### 簡易・組立式 (Middle-Ticket / EC)
| トピック (Keyword) | 内部リンク先 (Slug) | CTA | 推奨パラメータ |
| :--- | :--- | :--- | :--- |
| **OTODASU, オトダス** | `otodasu-reviews-2026` | C | title: "OTODASU：コスパ重視の簡易防音ブース", slug: "otodasu-reviews-2026", color: "#f4a261" |
| **だんぼっち** | `danbotchi-vs-diy-soundproof-room` | C | title: "だんぼっちシリーズのラインナップを見る", slug: "danbotchi-vs-diy-soundproof-room", color: "#f4a261" |

---

## 3. 防音賃貸カテゴリ (Rental Cluster)

| トピック (Keyword) | 内部リンク先 (Slug) | CTA | 推奨パラメータ |
| :--- | :--- | :--- | :--- |
| **防音賃貸, 楽器可物件** | `tokyo-soundproof-rental-summary` | B | title: "東京の防音賃貸・楽器可物件を探す", slug: "tokyo-soundproof-rental-summary", color: "#3b82f6" |
| **ミュージション** | `musission-soundproof-rental-review` | B | title: "憧れの防音マンション『ミュージション』の詳細", slug: "musission-soundproof-rental-review", color: "#3b82f6" |
| **内見・契約** | `rental-proofroom-contractcheck` | B | title: "防音賃貸の内見チェックリスト", slug: "rental-proofroom-contractcheck", color: "#3b82f6" |

---

## 4. クリエイター・配信環境 (Creator Cluster)

| トピック (Keyword) | 内部リンク先 (Slug) | CTA | 推奨パラメータ |
| :--- | :--- | :--- | :--- |
| **VTuber, 配信環境** | `vtuber-soundproof-environment-complete-guide` | B | title: "VTuber向け防音環境構築マニュアル", slug: "vtuber-soundproof-environment-complete-guide", color: "#3b82f6" |
| **防音マット, 振動対策** | `footstep-vibration-soundproof-mat-guide` | C | title: "階下への振動を防ぐ防音マットの選び方", slug: "footstep-vibration-soundproof-mat-guide", color: "#f4a261" |
| **キーボード静音** | `keyboard-sound-streaming-soundproof-guide` | C | title: "キーボードのタイピング音対策を見る", slug: "keyboard-sound-streaming-soundproof-guide", color: "#f4a261" |

---

## 5. 運用ルール (Implementation Rules)

1.  **文脈リンク**: 本文中で上記キーワードに触れる際は、必ず対応する内部リンク（relref）を設置する。
2.  **セクション末CTA**: 重大な話題の締めくくりや、製品紹介セクションの末尾では、対応する `ctabox` パラメータを使用して視覚的な導線を作る。
3.  **リンク切れ防止**: ショートコード `ctabox` には必ず `slug` 引数を使用し、画像アセットが自動同期されるようにする。
