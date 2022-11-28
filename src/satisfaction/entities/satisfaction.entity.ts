import { Satisfaction } from "../satisfaction.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Satisfactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: Satisfaction
  })
  satisfaction: Satisfaction;
}