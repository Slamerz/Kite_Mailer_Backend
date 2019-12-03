const userController = require("../controllers/userController");
const userObjectSchema = {
    "_id": {
      "type": "string",
      "title": "The Users Id",
      "default": "",
      "examples": ["5d30a75af2f77600241a3e9f"],
      "pattern": "^(.*)$"
    }, "firstName": {
      "type": "string",
      "title": "The Users First Name",
      "default": "",
      "examples": ["dennis", "jacob"],
      "pattern": "^(.*)$"
    }, "lastName": {
      "type": "string",
      "title": "The Users Last Name",
      "default": "",
      "examples": ["c", "Walker"],
      "pattern": "^(.*)$"
    }, "email": {
      "type": "string",
      "title": "The Users Email Address",
      "default": "",
      "examples": ["denchris32@Gmail.com"],
      "pattern": "^(.*)$"
    }, "token": {
      "type": "string",
      "title": "The Bearer Authentication token generated from the users Password",
      "default": "",
      "examples": ["eyJhbGciOiJIUzI1NiJ9.aGVyZXdlZ28.lpyRoAreia2FHExPcYxEPvG9LMJJI26BtPtkByTIceo"],
      "pattern": "^(.*)$"
    }, "messages": {
      "type": "array", "title": "The Id's of all of the users messages", "items": {
        "type": "string",
        "title": "Message ID",
        "default": "",
        "examples": ["kljaklrjwriowjio.aGweyZXdlwrq8.lpyRoAqweria2FHExPcYxEPvG9LMJJI26BtPtkByTIceo", "qjwelkrjqlwr.aGweyZXdlwrq8.kljerioajusdivoualkdjrawe,rmhlkjklsf"],
        "pattern": "^(.*)$"
      }
    }
};

const usersRoutes = [
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getUsers,
    schema: {
      description: "Returns a list of all users",
      summary: "Get all users",
      tags: ['user'],
      response:{
        200: {
          description: "Successful Response", type: "array", items: {
            type: "object",
            title: "User Object",
            properties: userObjectSchema
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
      description: "Create a new user",
      summary: "Create new user",
      tags: ['user'],
      body: {
        type: 'object',
        title: 'User Object',
        required: [
          "firstName",
          "lastName",
          "email",
          "password"
        ],
        properties: {
          "firstName": {
            "type": "string",
            "title": "The users First Name",
            "default": "",
            "examples": [
              "dennis",
                "jacob"
            ],
            "minLength": 1,
            "maxLength": 20,
            "pattern": "^(.*)$"
          },
          "lastName": {
            "type": "string",
            "title": "The users last name",
            "default": "",
            "examples": [
              "c",
                "Walker"
            ],
            "minLength": 1,
            "maxLength": 20,
            "pattern": "^(.*)$"
          },
          "email": {
            "type": "string",
            "title": "The Users Email Address",
            "default": "",
            "examples": [
              "denchris32@Gmail.com"
            ],
            "pattern": "^(.*)$",
            "format": "email"
          },
          "password": {
            "type": "string",
            "title": "The users password",
            "default": "",
            "examples": [
              "password123",
                "qwert123"
            ],
            "minLength": 1,
            "maxLength": 30,
            "pattern": "^(.*)$"
          }
        }
      },
      response:{
        200: {
          description: "Successfully created a user",
          type: "object",
          properties: userObjectSchema
        }
      }
    }
  },
  {
    method: "PUT",
    url: "/api/users/:id",
    handler: userController.updateUser,
    schema: {
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
    method: "DELETE",
    url: "/api/users/:id",
    handler: userController.deleteUser,
    schema: {
      summary: "Delete a user by Id",
      description: "Documentation not yet completed",
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


