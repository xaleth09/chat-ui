import {PayloadAction} from "@reduxjs/toolkit";
import {Message, MessageId} from "../../types.ts";
import {MessagesState} from "./index.ts";

const addMessage = (
    state: MessagesState,
    action: PayloadAction<{ message: Message }>
) => {
    const {message} = action.payload;
    const {id} = message;
    state.byId[id] = message;
    state.allIds.push(id);
};

const deleteMessage = (state: MessagesState, action: PayloadAction<{ id: MessageId }>) => {
    const {id} = action.payload;
    const message = state.byId[id];
    if (message && !message.date_deleted) {
        message.date_deleted = new Date().toISOString();
    }
};

const deleteMessages = (state: MessagesState, action: PayloadAction<{ ids: MessageId[] }>) => {
    const {ids} = action.payload;
    for(let id of ids){
        const message = state.byId[id];
        if (message && !message.date_deleted) {
            message.date_deleted = new Date().toISOString();
        }
    }
};


export default {
    addMessage,
    deleteMessage,
    deleteMessages
};
