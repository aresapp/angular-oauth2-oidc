import { throwError } from 'rxjs';
export class OAuthResourceServerErrorHandler {
}
export class OAuthNoopResourceServerErrorHandler {
    handleError(err) {
        return throwError(err);
    }
}
//# sourceMappingURL=resource-server-error-handler.js.map