import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  detail: string;

  @Column()
  moto: string;
}