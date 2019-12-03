const authController = require("../controllers/authController");

const authRoutes = [
  {
    method: "POST",
    url: "/api/auth",
    handler: authController.authUser,
    schema: {
      summary: "Sign in request",
      description: "Makes a post request to get a users information",
      tags: ["auth"],
      body: {
        type: 'object',
        title: 'Auth Object',
        required: [
            "email",
            "password"
        ],
        properties: {
          'email': {
            type: "string",
            title: "The users Email Address",
            default: "",
            examples: ["notReal.me@gmail.com", "hotgirl23@hotmail.com"],
          },
          'password': {
            type: "string",
            title: "The users password",
            default: "",
            examples: ["password123", "Password12!", "QWERTY!@#$%"]
          }
        }
      },
      response: {
        200: {
          description: "Successfully Logged in",
          type: "object",
          properties: {
            "_id": {
              type: "string",
              title: "The _id Schema",
              default: "",
              examples: [
                "5ddbefa89a70a0002b394491"
              ],
              "pattern": "^(.*)$"
            },
            "firstName": {
              type: "string",
              title: "The Firstname Schema",
              default: "",
              examples: [
                "newUser"
              ],
              "pattern": "^(.*)$"
            },
            "lastName": {
              type: "string",
              title: "The Lastname Schema",
              default: "",
              examples: [
                "forToday"
              ],
              "pattern": "^(.*)$"
            },
            "email": {
              type: "string",
              title: "The Email Schema",
              default: "",
              examples: [
                "new@new.com"
              ],
              "pattern": "^(.*)$"
            },
            "token": {
              type: "string",
              title: "The Token Schema",
              default: "",
              examples: [
                "eyJhbGciOiJIUzI1NiJ9.bmV3QG5ldy5jb20.VuUBX02LTH3lzFuhIqa5srf7qktJa4ZILT9_G8FHsfU"
              ],
              "pattern": "^(.*)$"
            },
            "messages": {
              type: "array",
              title: "Array of the users Message Id's",
              items: {
                type: "string",
                title: "Message Id",
                default: "",
                examples: [
                  "kjfdklkjfa",
                  "jkldsjflkdjlk"
                ],
                pattern: "^(.*)$"
              }
            },
          }
        }
      }
    }
  }
];

module.exports = authRoutes;
