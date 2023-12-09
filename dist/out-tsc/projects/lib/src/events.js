export class OAuthEvent {
    constructor(type) {
        this.type = type;
    }
}
export class OAuthSuccessEvent extends OAuthEvent {
    constructor(type, info = null) {
        super(type);
        this.info = info;
    }
}
export class OAuthInfoEvent extends OAuthEvent {
    constructor(type, info = null) {
        super(type);
        this.info = info;
    }
}
export class OAuthErrorEvent extends OAuthEvent {
    constructor(type, reason, params = null) {
        super(type);
        this.reason = reason;
        this.params = params;
    }
}
//# sourceMappingURL=events.js.map