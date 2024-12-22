import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  async create(createUserDto: CreateUserDto): Promise<{ message: string; user_Id: number; }> {
    const user = new User();
    user.fullName = createUserDto.fullName;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    const new_user = await this.usersRepository.save(user);

    return { message: "User Created Successfully", user_Id: new_user.id };
  }
  async getUserName(id: number): Promise<string> {
    return (await this.usersRepository.findOne({ where: { id: id } })).fullName;
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<{ fullName: string, email: string, id: number }> {
    const user = await this.usersRepository.findOne({ where: { email: loginUserDto.email, password: loginUserDto.password } });
    const user_data = {
      fullName: user.fullName,
      email: user.email,
      id: user.id
    }

    return user_data;
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}