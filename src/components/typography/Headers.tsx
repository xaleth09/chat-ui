import styled from "styled-components";
import {BaseTypography, BaseTypographyProps} from "./BaseTypography";

type H1Props = {} & BaseTypographyProps<'h1'>;
export const H1 = styled(BaseTypography).attrs({forwardedAs: 'h1'})<H1Props>``;

type H2Props = {} & BaseTypographyProps<'h2'>;
export const H2 = styled(BaseTypography).attrs({forwardedAs: 'h2'})<H2Props>``;

type H3Props = {} & BaseTypographyProps<'h3'>;
export const H3 = styled(BaseTypography).attrs({forwardedAs: 'h3'})<H3Props>``;
