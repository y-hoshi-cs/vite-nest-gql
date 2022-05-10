import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
  ],
  providers: [PrismaService, UsersResolver],
})
export class AppModule { }
