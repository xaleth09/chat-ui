// messagesSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {Message} from "../../types.ts";
import reducers from "./reducers.ts";

export interface MessagesState {
    byId: Record<string, Message>;
    allIds: string[];
}

const initialState: MessagesState = {
    byId: {
        'msg1': {
            id: 'msg1',
            content: 'Hey Bob, how are you?',
            date_sent: '2023-10-01T10:00:00Z',
            date_read: '2023-10-01T10:00:00Z',
            reactions: [],
            sender_user_id: 'user1',
            date_deleted: null,
        },
        'msg2': {
            id: 'msg2',
            content: 'Hi Alice! I am doing well, thanks for asking.',
            date_sent: '2023-10-01T10:05:00Z',
            date_read: '2023-10-01T10:07:00Z',
            reactions: [],
            sender_user_id: 'user2',
            date_deleted: null,
        },
        'msg3': {
            id: 'msg3',
            content: 'Are we still on for the meeting tomorrow?',
            date_sent: '2023-10-01T10:10:00Z',
            date_read: '2023-10-01T10:12:00Z',
            reactions: [],
            sender_user_id: 'user1',
            date_deleted: null,
        },
        'msg4': {
            id: 'msg4',
            content: 'Yes, see you at 9 AM!',
            date_sent: '2023-10-01T10:15:00Z',
            date_read: '2023-10-01T10:19:00Z',
            reactions: [],
            sender_user_id: 'user2',
            date_deleted: null,
        },
        'msg5': {
            id: 'msg5',
            content: 'Hey, you!',
            date_sent: '2023-10-05T09:15:00Z',
            date_read: '2023-10-05T09:15:00Z',
            reactions: [],
            sender_user_id: 'user3',
            date_deleted: null,
        },
        'msg6': {
            id: 'msg6',
            content: 'Party time!',
            date_sent: '2024-09-05T08:15:00Z',
            date_read: '2024-09-05T09:15:00Z',
            reactions: [],
            sender_user_id: 'user3',
            date_deleted: null,
        },
        'msg7': {
            id: 'msg7',
            content: 'You know it!',
            date_sent: '2024-09-05T09:15:00Z',
            date_read: '2024-09-05T09:16:00Z',
            reactions: [],
            sender_user_id: 'user2',
            date_deleted: null,
        },
    },
    allIds: ['msg1', 'msg2', 'msg3', 'msg4', 'msg5'],
};

const index = createSlice({
    name: 'messages',
    initialState,
    reducers,
});

export const { addMessage, deleteMessage } = index.actions;
export default index.reducer;
