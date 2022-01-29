import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { AuthType } from '@prisma/client';

registerEnumType(AuthType, { name: 'AuthType' });

@ObjectType('User')
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => AuthType)
  authType: AuthType;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
