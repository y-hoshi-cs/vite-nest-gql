import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [],
  providers: [UsersService, UsersResolver, PrismaService],
  exports: [UsersService, UsersResolver]
})
export class UsersModule { }