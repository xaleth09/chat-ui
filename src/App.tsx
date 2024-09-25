import {PageWithSidebar} from "./components/PageWithSidebar";
import {ChatWindow} from "./features/chat-window";
import {ChatList} from "./features/chat-list";
import {
    MdCheck,
    MdCheckCircle,
    MdCheckCircleOutline,
    MdDelete,
    MdModeEditOutline,
    MdOutlineCancel
} from "react-icons/md";
import {H2, Row} from "./components";
import {useSelectChatGroupById, useSelectSelectedChatGroupId} from "./store/chatGroups/selectors.ts";
import styled from "styled-components";
import {useSelectUserFirstNamesByIds} from "./store/users/selectors.ts";
import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {SPACING} from "./design-tokens";
import {useDispatch} from "react-redux";
import {editChatGroupName} from "./store/chatGroups";

const IconButton = styled(Row)`
    cursor: pointer;
`;

const DeleteButton = styled(IconButton)`
    margin-left: auto;
    cursor: pointer;
`;

function App() {
    const dispatch = useDispatch();
    const selectedChatGroupId = useSelectSelectedChatGroupId();
    const {name: chatGroupName, user_ids} = useSelectChatGroupById(selectedChatGroupId) || {};
    const firstNames = useSelectUserFirstNamesByIds(user_ids);
    const chatGroupDisplayName = useMemo(() => chatGroupName || firstNames.join(', '), [chatGroupName, firstNames]);
    const [editingName, setEditingName] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');

    const handleEditNameClick = useCallback(() => {
        setEditingName(!editingName);
        setNameInputValue(chatGroupDisplayName);
    }, [chatGroupDisplayName, editingName]);

    const saveNewNameClick = useCallback(() => {
        dispatch(editChatGroupName({id: selectedChatGroupId, newName: nameInputValue}));
        setEditingName(false);
    }, [dispatch, nameInputValue, selectedChatGroupId]);

    const handleEditNameOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNameInputValue(e.target.value);
    }, []);

    const handleDeleteChatGroupCliick = useCallback(() => {
        dispatch();
    }, []);

    return (
        <PageWithSidebar>
            <PageWithSidebar.Sidebar>
                <ChatList/>
            </PageWithSidebar.Sidebar>
            <PageWithSidebar.MainContent>
                {selectedChatGroupId ? (
                    <PageWithSidebar.MainContent.HeaderBar>
                        <Row $crossAxisAlignment={'center'} $gap={SPACING.XXS.px}>
                            {editingName ? (
                                <input value={nameInputValue} onChange={handleEditNameOnChange}/>
                            ) : (
                                <H2>{chatGroupDisplayName}</H2>
                            )}
                            {editingName ? (
                                <Row $gap={SPACING.XXXS.px}>
                                    <IconButton onClick={saveNewNameClick}>
                                        <MdCheckCircle color={'lightgreen'} size={20}/>
                                    </IconButton>
                                    <IconButton onClick={handleEditNameClick}>
                                        <MdOutlineCancel color={'red'} size={20}/>
                                    </IconButton>
                                </Row>
                            ) : (
                                <IconButton onClick={handleEditNameClick}>
                                    <MdModeEditOutline size={18}/>
                                </IconButton>
                            )}
                        </Row>
                        <DeleteButton>
                            <MdDelete color='red' size={24}/>
                        </DeleteButton>
                    </PageWithSidebar.MainContent.HeaderBar>
                ) : null}
                <ChatWindow/>
            </PageWithSidebar.MainContent>
        </PageWithSidebar>
    );
}

export default App;
