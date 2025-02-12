import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UrlHelperService {
    getHashFragmentParams(customHashFragment) {
        let hash = customHashFragment || window.location.hash;
        hash = decodeURIComponent(hash);
        if (hash.indexOf('#') !== 0) {
            return {};
        }
        const questionMarkPosition = hash.indexOf('?');
        if (questionMarkPosition > -1) {
            hash = hash.substr(questionMarkPosition + 1);
        }
        else {
            hash = hash.substr(1);
        }
        return this.parseQueryString(hash);
    }
    parseQueryString(queryString) {
        const data = {};
        let pair, separatorIndex, escapedKey, escapedValue, key, value;
        if (queryString === null) {
            return data;
        }
        const pairs = queryString.split('&');
        for (let i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            separatorIndex = pair.indexOf('=');
            if (separatorIndex === -1) {
                escapedKey = pair;
                escapedValue = null;
            }
            else {
                escapedKey = pair.substr(0, separatorIndex);
                escapedValue = pair.substr(separatorIndex + 1);
            }
            key = decodeURIComponent(escapedKey);
            value = decodeURIComponent(escapedValue);
            if (key.substr(0, 1) === '/') {
                key = key.substr(1);
            }
            data[key] = value;
        }
        return data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: UrlHelperService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: UrlHelperService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: UrlHelperService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLWhlbHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy91cmwtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUNwQixxQkFBcUIsQ0FBQyxrQkFBMkI7UUFDdEQsSUFBSSxJQUFJLEdBQUcsa0JBQWtCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFdEQsSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtRQUVELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxXQUFtQjtRQUN6QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUUvRCxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQyxJQUFJLGNBQWMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDekIsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzVDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRDtZQUVELEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFekMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzVCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs4R0F0RFUsZ0JBQWdCO2tIQUFoQixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcmxIZWxwZXJTZXJ2aWNlIHtcbiAgcHVibGljIGdldEhhc2hGcmFnbWVudFBhcmFtcyhjdXN0b21IYXNoRnJhZ21lbnQ/OiBzdHJpbmcpOiBvYmplY3Qge1xuICAgIGxldCBoYXNoID0gY3VzdG9tSGFzaEZyYWdtZW50IHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgaGFzaCA9IGRlY29kZVVSSUNvbXBvbmVudChoYXNoKTtcblxuICAgIGlmIChoYXNoLmluZGV4T2YoJyMnKSAhPT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXN0aW9uTWFya1Bvc2l0aW9uID0gaGFzaC5pbmRleE9mKCc/Jyk7XG5cbiAgICBpZiAocXVlc3Rpb25NYXJrUG9zaXRpb24gPiAtMSkge1xuICAgICAgaGFzaCA9IGhhc2guc3Vic3RyKHF1ZXN0aW9uTWFya1Bvc2l0aW9uICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXJzZVF1ZXJ5U3RyaW5nKGhhc2gpO1xuICB9XG5cbiAgcHVibGljIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmc6IHN0cmluZyk6IG9iamVjdCB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGxldCBwYWlyLCBzZXBhcmF0b3JJbmRleCwgZXNjYXBlZEtleSwgZXNjYXBlZFZhbHVlLCBrZXksIHZhbHVlO1xuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICBzZXBhcmF0b3JJbmRleCA9IHBhaXIuaW5kZXhPZignPScpO1xuXG4gICAgICBpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG4gICAgICAgIGVzY2FwZWRLZXkgPSBwYWlyO1xuICAgICAgICBlc2NhcGVkVmFsdWUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXNjYXBlZEtleSA9IHBhaXIuc3Vic3RyKDAsIHNlcGFyYXRvckluZGV4KTtcbiAgICAgICAgZXNjYXBlZFZhbHVlID0gcGFpci5zdWJzdHIoc2VwYXJhdG9ySW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZWRLZXkpO1xuICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlZFZhbHVlKTtcblxuICAgICAgaWYgKGtleS5zdWJzdHIoMCwgMSkgPT09ICcvJykge1xuICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDEpO1xuICAgICAgfVxuXG4gICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19
//# sourceMappingURL=url-helper.service.mjs.map