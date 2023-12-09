export class CustomPreloadingStrategy {
    preload(route, fn) {
        //return Observable.of(true).delay(7000).flatMap(_ => fn());
        if (true) {
            return fn();
        }
    }
}
//# sourceMappingURL=custom-preloading.strategy.js.map