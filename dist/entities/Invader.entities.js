"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invader = void 0;
const typeorm_1 = require("typeorm");
const Tribe_entities_1 = require("./Tribe.entities");
const war_entities_1 = require("./war.entities");
let Invader = class Invader extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Invader.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Invader.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tribe_entities_1.TribeEntity, (tribe) => tribe.invaders),
    (0, typeorm_1.JoinColumn)({
        name: 'TribeID'
    }),
    __metadata("design:type", Tribe_entities_1.TribeEntity)
], Invader.prototype, "relatedTribe", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({
        name: "warID",
        referencedColumnName: "id"
    }),
    __metadata("design:type", war_entities_1.WarEntity)
], Invader.prototype, "ralatedWar", void 0);
Invader = __decorate([
    (0, typeorm_1.Entity)("Invader")
], Invader);
exports.Invader = Invader;
