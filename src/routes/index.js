const userController = require("../controllers/userController");
const orderControllers = require("../controllers/orderController");
const routes = [
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getUsers,
    schema: {
      description: "get all users",
      tags: ["user"],
      summary: "get all users",
      response: {
        200: {
          description: "Successful response",
          type: "array",
          items: {
            type: "object",
            title: "User Object",
            properties: {
              id: {
                type: "string",
                title: "User Id",
                default: "",
                examples: ["d311dkdie82"],
                pattern: "^(.*)$"
              },
              username: {
                type: "string",
                title: "User Username",
                default: "",
                examples: ["JohnWick32"],
                pattern: "^(.*)$"
              },
              email: {
                type: "string",
                title: "User Email",
                default: "",
                examples: ["something@somwhere.com"],
                pattern: "^(.*)$"
              },
              password: {
                type: "string",
                title: "User Password",
                default: "",
                examples: ["password134"],
                pattern: "^(.*)$"
              },
              orders: {
                type: "array",
                title: "Users Order Ids",
                items: {
                  type: "string",
                  title: "Order Id",
                  default: "",
                  examples: ["lke8r2jlkd", "wuoirjkldsf3", "iowejrkldjf23"],
                  pattern: "^(.*)$"
                }
              },
              contacts: {
                type: "array",
                title: "Users Contact Ids",
                items: {
                  $id: "#/items/properties/contacts/contactId",
                  type: "string",
                  title: "Contact Id",
                  default: "",
                  examples: ["sowerme3thioin1g1", "oaiwjerkdi284hi4"],
                  pattern: "^(.*)$"
                }
              }
            }
          }
        }
      }
    }
  },
  {
    method: "GET",
    url: "/api/users/:id",
    handler: userController.getSingleUser,
    schema: {
      description: "get single User",
      tags: ["user"],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "user id"
          }
        }
      },
      summary: "Get a single user by Id",
      response: {
        200: {
          description: "Successful response",
          type: "object",
          properties: {
            id: {
              $id: "#/properties/id",
              type: "string",
              title: "User Id",
              default: "",
              examples: ["kljf2ioj3k423k"],
              pattern: "^(.*)$"
            },
            username: {
              $id: "#/properties/username",
              type: "string",
              title: "Users Usernname",
              default: "",
              examples: ["JohnSnow2"],
              pattern: "^(.*)$"
            },
            email: {
              $id: "#/properties/email",
              type: "string",
              title: "Users Email",
              default: "",
              examples: ["thingemail@yahoo.com"],
              pattern: "^(.*)$"
            },
            password: {
              $id: "#/properties/password",
              type: "string",
              title: "Users Email",
              default: "",
              examples: ["password123"],
              pattern: "^(.*)$"
            },
            orders: {
              $id: "#/properties/orders",
              type: "array",
              title: "Users Order IDs",
              items: {
                $id: "#/properties/orders/items",
                type: "string",
                title: "Order ID",
                default: "",
                examples: ["io2u34i2o3u42oi4"],
                pattern: "^(.*)$"
              }
            },
            contacts: {
              $id: "#/properties/contacts",
              type: "array",
              title: "Users Contact IDs",
              items: {
                $id: "#/properties/contacts/items",
                type: "string",
                title: "Contacts Id",
                default: "",
                examples: ["io2u423oiu432oiu"],
                pattern: "^(.*)$"
              }
            }
          }
        }
      }
    }
  },
  {
    method: "POST",
    url: "/api/users",
    handler: userController.addUser,
    schema: {
      description: "Creates a new user",
      summary: "Create a new user",
      tags: ["user"],
      body: {
        type: "object",
        title: "User Object",
        required: ["username", "email", "password"],
        properties: {
          username: {
            $id: "#/properties/username",
            type: "string",
            title: "Users Username",
            default: "",
            examples: ["JohnWick3"],
            pattern: "^(.*)$"
          },
          email: {
            $id: "#/properties/email",
            type: "string",
            title: "Users Email",
            default: "",
            examples: ["someoneNew@yahoo.com"],
            pattern: "^(.*)$"
          },
          password: {
            $id: "#/properties/password",
            type: "string",
            title: "Users Password",
            default: "",
            examples: ["password123"],
            pattern: "^(.*)$"
          }
        }
      },
      response: {
        200: {
          description: "Successfully added User",
          type: "object",
          properties: {
            id: {
              type: "string",
              title: "Users Id",
              default: "",
              examples: ["u2o34u908wre9080923ip"],
              pattern: "^(.*)$"
            },
            username: {
              type: "string",
              title: "Users Username",
              default: "",
              examples: ["JohnWick3"],
              pattern: "^(.*)$"
            },
            email: {
              type: "string",
              title: "Users Email",
              default: "",
              examples: ["someoneNew@yahoo.com"],
              pattern: "^(.*)$"
            },
            password: {
              type: "string",
              title: "Users Password",
              default: "",
              examples: ["password123"],
              pattern: "^(.*)$"
            },
            orders: {
              type: "array",
              title: "Users IDs",
              items: {
                $id: "#/properties/orders/items",
                type: "string",
                title: "Order Id",
                default: "",
                examples: ["oi2u34398u2io3u4i"],
                pattern: "^(.*)$"
              }
            },
            contacts: {
              type: "array",
              title: "User Contact Ids",
              items: {
                $id: "#/properties/contacts/items",
                type: "string",
                title: "Contact Id",
                default: "",
                examples: ["io2u34oi2u4o2iu4o23u42oi3"],
                pattern: "^(.*)$"
              }
            }
          }
        }
      }
    }
  },
  {
    method: "PUT",
    url: "/api/users/:id",
    handler: userController.updateUser
  },
  {
    method: "DELETE",
    url: "/api/users/:id",
    handler: userController.deleteUser,
    schema: {
      description: "Delete a user by Id",
      summary: "Delete a user by Id",
      tags: ["user"],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "user id"
          }
        }
      }
    }
  },
  {
    method: "GET",
    url: "/api/orders/",
    handler: orderControllers.getOrders,
    schema: {
      description: "Get a list of all Orders",
      summary: "Get all orders",
      tags: ["order"],
      response: {
        200: {
          description: "Successful response",
          type: "array",
          items: {
            type: "object",
            title: "Order Object",
            properties: {
              id: {
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
              addressee: {
                type: "object",
                title: "Order Addressee",
                required: ["firstName", "lastName"],
                properties: {
                  firstName: {
                    type: "string",
                    title: "addressee first name",
                    default: "",
                    examples: ["Mary"],
                    pattern: "^(.*)$"
                  },
                  lastName: {
                    type: "string",
                    title: "addressee last name",
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
                title: "addressee unit",
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
            }
          }
        }
      }
    }
  },
  {
    method: "GET",
    url: "/api/orders/:id",
    handler: orderControllers.getSingleOrder
  },
  {
    method: "POST",
    url: "/api/orders",
    handler: orderControllers.addOrder
  },
  {
    method: "DELETE",
    url: "/api/orders/:id",
    handler: orderControllers.deleteOrder
  }
];

module.exports = routes;
