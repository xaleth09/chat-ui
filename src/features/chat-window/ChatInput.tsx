import styled from "styled-components";
import {MdSend} from "react-icons/md";
import {Row} from "../../components";
import {SIZES, SPACING} from "../../design-tokens";
import {ChangeEvent, useState} from "react";
import {useSendMessage} from "./hooks/useSendMessage.ts";
import {useSelectSelectedChatGroupId} from "../../store/chatGroups/selectors.ts";

const ChatBox = styled(Row)`
    margin-top: auto;
    border-top: 1px solid darkgrey;
    padding: ${SPACING.XS.px};
    gap: ${SPACING.XXXS.px};
`;

const Input = styled.textarea`
    border: 1px solid darkgrey;
    padding: ${SIZES.XS.px} ${SIZES.SM.px};
    border-radius: ${SIZES.MD.px};
    width: 100%;
`;

const SendButton = styled.button<{ disabled: boolean }>`
    height: ${SIZES.XL.px};
    width: ${SIZES.XL.px};
    border-radius: 50%;
    padding: 7px ${SPACING.XXS.px};
    border: none;
    text-align: center;
    cursor: ${({disabled}) => disabled ? `not-allowed` : `pointer`};
`;

const SendIcon = styled(MdSend)`
    margin-top: 2px;
    margin-left: 3px;
`;

export const ChatInput = () => {
    const [inputCopy, setInputCopy] = useState('');
    const selectedChatGroupId = useSelectSelectedChatGroupId();
    const {sendMessage} = useSendMessage({chatGroupId: selectedChatGroupId || ''});

    const handleChatInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputCopy(e.target.value);
    };

    const handleOnClickSend = () => {
        sendMessage({content: inputCopy});
        setInputCopy('');
    };

    return (
        <ChatBox $crossAxisAlignment={'center'}>
            <Input
                disabled={!selectedChatGroupId}
                value={inputCopy}
                placeholder={'Chat away!'}
                onChange={handleChatInputChange}
            />
            <SendButton
                disabled={!selectedChatGroupId}
                onClick={handleOnClickSend}
            >
                <SendIcon size={16}/>
            </SendButton>
        </ChatBox>
    );
};
