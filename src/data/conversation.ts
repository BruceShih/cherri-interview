import { FriendChat } from './friendChat';
import { FriendNote } from './friendNote';

export interface Conversation {
  id: number;
  friendId: number;
  dateStarted: Date;
  chats: FriendChat[];
  notes: FriendNote[];
}
