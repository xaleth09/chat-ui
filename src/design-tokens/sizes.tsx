const NONE = {val: 0, px: '0', rem: '0'} as const;
const XXXS = {val: 4, px: '4px', rem: `${4 / 16}rem`} as const;
const XXS = {val: 8, px: '8px', rem: `${8 / 16}rem`} as const;
const XS = {val: 12, px: '12px', rem: `${12 / 16}rem`} as const;
const SM = {val: 16, px: '16px', rem: `${16 / 16}rem`} as const;
const MD = {val: 24, px: '24px', rem: `${24 / 16}rem`} as const;
const LG = {val: 32, px: '32px', rem: `${32 / 16}rem`} as const;
const XL = {val: 48, px: '48px', rem: `${48 / 16}rem`} as const;
const XXL = {val: 64, px: '64px', rem: `${64 / 16}rem`} as const;
const XXXL = {val: 128, px: '128px', rem: `${128 / 16}rem`} as const;

const BASE = {
    /**
     * NONE: { val: 0, px: '0px', rem: `${0 / 16}rem` }
     */
    NONE,
    /**
     * XXXS: { val: 4, px: '4px', rem: `${4 / 16}rem` }
     */
    XXXS,

    /**
     * XXS: { val: 8, px: '8px', rem: `${8 / 16}rem` }
     */
    XXS,

    /**
     * XS: { val: 12, px: '12px', rem: `${12 / 16}rem` }
     */
    XS,

    /**
     * SM: { val: 16, px: '16px', rem: `${16 / 16}rem` }
     */
    SM,

    /**
     * MD: { val: 24, px: '24px', rem: `${24 / 16}rem` }
     */
    MD,

    /**
     * LG: { val: 32, px: '32px', rem: `${32 / 16}rem` }
     */
    LG,

    /**
     * XL: { val: 48, px: '48px', rem: `${48 / 16}rem` }
     */
    XL,

    /**
     * XXL: { val: 64, px: '64px', rem: `${64 / 16}rem` }
     */
    XXL,

    /**
     * XXXL: { val: 128, px: '128px', rem: `${128 / 16}rem` }
     */
    XXXL,
} as const;

export const SIZES = {
    ...BASE,
} as const;

export const SPACING = {
    ...BASE,
} as const;

export const MEDIA = {
    MOBILE_S: {val: 320, px: '320px'},
    MOBILE_M: {val: 375, px: '375px'},
    MOBILE_L: {val: 425, px: '425px'},
    TABLET: {val: 768, px: '768px'},
    LAPTOP: {val: 1024, px: '1024px'},
    LAPTOP_L: {val: 1440, px: '1440px'},
    DESKTOP: {val: 2560, px: '2560px'},
} as const;

export type SizeKeys = keyof typeof SIZES;
export type SizeValues = (typeof SIZES)[keyof typeof SIZES];
export type SpacingKeys = keyof typeof SPACING;
export type SpacingValues = (typeof SPACING)[keyof typeof SPACING];
export type MediaValues = (typeof MEDIA)[keyof typeof MEDIA];
