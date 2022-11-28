import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedbacks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  questionId: number;

  @Column({ nullable: true })
  rating: string;

  @Column({ nullable: true })
  comment: string;
}