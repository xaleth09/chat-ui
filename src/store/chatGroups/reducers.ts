import {PayloadAction} from "@reduxjs/toolkit";
import {ChatGroup, ChatGroupId, MessageId} from "../../types.ts";
import {ChatGroupsState} from "./index.ts";

const editChatGroupName = (state: ChatGroupsState, action: PayloadAction<{ id: ChatGroupId | null | undefined, newName: string }>) => {
    const {id, newName} = action.payload;
    if (!id || !state.byId[id]) {
        return;
    }

    state.byId[id].name = newName;
};

const addChatGroup = (state: ChatGroupsState, action: PayloadAction<ChatGroup>) => {
    const chatGroup = action.payload;
    if (!state.byId[chatGroup.id]) {
        state.byId[chatGroup.id] = chatGroup;
        state.allIds.push(chatGroup.id);
    }
};

const setSelectedChatGroup = (state: ChatGroupsState, action: PayloadAction<string>) => {
    state.selectedChatGroupId = action.payload;
};

const addMessageToChatGroup = (state: ChatGroupsState, action: PayloadAction<{
    chatGroupId: ChatGroupId,
    newMessageId: MessageId
}>) => {
    const {chatGroupId, newMessageId} = action.payload;
    if (!state.byId[chatGroupId]) {
        return;
    }

    state.byId[chatGroupId].message_ids.push(newMessageId);
};

const deleteMessageFromChatGroup = (
    state: ChatGroupsState,
    action: PayloadAction<{ chatGroupId: ChatGroupId; messageId: MessageId }>
) => {
    const {chatGroupId, messageId} = action.payload;

    const chatGroup = state.byId[chatGroupId];
    if (!chatGroup) {
        return;
    }

    const index = chatGroup.message_ids.indexOf(messageId);
    if (index !== -1) {
        chatGroup.message_ids.splice(index, 1);
    }
};

export default {
    editChatGroupName,
    addChatGroup,
    setSelectedChatGroup,
    addMessageToChatGroup,
    deleteMessageFromChatGroup
};
