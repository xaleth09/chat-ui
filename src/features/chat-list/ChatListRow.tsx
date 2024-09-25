import {useCallback, useMemo} from 'react';
import {useSelectChatGroupById} from "../../store/chatGroups/selectors.ts";
import {Column, H3} from "../../components";
import {useSelectUserById, useSelectUserFirstNamesByIds} from "../../store/users/selectors.ts";
import styled from "styled-components";
import {SPACING} from "../../design-tokens";
import {Span} from "../../components";
import {formatChatDate} from "../../utility/formatChatDate.ts";
import {useDispatch} from "react-redux";
import {setSelectedChatGroup} from "../../store/chatGroups";

const Container = styled(Column)<{ $selected: boolean, $isFirst: boolean }>`
    cursor: pointer;
    border-bottom: 1px solid darkgrey;
    ${({$selected, $isFirst}) => `
        background-color: ${$selected ? 'lightskyblue' : 'white'};
        ${$isFirst ? 'border-top: 1px solid darkgrey;' : ''}
    `}
`;

const DateCopy = styled(Span)`
    align-self: flex-end;
    font-size: .75rem;
`;

type Props = {
    id: string,
    selected: boolean,
    isFirst: boolean,
}

export const ChatListRow = ({id, selected, isFirst}: Props) => {
    const dispatch = useDispatch();
    const {
        name,
        date_last_message_received,
        date_created,
        last_message_content,
        last_message_user_id,
        user_ids = [],
    } = useSelectChatGroupById(id) || {};
    const {first_name} = useSelectUserById(last_message_user_id) || {};
    const firstNames = useSelectUserFirstNamesByIds(user_ids);

    const dateString = useMemo(() => {
        let unformattedDateString = date_created || '';
        if (date_last_message_received) {
            unformattedDateString = date_last_message_received;
        }

        return formatChatDate(unformattedDateString);
    }, [date_created, date_last_message_received]);

    const handleSelectChatGroup = useCallback(() => {
        dispatch(setSelectedChatGroup(id));
    }, [dispatch, id]);

    return (
        <Container
            $selected={selected}
            $padding={`${SPACING.XS.px} ${SPACING.SM.px}`}
            onClick={handleSelectChatGroup}
            $isFirst={isFirst}
        >
            <H3>{name || firstNames.join(', ')}</H3>
            <span>{first_name ? `${first_name}:` : ''} {last_message_content}</span>
            <DateCopy>{dateString}</DateCopy>
        </Container>
    );
};
