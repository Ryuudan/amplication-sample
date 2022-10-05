import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommodityService } from "./commodity.service";
import { CommodityControllerBase } from "./base/commodity.controller.base";

@swagger.ApiTags("commodities")
@common.Controller("commodities")
export class CommodityController extends CommodityControllerBase {
  constructor(
    protected readonly service: CommodityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
