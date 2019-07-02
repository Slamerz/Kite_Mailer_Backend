const contactController = require("../controllers/contactController");

const contactsRoutes = [
  {
    method: "GET",
    url: "/api/contacts",
    handler: contactController.getContacts,
    schema: {
      description: "get all contacts",
      tags: ["contact"],
      summary: "get all contacts",
      response: {
        200: {
          description: "Successful response",
          type: "array",
          title: "Contacts",
          items: {
            type: "object",
            title: "Contact Object",
            properties: {
              id: {
                type: "string",
                title: "Contact Id",
                default: "",
                examples: ["98uio234u89324uo2u34"],
                pattern: "^(.*)$"
              },
              userId: {
                type: "string",
                title: "The Users Id",
                default: "",
                examples: ["i2u42oiu89dfa98f89uio234"],
                pattern: "^(.*)$"
              },
              addresseeId: {
                type: "string",
                title: "The Addresse's Facility Id ",
                default: "",
                examples: ["8372929"],
                pattern: "^(.*)$"
              },
              facilityName: {
                type: "string",
                title: "The Contacts Facility Name",
                default: "",
                examples: ["West Johnson Pen"],
                pattern: "^(.*)$"
              },
              addressee: {
                type: "object",
                title: "The Adressee's first and last name",
                required: ["firstName", "lastName"],
                properties: {
                  firstName: {
                    type: "string",
                    title: "Addressee First Name",
                    default: "",
                    examples: ["John"],
                    pattern: "^(.*)$"
                  },
                  lastName: {
                    type: "string",
                    title: "The Lastname Schema",
                    default: "",
                    examples: ["Doe"],
                    pattern: "^(.*)$"
                  }
                }
              },
              address: {
                type: "string",
                title: "The Address Schema",
                default: "",
                examples: ["182 west den Drive"],
                pattern: "^(.*)$"
              },
              unit: {
                type: "string",
                title: "The Unit Schema",
                default: "",
                examples: ["F3"],
                pattern: "^(.*)$"
              }
            }
          }
        }
      }
    }
  },
  {
    method: "GET",
    url: "/api/contacts/:id",
    handler: contactController.getSingleContact,
    schema: {
      description: "get single contact by Id",
      tags: ["contact"],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "contact id"
          }
        }
      },
      summary: "Get a single contact by Id",
      response: {
        200: {
          description: "Successful response",
          type: "object",
          title: "Contact Object",
          properties: {
            id: {
              type: "string",
              title: "Contact Id",
              default: "",
              examples: ["98uio234u89324uo2u34"],
              pattern: "^(.*)$"
            },
            userId: {
              type: "string",
              title: "The Users Id",
              default: "",
              examples: ["i2u42oiu89dfa98f89uio234"],
              pattern: "^(.*)$"
            },
            addresseeId: {
              type: "string",
              title: "The Addresse's Facility Id ",
              default: "",
              examples: ["8372929"],
              pattern: "^(.*)$"
            },
            facilityName: {
              type: "string",
              title: "The Contacts Facility Name",
              default: "",
              examples: ["West Johnson Pen"],
              pattern: "^(.*)$"
            },
            addressee: {
              type: "object",
              title: "The Adressee's first and last name",
              required: ["firstName", "lastName"],
              properties: {
                firstName: {
                  type: "string",
                  title: "Addressee First Name",
                  default: "",
                  examples: ["John"],
                  pattern: "^(.*)$"
                },
                lastName: {
                  type: "string",
                  title: "The Lastname Schema",
                  default: "",
                  examples: ["Doe"],
                  pattern: "^(.*)$"
                }
              }
            },
            address: {
              type: "string",
              title: "The Address Schema",
              default: "",
              examples: ["182 west den Drive"],
              pattern: "^(.*)$"
            },
            unit: {
              type: "string",
              title: "The Unit Schema",
              default: "",
              examples: ["F3"],
              pattern: "^(.*)$"
            }
          }
        }
      }
    }
  },
  {
    method: "POST",
    url: "/api/contacts",
    handler: contactController.addContact,
    schema: {
      description: "Creates a new contact",
      summary: "Create a new contact",
      tags: ["contact"],
      body: {
        type: "object",
        title: "User Object",
        required: ["userId", "addresseeId", "facilityName", "addressee", "address", "unit"],
          properties: {
              userId: {
                  type: "string",
                  title: "The Users Id",
                  default: "",
                  examples: ["i2u42oiu89dfa98f89uio234"],
                  pattern: "^(.*)$"
              },
              addresseeId: {
                  type: "string",
                  title: "The Addresse's Facility Id ",
                  default: "",
                  examples: ["8372929"],
                  pattern: "^(.*)$"
              },
              facilityName: {
                  type: "string",
                  title: "The Contacts Facility Name",
                  default: "",
                  examples: ["West Johnson Pen"],
                  pattern: "^(.*)$"
              },
              addressee: {
                  type: "object",
                  title: "The Adressee's first and last name",
                  required: ["firstName", "lastName"],
                  properties: {
                      firstName: {
                          type: "string",
                          title: "Addressee First Name",
                          default: "",
                          examples: ["John"],
                          pattern: "^(.*)$"
                      },
                      lastName: {
                          type: "string",
                          title: "The Lastname Schema",
                          default: "",
                          examples: ["Doe"],
                          pattern: "^(.*)$"
                      }
                  }
              },
              address: {
                  type: "string",
                  title: "The Address Schema",
                  default: "",
                  examples: ["182 west den Drive"],
                  pattern: "^(.*)$"
              },
              unit: {
                  type: "string",
                  title: "The Unit Schema",
                  default: "",
                  examples: ["F3"],
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
                    title: "Contact Id",
                    default: "",
                    examples: ["98uio234u89324uo2u34"],
                    pattern: "^(.*)$"
                },
                userId: {
                    type: "string",
                    title: "The Users Id",
                    default: "",
                    examples: ["i2u42oiu89dfa98f89uio234"],
                    pattern: "^(.*)$"
                },
                addresseeId: {
                    type: "string",
                    title: "The Addresse's Facility Id ",
                    default: "",
                    examples: ["8372929"],
                    pattern: "^(.*)$"
                },
                facilityName: {
                    type: "string",
                    title: "The Contacts Facility Name",
                    default: "",
                    examples: ["West Johnson Pen"],
                    pattern: "^(.*)$"
                },
                addressee: {
                    type: "object",
                    title: "The Adressee's first and last name",
                    required: ["firstName", "lastName"],
                    properties: {
                        firstName: {
                            type: "string",
                            title: "Addressee First Name",
                            default: "",
                            examples: ["John"],
                            pattern: "^(.*)$"
                        },
                        lastName: {
                            type: "string",
                            title: "The Lastname Schema",
                            default: "",
                            examples: ["Doe"],
                            pattern: "^(.*)$"
                        }
                    }
                },
                address: {
                    type: "string",
                    title: "The Address Schema",
                    default: "",
                    examples: ["182 west den Drive"],
                    pattern: "^(.*)$"
                },
                unit: {
                    type: "string",
                    title: "The Unit Schema",
                    default: "",
                    examples: ["F3"],
                    pattern: "^(.*)$"
                }
            }
        }
      }
    }
  },
  {
    method: "PUT",
    url: "/api/contacts/:id",
    handler: contactController.updateContact,
      schema: {
        tags:["contact"]
      }
  },
  {
    method: "DELETE",
    url: "/api/contacts/:id",
    handler: contactController.deleteContact,
    schema: {
      description: "Delete a contact by Id",
      summary: "Delete a contact by Id",
      tags: ["contact"],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "contact id"
          }
        }
      }
    }
  }
];

module.exports = contactsRoutes;
