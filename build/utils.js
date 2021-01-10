"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStrToDate = void 0;
var dataStrToDate = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dataStrToDate = dataStrToDate;
