# oAuth

重新进行 OAuth2.0 授权流程。

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

`params.oAuthUrl`：跳转到的授权地址。

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
