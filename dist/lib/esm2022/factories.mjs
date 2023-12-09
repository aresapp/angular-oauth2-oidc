import { MemoryStorage } from './types';
export function createDefaultLogger() {
    return console;
}
export function createDefaultStorage() {
    return typeof sessionStorage !== 'undefined'
        ? sessionStorage
        : new MemoryStorage();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy9mYWN0b3JpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV4QyxNQUFNLFVBQVUsbUJBQW1CO0lBQ2pDLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLE9BQU8sT0FBTyxjQUFjLEtBQUssV0FBVztRQUMxQyxDQUFDLENBQUMsY0FBYztRQUNoQixDQUFDLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb3J5U3RvcmFnZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdExvZ2dlcigpIHtcbiAgcmV0dXJuIGNvbnNvbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0U3RvcmFnZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZXNzaW9uU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHNlc3Npb25TdG9yYWdlXG4gICAgOiBuZXcgTWVtb3J5U3RvcmFnZSgpO1xufVxuIl19