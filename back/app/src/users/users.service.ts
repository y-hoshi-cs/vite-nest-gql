import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { IUserFindCondition } from './inputs/condition-user.input';

interface IUserUpdate {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
}

// https://zenn.dev/tossy_yukky/articles/0075f9f0054b39d4ef59
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async users(params: IUserFindCondition): Promise<User[]> {
    const { skip, take, where, orderBy } = params;
    return await this.prisma.user.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async user(input: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id: input.id }
    })
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async updateUser(params: IUserUpdate): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      where,
      data
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}