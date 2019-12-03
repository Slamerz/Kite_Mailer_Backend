const orderControllers = require("../controllers/orderController");
const messageObjectSchema = {
  _id: {
    type: "string",
    title: "Order Id",
    default: "",
    examples: ["507c7f79bcf86cd7994f6c0e"],
    pattern: "^(.*)$"
  },
  senderId: {
    type: "string",
    title: "Sender Id",
    default: "",
    examples: ["jkl23;4lnaio34ij3j4io"],
    pattern: "^(.*)$"
  },
  recipientId: {
    type: "string",
    title: "Addressee Id",
    default: "",
    examples: ["3009827"],
    pattern: "^(.*)$"
  },
  facilityName: {
    type: "string",
    title: "The Facility",
    default: "",
    examples: ["Indiana Women's Prison"],
    pattern: "^(.*)$"
  },
  status: {
    type: "string",
    title: "Order Status",
    default: "",
    examples: ["pending"],
    pattern: "^(.*)$"
  },
  recipient: {
    type: "object",
    title: "Recipients details",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "recipients first name",
        default: "",
        examples: ["Mary"],
        pattern: "^(.*)$"
      },
      lastName: {
        type: "string",
        title: "recipients last name",
        default: "",
        examples: ["Doe"],
        pattern: "^(.*)$"
      }
    }
  },
  address: {
    type: "string",
    title: "Order Address",
    default: "",
    examples: ["2596 N Girls School Rd, Indianapolis, IN 46214"],
    pattern: "^(.*)$"
  },
  unit: {
    type: "string",
    title: "recipient unit",
    default: "",
    examples: ["F"],
    pattern: "^(.*)$"
  },
  message: {
    type: "string",
    title: "Order Message",
    default: "",
    examples: [
      "Hey Hope You're doing well, your aunt Lin says hello"
    ],
    pattern: "^(.*)$"
  },
  photos: {
    type: "array",
    title: "Orders Photos",
    items: {
      type: "object",
      title: "Photo Object"
    }
  }
};
const ordersRoutes = [
  {
    method: "GET",
    url: "/api/messages",
    handler: orderControllers.getOrders,
    schema: {
      description: "Get a list of all Orders",
      summary: "Get all orders",
      tags: ["order"],
      response: {
        200: {
          description: "Successfully got all orders",
          type: "array",
          items: {
            type: "object",
            title: "Message Object",
            properties: messageObjectSchema
          }
        }
      }
    }
  },
  {
    method: "GET",
    url: "/api/messages/:id",
    handler: orderControllers.getSingleOrder,
    schema: {
      description: "Get an order by its ID",
      summary: "Get an order by its ID",
      tags: ["order"],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Order id"
          }
        }
      },
      response: {
        200: {
          description: "Successful Request",
          type: "object",
          title: "Order Object",
          properties: messageObjectSchema
        }
      }
    }
  },
  {
    method: "POST",
    url: "/api/messages",
    handler: orderControllers.addOrder,
    schema: {
      description: "Create a new order",
      summary: "Create a new order",
      tags: ["order"],
      body: {
        type: "object",
        title: "Order Object",
        required: [
          "senderId",
          "recipientId",
          "facilityName",
          "status",
          "recipient",
          "address",
          "unit",
          "message"
        ],
        properties: {
          senderId: {
            type: "string",
            title: "Sender Id",
            default: "",
            examples: ["jkl23;4lnaio34ij3j4io"],
            pattern: "^(.*)$"
          },
          recipientId: {
            type: "string",
            title: "Addressee Id",
            default: "",
            examples: ["3009827"],
            pattern: "^(.*)$"
          },
          facilityName: {
            type: "string",
            title: "The Facility",
            default: "",
            examples: ["Indiana Women's Prison"],
            pattern: "^(.*)$"
          },
          status: {
            type: "string",
            title: "Order Status",
            default: "",
            examples: ["pending"],
            pattern: "^(.*)$"
          },
          recipient: {
            type: "object",
            title: "Order Addressee",
            required: ["firstName", "lastName"],
            properties: {
              firstName: {
                type: "string",
                title: "recipient first name",
                default: "",
                examples: ["Mary"],
                pattern: "^(.*)$"
              },
              lastName: {
                type: "string",
                title: "recipient last name",
                default: "",
                examples: ["Doe"],
                pattern: "^(.*)$"
              }
            }
          },
          address: {
            type: "string",
            title: "Order Address",
            default: "",
            examples: ["2596 N Girls School Rd, Indianapolis, IN 46214"],
            pattern: "^(.*)$"
          },
          unit: {
            type: "string",
            title: "recipient unit",
            default: "",
            examples: ["F"],
            pattern: "^(.*)$"
          },
          message: {
            type: "string",
            title: "Order Message",
            default: "",
            examples: ["Hey Hope You're doing well, your aunt Lin says hello"],
            pattern: "^(.*)$"
          },
          photos: {
            type: "array",
            title: "Orders Photos",
            items: {
              type: "string"
            }
          }
        }
      },
      response: {
        200: {
          description: "Successfully Added Order",
          type: "object",
          properties: messageObjectSchema
        }
      }
    }
  },
  {
    method: "DELETE",
    url: "/api/messages/:id",
    handler: orderControllers.deleteOrder,
    schema: {
      description: "Delete a order by Id",
      summary: "Delete an order by Id",
      tags: ["order"],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "order id"
          }
        }
      }
    }
  }
];

module.exports = ordersRoutes;
