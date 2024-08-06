import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isacceptingMessage?: boolean;
    messages?: Array<Message>
}