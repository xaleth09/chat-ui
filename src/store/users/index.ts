// usersSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {User, UserId} from "../../types.ts";

interface UsersState {
    byId: Record<UserId, User>;
    allIds: string[];
    currentUserId: UserId;
}

const initialState: UsersState = {
    byId: {
        'user1': {
            id: 'user1',
            user_name: 'alice123',
            first_name: 'Alice',
            last_name: 'Smith',
            avatar_url: 'https://example.com/avatars/alice.jpg',
        },
        'user2': {
            id: 'user2',
            user_name: 'bob456',
            first_name: 'Bob',
            last_name: 'Johnson',
            avatar_url: 'https://example.com/avatars/bob.jpg',
        },
        'user3': {
            id: 'user3',
            user_name: 'carol789',
            first_name: 'Carol',
            last_name: 'Williams',
            avatar_url: 'https://example.com/avatars/carol.jpg',
        },
        'user4': {
            id: 'user4',
            user_name: 'fry789',
            first_name: 'Phillip',
            last_name: 'Fry',
            avatar_url: 'https://example.com/avatars/phillip.jpg',
        },
    },
    allIds: ['user1', 'user2', 'user3', 'user4'],
    currentUserId: 'user1'
};

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

// export const {} = users.actions;
export default users.reducer;
