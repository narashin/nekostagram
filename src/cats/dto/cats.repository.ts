import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from '../cats.entity';
import { CatRequestDto } from './cats.request.dto';

@Injectable()
export class CatsRepository {
  constructor(
    @InjectRepository(Cat) private readonly catModel: Repository<Cat>,
  ) {}

  async exsistsByEmail(email: string): Promise<Cat | null> {
    try {
      const result = await this.catModel.findOne({
        where: { email: email },
      });
      return result;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.save(cat);
  }

  async findCatByEmail(email: string): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ where: { email: email } });
    return cat;
  }

  async findCatByIdWithoutPasssword(catId: string) {
    const cat = await this.catModel.find({ where: { id: catId } });
    return cat;
  }
}
