import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  receivedID: mongoose.Types.ObjectId;
  sendToID: mongoose.Types.ObjectId;
  text: string;
  timestamp: Date;
}

export interface IChat extends Document {
  name: string;
  email: string;
  receivedID: mongoose.Types.ObjectId;
  sendToID: mongoose.Types.ObjectId;
  messages: IMessage[];
  created_at: Date;
}

class ChatModel extends mongoose.Model<IChat> {
  id!: string;
  name!: string;
  email!: string;
  messages!: IMessage[];
  created_at!: Date;
}

const messageSchema: Schema<IMessage> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  receivedID: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  sendToID: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const chatSchema: Schema<IChat> = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  receivedID: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  sendToID: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  messages: {
    type: [messageSchema],
    required: true,
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

chatSchema.loadClass(ChatModel);

const chatModel = mongoose.model<IChat>('Chat', chatSchema);

export default chatModel;
