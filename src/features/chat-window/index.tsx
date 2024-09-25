import {ChatInput} from "./ChatInput.tsx";
import {Button, Column, Row} from "../../components";
import {useSelectMessageIdsByChatGroupId, useSelectSelectedChatGroupId} from "../../store/chatGroups/selectors.ts";
import {ChatBubble} from "./ChatBubble.tsx";
import styled from "styled-components";
import {SPACING} from "../../design-tokens";
import {useSelectAllUsers, useSelectCurrentUserId} from "../../store/users/selectors.ts";
import React, {useCallback, useMemo} from "react";
import {useDispatch} from "react-redux";
import {useSendMessage} from "./hooks/useSendMessage.ts";
import {UserId} from "../../types.ts";
import {useReceiveMessage} from "./hooks/useReceiveMessage.ts";

const BottomAnchorColumn = styled(Column)`
    margin-top: auto;
`;

const FakeReceiveMessageButton = styled(Button)`
    align-self: start;
`;

export const ChatWindow = () => {
    const selectedChatGroupId = useSelectSelectedChatGroupId();
    const {sendMessage} = useReceiveMessage({chatGroupId: selectedChatGroupId});
    const messageIds = useSelectMessageIdsByChatGroupId(selectedChatGroupId);
    const users = useSelectAllUsers();

    const handleSendFakeMessageClick = useCallback((id: UserId) => {
        sendMessage({userId: id});
    }, [sendMessage]);

    const fakeReceiveMessageButtons = useMemo(() => {
        return users.map(({id, first_name}) => {
            const onClick = () => {
                handleSendFakeMessageClick(id);
            };

            return (
                <FakeReceiveMessageButton key={id} onClick={onClick}>
                    Fake a message from {first_name}
                </FakeReceiveMessageButton>
            );
        });
    }, [users, handleSendFakeMessageClick]);

    return (
        <>
            {!selectedChatGroupId || messageIds.length === 0 ? null : (
                <Column>
                    {messageIds.map((id) => (
                        <ChatBubble key={id} messageId={id} chatGroupId={selectedChatGroupId}/>
                    ))}
                </Column>
            )}
            <BottomAnchorColumn>
                {selectedChatGroupId ? (
                    <Row $gap={SPACING.XXS.px} $padding={SPACING.XXS.px}>
                        {fakeReceiveMessageButtons}
                    </Row>
                ) : null}
                <ChatInput/>
            </BottomAnchorColumn>
        </>
    );
};
