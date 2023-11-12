# Fanbook 小程序 SDK

![](https://socialify.git.ci/DevOpen-Club/mp-sdk/image?description=1&font=Source%20Code%20Pro&language=1&name=1&pattern=Circuit%20Board&theme=Auto)

<p align="center">
  鸣谢：
  <a href="https://www.netlify.com" title="Netlify 提供文档站点托管服务"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Netlify 提供文档站点托管服务" /></a>
</p>

# 概述

Fanbook 提供了小程序能力，并且公开了[小程序 SDK](https://open.fanbook.mobi/document/manage/doc/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%B0%8F%E7%A8%8B%E5%BA%8FJavaScript%20SDK)。但原版 SDK 是纯 JavaScript 编写的，经过压缩并且没有提供类型支持，很大地影响了开发体验。

为了避免重复劳动，我们编写了 mp sdk，提供完整的**✨类型系统**，提高开发体验。

# 安装

由于原版 SDK 仅支持浏览器环境，本包也仅支持前端使用。

> **Warning**
>
> 安装时务必带上 `-E` 选项以锁定版本号！
>
> 原版 SDK 即使是修订版本号之间，差异也非常之大。而本包版本号与原版 SDK 同步。

## npm

```bash
npm install fanbook-mp-sdk -E
```

## yarn

```bash
yarn add fanbook-mp-sdk -E
```

## pnpm

```bash
pnpm add fanbook-mp-sdk -E
```

# 如何使用

参见文档[快速上手](https://fanbook-mp-sdk.js.org/quick-starter.html)。

# 代码示例

访问 [文档](https://fanbook-mp-sdk.js.org/examples.html) 或[查看源代码](./examples)。

# 联系我们

<!-- 此处修改需要在 docs/contributing.md 中同步。 -->

如果你发现了 bug 或需要新功能，请[提一个 issue](https://github.com/DevOpen-Club/mp-sdk/new)。

如果你有新的想法，可以[发个讨论帖](https://github.com/DevOpen-Club/mp-sdk/discussions/new/choose)。
