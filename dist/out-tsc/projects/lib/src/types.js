var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
/**
 * Additional options that can be passed to tryLogin.
 */
export class LoginOptions {
    constructor() {
        /**
         * Set this to true to disable the nonce
         * check which is used to avoid
         * replay attacks.
         * This flag should never be true in
         * production environments.
         */
        this.disableNonceCheck = false;
        /**
         * Normally, you want to clear your hash fragment after
         * the lib read the token(s) so that they are not displayed
         * anymore in the url. If not, set this to true. For code flow
         * this controls removing query string values.
         */
        this.preventClearHashAfterLogin = false;
    }
}
/**
 * Defines the logging interface the OAuthService uses
 * internally. Is compatible with the `console` object,
 * but you can provide your own implementation as well
 * through dependency injection.
 */
export class OAuthLogger {
}
/**
 * Defines a simple storage that can be used for
 * storing the tokens at client side.
 * Is compatible to localStorage and sessionStorage,
 * but you can also create your own implementations.
 */
export class OAuthStorage {
}
let MemoryStorage = class MemoryStorage {
    constructor() {
        this.data = new Map();
    }
    getItem(key) {
        return this.data.get(key);
    }
    removeItem(key) {
        this.data.delete(key);
    }
    setItem(key, data) {
        this.data.set(key, data);
    }
};
MemoryStorage = __decorate([
    Injectable()
], MemoryStorage);
export { MemoryStorage };
/**
 * Represents the received tokens, the received state
 * and the parsed claims from the id-token.
 */
export class ReceivedTokens {
}
//# sourceMappingURL=types.js.map