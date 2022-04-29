export class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) {
      throw new Error(`We have not event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (item) => item !== callback
    );
  }

  emit(event, ...args) {
    if (!this.listeners[event]) {
      throw new Error(`We have not event: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listeners(...args);
    });
  }
}
