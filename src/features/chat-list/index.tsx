import {
    useSelectChatGroupIds,
    useSelectSelectedChatGroupId
} from "../../store/chatGroups/selectors.ts";
import {ChatListRow} from "./ChatListRow.tsx";
import {Row, Span} from "../../components";
import {MdChatBubbleOutline} from "react-icons/md";
import {SIZES, SPACING} from "../../design-tokens";
import styled from "styled-components";

const StartChatButton = styled(Row)`
    align-self: flex-start;
    margin: ${SIZES.SM.px} ${SIZES.XS.px};
    padding: ${SIZES.XXS.px} ${SIZES.SM.px};
    border-radius: ${SIZES.XS.px};
    background-color: springgreen;
    cursor: pointer;
`;

export const ChatList = () => {
    const chatGroupIds = useSelectChatGroupIds();
    const selectedChatGroupId = useSelectSelectedChatGroupId();

    return (
        <>
            <StartChatButton
                $crossAxisAlignment='center'
                $gap={SPACING.XXXS.px}
            >
                <MdChatBubbleOutline/>
                <Span>Start Chat</Span>
            </StartChatButton>
            {chatGroupIds.map((id, index) => (
                <ChatListRow
                    key={id}
                    id={id}
                    selected={selectedChatGroupId === id}
                    isFirst={index === 0}
                />
            ))}
        </>
    );
};
