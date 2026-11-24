# T-78 出典がない・危険な記事3本の統合と削除

- 完了日: 2026-11-24
- 種別: 施策
- テーマ: 統合, 301, 信頼性, 内部リンク
- 対象: money/bouon-asset-value-analysis → money/soundproof-room-buyback-guide、money/small-business-soundproof-subsidy-guide → money/soundproof-subsidy-news-2025、diy/futon-cardboard-karaoke-booth → diy/diy-substitute-materials-daiso-plastic-board
- 起票元: hq:H-51

## 何をしたか

- 3本を削除し、`astro.config.mjs` と `public/.htaccess` に301を追加。旧URL 7本の転送も統合先へ付け替えた（二重301なし）。記事13本（統合先2本を含む）のリンクを付け替えるか外した
- 外部からのリンクは GSC で確かめていない（ユーザーが確認なしで進めると決定）
- 買取の記事に「買う前に計算できる実質負担」（式と仮の数字の計算）を足した。出典のない残価率・賃料の上乗せは移していない
- 補助金の統合先を、リストの `soundproof-subsidy-check-guide` から `soundproof-subsidy-news-2025` へ変えた。前者は区域の調べ方の記事で持続化補助金に触れておらず、後者にはその節がある。本文は変えていない（T-59 の測定中）
- 代用素材とカラオケ性能の記事に、布団をかぶって歌う方法をすすめない注意を足した（カラオケ性能の記事は、同じ方法をすすめる文を直した）
- `noise-regulation-update-2025`（T-76）と `bouon-dchiseinou-meyasu` は、関連記事のリンク1行を外しただけ

## 使ったデータ・資料

- `.workspace/projects/daily-post-2026-11/2026-11-24-H-51-list.md` §3
- 3か月と16か月の実績はリストの表（3本とも16か月のクリック0）

## 結果

- 2026-11-24 に deploy（4648f40）。本番で新旧10 URL がすべて1回の301で統合先（200）に着くこと、サイトマップに3本がないことを確認
- 効果測定の行は作らない（3本ともほぼ表示がないため）。統合先の表示は月次で見る

## 次に使える知見

- 統合先は、リストの段階で統合元の主題が書かれているかを Grep して決める
- Git Bash の `sed -i` は CRLF のファイルを LF に変える。frontmatter の置換は Python（`newline=''`）で行う
- 代用素材の記事の石膏ボード 約10.5kg は I-29 と同じ誤り（T-70 ③で直す）
- `AssetValueTable` コンポーネントを使う記事がなくなった
