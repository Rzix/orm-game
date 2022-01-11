import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Invader } from "./Invader.entities";
import { JusticEntity } from "./Justic.entities";
import { TribeEntity } from "./Tribe.entities";
@Entity('War')
export class WarEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;  
    @Column()
    location : string;
    @ManyToMany(
        ()=>TribeEntity
    )

    @JoinTable({
        name: "Wars_Result",
        joinColumn: {
          name: "warId",
          referencedColumnName: "id",
        },
        inverseJoinColumn: {
          name: "tribeId",
          referencedColumnName: "id",
        },
      })
    tribes:TribeEntity[]


    //one to many benevis
    @OneToMany(
      ()=>Invader,
      invader_2 =>invader_2.ralatedWar
    )invaders_wars: Invader[]
     justic_wars: JusticEntity[]
    
}