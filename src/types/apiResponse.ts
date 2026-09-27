import { MessageI } from "@/src/Models/User.model";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMesages?: boolean; //won't be required in signup that's why optional
  messages?: Array<MessageI>;
}
