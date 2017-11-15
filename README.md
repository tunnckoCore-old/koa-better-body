# hela [![npm version][npmv-img]][npmv-url] [![github release][github-release-img]][github-release-url] [![License][license-img]][license-url] 

> Powerful & flexible task runner framework in 80 lines, based on [execa][]. Supports shareable configs, a la ESLint

<div id="thetop"></div>

_You might also be interested in [hela-config-tunnckocore][highlighted-link] or in the other [related projects](#related-projects)._

## Quality Assurance :100:

[![bitHound Code][bithound-code-img]][bithound-code-url] 
[![Code Style Standard][standard-img]][standard-url] 
[![Linux Build][circleci-img]][circleci-url] 
[![Code Coverage][codecov-img]][codecov-url] 
[![bitHound Score][bithound-score-img]][bithound-score-url] 
[![bitHound Deps][bithound-deps-img]][bithound-deps-url] 
[![Dependencies Status][dependencies-img]][dependencies-url] 

If you have any _how-to_ kind of questions, please read [Code of Conduct](./CODE_OF_CONDUCT.md) and **join the chat** rooms or [open an issue][open-issue-url].  
You may also read the [Contributing Guide](./CONTRIBUTING.md). There, beside _"How to contribute?"_, we describe everything **_stated_** by  the badges.

[![tunnckoCore support][chat-img]][chat-url] 
[![Code Format Prettier][prettier-img]][prettier-url] 
[![Node Security Status][nodesecurity-img]][nodesecurity-url] 
[![Conventional Commits][ccommits-img]][ccommits-url] 
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url] 
[![Node Version Required][nodeversion-img]][nodeversion-url] 
[![Renovate App Status][renovate-img]][renovate-url]

<a target="_blank" rel="nofollow" href="https://app.codesponsor.io/link/K7yYzzA5nb2ZDR4GTKmgUdfe/tunnckoCore/hela">
  <img alt="Sponsor" width="888" height="68" src="https://app.codesponsor.io/embed/K7yYzzA5nb2ZDR4GTKmgUdfe/tunnckoCore/hela.svg" />
</a>
<p></p>

[![All Contributors Spec][all-contributors-img]](#contributors) 
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url] 
[![Newsletter Subscribe][tinyletter-img]][tinyletter-url] 
[![PayPal Author Support][paypal-donate-img]][paypal-donate-url] 
[![Share Love Tweet][share-love-img]][share-love-url] 
[![NPM Downloads Weekly][downloads-weekly-img]][npmv-url] 
[![NPM Downloads Monthly][downloads-monthly-img]][npmv-url] 
[![NPM Downloads Total][downloads-total-img]][npmv-url] 

