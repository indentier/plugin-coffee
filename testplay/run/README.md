# testplay/mock/

`testplay/` でのローカル動作確認に使うサンプルファイル群。
`testplay/test.ps1` によって `testplay/run/` にコピーされてから Indentier が実行される。

## ファイル一覧

<!-- prettier-ignore -->
| ファイル | 言語 |
|-|-|
| sample.coffee | CoffeeScript |

## 使い方

<!-- prettier-ignore -->
```sh
pnpm build  # このパッケージと indentier/ 両方でビルド

# default モード（全ファイル表示）
pnpm play

# ruby モード（インデントベースで end を注入）
pnpm play:ruby
```

> **Note:** CoffeeScript はインデントベースの言語なので、ruby モードでは波括弧ではなくインデントの減少（オフサイドルール）から `end` を注入します（`indentationBased: true`）。
