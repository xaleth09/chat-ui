import React from 'react';
import styled from "styled-components";
import {COLORS, SIZES} from "../design-tokens";


type StyledButtonProps = {
    type?: "primary" | "secondary" | "tertiary";
    size?: 'inline' | 'fullwidth';
    disabled?: boolean;
    loading?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    height: ${SIZES.MD.px};
    border: 1px solid ${COLORS.BLACK};
    border-radius: ${SIZES.XXXS.px};
    cursor: pointer;
    ${({size}) => `
        width: ${size === 'fullwidth' ? '100%' : 'initial'};
    `}
`;

type Props = {
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | string[];
    className?: string;
} & StyledButtonProps;

export const Button = ({
                           size = 'fullwidth',
                           disabled,
                           loading,
                           onClick,
                           children,
                           className
                       }: Props) => {

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <StyledButton
            size={size}
            disabled={disabled}
            loading={loading}
            onClick={handleOnClick}
            className={className}
        >
            {children}
        </StyledButton>
    );
};
