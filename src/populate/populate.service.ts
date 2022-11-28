import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user/dto/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PopulateService {
  constructor(
    @InjectRepository(Users) private repository: Repository<Users>
  ) {}

  async populateMockData() {
      return await this.repository.query(`
      INSERT INTO companies(name, detail, moto) 
      VALUES
        ('Demo inc.', 'Demo inc. corporation.', 'Your Team Happiness Manager');

      INSERT INTO users(name, email, "isActive") 
      VALUES
        ('Ujjwal Maharjan', 'ujjwal.maharjan@fusemachines.com', 'true'),
        ('Sanit Maharjan', 'Sanit.maharjan@fusemachines.com', 'true'),
        ('Bikash Paneru', 'Bikash.Paneru@fusemachines.com', 'true'),
        ('Klemen Slatnar', 'klemen@butterfly.ai', 'true');
    
      INSERT INTO questions (question, category, "isActive") VALUES
        ('My direct manager gives me necessary support and clear objectives.', 'Management', 'true'),
        ('I feel like I have a healthy work/life balance.', 'Work/Life Balance', 'true'),
        ('I feel comfortable working and interacting with the colleagues on my team.', 'Teamwork', 'true'),
        ('I am satisfied with my roles and responsibilities.','Roles and Responsibilities', 'true'),
        ('I like my work environment, and I believe it helps me perform at my best.','Workplace', 'true');

    `);
  }
}
