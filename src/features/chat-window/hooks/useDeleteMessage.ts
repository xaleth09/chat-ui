import {useDispatch} from "react-redux";
import {deleteMessage as deleteMessageAction} from "../../../store/messages";
import {deleteMessageFromChatGroup} from "../../../store/chatGroups";
import {ChatGroupId, MessageId} from "../../../types.ts";
import {useCallback} from "react";

export const useDeleteMessage = ({messageId, chatGroupId}: { messageId: MessageId | undefined, chatGroupId: ChatGroupId | undefined }) => {
    const dispatch = useDispatch();
    const deleteMessage = useCallback(() => {
        if(!messageId || !chatGroupId){
            return;
        }

        dispatch(deleteMessageAction({id: messageId}));
        dispatch(deleteMessageFromChatGroup({chatGroupId, messageId}));
    }, [chatGroupId, dispatch, messageId]);

    return {deleteMessage};
};
