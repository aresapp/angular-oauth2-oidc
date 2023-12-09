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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJBLE1BQU0sT0FBZ0IsVUFBVTtJQUM5QixZQUFxQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztJQUFHLENBQUM7Q0FDekM7QUFFRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUMvQyxZQUFZLElBQWUsRUFBVyxPQUFZLElBQUk7UUFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRHdCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFdEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQzVDLFlBQVksSUFBZSxFQUFXLE9BQVksSUFBSTtRQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFEd0IsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUV0RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQzdDLFlBQ0UsSUFBZSxFQUNOLE1BQWMsRUFDZCxTQUFpQixJQUFJO1FBRTlCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUhILFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBR2hDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9XG4gIHwgJ2Rpc2NvdmVyeV9kb2N1bWVudF9sb2FkZWQnXG4gIHwgJ2p3a3NfbG9hZF9lcnJvcidcbiAgfCAnaW52YWxpZF9ub25jZV9pbl9zdGF0ZSdcbiAgfCAnZGlzY292ZXJ5X2RvY3VtZW50X2xvYWRfZXJyb3InXG4gIHwgJ2Rpc2NvdmVyeV9kb2N1bWVudF92YWxpZGF0aW9uX2Vycm9yJ1xuICB8ICd1c2VyX3Byb2ZpbGVfbG9hZGVkJ1xuICB8ICd1c2VyX3Byb2ZpbGVfbG9hZF9lcnJvcidcbiAgfCAndG9rZW5fcmVjZWl2ZWQnXG4gIHwgJ3Rva2VuX2Vycm9yJ1xuICB8ICdjb2RlX2Vycm9yJ1xuICB8ICd0b2tlbl9yZWZyZXNoZWQnXG4gIHwgJ3Rva2VuX3JlZnJlc2hfZXJyb3InXG4gIHwgJ3NpbGVudF9yZWZyZXNoX2Vycm9yJ1xuICB8ICdzaWxlbnRseV9yZWZyZXNoZWQnXG4gIHwgJ3NpbGVudF9yZWZyZXNoX3RpbWVvdXQnXG4gIHwgJ3Rva2VuX3ZhbGlkYXRpb25fZXJyb3InXG4gIHwgJ3Rva2VuX2V4cGlyZXMnXG4gIHwgJ3Nlc3Npb25fY2hhbmdlZCdcbiAgfCAnc2Vzc2lvbl9lcnJvcidcbiAgfCAnc2Vzc2lvbl90ZXJtaW5hdGVkJ1xuICB8ICdzZXNzaW9uX3VuY2hhbmdlZCdcbiAgfCAnbG9nb3V0J1xuICB8ICdwb3B1cF9jbG9zZWQnXG4gIHwgJ3BvcHVwX2Jsb2NrZWQnXG4gIHwgJ3Rva2VuX3Jldm9rZV9lcnJvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPQXV0aEV2ZW50IHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgdHlwZTogRXZlbnRUeXBlKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgT0F1dGhTdWNjZXNzRXZlbnQgZXh0ZW5kcyBPQXV0aEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZTogRXZlbnRUeXBlLCByZWFkb25seSBpbmZvOiBhbnkgPSBudWxsKSB7XG4gICAgc3VwZXIodHlwZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9BdXRoSW5mb0V2ZW50IGV4dGVuZHMgT0F1dGhFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IEV2ZW50VHlwZSwgcmVhZG9ubHkgaW5mbzogYW55ID0gbnVsbCkge1xuICAgIHN1cGVyKHR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPQXV0aEVycm9yRXZlbnQgZXh0ZW5kcyBPQXV0aEV2ZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdHlwZTogRXZlbnRUeXBlLFxuICAgIHJlYWRvbmx5IHJlYXNvbjogb2JqZWN0LFxuICAgIHJlYWRvbmx5IHBhcmFtczogb2JqZWN0ID0gbnVsbFxuICApIHtcbiAgICBzdXBlcih0eXBlKTtcbiAgfVxufVxuIl19
//# sourceMappingURL=events.mjs.map