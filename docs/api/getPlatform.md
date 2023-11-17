# getPlatform

当前运行环境。

## 类型

```ts
function getPlatform(): number;
```

返回值实际上是枚举值，类型为 `fanbook-mp-sdk/es/utils.ts` 导出的的 `Platform`。

## 示例

```ts
import 'fanbook-mp-sdk';
import { Platform } from 'fanbook-mp-sdk/es/utils';

window.fb.init();

if (window.fb.getPlatform() === Platform.APP) {
  console.log('在 Fanbook 中');
} else {
  console.log('不在 Fanbook 中');
}
```
