// hooks/useChatGroup.ts
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {RootState} from '../../store';
import {ChatGroup, ChatGroupId} from '../../types';

const selectChatGroupsState = (state: RootState) => state.chatGroups;

const selectSelectedChatGroupId = createSelector(
    [selectChatGroupsState],
    (chatGroupsState) => chatGroupsState.selectedChatGroupId
);

export const useSelectSelectedChatGroupId = () => {
    return useSelector(selectSelectedChatGroupId);
};

const selectChatGroupIds = createSelector(
    [selectChatGroupsState],
    (chatGroupsState) => chatGroupsState.allIds
);

export const useSelectChatGroupIds = (): string[] => {
    return useSelector(selectChatGroupIds);
};

export const useSelectChatGroupById = (chatGroupId: string | undefined | null): ChatGroup | undefined => {
    const selectChatGroupById = useMemo(
        () =>
            createSelector(
                [selectChatGroupsState],
                (chatGroupsState) => {
                    if(!chatGroupId){
                        return undefined;
                    }
                    const chatGroup = chatGroupsState.byId[chatGroupId];
                    if(!chatGroup){
                        return undefined;
                    }
                    return chatGroup;
                }
            ),
        [chatGroupId]
    );

    return useSelector((state: RootState) => selectChatGroupById(state));
};

export const useSelectMessageIdsByChatGroupId = (chatGroupId: ChatGroupId | null | undefined): string[] => {

    const selectMessageIdsByChatGroupId = useMemo(
        () =>
            createSelector(
                [selectChatGroupsState],
                (chatGroupsState) => {
                    if(!chatGroupId){
                        return [];
                    }

                    const chatGroup = chatGroupsState.byId[chatGroupId];
                    if (!chatGroup) {
                        return [];
                    }
                    return chatGroup.message_ids || [];
                }
            ),
        [chatGroupId]
    );

    return useSelector((state: RootState) => selectMessageIdsByChatGroupId(state));
};











const selectSortedChatGroups = createSelector(
    [selectChatGroupsState],
    (chatGroupsState) => {
        const chatGroupsArray = Object.values(chatGroupsState.byId);

        const chatGroupsSummary = chatGroupsArray.map((chatGroup) => ({
            id: chatGroup.id,
            name: chatGroup.name,
            date_last_message_received: chatGroup.date_last_message_received,
            date_created: chatGroup.date_created,
            last_message_content: chatGroup.last_message_content,
            last_message_user_id: chatGroup.last_message_user_id,
        }));

        chatGroupsSummary.sort((a, b) => {
            const dateA = a.date_last_message_received
                ? new Date(a.date_last_message_received).getTime()
                : 0;
            const dateB = b.date_last_message_received
                ? new Date(b.date_last_message_received).getTime()
                : 0;
            return dateB - dateA;
        });

        return chatGroupsSummary;
    }
);

export const useSelectChatGroupRows = () => {
    return useSelector(selectSortedChatGroups);
};

