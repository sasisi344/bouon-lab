# draft-custom-home 注文住宅の防音記事5本 清書報告

- 指示書はユーザー依頼「@draft アウトラインをもとに記事を作成。」と `.workspace/_draft/` の該当5本。
- 状態はレビュー用MDXの作成完了。5本とも `draft: true`。元アウトラインのタイトル、slug、H2を採用し、日付は作業日の2026年11月27日とした。
- `@draft` は `.workspace/_draft/` と解釈し、書き上げるための見出しがある5本を対象とした。元アウトラインは照合用に保持した。

## やったこと

いずれも `src/content/ja/soundproof-room/<slug>/index.mdx` に作成。

| slug | 読者が記入できるもの | 既存記事との分担 |
| --- | --- | --- |
| `new-build-karaoke-room` | 使用時間・音源・寝室と隣家側の確認箇所・工事分担表 | `karaoke-box-soundproof-performance-guide` は既存住宅の対策。本稿は位置の決定と完成確認 |
| `roadside-custom-home-bedroom-noise` | 夜の現地確認の記録、窓・給気口を含む敷地図 | `bedroom-noise-type-solution-guide` は入居後の切り分け。本稿は設計前の敷地と配置の比較 |
| `custom-home-soundproof-room-quote-check` | 同一条件で再見積もりを取るための工事・測定・引き渡し比較表 | `custom-home-soundproof-builder-selection` の契約前・引き渡しと重なる。本稿は見積書の項目を埋めて差を消す手順 |
| `custom-home-study-soundproofing` | 会議と家事・就寝が重なる時間、音が出る方と入る方の図面メモ | `remote-work-family-harmony-soundproof` は今の家での対策。本稿は設計時の位置・建具・換気の選択 |
| `new-build-piano-room-floor-selection` | 1階と2階の比較、設計者と搬入業者に渡す図面と質問表 | `piano-room-guide` は広さ・費用・設置条件。本稿は新築時に階を決める順番 |

## 確認

- `admin-lint.mjs --site bouon-lab --files <作成した5件>` は ERROR 0、WARN 0。
- タイトル・H2の原案一致、description 93〜102字、内部リンク各3本の実在・公開状態・末尾スラッシュ、本文段落90字以内、禁止記法、図解マーカーの項目を静的に確認。
- 検索結果を確認し、各記事の役割を既存記事と照合した。GSCの根拠はアウトラインと企画メモの記録を使った。
- 見積もりとカラオケの記事に使った施工工程は企画メモ記載のシグマ音響の案内に基づく。ピアノの寸法・質量はT-93の事実の材料F13にあるヤマハ公式仕様と照合した。図面・聞こえ方・見積書の記入例はいずれも仮例。
- ビルド未実行。公開時の画面、既存記事からの戻りリンク、ハブと関連記事の表示は公開判断後の確認事項。

## 画像計画

| slug | fig-01（まとめ直後） | カバーのプロンプト案 |
| --- | --- | --- |
| `new-build-karaoke-room` | 間取りの音源・隣室・屋外側の確認箇所 | Compact home karaoke room, microphone and speakers beside a closed door, viewed from the seating area |
| `roadside-custom-home-bedroom-noise` | 道と音の方向、寝室候補、窓・給気口を記した敷地図 | Bedroom window in a detached Japanese house facing a quiet side yard, road visible beyond the fence |
| `custom-home-soundproof-room-quote-check` | 同じ条件で見積もりをそろえる比較メモ | Two construction quotes beside a soundproof room floor plan, pencil and ruler on a drafting table |
| `custom-home-study-soundproofing` | 書斎の会議と家族の生活音を描いた間取り図 | Home study with a laptop and headset, closed study door and built-in storage visible from inside |
| `new-build-piano-room-floor-selection` | 1階・2階の搬入・床・音の確認を比べるメモ | Grand piano in a newly built house, open double doors framing a hallway and staircase beyond |

図解は各ファイルにマーカーを設置。画像スタイルの規定どおり、カバーと図解の生成は完成稿の検収後。

## 止めた箇所

- 具体的な施工仕様による遮音量、地域の実測値、見積金額は、アウトラインの条件で裏付けられるものが揃っていない。カラオケと書斎は設計者への質問、寝室は現地の記録例、ピアノはメーカー仕様と仮の図面条件、見積もりは仮の内訳で手順を示した。
- ピアノと見積もりは既存記事と近く、実際の図面・公開見積もりを使った事例の採否と、独立公開の判断が残る。
