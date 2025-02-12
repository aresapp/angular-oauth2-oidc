import { Injectable } from '@angular/core';
// const sha256 = factory();
import fsha256 from './fast-sha256js';
import * as i0 from "@angular/core";
/**
 * Abstraction for crypto algorithms
 */
export class HashHandler {
}
function decodeUTF8(s) {
    if (typeof s !== 'string')
        throw new TypeError('expected string');
    const d = s, b = new Uint8Array(d.length);
    for (let i = 0; i < d.length; i++)
        b[i] = d.charCodeAt(i);
    return b;
}
function encodeUTF8(arr) {
    const s = [];
    for (let i = 0; i < arr.length; i++)
        s.push(String.fromCharCode(arr[i]));
    return s.join('');
}
export class DefaultHashHandler {
    async calcHash(valueToHash, algorithm) {
        // const encoder = new TextEncoder();
        // const hashArray = await window.crypto.subtle.digest(algorithm, data);
        // const data = encoder.encode(valueToHash);
        // const fhash = fsha256(valueToHash);
        const candHash = encodeUTF8(fsha256(decodeUTF8(valueToHash)));
        // const hashArray = (sha256 as any).array(valueToHash);
        // // const hashString = this.toHashString(hashArray);
        // const hashString = this.toHashString2(hashArray);
        // console.debug('hash orig - cand', candHash, hashString);
        // alert(1);
        return candHash;
    }
    toHashString2(byteArray) {
        let result = '';
        for (const e of byteArray) {
            result += String.fromCharCode(e);
        }
        return result;
    }
    toHashString(buffer) {
        const byteArray = new Uint8Array(buffer);
        let result = '';
        for (const e of byteArray) {
            result += String.fromCharCode(e);
        }
        return result;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DefaultHashHandler, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DefaultHashHandler }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: DefaultHashHandler, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy90b2tlbi12YWxpZGF0aW9uL2hhc2gtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLDRCQUE0QjtBQUU1QixPQUFPLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQzs7QUFFdEM7O0dBRUc7QUFDSCxNQUFNLE9BQWdCLFdBQVc7Q0FFaEM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxDQUFDO0lBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFHO0lBQ3JCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBR0QsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLFdBQW1CLEVBQUUsU0FBaUI7UUFDbkQscUNBQXFDO1FBQ3JDLHdFQUF3RTtRQUN4RSw0Q0FBNEM7UUFFNUMsc0NBQXNDO1FBRXRDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RCx3REFBd0Q7UUFDeEQsc0RBQXNEO1FBQ3RELG9EQUFvRDtRQUVwRCwyREFBMkQ7UUFDM0QsWUFBWTtRQUVaLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBbUI7UUFDL0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFtQjtRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDekIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzhHQW5DVSxrQkFBa0I7a0hBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZmFjdG9yeSB9IGZyb20gJy4vanMtc2hhMjU2Jztcbi8vIGNvbnN0IHNoYTI1NiA9IGZhY3RvcnkoKTtcblxuaW1wb3J0IGZzaGEyNTYgZnJvbSAnLi9mYXN0LXNoYTI1NmpzJztcblxuLyoqXG4gKiBBYnN0cmFjdGlvbiBmb3IgY3J5cHRvIGFsZ29yaXRobXNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhhc2hIYW5kbGVyIHtcbiAgYWJzdHJhY3QgY2FsY0hhc2godmFsdWVUb0hhc2g6IHN0cmluZywgYWxnb3JpdGhtOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG59XG5cbmZ1bmN0aW9uIGRlY29kZVVURjgocykge1xuICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBzdHJpbmcnKTtcbiAgY29uc3QgZCA9IHMsXG4gICAgYiA9IG5ldyBVaW50OEFycmF5KGQubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSBiW2ldID0gZC5jaGFyQ29kZUF0KGkpO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gZW5jb2RlVVRGOChhcnIpIHtcbiAgY29uc3QgcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYXJyW2ldKSk7XG4gIHJldHVybiBzLmpvaW4oJycpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdEhhc2hIYW5kbGVyIGltcGxlbWVudHMgSGFzaEhhbmRsZXIge1xuICBhc3luYyBjYWxjSGFzaCh2YWx1ZVRvSGFzaDogc3RyaW5nLCBhbGdvcml0aG06IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgLy8gY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgIC8vIGNvbnN0IGhhc2hBcnJheSA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmRpZ2VzdChhbGdvcml0aG0sIGRhdGEpO1xuICAgIC8vIGNvbnN0IGRhdGEgPSBlbmNvZGVyLmVuY29kZSh2YWx1ZVRvSGFzaCk7XG5cbiAgICAvLyBjb25zdCBmaGFzaCA9IGZzaGEyNTYodmFsdWVUb0hhc2gpO1xuXG4gICAgY29uc3QgY2FuZEhhc2ggPSBlbmNvZGVVVEY4KGZzaGEyNTYoZGVjb2RlVVRGOCh2YWx1ZVRvSGFzaCkpKTtcblxuICAgIC8vIGNvbnN0IGhhc2hBcnJheSA9IChzaGEyNTYgYXMgYW55KS5hcnJheSh2YWx1ZVRvSGFzaCk7XG4gICAgLy8gLy8gY29uc3QgaGFzaFN0cmluZyA9IHRoaXMudG9IYXNoU3RyaW5nKGhhc2hBcnJheSk7XG4gICAgLy8gY29uc3QgaGFzaFN0cmluZyA9IHRoaXMudG9IYXNoU3RyaW5nMihoYXNoQXJyYXkpO1xuXG4gICAgLy8gY29uc29sZS5kZWJ1ZygnaGFzaCBvcmlnIC0gY2FuZCcsIGNhbmRIYXNoLCBoYXNoU3RyaW5nKTtcbiAgICAvLyBhbGVydCgxKTtcblxuICAgIHJldHVybiBjYW5kSGFzaDtcbiAgfVxuXG4gIHRvSGFzaFN0cmluZzIoYnl0ZUFycmF5OiBudW1iZXJbXSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBmb3IgKGNvbnN0IGUgb2YgYnl0ZUFycmF5KSB7XG4gICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvSGFzaFN0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKSB7XG4gICAgY29uc3QgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChjb25zdCBlIG9mIGJ5dGVBcnJheSkge1xuICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBoZXhTdHJpbmcoYnVmZmVyKSB7XG4gIC8vICAgICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAvLyAgICAgY29uc3QgaGV4Q29kZXMgPSBbLi4uYnl0ZUFycmF5XS5tYXAodmFsdWUgPT4ge1xuICAvLyAgICAgICBjb25zdCBoZXhDb2RlID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICAvLyAgICAgICBjb25zdCBwYWRkZWRIZXhDb2RlID0gaGV4Q29kZS5wYWRTdGFydCgyLCAnMCcpO1xuICAvLyAgICAgICByZXR1cm4gcGFkZGVkSGV4Q29kZTtcbiAgLy8gICAgIH0pO1xuXG4gIC8vICAgICByZXR1cm4gaGV4Q29kZXMuam9pbignJyk7XG4gIC8vICAgfVxuXG4gIC8vIHRvSGFzaFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge1xuICAvLyAgIGxldCByZXN1bHQgPSAnJztcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGhleFN0cmluZy5sZW5ndGg7IGkgKz0gMikge1xuICAvLyAgICAgbGV0IGhleERpZ2l0ID0gaGV4U3RyaW5nLmNoYXJBdChpKSArIGhleFN0cmluZy5jaGFyQXQoaSArIDEpO1xuICAvLyAgICAgbGV0IG51bSA9IHBhcnNlSW50KGhleERpZ2l0LCAxNik7XG4gIC8vICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShudW0pO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gcmVzdWx0O1xuICAvLyB9XG59XG4iXX0=
//# sourceMappingURL=hash-handler.mjs.map