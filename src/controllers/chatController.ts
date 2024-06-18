import { Request, Response } from 'express';
import mongoose from 'mongoose';
import chatModel, { IChat, IMessage } from '../database/models/chatModel';

interface IPostMessage {
  name: string;
  email: string;
  receivedID: string;
  sendToID: string;
  message: string;
}

class ChatController {
  static getMessages = async (req: Request, res: Response) => {
    const messageID = req.params.messageID;
    try {
      const messages = await chatModel.find({ _id: new mongoose.Types.ObjectId(messageID) });

      // const messages = await chatModel.find();
      console.log(messages);
      res.status(200).send(messages);
    } catch (error) {
      console.error("Error getting messages", error);
      res.status(500).send({ message: "Error getting messages" });
    }
  }

  static sendMessage = async (req: Request, res: Response) => {
    const { name, email, receivedID, sendToID, message } = req.body as IPostMessage;
    const timestamp = new Date();

    try {
      let existingChat = await chatModel.findOne({
        $or: [
          { sendToID: sendToID, receivedID: receivedID },
          { sendToID: receivedID, receivedID: sendToID },
        ]
      });

      if (!existingChat) {
        const newChat = new chatModel({
          name: name,
          email: email,
          receivedID: receivedID,
          sendToID: sendToID,
          messages: [{ name: name, email: email, receivedID: receivedID, sendToID: sendToID, text: message, timestamp: timestamp }],
        });

        await newChat.save();
        res.status(200).json({ message: "Nova conversa criada e mensagem enviada com sucesso", data: newChat });
      } else {
        const chatExisting: any = { name: name, email: email, receivedID: receivedID, sendToID: sendToID, text: message, timestamp: timestamp };
        existingChat.messages.push(chatExisting);
        await existingChat.save();
        res.status(200).json({ message: "Mensagem adicionada à conversa existente", data: existingChat });
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem", error);
      res.status(500).json({ message: "Erro ao enviar mensagem", error });
    }

  }
}


export default ChatController;