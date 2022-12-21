export const AddShopSchema = {
  body: {
    type: "object",
    required: [
      "name",
      "description",
      "openingHours",
      "address",
      "latitude",
      "longitude",
    ],
    properties: {
      name: {
        description: "Name of the shop.",
        type: "string",
      },
      description: {
        description: "Description of the shop.",
        type: "string",
      },
      openingHours: {
        description: "The opening hours of the shop.",
        type: "string",
      },
      address: {
        description: "Address of the shop.",
        type: "string",
      },
      latitude: {
        description: "Name of the shop.",
        type: "string",
      },
      longitude: {
        description: "Name of the shop.",
        type: "string",
      },
    },
  },
  response: {
    201: {
      description: "Success response",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

export const GetAllShopsSchema = {
  response: {
    200: {
      description: "List of all shops",
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            description: "Shops Id.",
            type: "string",
          },
          name: {
            description: "Name of the shop.",
            type: "string",
          },
          info: {
            description: "Description of the shop.",
            type: "string",
          },
          openingHours: {
            description: "The opening hours of the shop.",
            type: "string",
          },
          address: {
            description: "Address of the shop.",
            type: "string",
          },
          latitude: {
            description: "Name of the shop.",
            type: "string",
          },
          longitude: {
            description: "Name of the shop.",
            type: "string",
          },
        },
      },
    },
  },
};

export const GetShopByIdSchema = {
  response: {
    200: {
      description: "Queried shop.",
      type: "object",
      properties: {
        _id: {
          description: "Shops Id.",
          type: "string",
        },
        name: {
          description: "Name of the shop.",
          type: "string",
        },
        info: {
          description: "Description of the shop.",
          type: "string",
        },
        openingHours: {
          description: "The opening hours of the shop.",
          type: "string",
        },
        address: {
          description: "Address of the shop.",
          type: "string",
        },
        latitude: {
          description: "Name of the shop.",
          type: "string",
        },
        longitude: {
          description: "Name of the shop.",
          type: "string",
        },
      },
    },
  },
};

export const UpdateShopSchema = {
  body: {
    type: "object",
    properties: {
      fieldToUpdate: { description: "Field to update in shop", type: "string" },
    },
  },
  response: {
    204: {
      description: "Updated status.",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

export const DeleteShopSchema = {
  body: {
    type: "object",
    required: ["_id"],
    properties: {
      name: { description: "ID of the shop to remove", type: "string" },
    },
  },
  response: {
    204: {
      description: "Delete status.",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

export const DeleteShopByIdSchema = {
  response: {
    204: {
      description: "Successfully removed shop from DB!",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};
