import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { AuthType } from "@prisma/client";

registerEnumType(AuthType, { name: 'AuthType' });

@InputType()
export class UpdateUserInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(_type => AuthType)
  authType: AuthType;
}