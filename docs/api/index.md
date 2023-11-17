# API 文档

SDK 所有方法都挂载在 `window.fb` 下。

使用 SDK 之前需要初始化：

```ts
import 'fanbook-mp-sdk';

window.fb.init({
  success() {
    // 初始化成功
  },
});
```

API 列表：

- [`window.fb.version`](./version.md)
- [`window.fb.init`](./init.md)
- [`window.fb.getPlatform`](./getPlatform.md)
- [`window.fb.oAuth`](./oAuth.md)
