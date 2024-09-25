import {createSlice} from '@reduxjs/toolkit';
import {ChatGroup} from "../../types.ts";
import reducers from "./reducers.ts";


export interface ChatGroupsState {
    byId: Record<string, ChatGroup>;
    allIds: string[];
    selectedChatGroupId: string | null;
}

const initialState: ChatGroupsState = {
    byId: {
        'chat1': {
            id: 'chat1',
            name: 'Alice and Bob Chat',
            date_last_message_received: '2023-10-01T10:15:00Z',
            date_created: '2023-09-30T09:00:00Z',
            user_ids: ['user1', 'user2'],
            message_ids: ['msg1', 'msg2', 'msg3', 'msg4'],
            date_deleted: null,
            last_message_content: 'See you later!',
            last_message_user_id: 'user2',
        },
        'chat2': {
            id: 'chat2',
            name: 'Project Team',
            date_last_message_received: null,
            date_created: '2023-10-01T08:00:00Z',
            user_ids: ['user1', 'user2', 'user3'],
            message_ids: [],
            date_deleted: null,
            last_message_content: '',
            last_message_user_id: '',
        },
        'chat3': {
            id: 'chat3',
            name: null,
            date_last_message_received: '2023-10-05T09:15:00Z',
            date_created: '2023-10-01T08:00:00Z',
            user_ids: ['user1', 'user3'],
            message_ids: ['msg5'],
            date_deleted: null,
            last_message_content: 'Did you get my email?',
            last_message_user_id: 'user3',
        },
        'chat4': {
            id: 'chat2',
            name: null,
            date_last_message_received: '2024-09-05T09:15:00Z',
            date_created: '2024-09-01T11:00:00Z',
            user_ids: ['user1', 'user2', 'user3'],
            message_ids: ['msg6', 'msg7'],
            date_deleted: null,
            last_message_content: 'You know it!',
            last_message_user_id: 'user2',
        },
    },
    allIds: ['chat1', 'chat2', 'chat3', 'chat4'],
    selectedChatGroupId: null,
};


const index = createSlice({
    name: 'chatGroups',
    initialState,
    reducers
});

export const {
    editChatGroupName,
    addChatGroup,
    setSelectedChatGroup,
    addMessageToChatGroup,
    deleteMessageFromChatGroup
} = index.actions;
export default index.reducer;
