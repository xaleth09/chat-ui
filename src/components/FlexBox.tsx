import styled from "styled-components";

type SpacingAlignment =
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

type HorizontalAlignment = 'left' | 'right' | 'center' | 'stretch' | 'baseline';
type VerticalAlignment = 'top' | 'bottom' | 'center' | 'stretch' | 'baseline';

type ColumnMainAxisAlignment = VerticalAlignment | SpacingAlignment;
type ColumnCrossAxisAlignment = HorizontalAlignment;

type RowMainAxisAlignment = HorizontalAlignment | SpacingAlignment;
type RowCrossAxisAlignment = VerticalAlignment;

type SelfAlignment = HorizontalAlignment | VerticalAlignment | 'center' | 'stretch' | 'baseline' | 'auto';

type FlexBoxProps = {
    $flexGrow?: number;
    $flexShrink?: number;
    $flexBasis?: string;
    width?: string;
    $padding?: string;
    $margin?: string;
    $gap?: string;
    $rowGap?: number;
    $columnGap?: number;
    $backgroundColor?: string;
    $selfAlignment?: SelfAlignment;
    $reverse?: boolean,
    onClick?: () => void;
};

type ColumnProps = FlexBoxProps & {
    $mainAxisAlignment?: ColumnMainAxisAlignment;
    $crossAxisAlignment?: ColumnCrossAxisAlignment;
};

type RowProps = FlexBoxProps & {
    $mainAxisAlignment?: RowMainAxisAlignment;
    $crossAxisAlignment?: RowCrossAxisAlignment;
};

const mapMainAxisAlignment = (
    alignment: HorizontalAlignment | VerticalAlignment | SpacingAlignment,
    direction: 'row' | 'column'
): string | undefined => {
    if (alignment === 'center' || alignment.startsWith('space-')) {
        return alignment;
    }

    if (direction === 'row') {
        if (alignment === 'left') return 'flex-start';
        if (alignment === 'right') return 'flex-end';
    } else {
        if (alignment === 'top') return 'flex-start';
        if (alignment === 'bottom') return 'flex-end';
    }

    return undefined;
};

const mapCrossAxisAlignment = (
    alignment: HorizontalAlignment | VerticalAlignment,
    direction: 'row' | 'column'
): string | undefined => {
    if (alignment === 'center' || alignment === 'stretch' || alignment === 'baseline') {
        return alignment;
    }

    if (direction === 'row') {
        if (alignment === 'top') return 'flex-start';
        if (alignment === 'bottom') return 'flex-end';
    } else {
        if (alignment === 'left') return 'flex-start';
        if (alignment === 'right') return 'flex-end';
    }

    return undefined;
};

const mapSelfAlignment = (
    alignment: SelfAlignment,
    direction: 'row' | 'column'
): string | undefined => {
    if (alignment === 'center' || alignment === 'stretch' || alignment === 'baseline' || alignment === 'auto') {
        return alignment;
    }

    if (direction === 'row') {
        if (alignment === 'top') return 'flex-start';
        if (alignment === 'bottom') return 'flex-end';
    } else {
        if (alignment === 'left') return 'flex-start';
        if (alignment === 'right') return 'flex-end';
    }

    return undefined;
};

/** Styled Components */
const Column = styled.div<ColumnProps>`
    display: flex;
    ${({
           $flexGrow,
           $flexShrink,
           $flexBasis,
           width,
           $padding = 0,
           $margin = '0',
           $gap = 0,
           $rowGap,
           $columnGap,
           $backgroundColor,
           $mainAxisAlignment,
           $crossAxisAlignment,
           $selfAlignment,
           $reverse,
       }) => {
        const justifyContent = $mainAxisAlignment
                ? mapMainAxisAlignment($mainAxisAlignment, 'column')
                : undefined;
        const alignItems = $crossAxisAlignment
                ? mapCrossAxisAlignment($crossAxisAlignment, 'column')
                : undefined;
        return `
          flex-direction: ${$reverse ? 'column-reverse' : 'column'};
          padding: ${$padding};
          margin: ${$margin};
          gap: ${$gap};
          ${$backgroundColor ? `background-color: ${$backgroundColor};` : ''}
          ${$rowGap ? `row-gap: ${$rowGap};` : ''}
          ${$columnGap ? `column-gap: ${$columnGap};` : ''}
          ${width ? `width: ${width};` : ''}
          ${$flexGrow ? `flex-grow: ${$flexGrow};` : ''}
          ${$flexShrink ? `flex-shrink: ${$flexShrink};` : ''}
          ${$flexBasis ? `flex-basis: ${$flexBasis};` : ''}
          ${$selfAlignment ? `align-self: ${mapSelfAlignment($selfAlignment, 'column')};` : ''}
          ${alignItems ? `align-items: ${alignItems};` : ''}
          ${justifyContent ? `justify-content: ${justifyContent};` : ''}
        `;
    }}
`;

const Row = styled.div<RowProps>`
    display: flex;
    ${({
           $flexGrow,
           $flexShrink,
           $flexBasis,
           width,
           $padding = 0,
           $margin = '0',
           $gap = 0,
           $rowGap,
           $columnGap,
           $backgroundColor = 'transparent',
           $mainAxisAlignment,
           $crossAxisAlignment,
           $selfAlignment,
           $reverse
       }) => {
        const justifyContent = $mainAxisAlignment
                ? mapMainAxisAlignment($mainAxisAlignment, 'row')
                : undefined;
        const alignItems = $crossAxisAlignment
                ? mapCrossAxisAlignment($crossAxisAlignment, 'row')
                : undefined;
        return `
          flex-direction: ${$reverse ? 'row-reverse' : 'row'};
          padding: ${$padding};
          margin: ${$margin};
          gap: ${$gap};
          background-color: ${$backgroundColor};
          ${$rowGap ? `row-gap: ${$rowGap};` : ''}
          ${$columnGap ? `column-gap: ${$columnGap};` : ''}
          ${width ? `width: ${width};` : ''}
          ${$flexGrow ? `flex-grow: ${$flexGrow};` : ''}
          ${$flexShrink ? `flex-shrink: ${$flexShrink};` : ''}
          ${$flexBasis ? `flex-basis: ${$flexBasis};` : ''}
          ${$selfAlignment ? `align-self: ${mapSelfAlignment($selfAlignment, 'row')};` : ''}
          ${alignItems ? `align-items: ${alignItems};` : ''}
          ${justifyContent ? `justify-content: ${justifyContent};` : ''}
        `;
    }}
`;

export {Column, Row};
