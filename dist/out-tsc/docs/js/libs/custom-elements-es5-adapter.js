/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
    'use strict';
    (function () { if (void 0 === window.Reflect || void 0 === window.customElements || window.customElements.hasOwnProperty('polyfillWrapFlushCallback'))
        return; const a = HTMLElement; window.HTMLElement = function () { return Reflect.construct(a, [], this.constructor); }, HTMLElement.prototype = a.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, a); })();
}());
//# sourceMappingURL=custom-elements-es5-adapter.js.map