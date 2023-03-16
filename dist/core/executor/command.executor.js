"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandExecutor = void 0;
class CommandExecutor {
    constructor(logger) {
        this.logger = logger;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const input = yield this.prompt();
            const command = this.build(input);
            const stream = this.spawn(command);
            this.processStream(stream, this.logger);
        });
    }
}
exports.CommandExecutor = CommandExecutor;
