import  { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm'
import { TribeEntity } from './Tribe.entities'
import { WarEntity } from './war.entities';
@Entity ("Invader")
export class Invader extends BaseEntity{//in BaseEntity we have import function (CRAD)
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @ManyToOne(
        ()=>TribeEntity,
        (tribe) =>tribe.invaders
    )
    @JoinColumn({
        name:'tribeId'
    })
    relatedTribe : TribeEntity;
    @ManyToOne(
        ()=>WarEntity,
        war => war.invaders_wars
    )

    @JoinColumn({
        name:"warID",
        referencedColumnName:"id"
       })ralatedWar : WarEntity;
} 
