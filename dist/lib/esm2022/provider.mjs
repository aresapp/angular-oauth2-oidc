import { makeEnvironmentProviders } from '@angular/core';
import { OAuthModuleConfig } from './oauth-module.config';
import { NullValidationHandler } from './token-validation/null-validation-handler';
import { DateTimeProvider, SystemDateTimeProvider } from './date-time-provider';
import { OAuthStorage, OAuthLogger } from './types';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthService } from './oauth-service';
import { UrlHelperService } from './url-helper.service';
import { OAuthResourceServerErrorHandler, OAuthNoopResourceServerErrorHandler, } from './interceptors/resource-server-error-handler';
import { DefaultOAuthInterceptor } from './interceptors/default-oauth.interceptor';
import { ValidationHandler } from './token-validation/validation-handler';
import { createDefaultLogger, createDefaultStorage } from './factories';
import { HashHandler, DefaultHashHandler, } from './token-validation/hash-handler';
export function provideOAuthClient(config = null, validationHandlerClass = NullValidationHandler) {
    return makeEnvironmentProviders([
        OAuthService,
        UrlHelperService,
        { provide: OAuthLogger, useFactory: createDefaultLogger },
        { provide: OAuthStorage, useFactory: createDefaultStorage },
        { provide: ValidationHandler, useClass: validationHandlerClass },
        { provide: HashHandler, useClass: DefaultHashHandler },
        {
            provide: OAuthResourceServerErrorHandler,
            useClass: OAuthNoopResourceServerErrorHandler,
        },
        { provide: OAuthModuleConfig, useValue: config },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultOAuthInterceptor,
            multi: true,
        },
        { provide: DateTimeProvider, useClass: SystemDateTimeProvider },
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9saWIvc3JjL3Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsbUNBQW1DLEdBQ3BDLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsa0JBQWtCLEdBQ25CLE1BQU0saUNBQWlDLENBQUM7QUFFekMsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxTQUE0QixJQUFJLEVBQ2hDLHNCQUFzQixHQUFHLHFCQUFxQjtJQUU5QyxPQUFPLHdCQUF3QixDQUFDO1FBQzlCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRTtRQUN6RCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFO1FBQzNELEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtRQUNoRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO1FBQ3REO1lBQ0UsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxRQUFRLEVBQUUsbUNBQW1DO1NBQzlDO1FBQ0QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtRQUNoRDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFO0tBQ2hFLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMsIEVudmlyb25tZW50UHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPQXV0aE1vZHVsZUNvbmZpZyB9IGZyb20gJy4vb2F1dGgtbW9kdWxlLmNvbmZpZyc7XG5pbXBvcnQgeyBOdWxsVmFsaWRhdGlvbkhhbmRsZXIgfSBmcm9tICcuL3Rva2VuLXZhbGlkYXRpb24vbnVsbC12YWxpZGF0aW9uLWhhbmRsZXInO1xuaW1wb3J0IHsgRGF0ZVRpbWVQcm92aWRlciwgU3lzdGVtRGF0ZVRpbWVQcm92aWRlciB9IGZyb20gJy4vZGF0ZS10aW1lLXByb3ZpZGVyJztcbmltcG9ydCB7IE9BdXRoU3RvcmFnZSwgT0F1dGhMb2dnZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLXNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsSGVscGVyU2VydmljZSB9IGZyb20gJy4vdXJsLWhlbHBlci5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgT0F1dGhSZXNvdXJjZVNlcnZlckVycm9ySGFuZGxlcixcbiAgT0F1dGhOb29wUmVzb3VyY2VTZXJ2ZXJFcnJvckhhbmRsZXIsXG59IGZyb20gJy4vaW50ZXJjZXB0b3JzL3Jlc291cmNlLXNlcnZlci1lcnJvci1oYW5kbGVyJztcbmltcG9ydCB7IERlZmF1bHRPQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvZGVmYXVsdC1vYXV0aC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uSGFuZGxlciB9IGZyb20gJy4vdG9rZW4tdmFsaWRhdGlvbi92YWxpZGF0aW9uLWhhbmRsZXInO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdExvZ2dlciwgY3JlYXRlRGVmYXVsdFN0b3JhZ2UgfSBmcm9tICcuL2ZhY3Rvcmllcyc7XG5pbXBvcnQge1xuICBIYXNoSGFuZGxlcixcbiAgRGVmYXVsdEhhc2hIYW5kbGVyLFxufSBmcm9tICcuL3Rva2VuLXZhbGlkYXRpb24vaGFzaC1oYW5kbGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVPQXV0aENsaWVudChcbiAgY29uZmlnOiBPQXV0aE1vZHVsZUNvbmZpZyA9IG51bGwsXG4gIHZhbGlkYXRpb25IYW5kbGVyQ2xhc3MgPSBOdWxsVmFsaWRhdGlvbkhhbmRsZXJcbik6IEVudmlyb25tZW50UHJvdmlkZXJzIHtcbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhbXG4gICAgT0F1dGhTZXJ2aWNlLFxuICAgIFVybEhlbHBlclNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBPQXV0aExvZ2dlciwgdXNlRmFjdG9yeTogY3JlYXRlRGVmYXVsdExvZ2dlciB9LFxuICAgIHsgcHJvdmlkZTogT0F1dGhTdG9yYWdlLCB1c2VGYWN0b3J5OiBjcmVhdGVEZWZhdWx0U3RvcmFnZSB9LFxuICAgIHsgcHJvdmlkZTogVmFsaWRhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiB2YWxpZGF0aW9uSGFuZGxlckNsYXNzIH0sXG4gICAgeyBwcm92aWRlOiBIYXNoSGFuZGxlciwgdXNlQ2xhc3M6IERlZmF1bHRIYXNoSGFuZGxlciB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE9BdXRoUmVzb3VyY2VTZXJ2ZXJFcnJvckhhbmRsZXIsXG4gICAgICB1c2VDbGFzczogT0F1dGhOb29wUmVzb3VyY2VTZXJ2ZXJFcnJvckhhbmRsZXIsXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IE9BdXRoTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRGVmYXVsdE9BdXRoSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogRGF0ZVRpbWVQcm92aWRlciwgdXNlQ2xhc3M6IFN5c3RlbURhdGVUaW1lUHJvdmlkZXIgfSxcbiAgXSk7XG59XG4iXX0=