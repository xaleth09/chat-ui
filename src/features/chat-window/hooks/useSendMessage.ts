import {useDispatch} from "react-redux";
import {useSelectCurrentUserId} from "../../../store/users/selectors.ts";
import {useSelectMessageIdsByChatGroupId} from "../../../store/chatGroups/selectors.ts";
import {ChatGroupId} from "../../../types.ts";
import {addMessage} from "../../../store/messages";
import {useCallback} from "react";
import {addMessageToChatGroup} from "../../../store/chatGroups";

export const useSendMessage = ({chatGroupId}: {chatGroupId: ChatGroupId}) => {
    const dispatch = useDispatch();
    const currentUserId = useSelectCurrentUserId();
    const messageIds = useSelectMessageIdsByChatGroupId(chatGroupId);

    const sendMessage = useCallback(({content}: { content: string }) => {
        const newMessageId = `msg${messageIds.length + 1}`;

        const newMessage = {
            id: newMessageId,
            sender_user_id: currentUserId,
            content,
            date_sent: new Date().toISOString(),
            date_deleted: null,
            date_read: null,
            reactions: [],
        };

        dispatch(addMessage({message: newMessage}));
        dispatch(addMessageToChatGroup({chatGroupId, newMessageId}));
    }, [chatGroupId, currentUserId, dispatch, messageIds.length]);

    return {
        sendMessage
    };
};
