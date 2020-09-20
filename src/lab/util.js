export const identity = (x) => x;
export const uppercase = (x) => x.toUpperCase();
export const eventValue = (handler) => (event) => handler(event.target.value);
export const filterWith = (filter) => (effect) => (x) => effect(filter(x));
