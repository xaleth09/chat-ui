import {ReactNode} from "react";
import {Row} from "../FlexBox.tsx";
import styled from "styled-components";
import {MainContent} from "./MainContent.tsx";
import {Sidebar} from "./Sidebar.tsx";

const Page = styled(Row)`
    width: 100%;
    min-height: 100%;
`;

type Props = {
    children: ReactNode;
}

const PageWithSidebar = ({children}: Props) => {

    return (
        <Page>
            {children}
        </Page>
    );
};

PageWithSidebar.Sidebar = Sidebar;
PageWithSidebar.MainContent = MainContent;

export {PageWithSidebar};


