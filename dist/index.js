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
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const invader_controller_1 = require("./routes/invader-controller");
const Tribe_controller_1 = require("./routes/Tribe-controller");
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: 'postgres',
                password: 'reza2019',
                extra: {
                    trustServerCertificate: true
                },
                database: 'test',
                synchronize: true,
                entities: ["src/entities/*.ts"] // هارو توی خروجی میزارهentity تمام 
            });
            console.log('database connected...');
        }
        catch (e) {
            console.error(e);
        }
        try {
            app.use(express_1.default.json());
            app.use('/api/invader', invader_controller_1.InvaderController);
            app.use('/api/tribe', Tribe_controller_1.TribeController);
            app.listen(3000, () => console.log('Listening on port 3000'));
        }
        catch (e) {
            console.error(e);
            console.log('connection error');
        }
    });
}
//nodemon --watch ./**/*.ts --exec npx ts-node src/index.ts
main();
