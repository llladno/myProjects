export interface UserDB{
    user: string;
    _id: string;
    email: string;
    password?: string;
    chats?: any;
}