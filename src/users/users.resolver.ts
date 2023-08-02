import {
  Resolver, Query, Mutation, Args, ID, Int, Context,
} from '@nestjs/graphql';

import { HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './model/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserPasswordInput } from './dto/create-password.input';
import { UpdateUserPasswordInput } from './dto/update-password.input';
import { CountUsersInput } from './dto/count-users.input';
import { InviteUserInput } from './dto/invite-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  // REMOVED
}
