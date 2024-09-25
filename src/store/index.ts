// index.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users';
import messagesReducer from './messages';
import chatGroupsReducer from './chatGroups';

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    chatGroups: chatGroupsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store; // Export the store
