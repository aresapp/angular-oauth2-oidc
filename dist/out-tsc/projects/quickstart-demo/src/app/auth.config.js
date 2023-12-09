export const authCodeFlowConfig = {
    issuer: 'https://idsvr4.azurewebsites.net',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'spa',
    responseType: 'code',
    scope: 'openid profile email offline_access api',
    showDebugInformation: true,
    timeoutFactor: 0.01,
    checkOrigin: false,
};
//# sourceMappingURL=auth.config.js.map