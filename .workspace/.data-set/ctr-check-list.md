# CTR改善チェックリスト（W28版）

- 作成日: 2026-07-08
- データ基準: W28（2026-06-27〜2026-07-04） `.workspace/access-data/2026/W28/bouon-gsc-w28.csv`
- 比較データ: W27（2026-06-20〜2026-06-27） `.workspace/access-data/2026/W27/bouon-gsc-w27.csv`
- 前提: astro.config.mjs のリダイレクト・2026-06-01のカテゴリ構造フラット化（`/{lang}/{category}/{subcategory}/{slug}/` → `/{lang}/{category}/{slug}/`）後の**新URL基準**で集計。旧 `ctr-check-list.md`（2026-04-25データ）は陳腐化のため本ファイルで置き換え。
- 注意: サイト全体のW28総表示回数は217件と絶対数が少ないため、表示回数が一桁の行は参考値（傾向確認用）として扱い、断定的なリライト判断は表示回数10件以上を目安にする。

## 対象基準

1ページ目圏内（平均掲載順位10位以内）にもかかわらずCTRが0%、または著しく低いページ。

## 優先ページ（表示回数10件以上・順位10位以内・CTR低迷）

| URL | 表示回数(W28) | CTR(W28) | 順位(W28) | W27比較 | 推奨アクション |
|---|---|---|---|---|---|
| `/ja/creator/gaming-floor-impact-noise-fix/` | 17 | 0% | 7.35位 | W27: 表示5・順位6.2位・CTR0%→表示3倍増だがCTR0%継続。機会損失拡大中 | タイトル・meta descriptionを「台パン・足音」の具体的な悩み訴求に変更。2,000円対策という価格訴求をタイトルに前出しし、CTR起爆を狙う |
| `/ja/business/datacenter-soundproof-technology-facts/` | 17 | 0% | 10.0位 | W27: 表示14・順位10.0位・CTR0%→順位横ばい、CTR0%継続 | BtoB向けテーマでクリック意欲が低い可能性。タイトルの「なぜ静かなのか」を疑問形のまま残しつつ、meta descriptionに具体的な数値（防音レベル・コスト）を追加して検索結果での差別化を図る |
| `/ja/soundproof-room/wifi-connection-guide/` | 10 | 0% | 7.3位 | W27データなし（新規/URL変更後の初計測） | 上位表示に対しCTR0%は初動の可能性もあるが要観察。「有線LAN」という解決策をタイトルに明示し、検索意図（Wi-Fiが繋がらない）との一致度を高める |

## 参考（表示回数少・傾向確認用、10件未満）

| URL | 表示回数(W28) | CTR(W28) | 順位(W28) | 備考 |
|---|---|---|---|---|
| `/ja/`（トップページ） | 15 | 0% | 6.2位 | W27: 表示21・順位9.6位・CTR0%。順位改善もCTR0%継続。トップページはタイトルタグ・meta description全体の見直しを検討 |
| `/ja/creator/soundproof-room-fatigue-ventilation/` | 6 | 0% | 6.67位 | W27: 表示18・順位10.8位・CTR0%。表示回数は減ったが順位は改善。継続観察 |
| `/ja/knowledge/vibration-reduction-science/` | 4 | 0% | 6.75位 | W27: 表示11・順位9.3位・CTR9.1%（1クリック）→W28はクリック消失。表示回数も減少。要観察 |
| `/ja/soundproof-rental/musision-comprehensive-guide/` | 3 | 0% | 9.0位 | サンプル数小、継続監視のみ |
| `/ja/soundproof-rental/rental-caution-cello/` | 3 | 0% | 7.67位 | サンプル数小、継続監視のみ |
| `/ja/soundproof-room/sound-reduction-simulation/` | 4 | 0% | 8.25位 | サンプル数小、継続監視のみ |
| `/ja/knowledge/diy-soundproof-truth/` | 2 | 0% | 7.5位 | サンプル数小、継続監視のみ |
| `/ja/knowledge/soundproof-app-review-2026/` | 2 | 0% | 8.5位 | サンプル数小、継続監視のみ |
| `/ja/knowledge/soundproof-material-spec-chart/` | 2 | 0% | 5.5位 | サンプル数小、継続監視のみ |

## 除外・保留

- `/ja/soundproof-room/hsp-soundproof-room-guide/`（表示5・順位12.6位）: 順位が10位を超えているため本リストの対象外。旧 `seo-task.md` でZONE B「⭐最優先」施策済み（内部リンク強化・FAQ追加）だったにもかかわらず、W27（表示2・順位5.0位・CTR50%）→W28（表示5・順位12.6位・CTR0%）と大幅悪化。CTR改善よりも順位悪化の原因調査が先。詳細は `pagerank-list.md` を参照。
- `/ja/diy/closet-diy-soundproof-room/`（表示1・順位2位・CTR100%）: サンプル数が1件のみで統計的に無意味なため除外。

---
*次回更新目安: W30〜W31（本リストの施策反映から3〜4週間後）*
