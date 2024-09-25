const PRIMARY = {
    PRIMARY_LIGHTEST: '#6fd2de',
    PRIMARY_LIGHTER: '#00889c',
    PRIMARY: '#004e64',
    PRIMARY_DARKER: '#397067',
    PRIMARY_DARKEST: '#004e64',
};

const SECONDARY = {
    SECONDARY_LIGHTEST: '',
    SECONDARY_LIGHT: '',
    SECONDARY: '',
};

const TERTIARY = {
    TERTIARY_LIGHTEST: '',
    TERTIARY_LIGHT: '',
    TERTIARY: '#da5b01',
    TERTIARY_DARKER: '#75280c'
};

const SUCCESS = {
    SUCCESS_LIGHTEST: '',
    SUCCESS: '',
};

const DANGER = {
    DANGER: '',
};

const WARNING = {
    WARNING: '',
};

export const BALL_COLOR = {
    ONE: '#ffd500',
    TWO: '#003cb1',
    THREE: '#e71d00',
    FOUR: '#4f019c',
    FIVE: '#fa4e01',
    SIX: '#0e5d00',
    SEVEN: '#6e061a',
    EIGHT: '#000000',
};

const GREYSCALE = {
    BLACK: '#1d1e18',
    GREY_DARKEST: '#4b4a41',
    GREY_DARKER: '#8e6c5c',
    GREY_DARK: '#7f7d72',
    GREY: '#9a9484',
    GREY_LIGHTER: '#bba292',
    GREY_LIGHTEST: '#ddc9b7',
    WHITE: '#f8f6ea',
    TRANSPARENT: 'transparent',
};

export const COLORS = {
    ...PRIMARY,
    ...SECONDARY,
    ...TERTIARY,
    ...SUCCESS,
    ...DANGER,
    ...WARNING,
    ...GREYSCALE,
    ...BALL_COLOR,
} as const;

export type ColorValues = (typeof COLORS)[keyof typeof COLORS];
export type BallColorValues = (typeof BALL_COLOR)[keyof typeof BALL_COLOR];
