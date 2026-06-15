<div align="center">

  <img src="./icon.png" width="256" height="256" alt="Indentier">

# @indentier/plugin-coffee

</div>

[![npm version](https://img.shields.io/npm/v/@indentier/plugin-coffee.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/@indentier/plugin-coffee)
[![CI](https://github.com/indentier/plugin-coffee/actions/workflows/ci.yml/badge.svg)](https://github.com/indentier/plugin-coffee/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> CoffeeScript support for [Indentier](https://github.com/indentier/indentier).

Full documentation: **[indentier.github.io](https://indentier.github.io)**

## Install

```sh
npm i -D indentier @indentier/plugin-coffee
```

## Setup

```jsonc
// .indentierrc.json
{
  "plugins": ["@indentier/plugin-coffee"]
}
```

<!-- prettier-ignore -->
| | |
|-|-|
| Language | CoffeeScript |
| Extensions | `.coffee` |
| Ruby mode | Yes — indentation-based `end` injection (offside rule) |

CoffeeScript blocks are delimited by indentation, not braces. In ruby mode this
plugin injects `end` keywords by detecting dedents instead of tracking `{`/`}`,
and declares `end = null` at the top so the injected `end` references stay
harmless. Requires `indentier` ≥ 0.5.0.

## License

[MIT](./LICENSE) © otoneko.
