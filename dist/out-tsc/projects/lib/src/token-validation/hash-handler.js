var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
// const sha256 = factory();
import fsha256 from './fast-sha256js';
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
let DefaultHashHandler = class DefaultHashHandler {
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
};
DefaultHashHandler = __decorate([
    Injectable()
], DefaultHashHandler);
export { DefaultHashHandler };
//# sourceMappingURL=hash-handler.js.map