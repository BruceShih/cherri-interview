import { firestore } from 'firebase';
import { Friend } from './friend';
import { FriendChat } from './friendChat';
import { FriendNote } from './friendNote';

export interface Conversation {
  id: number;
  friend: Friend;
  dateStarted: firestore.Timestamp;
  chats: FriendChat[];
  notes: FriendNote[];
}
