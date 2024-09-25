import {RootState} from "../index.ts";
import {User} from "../../types.ts";
import {useMemo} from "react";
import {createSelector} from "reselect";
import {useSelector} from "react-redux";

const selectUsersState = (state: RootState) => state.users;

const selectCurrentUserId = createSelector(
    [selectUsersState],
    (usersState) => usersState.currentUserId
);

export const useSelectCurrentUserId = () => {
    return useSelector(selectCurrentUserId);
};

const selectAllUsers = createSelector(
    [selectUsersState],
    (usersState) => Object.values(usersState.byId)
);

export const useSelectAllUsers = () => {
    return useSelector(selectAllUsers);
};

export const useSelectUserById = (userId: string | undefined): User | undefined | null => {
    const selectUserById = useMemo(
        () =>
            createSelector(
                [selectUsersState],
                (usersState) => {
                    if (!userId) {
                        return null;
                    }
                    const user = usersState.byId[userId];
                    if (!user) {
                        return null;
                    }
                    return user;
                }
            ),
        [userId]
    );

    return useSelector((state: RootState) => selectUserById(state));
};


export const useSelectUserFirstNamesByIds = (userIds: string[] | undefined): string[] => {
    const selectUserFirstNamesByIds = useMemo(
        () =>
            createSelector(
                [selectUsersState],
                (usersState) => {
                    if(!userIds || userIds.length === 0){
                        return [];
                    }
                    return userIds.map((userId) => usersState.byId[userId]?.first_name || '');
                }
            ),
        [userIds]
    );

    return useSelector((state: RootState) =>
        selectUserFirstNamesByIds(state)
    );
};
