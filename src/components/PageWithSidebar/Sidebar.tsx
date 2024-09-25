import {PropsWithChildren, useState} from 'react';
import styled from "styled-components";
import {Column} from "../FlexBox.tsx";
import {MdMenu} from "react-icons/md";
import {SPACING} from "../../design-tokens";

const SidebarLayout = styled(Column)`
    border-right: 1px solid darkgrey;
    min-width: 300px;
`;

const HamburgerMenuButton = styled.div`
    margin-top: ${SPACING.XXXS.px};
    margin-left: ${SPACING.XXXS.px};
`;

export const Sidebar = ({children}: PropsWithChildren) => {
    const [isOpen, setOpen] = useState(true);

    return (
        <SidebarLayout>
            <HamburgerMenuButton>
                <MdMenu size={32}/>
            </HamburgerMenuButton>
            {children}
        </SidebarLayout>
    );
};
