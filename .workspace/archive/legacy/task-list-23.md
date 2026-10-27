# task-list-23

- **完了日**: 2026-10-07
- **概要**: T-18 www・http版を`https://bouon-lab.com`へ301統一（`.htaccess`）

## 実施内容

- 背景: `http://bouon-lab.com/`と`https://www.bouon-lab.com/`が正規ホストへ統一されず200で表示されていた（`canonical`は`https://bouon-lab.com/ja/`を指していたため害は小さいが、同一ページが複数ホストで見える状態）
- `public/.htaccess`の先頭に、www→apex・http→httpsを1回の301で`https://bouon-lab.com`へ統一するルールを追加（`X-Forwarded-Proto`の条件で転送ループを防止）。2026-10-06にデプロイ
- 本番確認（curl、2026-10-06）: `http://`・`https://www`・`http://www`の各版が1回目の301で正規ホストへ。パス・クエリ保持、ループなし。既存の301（`/en/`→`/ja/`ほか）・410（`/posts/`・`/tags/`・`/upload/`）、`sitemap-index.xml`・`robots.txt`の200は変化なし
- GSC確認（2026-10-07、ユーザー）: プロパティは`https://bouon-lab.com/`のURLプレフィックスのみ（ドメインプロパティ・www版・http版は無し）。サイトマップは`sitemap-0.xml`を直接送信、検出202ページで正常。サイトマップの202URLは全件200・正規ホスト
- 旧ホストのプロパティがないため、統一前の分散の大きさはGSCでは測れない。追加の作業は不要

## 判断

- `/en/`を増やす案・`/ja/`を`/`直下へ移す案は見送り（`/en/`は2026-09-05に廃止済み。復活は評価が回復してから、翻訳でなく日本ならではの視点の記事として検討）
- トップは、ホスト統一→`/`→`/ja/`の2ホップになるが、クロール上は問題ない範囲のためそのまま
- ドメインプロパティは作らない（必要になったらDNSのTXTで認証する）

## 参照

- `.workspace/.data-set/seo-check/gsc-analysis-20260702/ranking-collapse-root-cause-20260702.md`（「新しく気づいた点」）
- `archive/task-list-22.md`（同日に追加したサイトマップの`lastmod`）
