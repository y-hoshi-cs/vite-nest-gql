import { Query, Args, Resolver, Mutation } from "@nestjs/graphql";
import { ConditionUserInput, UserFindBy } from "./inputs/condition-user.input";
import { CreateUserInput } from "./inputs/create-user.input";
import { UpdateUserInput } from "./inputs/update-user.input";
import { User } from "./user.model";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) { }

  @Query(() => [User])
  async users(@Args('input') input: ConditionUserInput) {
    const { skip, take, searchString, findBy, orderBy } = input;
    const orWhere = findBy ? findBy.map((column) => {
      return { [UserFindBy[column]]: { contains: searchString } };
    }) : [];
    return this.usersService.users(
      {
        skip,
        take,
        where: {
          OR: orWhere,
        },
      }
    );
  }

  @Query(_return => User)
  async user(
    @Args('id') id: string,
  ) {
    return this.usersService.user({ id });
  }

  @Mutation(_return => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.createUser(input);
  }

  @Mutation(_return => User)
  async updateUser(@Args('input') input: UpdateUserInput) {
    return this.usersService.updateUser({
      where: { id: input.id },
      data: input,
    })
  }

  @Mutation(_return => User)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser({ id });
  }
}