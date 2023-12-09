import { base64UrlEncode } from '../base64-helper';
/**
 * Interface for Handlers that are hooked in to
 * validate tokens.
 */
export class ValidationHandler {
}
/**
 * This abstract implementation of ValidationHandler already implements
 * the method validateAtHash. However, to make use of it,
 * you have to override the method calcHash.
 */
export class AbstractValidationHandler {
    /**
     * Validates the at_hash in an id_token against the received access_token.
     */
    async validateAtHash(params) {
        const hashAlg = this.inferHashAlgorithm(params.idTokenHeader);
        const tokenHash = await this.calcHash(params.accessToken, hashAlg); // sha256(accessToken, { asString: true });
        const leftMostHalf = tokenHash.substr(0, tokenHash.length / 2);
        const atHash = base64UrlEncode(leftMostHalf);
        const claimsAtHash = params.idTokenClaims['at_hash'].replace(/=/g, '');
        if (atHash !== claimsAtHash) {
            console.error('exptected at_hash: ' + atHash);
            console.error('actual at_hash: ' + claimsAtHash);
        }
        return atHash === claimsAtHash;
    }
    /**
     * Infers the name of the hash algorithm to use
     * from the alg field of an id_token.
     *
     * @param jwtHeader the id_token's parsed header
     */
    inferHashAlgorithm(jwtHeader) {
        const alg = jwtHeader['alg'];
        if (!alg.match(/^.S[0-9]{3}$/)) {
            throw new Error('Algorithm not supported: ' + alg);
        }
        return 'sha-' + alg.substr(2);
    }
}
//# sourceMappingURL=validation-handler.js.map