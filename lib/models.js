import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  email: String,
});

const sessionSchema = new schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    expires_at: {
      type: Date,
      required: true,
    },
  },
  {
    _id: false,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);
