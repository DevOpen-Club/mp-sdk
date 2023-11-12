# 快速开始

使用 `npm` 或 `yarn` 或 `pnpm` 安装：

::: warning 注意

安装时**务必**带上 `-E` 选项以锁定版本号！

原版 SDK 即使是修订版本号之间，差异也非常之大。而本包版本号与原版 SDK 同步。

:::

::: code-group

```bash [npm]
npm install fanbook-mp-sdk -E
```

```bash [yarn]
yarn add fanbook-mp-sdk -E
```

```bash [pnpm]
pnpm add fanbook-mp-sdk -E
```

:::

推荐使用
<img style='display:inline;height:24px;margin-right:-4px;margin-bottom:-6px;' src='/icon/typescript.svg' aria-hidden />
&thinsp;[TypeScript](https://www.typescriptlang.org/)
获得更好的开发体验，文档中所有示例都将用 TS 撰写。

当然，如果您不想使用 TypeScript，本库也支持纯 JavaScript 调用。示例可以通过
<a href='https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Ctypescript&prettier=true&targets=&version=latest&externalPlugins=&assumptions=%7B%7D' target='_blank'>
<img style='display:inline;height:24px;margin-bottom:-8px;' src='/icon/babel.svg' alt='babel' />
</a>
转换为纯 JavaScript。

SDK 同时支持 Common JS 和 ES Module。

示例将使用 ES Module 撰写，转为 Common JS 只需修改导入语句：

::: code-group

```ts [ES Module]
import 'fanbook-mp-sdk';

window.fb.init();
```

```ts [Common JS]
require('fanbook-mp-sdk');

window.fb.init();
```

:::
