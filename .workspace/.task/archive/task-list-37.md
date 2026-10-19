# task-list-37

- **完了日**: 2026-10-19
- **概要**: T-27 チェロ記事（`soundproof-rental/rental-caution-cello`）の統合を取り消し、エンドピン・防振マット・床の悩みに答える記事へリライト

## 実施内容

- ユーザー判断（`[!forAI]`）: 推奨の選択肢1（統合を取り消す）。被リンクを重視し、チェロ奏者に寄り添う内容にリファインする
- 発見: 2026-10-13の`deploy`コミットで301が本番に出ており、10/13〜10/19はチェロのURLがサックス記事へ301されていた（2026-10-19にcurlで確認）。**デプロイするまで301は続く**
- 301を戻した（`public/.htaccess`・`astro.config.mjs`）: `/ja/soundproof-rental/rental-caution-cello/`の自記事→サックス記事の行を削除。旧URL3本（`/ja/soundproof-rental/knowledge/rental-caution-cello/`・`/posts/cello-vibration-proof/`・`/posts/rental-caution-cello/`）の転送先をチェロ記事に戻した
- サックス記事（`saxophone-apartment-practice-guide`）: チェロの節を削除し、description・tagsを統合前に戻した。末尾の楽器別の段落からチェロ記事へのリンクを復活。`lastmod`は2026-10-19
- 被リンク2記事を戻した: `music-student-property-search-guide`・`soundproof-performance-drum`（リンク先をチェロ記事に、アンカーテキストを新タイトルに合わせた）
- チェロ記事をslug不変でリライト。タイトル「チェロのエンドピンの振動を減らすには？防振マットの選び方と賃貸の注意点」。メインKW「チェロ エンドピン 振動」（Bing実データ: 「チェロ エンドピン 床に振動 減らす」3.75位・「チェロ エンドピンからの振動 軽減」3位・「チェロ 防振マット」4位・「チェロ 騒音」4位）。構成は仕組み→重ね方の順番（柔らかい層＋重い板＋ストッパー、椅子ごと板に乗せる）→防振マットの選び方→確かめ方と限界→賃貸の注意点→防音室→FAQ
- 事実確認（2026-10-19）: 音量100dB前後・厚い防振ゴム・防音室1.5畳／Dr-40は[島村楽器 イオンモール長久手店（2021-10-28）](https://www.shimamura.co.jp/update/?p=58742)、エンドピンストッパーの価格1,380〜2,640円（税込）はサウンドハウスの商品ページ、L-45が軽量床衝撃音の指標であることは[GBRCの解説](https://www.gbrc.or.jp/assets/documents/gbrc/GBRC186_899.pdf)。根拠のなかった「スラブ厚200mm以上」は削除。防振マットの低減量（dB）を測った第三者データは見つからず、本文に「何dB下がるとは書かない」と明記した
- 内容が合わなくなった`infographic.jpg`（「床へのダメージ」の図）は本文から外した（ファイルは残置）。カバー画像は既存のまま
- `pnpm build`成功（チェロ記事が出力され、旧URL3本はチェロ記事へのリダイレクト）
- 索引の更新: `interlink-postlist.md`・`interlink-tag-clusters.md`のタイトルとタグ、`index-url.md`、`re-create/remaining.md`、`query-check/analysis_楽器別.md`、`archive/re-create-docs-20261013/consolidation-candidates.md` §3

## 残り（ユーザー）

- デプロイし、curlで`/ja/soundproof-rental/rental-caution-cello/`が200、旧URL3本がチェロ記事へ301になることを確認する
- デプロイ後、GSCでチェロ記事のURLのインデックス登録をリクエストする（`index-url.md`）

## 参照

- 効果確認: `schedule/2026-12-02-m11-monthly-analysis.md`（S-12）の「チェロ記事の統合取り消しとリライト（T-27）」の節

## 元のタスク本文

### T-27 チェロ記事（`rental-caution-cello`）の個別対応（2026-10-13 追加、ユーザー判断で個別対応）

状態: `soundproof-rental/saxophone-apartment-practice-guide` にチェロの節を追加し、301（`public/.htaccess` 516行目・`astro.config.mjs` 695行目）も設定済みだが、**チェロ記事のファイルは残置**。このままデプロイすると、チェロのURLはサックス記事へ301される。詳細と根拠は `archive/re-create-docs-20261013/consolidation-candidates.md` §3。
> [!forAI]
> 推奨通りで進行。統合を取り消して被リンクを重視。チェロは弦楽器でも低音が強く防音と防振が重要だから、チェロ奏者によりそった記事内容にリファインするのがベストだと考える。
- [ ] ユーザー: 次のどちらかを選び、個別に対応する
  1. 統合を取り消す（私の推奨）: サックス記事のチェロの節を外し、チェロ分の301を消し、被リンク2記事（`music-student-property-search-guide`・`soundproof-performance-drum`）を元に戻す。チェロ記事は「エンドピン・防振マット・床」の悩みでリライトし、楽器別クラスタの入口にする
  2. 統合を維持する: チェロ記事のファイルを削除する（被リンクの付け替えと301は設定済み）
- 根拠: Bingで「チェロ エンドピン 床に振動 減らす」（3.75位・クリック1）、「チェロ エンドピンからの振動 軽減」（3位）、「チェロ 防振マット」（4位・クリック1）、「チェロ 騒音」（4位・クリック1）が出ている（`query-check/analysis_楽器別.md`）
- 注意: デプロイ前に決める。決めないまま公開すると、チェロの検索流入が止まる
