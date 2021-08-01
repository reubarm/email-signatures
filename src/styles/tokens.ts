import rgba from 'polished/lib/color/rgba';

export const spaces = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
};

export const sizes = {
  ...spaces,
  full: '100%',
  half: '50%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
};

export const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
  modal: 9999,
};

export const transitions = {
  base: '300ms',
  fast: '200ms',
};

export const color = {
  athens_gray: {
    base: { value: '#f2f3f7' },
    light: { value: '#8C8C97' },
  },

  black_haze: {
    base: { value: '#E3E6E6' },
  },

  casper: {
    dark: { value: '#9CACBF' },
    base: { value: '#ABBCD1' },
  },
  charcoal: {
    base: { value: '#262835' },
    light: { value: '#2b2e3d' },
    muted: { value: rgba('#262835', 0.5) },
  },

  dandelion: {
    base: { value: '#FFD566' },
  },

  gallery: {
    base: { value: '#F0F0F0' },
  },

  green: {
    base: { value: '#1EDC8C' },
  },
  blue: {
    10: { value: '#C0DEF8' },
    20: { value: '#F7FAFD' },
    30: { value: '#E5F2FC' },
    40: { value: '#C0DEF8' },
    50: { value: '#99CAF4' },
    60: { value: '#75B6EF' },
    70: { value: '#5DA6EC' },
    80: { value: '#4689DA' },
    90: { value: '' },
    100: { value: '#3260B0' },
    110: { value: '#3871C2' },
  },

  manatee: {
    base: { value: '#8C8C97' },
  },

  mango: {
    base: { value: '#FFB900' },
  },

  midnight: {
    base: { value: '#00192E' },
  },

  mulled_wine: {
    base: { value: '#484A67' },
  },

  purple: {
    dark: { value: '#5E5E88' },
    base: { value: '#6C6C9B' },
    muted: { value: rgba('#6C6C9B', 0.5) },
    light: { value: '#C4C3D7' },
  },

  danger: {
    base: { value: '#F5635D' },
    dark: { value: '#D95852' },
    light: { value: '#FFF2F1' },
  },
  silver: {
    base: { value: '#F5F5F4' },
  },
  teal: {
    base: { value: '#00828E' },
  },
  waterloo: {
    base: { value: '#848692' },
  },

  white: {
    base: { value: '#FFFFFF' },
  },

  white_lilac: {
    base: { value: '#F7F7FC' },
  },
  grey: {
    base: { value: '#E4E5EA' },
    highlight: { value: '#EEEEEE' },
    light: { value: '#9699AA' },
    dark: { value: '#7C7E8D' },
    mutated: { value: '#BCBCC9' },
    mutatedLight: { value: '#EDEDF4' },
  },
  mid_gray: {
    base: { value: '#676978' },
  },
  lighter: {
    base: { value: '#757575' },
  },
  tuna: {
    base: {
      value: '#303344',
    },
  },
  mischka: {
    base: { value: '#E1E1EA' },
  },
  boxShadow: {
    base: { value: '#00000021' },
  },
};

export const size = {
  base: { value: 16 },
  font: {
    placeholder: { value: 10 },
    label: { value: 12 },
    cta: { value: 12 },
    small: { value: 14 },
    base: { value: 16 }, // @todo extend base if use amazon style dictionary,
    large: { value: 18 }, // shared with heading5

    // @todo can we give these more meaningful names
    heading4: { value: 24 },
    heading3: { value: 32 },
    heading2: { value: 46 },
    heading1: { value: 64 },
  },
};

export const weight = {
  font: {
    body: { value: 400 },
    heading: { value: 700 },
    semi: { value: 500 },
    bold: { value: 700 },
    regular: { value: 400 },
    medium: { value: 600 },
  },
};

export const line_height = {
  font: {
    body: { value: 1.35 },
    heading: { value: 1.2 },
    cta: { value: 1 },
  },
};

export const transition = {
  base: { value: '300ms' },
  fast: { value: '200ms' },
};

export const breakpoints = {
  large_phone: { value: '50rem' },
  tablet: { value: '66rem' },
  super_wide: { value: '107rem' },
};

export const grid = {
  outer_gutter: { value: 32 },
  inner_gutter: { value: 8 },
  max_width: { value: 1000 },
};

// @TODO ditch this and have them as named props
export const fontSizes = [
  size.font.placeholder.value,
  size.font.cta.value, // CTA
  size.font.small.value, // Text small
  size.font.base.value, // Text base
  size.font.large.value, // Text large / Heading 5
  size.font.heading4.value, // Heading 4
  size.font.heading3.value, // Heading 3
  size.font.heading2.value, // Heading 2
  size.font.heading1.value, // Heading 1
  size.font.label.value, // Select Label
];

export const indices = {
  select: 700,
  tooltip: 600,
  modal: 500,
  inspectorPanel: 400,
  inspectorPanelMobile: 400,
  sideBarNavigation: 300,
  header: 200,
  listSubheader: 100,
};

export const tokens = {
  transitions,
  zIndices,
  grid,
  transition,
  line_height,
  weight,
  size,
  color,
  sizes,
  indices,
};
