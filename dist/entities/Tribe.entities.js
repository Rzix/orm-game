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
exports.TribeEntity = void 0;
const typeorm_1 = require("typeorm");
const Invader_entities_1 = require("./Invader.entities");
const war_entities_1 = require("./war.entities");
let TribeEntity = class TribeEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TribeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TribeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Invader_entities_1.Invader, //چه نوعی
    //چه نوعی
    invader => invader.relatedTribe //ارتباط با چه چیزی
    ),
    __metadata("design:type", Array)
], TribeEntity.prototype, "invaders", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => war_entities_1.WarEntity),
    (0, typeorm_1.JoinTable)({
        name: 'War_Result',
        joinColumn: {
            name: 'tribeId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'warId',
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], TribeEntity.prototype, "wars", void 0);
TribeEntity = __decorate([
    (0, typeorm_1.Entity)("Tribe")
], TribeEntity);
exports.TribeEntity = TribeEntity;
