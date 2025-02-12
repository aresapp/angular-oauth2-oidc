import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NullValidationHandler } from './token-validation/null-validation-handler';
import { provideOAuthClient } from './provider';
import * as i0 from "@angular/core";
export class OAuthModule {
    static forRoot(config = null, validationHandlerClass = NullValidationHandler) {
        return {
            ngModule: OAuthModule,
            providers: [provideOAuthClient(config, validationHandlerClass)],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: OAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: OAuthModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: OAuthModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: OAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [],
                    exports: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1vYXV0aC1vaWRjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvYW5ndWxhci1vYXV0aC1vaWRjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDOztBQU9oRCxNQUFNLE9BQU8sV0FBVztJQUN0QixNQUFNLENBQUMsT0FBTyxDQUNaLFNBQTRCLElBQUksRUFDaEMsc0JBQXNCLEdBQUcscUJBQXFCO1FBRTlDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUNoRSxDQUFDO0lBQ0osQ0FBQzs4R0FUVSxXQUFXOytHQUFYLFdBQVcsWUFKWixZQUFZOytHQUlYLFdBQVcsWUFKWixZQUFZOzsyRkFJWCxXQUFXO2tCQUx2QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE9BdXRoTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9vYXV0aC1tb2R1bGUuY29uZmlnJztcbmltcG9ydCB7IE51bGxWYWxpZGF0aW9uSGFuZGxlciB9IGZyb20gJy4vdG9rZW4tdmFsaWRhdGlvbi9udWxsLXZhbGlkYXRpb24taGFuZGxlcic7XG5pbXBvcnQgeyBwcm92aWRlT0F1dGhDbGllbnQgfSBmcm9tICcuL3Byb3ZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBPQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGNvbmZpZzogT0F1dGhNb2R1bGVDb25maWcgPSBudWxsLFxuICAgIHZhbGlkYXRpb25IYW5kbGVyQ2xhc3MgPSBOdWxsVmFsaWRhdGlvbkhhbmRsZXJcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPQXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT0F1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlT0F1dGhDbGllbnQoY29uZmlnLCB2YWxpZGF0aW9uSGFuZGxlckNsYXNzKV0sXG4gICAgfTtcbiAgfVxufVxuIl19