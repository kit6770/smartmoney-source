import { EventEmitter } from 'events'

const emitter = new EventEmitter();
export const useEventEmitter = () => {
    return emitter;
}