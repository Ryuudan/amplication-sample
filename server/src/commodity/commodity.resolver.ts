import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CommodityResolverBase } from "./base/commodity.resolver.base";
import { Commodity } from "./base/Commodity";
import { CommodityService } from "./commodity.service";

@graphql.Resolver(() => Commodity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommodityResolver extends CommodityResolverBase {
  constructor(
    protected readonly service: CommodityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
