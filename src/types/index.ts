export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: Date;
}

export interface ChatRoom {
  id: string;
  name: string;
  icon: string;
  participantsCount: number;
  messages: Message[];
}