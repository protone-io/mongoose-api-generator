const { Schema } = require("mongoose");
const { PUBLIC, OWNER, NONE } = require("../../framework/auth/permissions");

const schema = new Schema(
  {
    content: String,
    created: { type: Date, default: Date.now },
    name: String,
    email: String,
    owner_id: String,
  },
  { strict: "throw", toObject: { versionKey: false } }
);

const permissions = {
  list: NONE,
  get: PUBLIC,
  update: OWNER,
  remove: NONE,
};
module.exports = { schema, permissions };
