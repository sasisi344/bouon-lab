# site-topic-clusters.md 対応済み項目アーカイブ（2026-07-10）

出典：`.workspace/.task/site-topic-clusters.md`の2026-07-10更新分のうち、同日中に対応が完了した3件。本体側は要点1行＋本ファイルへのポインタに圧縮済み。

---

## D. D値（遮音等級）の解説 — ハブ化対応済み

| カテゴリ | スラッグ | 主題 |
|---|---|---|
| soundproof-room | `bouon-dchiseinou-meyasu` | D値とは？用途別の目安（ハブに指定） |
| soundproof-rental | `bourental-syaouseid-choiceindi` | D値の楽器別推奨レベル・物件選び基準 |
| knowledge | `d-value-truth-and-myths` | D値の神話・誤解の検証 |
| knowledge | `d-value-vs-rw-value-confusion` | D値とRw値（海外規格）の換算不可・混同リスク |

初版時点の2記事に加え、knowledgeの2本（うち1本は2026-07-05追加）を含めると<strong>D値テーマはサイトで4記事</strong>に拡大した。各記事の軸（目安／物件選び／神話検証／海外規格）は分かれているが、導入部の「D値とは」の説明が4記事で繰り返されると検索エンジンには薄い重複と映る懸念があった。

<strong>対応内容（2026-07-10実施）</strong>：`bouon-dchiseinou-meyasu`（soundproof-room）をD値の基本ハブと位置づけ、`d-value-truth-and-myths`・`d-value-vs-rw-value-confusion`（knowledge）の冒頭に「基本の目安はハブ記事へ」の誘導文を追加し、各記事末尾からもハブへの相互リンクを設置。`bourental-syaouseid-choiceindi`（soundproof-rental）は元からハブへリンク済みだったため変更なし。`npx astro check`/`build`で0エラー確認済み（218ページ生成）。

<strong>残課題</strong>：`sound-reduction-simulation`も体感シミュレーションとして同ハブ配下に位置づけられるが、今回はリンク追加なし（次回更新時に対応）。

---

## I. 防音工事・業者選び — 分業固定対応済み

| カテゴリ | スラッグ | 主題 |
|---|---|---|
| soundproof-room | `construction-types-cost-comparison` | 工法別の価格比較＋「業者の選び方まで」 |
| money | `soundproof-contractor-selection-guide` | 相見積もり・契約前チェック・家族の予算合意（ペルソナH） |

どちらも2026-07以降の新記事で、「防音リフォーム業者の選び方」の検索意図が両記事に跨っていた。役割は「工法・価格の技術比較」vs「見積もり・契約の進め方」で分けられる。

<strong>対応内容（2026-07-10実施）</strong>：相互リンク＋各記事での守備範囲宣言（工法比較はこちら／見積もりの進め方はこちら）を設置。`construction-types-cost-comparison`の業者選びセクション末尾から`soundproof-contractor-selection-guide`へ、同記事の導入文と「あわせて読みたい」から`construction-types-cost-comparison`へリンク。`npx astro check`/`build`で0エラー確認済み（218ページ生成）。

---

## soundproof-rental① 家賃相場クラスタ — 確認済み・カニバリなしと判定

| スラッグ | 主題 |
|---|---|
| `soundproof-rental-cost-performance-guide` | 家賃相場・コスパ・通勤込み実質コスト（実用ガイド） |
| `rental-price-index-13cities-soundproof` | 13都市の家賃指数・統計の読み方（統計リテラシー解説） |

「防音賃貸 家賃相場」の検索意図で近接するペアだったため本文を確認。前者＝エリア別実勢家賃とペルソナ別の選び方、後者＝統計指標の読み方・セグメント設計で軸は明確に分かれており、カニバリではなく分業と判定した。

<strong>対応内容（2026-07-10実施）</strong>：前者から後者へのリンクは既存済みだったが、後者から前者への相互リンクが欠けていたため追加（後者「まとめ」末尾）。`npx astro check`/`build`で0エラー確認済み（218ページ生成）。

---

## 編集した記事一覧（lastmod更新済み）

- `knowledge/d-value-truth-and-myths`
- `knowledge/d-value-vs-rw-value-confusion`
- `soundproof-room/bouon-dchiseinou-meyasu`
- `soundproof-room/construction-types-cost-comparison`
- `money/soundproof-contractor-selection-guide`
- `soundproof-rental/rental-price-index-13cities-soundproof`
