# T-05 `soundproof-material-spec-chart`を入口化（2026-10-06完了）

## 背景

W41（GA4 9/26〜10/3）で`knowledge/soundproof-material-spec-chart`がbing経由32セッション（W40は10）、エンゲージメント率88%・滞在約65秒。入口として次の読み物へ誘導する価値があると判断した。

## 点検結果（2026-10-06）

- 修正前: 被リンク4本（`business/datacenter-soundproof-technology-facts`・`knowledge/absorption-vs-soundproofing-materials`・`knowledge/d-value-truth-and-myths`・`soundproof-room/bouon-dchiseinou-meyasu`）、出リンク5本（absorption-vs-soundproofing-materials・d-value-truth-and-myths・bouon-dchiseinou-meyasu・outdoor-soundproof-curtain-market-guide・datacenter-soundproof-technology-facts）
- 課題: 出リンクが知識系と周辺用途（屋外カーテン・データセンター）に偏り、DIY実践・防音室比較・価格といった次の行動の記事への導線がなかった。被リンクにDIY系記事がなかった

## 実施内容

出リンク4本（各セクションの文脈に合わせ、独立段落で追加。`archive/content-structure-tier-a-internal-links.md`で追加済みのリンクとは重複していない）:

| 追加位置 | リンク先 |
|---|---|
| 吸音材（NRC値）節の末尾 | `diy/bass-trap-installation-guide` |
| 壁構成パターン別D値の節 | `diy/diy-wall-soundproofing-room-guide`（パターン2〜3のDIYと専門工事の分かれ目） |
| 同上 | `diy/soundproof-sheet-heavy-diy-tips`（遮音シートの総重量とフレーム補強） |
| 同上 | `soundproof-room/bouon-osusume-hikaku`・`money/soundproof-room-price-market`（パターン4・5相当をユニット型防音室で得る場合。高単価カテゴリへの導線） |

被リンク2本（面密度・D値の数値を引く文脈）: `diy/soundproof-sheet-heavy-diy-tips`・`diy/diy-wall-soundproofing-room-guide`から追加。

- `lastmod`は変更していない（リンク追記のみ）。`pnpm build`成功（210ページ）
- 効果確認は`weekly-task.md` W-21
