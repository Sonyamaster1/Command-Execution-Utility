"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirBuilder = void 0;
class DirBuilder {
    constructor() {
        this.options = new Map();
    }
    detailedOutput() {
        this.options.set('-l', '');
        return this;
    }
    output() {
        const args = [];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        return args;
    }
}
exports.DirBuilder = DirBuilder;
