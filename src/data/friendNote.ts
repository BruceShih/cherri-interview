import { firestore } from 'firebase';

export interface FriendNote {
  id: number;
  message: string;
  createDate: firestore.Timestamp;
}
