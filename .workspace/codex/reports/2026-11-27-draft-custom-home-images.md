# draft-custom-home-images 注文住宅の防音記事5本 画像作成報告

- 指示書はユーザー依頼「画像やサムネをcodexで作成。」と、前回報告の画像計画。
- 状態は完了。各記事フォルダに `cover.png` と `fig-01.png` を置き、下書きMDXに組み込んだ。

## やったこと

- サムネイルは防音LabのGemini生成スクリプトと共通coverプリセットを使用。JPEGで返った画像を1260×840のPNGに変換した。
- 図解は本文の仮例に沿ってSVGとHTMLで描き、共通メモ画像のCSSを適用。編集用原本は `.workspace/projects/draft-custom-home/images-src/<slug>/fig-01.html` に保存した。
- 各MDXのfrontmatterに `image: ./cover.png` を追加し、まとめの直後にあった図解マーカーをalt付きのPNG参照に置き換えた。公開状態は `draft: true`。

## 画像

| slug | サムネイルの主役 | 図解の内容 |
| --- | --- | --- |
| `new-build-karaoke-room` | マイクとスピーカーを置いたカラオケルーム | 歌声とスピーカー、上階の寝室、隣家側の窓、換気口 |
| `roadside-custom-home-bedroom-noise` | 道路が見える寝室の窓 | 走行音・発進音の方向、寝室候補A・B、窓と給気口 |
| `custom-home-study-soundproofing` | ノートPCとヘッドセットを置いた書斎 | 夕方の家事の音と夜のWeb会議の声の向き |
| `custom-home-soundproof-room-quote-check` | 比較用の用紙と間取り図 | A社・B社の別途工事、完成時の測定、追加質問 |
| `new-build-piano-room-floor-selection` | グランドピアノと搬入経路の階段 | 1階案・2階案の搬入経路、床・脚、演奏音の確認場所 |

## 確認

- サムネイルの主役、文字・ロゴ・顔の有無、図解の文字・矢印・配置を目視で確認した。道路沿いの敷地図は窓ラベルと道路側の矢印周辺の間隔を調整した。
- 画像10枚のPNG形式、寸法、MDXの参照、元のマーカーの除去を確認した。図解の値と条件は本文の仮例と照合した。
- `admin-lint` は5件で ERROR 0、WARN 0。ビルド未実行。

## CCへの申し送り

- 今回はユーザー指示に従い、検収前の下書き5件にCodexで画像を制作・配置した。図解の原本はHTMLにまとめ、経路図3枚のSVGをHTML内に保持した。
