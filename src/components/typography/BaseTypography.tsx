import {COLORS, ColorValues} from "../../design-tokens";
import styled from "styled-components";
import React from 'react';

export type BaseTypographyProps<T extends React.ElementType> = {
    as?: T;
    centered?: boolean;
    color?: ColorValues;
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
    children: React.ReactNode | string;
} & React.ComponentPropsWithoutRef<T>

const StyledBaseTypography = styled.div<BaseTypographyProps<any>>`
    ${({$centered, $color, $whiteSpace, $wordBreak}) => `
        ${$centered ? 'text-align: center;' : ''}
        color: ${$color};
        white-space: ${$whiteSpace};
        word-break: ${$wordBreak};
    `}
}
`;

export const BaseTypography = <T extends React.ElementType = 'p'>
({
     as,
     centered,
     color = COLORS.BLACK,
     whiteSpace = 'normal',
     wordBreak = 'break-word',
     children,
     style,
     className,
 }: BaseTypographyProps<T>) => {
    const Component = as || 'p';
    return (
        <StyledBaseTypography
            as={Component}
            $centered={centered}
            $color={color}
            $whiteSpace={whiteSpace}
            $wordBreak={wordBreak}
            style={style}
            className={className}
        >
            {children}
        </StyledBaseTypography>
    );
};
