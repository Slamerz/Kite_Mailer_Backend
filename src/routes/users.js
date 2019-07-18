const userController = require("../controllers/userController");

const usersRoutes = [
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getUsers
    // schema: {
    //   description: "get all users",
    //   tags: ["user"],
    //   summary: "get all users",
    //   response: {
    //     200: {
    //       description: "Successful response",
    //       type: "array",
    //       items: {
    //         type: "object",
    //         title: "User Object",
    //         properties: {
    //           id: {
    //             type: "string",
    //             title: "User Id",
    //             default: "",
    //             examples: ["d311dkdie82"],
    //             pattern: "^(.*)$"
    //           },
    //           username: {
    //             type: "string",
    //             title: "User Username",
    //             default: "",
    //             examples: ["JohnWick32"],
    //             pattern: "^(.*)$"
    //           },
    //           email: {
    //             type: "string",
    //             title: "User Email",
    //             default: "",
    //             examples: ["something@somwhere.com"],
    //             pattern: "^(.*)$"
    //           },
    //           password: {
    //             type: "string",
    //             title: "User Password",
    //             default: "",
    //             examples: ["password134"],
    //             pattern: "^(.*)$"
    //           },
    //           orders: {
    //             type: "array",
    //             title: "Users Order Ids",
    //             items: {
    //               type: "string",
    //               title: "Order Id",
    //               default: "",
    //               examples: ["lke8r2jlkd", "wuoirjkldsf3", "iowejrkldjf23"],
    //               pattern: "^(.*)$"
    //             }
    //           },
    //           contacts: {
    //             type: "array",
    //             title: "Users Contact Ids",
    //             items: {
    //               $id: "#/items/properties/contacts/contactId",
    //               type: "string",
    //               title: "Contact Id",
    //               default: "",
    //               examples: ["sowerme3thioin1g1", "oaiwjerkdi284hi4"],
    //               pattern: "^(.*)$"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  },
  // {
  //   method: "GET",
  //   url: "/api/users/:id",
  //   handler: userController.getSingleUser,
  //   schema: {
  //     description: "get single User",
  //     tags: ["user"],
  //     params: {
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "string",
  //           description: "user id"
  //         }
  //       }
  //     },
  //     summary: "Get a single user by Id",
  //     response: {
  //       200: {
  //         description: "Successful response",
  //         type: "object",
  //         properties: {
  //           id: {
  //             $id: "#/properties/id",
  //             type: "string",
  //             title: "User Id",
  //             default: "",
  //             examples: ["kljf2ioj3k423k"],
  //             pattern: "^(.*)$"
  //           },
  //           username: {
  //             $id: "#/properties/username",
  //             type: "string",
  //             title: "Users Usernname",
  //             default: "",
  //             examples: ["JohnSnow2"],
  //             pattern: "^(.*)$"
  //           },
  //           email: {
  //             $id: "#/properties/email",
  //             type: "string",
  //             title: "Users Email",
  //             default: "",
  //             examples: ["thingemail@yahoo.com"],
  //             pattern: "^(.*)$"
  //           },
  //           password: {
  //             $id: "#/properties/password",
  //             type: "string",
  //             title: "Users Email",
  //             default: "",
  //             examples: ["password123"],
  //             pattern: "^(.*)$"
  //           },
  //           orders: {
  //             $id: "#/properties/orders",
  //             type: "array",
  //             title: "Users Order IDs",
  //             items: {
  //               $id: "#/properties/orders/items",
  //               type: "string",
  //               title: "Order ID",
  //               default: "",
  //               examples: ["io2u34i2o3u42oi4"],
  //               pattern: "^(.*)$"
  //             }
  //           },
  //           contacts: {
  //             $id: "#/properties/contacts",
  //             type: "array",
  //             title: "Users Contact IDs",
  //             items: {
  //               $id: "#/properties/contacts/items",
  //               type: "string",
  //               title: "Contacts Id",
  //               default: "",
  //               examples: ["io2u423oiu432oiu"],
  //               pattern: "^(.*)$"
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // },
  {
    method: "POST",
    url: "/api/users",
    handler: userController.addUser
    // schema: {
    //   description: "Creates a new user",
    //   summary: "Create a new user",
    //   tags: ["user"],
    //   body: {
    //     type: "object",
    //     title: "User Object",
    //     required: ["userDetails", "loginDetails"],
    //     properties: {
    //       userDetails: {
    //         type: "object",
    //         title: "Users personal details",
    //         required: ["firstName", "lastName"],
    //         properties: {
    //           firstName: {
    //             $id: "#/properties/firstName",
    //             type: "string",
    //             title: "Users First Name",
    //             default: "",
    //             examples: ["John"],
    //             pattern: "^(.*)$"
    //           },
    //           lastName: {
    //             $id: "#/properties/lastName",
    //             type: "string",
    //             title: "Users Last Name",
    //             default: "",
    //             examples: ["Doe"],
    //             pattern: "^(.*)$"
    //           }
    //         }
    //       },
    //       loginDetails: {
    //         type: "object",
    //         title: "Users Login Details",
    //         required: ["email", "password"],
    //         properties: {
    //           email: {
    //             $id: "#/properties/email",
    //             type: "string",
    //             title: "Users Email",
    //             default: "",
    //             examples: ["JohnDoe32@yahoo.com"],
    //             pattern: "^(.*)$"
    //           },
    //           password: {
    //             $id: "#/properties/password",
    //             type: "string",
    //             title: "Users Password",
    //             default: "",
    //             examples: ["password123"],
    //             pattern: "^(.*)$"
    //           }
    //         }
    //       }
    //     }
    //   },
    //   response: {
    //     200: {
    //       description: "Successfully added User",
    //       type: "object",
    //       properties: {
    //         id: {
    //           type: "string",
    //           title: "Users Id",
    //           default: "",
    //           examples: ["u2o34u908wre9080923ip"],
    //           pattern: "^(.*)$"
    //         },
    //         username: {
    //           type: "string",
    //           title: "Users Username",
    //           default: "",
    //           examples: ["JohnWick3"],
    //           pattern: "^(.*)$"
    //         },
    //         email: {
    //           type: "string",
    //           title: "Users Email",
    //           default: "",
    //           examples: ["someoneNew@yahoo.com"],
    //           pattern: "^(.*)$"
    //         },
    //         password: {
    //           type: "string",
    //           title: "Users Password",
    //           default: "",
    //           examples: ["password123"],
    //           pattern: "^(.*)$"
    //         },
    //         orders: {
    //           type: "array",
    //           title: "Users IDs",
    //           items: {
    //             $id: "#/properties/orders/items",
    //             type: "string",
    //             title: "Order Id",
    //             default: "",
    //             examples: ["oi2u34398u2io3u4i"],
    //             pattern: "^(.*)$"
    //           }
    //         },
    //         contacts: {
    //           type: "array",
    //           title: "User Contact Ids",
    //           items: {
    //             $id: "#/properties/contacts/items",
    //             type: "string",
    //             title: "Contact Id",
    //             default: "",
    //             examples: ["io2u34oi2u4o2iu4o23u42oi3"],
    //             pattern: "^(.*)$"
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  },
  {
    method: "PUT",
    url: "/api/users/:id",
    handler: userController.updateUser,
    schema: {
      tags: ["user"]
    }
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
  }
];

module.exports = usersRoutes;
