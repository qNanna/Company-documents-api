import {
  Args, Mutation, Resolver, Query, ID, Context,
} from '@nestjs/graphql';

import { CreateRequestInput } from './dto/create-request.input';
import { Request, RequestType } from './model/request.model';
import { RequestsService } from './requests.service';
import { DeleteRequestInput } from './dto/delete-request.input';
import { CorporateResolutionInput } from './dto/corporate-resolution.input';
import { ShareSecurelyInput } from './dto/share-securely.input';

@Resolver(() => Request)
export class RequestsResolver {
  constructor(private readonly requestsService: RequestsService) {}

  @Mutation(() => Request)
  async updateRequest(
  @Args('updateRequestInput') updateRequestInput: CreateRequestInput,
    @Context('req') ctx?: any,
  ) {
    const { sub } = ctx.user;
    return await this.requestsService.createRequest(updateRequestInput, sub, RequestType.Update);
  }

  // REMOVED
}
