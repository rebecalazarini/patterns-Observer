const observers = [];

function addObserver(fn) {
  observers.push(fn);
}

function notifyObservers(data) {
  observers.forEach(fn => fn(data));
}

module.exports = {
  addObserver,
  notifyObservers,
};
