import {useDispatch} from "react-redux";
import {useSelectMessageIdsByChatGroupId} from "../../../store/chatGroups/selectors.ts";
import {ChatGroupId, UserId} from "../../../types.ts";
import {addMessage} from "../../../store/messages";
import {useCallback} from "react";
import {addMessageToChatGroup} from "../../../store/chatGroups";

export const useReceiveMessage = ({chatGroupId}: { chatGroupId: ChatGroupId | null | undefined, }) => {
    const dispatch = useDispatch();
    const messageIds = useSelectMessageIdsByChatGroupId(chatGroupId);

    const sendMessage = useCallback(({userId}: {userId: UserId }) => {
        if (!chatGroupId) {
            return;
        }

        const newMessageId = `msg${messageIds.length + 1}`;

        const newMessage = {
            id: newMessageId,
            sender_user_id: userId,
            content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. At vivamus auctor; cubilia dis velit cursus.',
            date_sent: new Date().toISOString(),
            date_deleted: null,
            date_read: null,
            reactions: [],
        };

        dispatch(addMessage({message: newMessage}));
        dispatch(addMessageToChatGroup({chatGroupId, newMessageId}));
    }, [chatGroupId, dispatch, messageIds.length]);

    return {
        sendMessage
    };
};
