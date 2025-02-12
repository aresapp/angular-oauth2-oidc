import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DateTimeProvider {
}
export class SystemDateTimeProvider extends DateTimeProvider {
    now() {
        return Date.now();
    }
    new() {
        return new Date();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SystemDateTimeProvider, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SystemDateTimeProvider }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: SystemDateTimeProvider, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy9kYXRlLXRpbWUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsTUFBTSxPQUFnQixnQkFBZ0I7Q0FHckM7QUFHRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBQzFELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsR0FBRztRQUNELE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzhHQVBVLHNCQUFzQjtrSEFBdEIsc0JBQXNCOzsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZVRpbWVQcm92aWRlciB7XG4gIGFic3RyYWN0IG5vdygpOiBudW1iZXI7XG4gIGFic3RyYWN0IG5ldygpOiBEYXRlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3lzdGVtRGF0ZVRpbWVQcm92aWRlciBleHRlbmRzIERhdGVUaW1lUHJvdmlkZXIge1xuICBub3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIG5ldygpOiBEYXRlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgfVxufVxuIl19
//# sourceMappingURL=date-time-provider.mjs.map