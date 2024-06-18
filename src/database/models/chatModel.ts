import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage {
  text: string;
  timestamp: Date;
}

export interface IChat {
  id: string;
  receveidID: string;
  sendToID: string;
  name: string;
  messages: Array<string>;
  created_at: Date;
}

class ChatModel extends mongoose.Model<IChat> {
  id!: string;
  name!: string;
  email!: string;
  messages!: Array<string>;
  created_at!: Date;
}

const messageSchema: Schema<IMessage> = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
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
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

chatSchema.loadClass(ChatModel);
const chatModel = mongoose.model<IChat>('chat', chatSchema);
export default chatModel;