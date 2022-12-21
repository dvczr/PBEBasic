export async function AddShopController(request, response) {
  try {
    const { Shop } = request.db.models;
    const newShop = await Shop.create(request.body);

    response.status(201);

    return {
      success: true,
      message: `Shop ${newShop.name} ID: ${newShop.id} has been added to DB.`,
    };
  } catch (e) {
    request.log.error(e);
    await response.status(500).send("\n\tAn error occurred!\n\t" + e);
  }
}

export async function GetAllShopsController(request, response) {
  try {
    const { Shop } = request.db.models;
    const shop = await Shop.find();

    return shop;
  } catch (e) {
    request.log.error(e);
    await response.status(500).send("\n\tAn error occurred!\n\t" + e);
  }
}

export async function GetShopByIdController(request, response) {
  try {
    const { Shop } = request.db.models;
    const queriedShop = await Shop.findOne({ _id: request.params.id });

    if (!queriedShop) {
      response.status(404);

      return {
        success: false,
        message: `Shop NOT found! (id:${request.params.id})`,
      };
    }
    return queriedShop;
  } catch (e) {
    request.log.error(e);
    await response.status(500).send("\n\tAn error occurred!\n\t" + e);
  }
}

export async function UpdateShopController(request, response) {
  try {
    const { Shop } = request.db.models;
    await Shop.findByIdAndUpdate(request.params.id, request.body);
    const shopToUpdate = await Shop.findById(request.params.id);

    if (shopToUpdate === null) {
      response.status(404);
      return {
        success: false,
        message: `Shop NOT found! (id:${request.params.id})`,
      };
    }

    response.status(200);
    return {
      success: true,
      message: "Shop successfully updated",
    };
  } catch (e) {
    await response.status(500).send("\n\tAn error occurred!\n\t" + e);
  }
}

export async function DeleteShopController(request, response) {
  try {
    const { Shop } = request.db.models;
    const selectedShop = await Shop.findOneAndDelete({
      _id: request.body._id,
    });

    if (selectedShop === null) {
      response.status(404);
      return {
        success: false,
        message: `Shop NOT found! (id:${request.body._id})`,
      };
    }

    return { success: true, message: "Shop successfully deleted!" };
  } catch (e) {
    request.log.error(e);

    await response.status(500).send("\n\tAn error occurred!\n\t" + e);
  }
}

export async function DeleteShopByIdController(request, response) {
  try {
    const { Shop } = request.db.models;
    const selectedShop = await Shop.findOneAndDelete({
      _id: request.params.id,
    });

    if (selectedShop === null) {
      response.status(404);

      return {
        success: false,
        message: `Shop NOT found! (id:${request.params.id})`,
      };
    }

    return {
      success: true,
      message: "Shop successfully deleted! ",
    };
  } catch (e) {
    request.log.error(e);

    await response.status(500).send("\n\tAn error occurred!\n\t" + e);
  }
}
