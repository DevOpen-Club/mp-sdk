declare namespace fb {
  let version: '1.0.2';

  function init(params?: { success?: () => void }): void;
  function getPlatform(): import('./utils').Platform;
  function oAuth(params: {
    oAuthUrl: string;
  }): Promise<{
    errMsg: string;
    data?: {
      code: string;
    };
  }>;
}
