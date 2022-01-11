import  { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm'
import { TribeEntity } from './Tribe.entities'
import { WarEntity } from './war.entities';
@Entity ("Justic")
export class JusticEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @ManyToOne(
        ()=>TribeEntity,
        (tribe) =>tribe.justics,
        {
            onDelete:"SET NULL"
        }
    )
    @JoinColumn({
        name:'tribeId'
    })
    relatedTribe_2 : TribeEntity;
    @ManyToOne(
        ()=>WarEntity,
        war => war.justic_wars
    )

    @JoinColumn({
        name:"warID",
        referencedColumnName:"id"
       })ralatedWar : WarEntity;
} 