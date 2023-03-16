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
exports.FileService = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class FileService {
    isExist(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.stat(path);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
    getFilePath(path, name, ext) {
        if (!(0, path_1.isAbsolute)(path)) {
            path = (0, path_1.join)(__dirname + '/' + path);
        }
        return (0, path_1.join)((0, path_1.dirname)(path) + '/' + name + '.' + ext);
    }
    deleteFileIfExists(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.isExist(path)) {
                fs_1.promises.unlink(path);
            }
        });
    }
}
exports.FileService = FileService;
