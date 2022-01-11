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
exports.WarEntity = void 0;
const typeorm_1 = require("typeorm");
const Invader_entities_1 = require("./Invader.entities");
const Tribe_entities_1 = require("./Tribe.entities");
let WarEntity = class WarEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WarEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Tribe_entities_1.TribeEntity),
    (0, typeorm_1.JoinTable)({
        name: "Wars_Result",
        joinColumn: {
            name: "warId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "tribeId",
            referencedColumnName: "id",
        },
    }),
    __metadata("design:type", Array)
], WarEntity.prototype, "tribes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Invader_entities_1.Invader, invader_2 => invader_2.ralatedWar),
    __metadata("design:type", Array)
], WarEntity.prototype, "invaders_wars", void 0);
WarEntity = __decorate([
    (0, typeorm_1.Entity)('War')
], WarEntity);
exports.WarEntity = WarEntity;
