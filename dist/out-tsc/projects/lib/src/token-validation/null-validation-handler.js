/**
 * A validation handler that isn't validating nothing.
 * Can be used to skip validation (at your own risk).
 */
export class NullValidationHandler {
    validateSignature(validationParams) {
        return Promise.resolve(null);
    }
    validateAtHash(validationParams) {
        return Promise.resolve(true);
    }
}
//# sourceMappingURL=null-validation-handler.js.map