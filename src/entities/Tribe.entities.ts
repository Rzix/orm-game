import { BaseEntity, Column, Entity, InsertValuesMissingError, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Invader } from "./Invader.entities";
import { JusticEntity } from "./Justic.entities";
import { WarEntity } from "./war.entities";
@Entity("Tribe")
export class TribeEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    name:string;
    @OneToMany(
        ()=>Invader,//چه نوعی
        invader=>invader.relatedTribe//ارتباط با چه چیزی
    )  invaders:Invader[]
       
    @ManyToMany(
        ()=>WarEntity
    )

    @OneToMany(
        ()=>JusticEntity,
        justic=>justic.relatedTribe_2
    )justics: JusticEntity[]
    @JoinTable({
        name:'Wars_Result',
        joinColumn:{
            name:'tribeId',
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name:'warId',
            referencedColumnName:'id'
        }
    })wars : WarEntity[]
}