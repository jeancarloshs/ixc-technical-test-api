import express from 'express';
import ChatController from '../controllers/chatController';
import authMiddleware from '../middleware/jwt';

const router = express.Router();

router
  .get('/api/v1/get/messages/:user1ID/:user2ID', authMiddleware.verifyJWT, ChatController.getMessages)
  .post('/api/v1/sent/message', authMiddleware.verifyJWT, ChatController.sendMessage)

export default router;