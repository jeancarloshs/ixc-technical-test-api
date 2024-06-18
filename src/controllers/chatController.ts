import { Request, Response } from 'express';
import mongoose from 'mongoose';
import chatModel, { IChat, IMessage }  from '../database/models/chatModel';

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
    const { name, email, receivedID, sendToID, message } = req.body;
    const date = new Date();

    try {
      let existingChat = await chatModel.findOne({
        $or: [
          { sendToID: sendToID },
          { receivedID: receivedID }
        ]
      });

      if (!existingChat) {
        const newChat = new chatModel({
          name: name,
          email: email,
          receivedID: receivedID,
          sendToID: sendToID,
          messages: [{ text: message, timestamp: new Date() }],
        });

        await newChat.save();
        res.status(200).json({ message: "Nova conversa criada e mensagem enviada com sucesso", data: newChat });
      } else {
        const newMessage: any = { text: message, timestamp: new Date() };
        existingChat.messages.push(newMessage);
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