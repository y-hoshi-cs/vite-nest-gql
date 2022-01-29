import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

// TODO: Prisma定義から引っ張る
export enum UserOrderBy {
  id,
  name,
  email,
  createdAt,
  updatedAt,
}

// TODO: Prisma定義から引っ張る
export enum UserFindBy {
  id,
  name,
  email,
  authType,
}

export interface IUserFindCondition {
  skip?: number;
  take?: number;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}

registerEnumType(UserOrderBy, { name: 'UserOrderBy' });
registerEnumType(UserFindBy, { name: 'UserFindBy' });

@InputType()
export class ConditionUserInput {
  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  searchString?: string;

  @Field(_type => [UserFindBy], { nullable: true })
  findBy?: UserFindBy[];

  @Field(_type => UserOrderBy, { nullable: true })
  orderBy?: UserOrderBy;
}