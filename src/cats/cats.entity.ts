import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, AfterLoad } from 'typeorm';

@Entity()
export class Cat {
  @ApiProperty({
    example: '1',
    description: 'id',
    required: true,
  })
  @IsNotEmpty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'nara',
    description: 'name',
    required: true,
  })
  @Column()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'nara@mz.co.kr',
    description: 'email',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'password',
    required: true,
  })
  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;
}
