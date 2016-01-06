'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions/actions');

var initialState = {
  items: ['tofu', 'broccoli', 'gnocchi']
};

function MyApp() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'LIST_ITEMS':
      var newState = [];
      return newState;

    default:
      return state;
  }
}

exports.default = MyApp;