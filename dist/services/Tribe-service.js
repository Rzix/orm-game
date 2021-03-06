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
exports.TribeService = void 0;
const Tribe_entities_1 = require("../entities/Tribe.entities");
class TribeService {
    static insert(tribe) {
        throw new Error('Method not implemented.');
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const tribe = yield Tribe_entities_1.TribeEntity.create(data);
            tribe.save();
        });
    }
}
exports.TribeService = TribeService;
