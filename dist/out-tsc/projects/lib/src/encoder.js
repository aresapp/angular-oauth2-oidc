/**
 * This custom encoder allows charactes like +, % and / to be used in passwords
 */
export class WebHttpUrlEncodingCodec {
    encodeKey(k) {
        return encodeURIComponent(k);
    }
    encodeValue(v) {
        return encodeURIComponent(v);
    }
    decodeKey(k) {
        return decodeURIComponent(k);
    }
    decodeValue(v) {
        return decodeURIComponent(v);
    }
}
//# sourceMappingURL=encoder.js.map