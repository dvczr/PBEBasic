import * as controllers from "./controllers.js";
import * as schemas from "./schemas.js";

async function ShopRoutes(server, options) {
  // [C]reate
  server.route({
    method: "POST",
    url: "/shops",
    schema: schemas.AddShopSchema,
    handler: controllers.AddShopController,
  });
  // [R]ead
  server.route({
    method: "GET",
    url: "/shops",
    schema: schemas.GetAllShopsSchema,
    handler: controllers.GetAllShopsController,
  });

  server.route({
    method: "GET",
    url: "/shop/:id",
    schema: schemas.GetShopByIdSchema,
    handler: controllers.GetShopByIdController,
  });

  // [U]pdate
  server.route({
    method: "PUT",
    url: "/shop/:id/update",
    schema: schemas.UpdateShopSchema,
    handler: controllers.UpdateShopController,
  });
  // [D]elete
  server.route({
    method: "DELETE",
    url: "/shops",
    schema: schemas.DeleteShopSchema,
    handler: controllers.DeleteShopController,
  });

  server.route({
    method: "DELETE",
    url: "/shop/:id/delete",
    schema: schemas.DeleteShopByIdSchema,
    handler: controllers.DeleteShopByIdController,
  });
}

export default ShopRoutes;
