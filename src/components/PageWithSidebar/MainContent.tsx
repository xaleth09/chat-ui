import styled from "styled-components";
import {Column, Row} from "../FlexBox.tsx";
import {ReactNode} from "react";
import {SPACING} from "../../design-tokens";

const HeaderBar = styled(Row).attrs({$crossAxisAlignment: 'center'})`
    height: 48px;
    padding: ${SPACING.SM.px};
    border-bottom: 1px solid darkgrey;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
`;

const Layout = styled(Column)`
    width: 100%;
    overflow-y: auto;
`;

type Props = {
    children: ReactNode;
}

const MainContent = ({children}: Props) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

MainContent.HeaderBar = HeaderBar;

export {MainContent};
