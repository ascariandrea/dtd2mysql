"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fares_1 = require("../specification/fares");
class InitDB {
    constructor(container) {
        this.schema = container.get("schema");
        this.logger = container.get("logger");
    }
    run(argv) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = [];
            for (const fileType in fares_1.default) {
                for (const record of fares_1.default[fileType].getRecordTypes()) {
                    try {
                        yield this.schema.dropSchema(record);
                        results.push(this.schema.createSchema(record));
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            }
            try {
                yield Promise.all(results);
            }
            catch (err) {
                console.log(err);
            }
            this.logger("Database schema created");
        });
    }
}
exports.default = InitDB;