## Table of Contents
- [Install](#install)
- [Background](#background)
- [CLI](#cli)
- [API](#api)
  * [.hela](#hela)
  * [.exec](#exec)
  * [.shell](#shell)
- [Shareables Configs](#shareables-configs)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Users](#users)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install

This project requires [**Node.js**][nodeversion-url] **v8** or above. Install it using [**yarn**](https://yarnpkg.com) **v1** or above / [**npm**](https://www.npmjs.com) **v5** or above.

```
$ yarn add hela
```
<!-- 
A browser usage is also possible, thanks to the [unpkg.com](https://unpkg.com) CDN and [Rollup](https://ghub.now.sh/rollup) bundler.  
See available bundles at [`https://unpkg.com/hela/dist/browser/`](https://unpkg.com/hela/dist/browser/).

> _**Note:** May not work in the browser if some of the [Node.js builtin modules](https://github.com/juliangruber/builtins/blob/master/builtins.json) are used here._
 -->

## Background

What is that? It is a package that is useful for automation and keeping things on one place.

It is meant to be used in `npm scripts`, but if you decide to use it as standalone tool
you still can. The core is pretty minimal, in [really 80 lines](./src/index.js) without the documentation comments, but it has very flexible nature by embracing Shareable Configs.
Yes, it supports presets of tasks same as found in ESLint and Renovate. Each preset
is just an object with `extends` and/or `tasks` properties. 

A working preset, you can see in use here (yes, `hela` uses itself and presets to release itself) and
in the first created preset [hela-preset-tunnckocore][], which by the way uses itself **AND** `hela` too! It is pretty awesome, seriously.

Not only the presets gives us power. Hela uses pretty fantastic configuration loader, which is separated from the core as [pretty-config](https://github.com/tunnckoCore/pretty-config). It is similar to the very much used [cosmiconfig][], but is a lot more smaller (by implementation, by lines and by deps means) with great defaults and lookup on few places.

The `pretty-config`'s resolving mechanism looks for this files to load configuration (where
the `%s` is the name of the tool):

```js
const configFiles = [
  '.%src.json', // 1
  '.%src.yaml', // 2
  '.%src.yml', // 3
  '.%src.js', // 4
  '%s.config.js', // 5
  '.%s.config.js', // 6
  '.%src', // 7 - first tries JSON, if fail to parse then fallback to YAML
  'package.json', // 8 - foo, fooConfig or pkg.config.foo fields
]
```

For example, to load some preset, you can create `.helarc.json` with this,
where if you skip `hela-preset-` prefix it is assumed automatically.

```json
{
  "extends": [
    "foo",
    "hela-preset-bar",
    "tunnckocore",
    "./some/relative/JS-or-JSON-file.js"]
}
```

And so, above will resolve `hela-preset-foo`, `hela-preset-bar`, `hela-preset-tunnckocore` and
the tasks/presets from some given relative file. And everything is recursive.

Basically, `hela` just loops over an object of key/value pairs, where key is the name of a task and the value is a `string` (directly passed to `execa`), an `array` of strings (run in series passed to [execa][]) or a `function`.

If task is a function, then it is passed with `({ parse, argv, taskName, hela, exec, shell, ...options })` signature. Worth mentioning that it is called in a `promise.then()` and so the nextTick - be aware of that.

## CLI
Install it as dev dependency of your project first, then you can use it just like
you use `gulp`, for example `hela <taskName>`. In `tunnckocore` preset you can
run tasks like the following, but go there for more deep docs.

```
$ hela style
$ hela lint
$ hela format
$ hela commit
$ hela release
```

## API
Review carefully the provided examples and the working [tests](./test).

### [.hela](src/index.js#L40)

> Controls, merges and resolves all tasks from config files
> and passed through `opts.tasks`.
>
> All `opts` are passed to [execa-pro][] and to [execa][],
> so you can pass `opts.stdio: 'inherit'` for example
> to output the result of each command in the console, useful for things like prompt inputs.
> Resolving works recursively and support ESLint style presets through
> the `opts.extends`. The `extends` property can be `string` (the name of the preset,
> prefixed with `hela-config-`),  a function (that is passed with `{ extends, tasks }` object)
> or an object containing another `extends` and/or `tasks` properties.
>
> Configuration is handled by [@tunnckocore/pretty-config](https://github.com/tunnckoCore/pretty-config)
> which is pretty similar to the [cosmiconfig][] package and so the config
> files lookup order is:
> - `.helarc.{json,yaml,yml,js}`
> - `hela.config.js`
> - `.hela.config.js`
> - `.helarc` - YAML or JSON syntax
> - `package.json` - one of `hela`, `helaConfig` or `config.hela` fields

**Params**

* `opts` **{Object}**: requires to have at least `tasks` ot `extends` properties    
* `returns` **{Promise}**: so you can use `async/await` mechanism  

### [.exec](src/index.js#L70)

> A mirror of [execa-pro][]'s `.exec` method, see its docs. This is also
included in the object that is passed to each task if the task is a function.

**Params**

* `cmds` **{string|Array}**: commands to call, if array of strings executes in series    
* `options` **{Object}**: optional, passed to [execa-pro][] and so to [execa][]    
* `returns` **{Promise}**: so you can use `async/await` mechanism  

### [.shell](src/index.js#L85)

> A mirror of [execa-pro][]'s `.shell` method, see its docs. This is also
included in the object that is passed to each task if the task is a function.

**Params**

* `cmds` **{string|Array}**: commands to call, if array of strings executes in series    
* `options` **{Object}**: optional, passed to [execa-pro][] and so to [execa][]    
* `returns` **{Promise}**: so you can use `async/await` mechanism  

**[back to top](#thetop)**

## Shareables Configs

- [hela-config-tunnckocore][] - a preset for every repository and package in [@tunnckoCore](https://github.com/tunnckoCore) organization.
- [hela-config-rollup-build](https://github.com/tunnckoCore/hela-config-rollup-build) - preset of tasks focused on bundling, using [rollup][]. Go create for Webpack?
- [hela-config-new-project](https://github.com/tunnckoCore/hela-config-new-project) - preset of tasks for generating whole new project and repository.

## Related Projects
Some of these projects are used here or were inspiration for this one, others are just related. So, thanks for your existance! 
- [execa-pro](https://www.npmjs.com/package/execa-pro): Thin layer on top of [execa][] that allows executing multiple commands in… [more](https://github.com/tunnckoCore/execa-pro#readme) | [homepage](https://github.com/tunnckoCore/execa-pro#readme "Thin layer on top of [execa][] that allows executing multiple commands in series")
- [gitcommit](https://www.npmjs.com/package/gitcommit): Simple, small and stable helper & prompter for submitting conventional commits | [homepage](https://github.com/tunnckoCore/gitcommit#readme "Simple, small and stable helper & prompter for submitting conventional commits")
- [hela-config-tunnckocore](https://www.npmjs.com/package/hela-config-tunnckocore): A [hela][] task runner shareable config (preset of tasks) for @tunnckoCore org | [homepage](https://github.com/tunnckoCore/hela-config-tunnckocore#readme "A [hela][] task runner shareable config (preset of tasks) for @tunnckoCore org")
- [new-release](https://www.npmjs.com/package/new-release): A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing more… [more](https://github.com/tunnckoCore/new-release#readme) | [homepage](https://github.com/tunnckoCore/new-release#readme "A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing more. For creating GitHub releases use the Semantic Release GitHub App")
- [parse-commit-message](https://www.npmjs.com/package/parse-commit-message): An extensible parser for commit message that follows Conventional Commits v1 spec | [homepage](https://github.com/tunnckoCore/parse-commit-message#readme "An extensible parser for commit message that follows Conventional Commits v1 spec")

**[back to top](#thetop)**

## Contributing
Please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) documents for advices.  
For bugs reports and feature requests, [please create an issue][open-issue-url] or join us at our [Flock chat][chat-url] rooms.
  
## Contributors
Thanks to the hard work of [these wonderful people](./CONTRIBUTORS.md) this project is alive and it also follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.  
[Pull requests](./CONTRIBUTING.md#opening-a-pull-request), stars and all kind of [contributions](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) are always welcome.

## Users
You can see who uses `hela` in the [USERS.md](./USERS.md) file. Please feel free adding this file if it not exists.  
If you or your organization are using this project, consider adding yourself to the list of users. **Thank You!**

## License
Copyright (c) 2017-present, [Charlike Mike Reagent][author-link] `<olsten.larck@gmail.com>`.  
Released under the [Apache-2.0 License][license-url].

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on November 15, 2017._  
_Project scaffolded and managed with [hela][]._

[cosmiconfig]: https://github.com/davidtheclark/cosmiconfig
[execa-pro]: https://github.com/tunnckoCore/execa-pro
[execa]: https://github.com/sindresorhus/execa
[hela-config-tunnckocore]: https://github.com/tunnckoCore/hela-config-tunnckocore
[hela-preset-tunnckocore]: https://github.com/tunnckoCore/hela-preset-tunnckocore
[hela]: https://github.com/tunnckoCore/hela
[rollup]: https://github.com/rollup/rollup
[semantic-release]: https://github.com/semantic-release/semantic-release

<!-- Heading badges -->
[npmv-url]: https://www.npmjs.com/package/hela
[npmv-img]: https://img.shields.io/npm/v/hela.svg?label=npm%20version

[github-release-url]: https://github.com/tunnckoCore/hela/releases/latest
[github-release-img]: https://img.shields.io/github/release/tunnckoCore/hela.svg?label=github%20release

[license-url]: https://github.com/tunnckoCore/hela/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/hela.svg
<!-- [license-img]: https://img.shields.io/badge/license-tunnckoCore_1%2E0-blue.svg -->

[downloads-monthly-img]: https://img.shields.io/npm/dm/hela.svg

<!-- Front line badges -->
[bithound-score-url]: https://www.bithound.io/github/tunnckoCore/hela
[bithound-score-img]: https://www.bithound.io/github/tunnckoCore/hela/badges/score.svg

[bithound-code-url]: https://www.bithound.io/github/tunnckoCore/hela
[bithound-code-img]: https://www.bithound.io/github/tunnckoCore/hela/badges/code.svg

[standard-url]: https://github.com/airbnb/javascript
[standard-img]: https://img.shields.io/badge/code_style-airbnb-brightgreen.svg

[circleci-url]: https://circleci.com/gh/tunnckoCore/hela/tree/master
[circleci-img]: https://img.shields.io/circleci/project/github/tunnckoCore/hela/master.svg

[codecov-url]: https://codecov.io/gh/tunnckoCore/hela
[codecov-img]: https://img.shields.io/codecov/c/github/tunnckoCore/hela/master.svg

[bithound-deps-url]: https://www.bithound.io/github/tunnckoCore/hela/dependencies/npm
[bithound-deps-img]: https://www.bithound.io/github/tunnckoCore/hela/badges/dependencies.svg

[dependencies-url]: https://david-dm.org/tunnckoCore/hela
[dependencies-img]: https://img.shields.io/david/tunnckoCore/hela.svg

<!-- Second front of badges -->
[chat-url]: https://tunnckocore.flock.com/?i=cx2xoeofjtj6eo6c
[chat-img]: https://img.shields.io/badge/chat-on_flock-brightgreen.svg

[prettier-url]: https://github.com/prettier/prettier
[prettier-img]: https://img.shields.io/badge/styled_with-prettier-f952a5.svg

[nodesecurity-url]: https://nodesecurity.io/orgs/tunnckocore/projects/98435a9b-965d-465e-bb57-1209d467e6f1/master
[nodesecurity-img]: https://nodesecurity.io/orgs/tunnckocore/projects/98435a9b-965d-465e-bb57-1209d467e6f1/badge
<!-- the original color of nsp: 
[nodesec-img]: https://img.shields.io/badge/nsp-no_known_vulns-35a9e0.svg -->

[ccommits-url]: https://conventionalcommits.org/
[ccommits-img]: https://img.shields.io/badge/conventional_commits-1.0.0-yellow.svg

[prs-welcome-img]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs-welcome-url]: http://makeapullrequest.com

[nodeversion-url]: https://nodejs.org/en/download
[nodeversion-img]: https://img.shields.io/node/v/hela.svg

[renovate-url]: https://renovateapp.com
[renovate-img]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg

<!-- Third badges line (After CodeSponsor ads) -->
[all-contributors-img]: https://img.shields.io/github/contributors/tunnckoCore/hela.svg?label=all%20contributors&colorB=ffa500

[tinyletter-url]: https://tinyletter.com/tunnckoCore
[tinyletter-img]: https://img.shields.io/badge/join-newsletter-9caaf8.svg

[paypal-donate-url]: https://paypal.me/tunnckoCore/10
[paypal-donate-img]: https://img.shields.io/badge/$-support-f47721.svg

[downloads-weekly-img]: https://img.shields.io/npm/dw/hela.svg
[downloads-total-img]: https://img.shields.io/npm/dt/hela.svg

<!-- Miscellaneous -->
[share-love-url]: https://twitter.com/intent/tweet?text=https://github.com/tunnckoCore/hela&via=tunnckoCore
[share-love-img]: https://img.shields.io/badge/share-love-1da1f2.svg
[open-issue-url]: https://github.com/tunnckoCore/hela/issues/new

[highlighted-link]: https://ghub.now.sh/hela-config-tunnckocore
[author-link]: https://i.am.charlike.online

