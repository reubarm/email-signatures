import rgba from "polished/lib/color/rgba";

export const spaces = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  "80": "20rem",
  "800": "800px",
};

export const sizes = {
  ...spaces,
  full: "100%",
  half: "50%",
  third: "33.33333%",
  quarter: "25%",
  fifth: "20%",
  sixth: "16.66667%",
  eighth: "12.5%",
  fourth: "8.33333%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
};

export const color = {
  athens_gray: {
    base: { value: "#F7F8FC" },
    light: { value: "#8C8C97" },
  },
  charcoal: {
    base: { value: "#262835" },
    light: { value: "#2b2e3d" },
    muted: { value: rgba("#262835", 0.5) },
  },
  blue: {
    10: { value: "#C0DEF8" },
    20: { value: "#F7FAFD" },
    30: { value: "#E5F2FC" },
    40: { value: "#C0DEF8" },
    50: { value: "#99CAF4" },
    60: { value: "#75B6EF" },
    70: { value: "#5DA6EC" },
    80: { value: "#4689DA" },
    90: { value: "" },
    100: { value: "#3260B0" },
    110: { value: "#3871C2" },
  },
  mango: {
    base: { value: "#FFB900" },
  },
  white: {
    base: { value: "#FFFFFF" },
  },
  white_lilac: {
    base: { value: "#F7F7FC" },
  },
  grey: {
    base: { value: "#E4E5EA" },
    highlight: { value: "#EEEEEE" },
    light: { value: "#9699AA" },
    dark: { value: "#7C7E8D" },
    mutated: { value: "#BCBCC9" },
    mutatedLight: { value: "#EDEDF4" },
  },
  mid_gray: {
    base: { value: "#676978" },
  },
  lighter: {
    base: { value: "#757575" },
  },
};

export const size = {
  base: { value: 16 },
  font: {
    placeholder: { value: 10 },
    label: { value: 12 },
    cta: { value: 12 },
    small: { value: 14 },
    base: { value: 16 },
    large: { value: 18 },
    heading4: { value: 24 },
    heading3: { value: 32 },
    heading2: { value: 46 },
    heading1: { value: 64 },
  },
};

export const breakpoints = {
  large_phone: { value: "50rem" },
  tablet: { value: "66rem" },
  super_wide: { value: "107rem" },
};

export const tokens = {
  size,
  color,
  sizes,
};
