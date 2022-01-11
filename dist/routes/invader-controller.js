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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvaderController = void 0;
const express_1 = __importDefault(require("express"));
const Invader_entities_1 = require("../entities/Invader.entities");
const invader_service_1 = require("../services/invader-service");
const router = express_1.default.Router();
exports.InvaderController = router;
const invaderService = new invader_service_1.InvaderService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    let invader = new Invader_entities_1.Invader();
    invader.name = name;
    invader = yield invaderService.insert(invader);
    return res.json(invader);
}));
