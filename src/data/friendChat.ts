import { firestore } from 'firebase';

export interface FriendChat {
  id: number;
  message: string;
  type: number;
  createDate: firestore.Timestamp;
}
