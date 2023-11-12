# platform

当前运行环境。

## 类型

`number`

实际上是枚举值，类型为 `fanbook-mp-sdk/utils.ts` 导出的的 `Platform`。

## 示例

```ts
import 'fanbook-mp-sdk';
import { Plaform } from 'fanbook-mp-sdk/utils';

if (window.fb.platform === Platform.APP) {
  console.log('在 Fanbook 中');
} else {
  console.log('不在 Fanbook 中');
}
```
