'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItems = listItems;
var LIST_ITEMS = exports.LIST_ITEMS = 'LIST_ITEMS';

function listItems(array) {
  return { type: LIST_ITEMS, items: array };
}