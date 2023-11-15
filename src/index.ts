declare namespace fb {
  let version: '1.0.1';
  let platform: import('./utils').Platform;

  function init(params?: { success?: () => void }): void;
  function oAuth(params: {
    oAuthUrl: string;
  }): Promise<{
    errMsg: string;
    data?: {
      code: string;
    };
  }>;
}