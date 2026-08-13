import { Schema, models, Model, Document, model } from "mongoose";

export interface MessageI extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<MessageI> = new Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export interface UserI extends Document {
  userName: string;
  email: string;
  password: string;
  verifyCode: string;
  codeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: MessageI[];
}

const userSchema: Schema<UserI> = new Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    verifyCode: {
      type: String,
      required: [true, "verify code is required"],
    },
    codeExpiry: {
      type: Date,
      required: [true, "code expiry is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAcceptingMessage: {
      type: Boolean,
      default: true,
    },
    messages: [MessageSchema],
  },
  {
    timestamps: true,
  },
);

const userModel =
  (models.User as Model<UserI>) || model<UserI>("User", userSchema);

export default userModel;
