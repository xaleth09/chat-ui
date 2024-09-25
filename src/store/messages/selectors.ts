// hooks/useMessagesByChatGroup.ts
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {RootState} from '../../store';
import {Message, MessageId} from '../../types';

const selectMessagesState = (state: RootState) => state.messages;

export const useSelectMessageById = (messageId: MessageId): Message | undefined | null => {
    const selectMessageById = useMemo(
        () =>
            createSelector(
                [selectMessagesState],
                (messagesState) => {
                    if (!messageId) {
                        return null;
                    }
                    const message = messagesState.byId[messageId];
                    if (!message) {
                        return null;
                    }
                    return message;
                }
            ),
        [messageId]
    );

    return useSelector((state: RootState) => selectMessageById(state));
};
