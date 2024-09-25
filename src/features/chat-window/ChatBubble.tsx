import {Column, Row, Span} from "../../components";
import styled from "styled-components";
import {ChatGroupId, MessageId} from "../../types.ts";
import {useSelectMessageById} from "../../store/messages/selectors.ts";
import {useSelectCurrentUserId, useSelectUserById} from "../../store/users/selectors.ts";
import {formatChatDate} from "../../utility/formatChatDate.ts";
import {SIZES, SPACING} from "../../design-tokens";
import {MdDelete} from "react-icons/md";
import {useCallback, useMemo, useState} from "react";
import {useDeleteMessage} from "./hooks/useDeleteMessage.ts";

const AVATAR_SIZE = SPACING.LG;

const Avatar = styled(Column)`
    height: ${AVATAR_SIZE.px};
    width: ${AVATAR_SIZE.px};
    margin-right: ${SPACING.XS.px};
    margin-top: ${SPACING.XXXS.px};
    border-radius: 50%;
    border: 1px solid darkslategray;
    background-color: lightgreen;
`;

const Bubble = styled(Column)<{ $sentByCurrentUser: boolean }>`
    max-width: 70%;
    border-radius: ${SIZES.MD.px};
    padding: ${SPACING.XXS.px} ${SPACING.MD.px};
    background-color: ${({$sentByCurrentUser}) => $sentByCurrentUser ? 'lightskyblue' : 'lightgreen'};
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

const MetaInfo = styled.span<{ $alignedRight: boolean }>`
    font-size: .75rem;
    margin-top: ${SPACING.XXXS.px};
    ${({$alignedRight}) => $alignedRight ? `
        align-self: flex-end;
        margin-right: ${SPACING.XS.val}px;    
    ` : `
        margin-left: ${AVATAR_SIZE.val + SPACING.MD.val}px;
    `}
`;

type Props = {
    messageId: MessageId;
    chatGroupId: ChatGroupId;
}

export const ChatBubble = ({messageId, chatGroupId}: Props) => {
    const [hovering, setHovering] = useState(false);
    const currentUserId = useSelectCurrentUserId();
    const {
        sender_user_id,
        content,
        date_sent,
    } = useSelectMessageById(messageId) || {};
    const {deleteMessage} = useDeleteMessage({messageId, chatGroupId});

    const handleOnMouseEnter = useCallback(() => {
        setHovering(true);
    }, [setHovering]);

    const handleOnMouseLeave = useCallback(() => {
        setHovering(false);
    }, [setHovering]);

    const handleDeleteOnClick = () => {
        deleteMessage();
    };

    const {first_name} = useSelectUserById(sender_user_id) || {};
    const firstLetterOfFirstName = useMemo(() => first_name?.split('')[0], [first_name]);
    const sentByCurrentUser = useMemo(() => currentUserId === sender_user_id, [currentUserId, sender_user_id]);

    return (
        <Column
            $padding={`${SPACING.SM.px} ${SPACING.MD.px}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <Row $reverse={sentByCurrentUser}>
                {!sentByCurrentUser ? (
                    <Avatar
                        $selfAlignment={'top'}
                        $mainAxisAlignment={'center'}
                        $crossAxisAlignment={'center'}
                    >
                        <Span>{firstLetterOfFirstName}</Span>
                    </Avatar>
                ) : null}
                <Row
                    $reverse={sentByCurrentUser}
                    $crossAxisAlignment={'center'}
                    $gap={SPACING.XXXS.px}
                >
                    <Bubble $sentByCurrentUser={sentByCurrentUser}>
                        <Span>{content}</Span>
                    </Bubble>
                    {hovering ? (
                        <DeleteButton onClick={handleDeleteOnClick}>
                            <MdDelete color='red'/>
                        </DeleteButton>
                    ) : null}
                </Row>
            </Row>
            <MetaInfo $alignedRight={sentByCurrentUser}>
                {formatChatDate(date_sent)}
            </MetaInfo>
            {/*<Reactions/>*/}
        </Column>
    );
};
