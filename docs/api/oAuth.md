# oAuth

如果在 Fanbook 应用内，啥都不干。

否则，弹窗请求用户授权，获取 OAuth2.0 授权码。

## 类型

```ts
function oAuth(params: {
  oAuthUrl: string;
}): Promise<{
  errMsg: string;
  data?: {
    code: string;
  };
}>;
```

## 参数

`params.oAuthUrl`：打开的授权地址。

## 返回值

成功：

```ts
{
  errMsg: '',
  data: {
    code: 'OAuth2.0 授权码',
  },
}
```

失败：

```ts
{
  errMsg: '错误信息',
}
```

## 参考

https://oauth.net/2/grant-types/authorization-code/
