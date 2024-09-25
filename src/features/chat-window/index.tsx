import {ChatInput} from "./ChatInput.tsx";
import {Column} from "../../components";
import {useSelectMessageIdsByChatGroupId, useSelectSelectedChatGroupId} from "../../store/chatGroups/selectors.ts";
import {ChatBubble} from "./ChatBubble.tsx";

export const ChatWindow = () => {
    const selectedChatGroupId = useSelectSelectedChatGroupId();
    const messageIds = useSelectMessageIdsByChatGroupId(selectedChatGroupId);
    return (
        <>
            <Column>
                {messageIds.map((id) => (
                    <ChatBubble key={id} messageId={id} chatGroupId={selectedChatGroupId}/>
                ))}
            </Column>
            <ChatInput/>
        </>
    );
};
