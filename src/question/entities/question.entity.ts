import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Feedbacks } from "../../feedback/entities/feedback.entity";

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  question: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(type => Feedbacks, feedback => feedback.questionId)
  feedback: Feedbacks[];
}
