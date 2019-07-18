const boom = require("boom");
const Contacts = require("../models/Contacts");
const mongoose = require("mongoose");

exports.getContacts = async (req, reply) => {
  try {
    return await Contacts.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getSingleContact = async (req, reply) => {
  try {
    const id = req.params.id;
    return await Contacts.findById(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.addContact = async (req, reply) => {
  try {
    const contact = new Contacts({
      id: mongoose.Types.ObjectId(),
      userId: mongoose.Types.ObjectId(req.body.userId),
      addresseeId: req.body.addresseeId,
      facilityName: req.body.facilityName,
      addressee: req.body.addressee,
      address: req.body.address,
      unit: req.body.unit
    });
    return contact.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.updateContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const contact = req.body;
    const { ...updateData } = contact;
    return await Contacts.findByIdAndUpdate(id, updateData, { new: true });
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.deleteContact = async (req, reply) => {
  try {
    const id = req.params.id;
    return await Contacts.findByIdAndRemove(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};
