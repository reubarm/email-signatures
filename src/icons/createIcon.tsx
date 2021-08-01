import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import React from 'react';

import styled from '../styles/styled';
import { color as colorTokens, sizes } from '../styles/tokens';

type SupportIconSizes =
  | 'base'
  | 'small'
  | 'large'
  | 'xLarge'
  | 'header'
  | 'fluid';

type SupportedIconColors = 'alt' | 'muted' | 'brand' | 'primary';

interface IconRootProps {
  width: string;
  height: string;
  customColor?: string;
}

export interface CreateIconProps {
  size?: SupportIconSizes;
  className?: string;
  number?: number;
  color?: SupportedIconColors;
}

export interface IconProps {
  className?: string;
  number?: number;
}

export type CreateIcon = (
  Icon: React.FC<IconProps>
) => React.FC<CreateIconProps>;

const convertSize = (key: SupportIconSizes): string => {
  const result: { [K in SupportIconSizes]: string } = {
    base: `${sizes[7]}px`,
    small: `${sizes[6]}px`,
    large: `${sizes[8]}px`,
    // TODO - move those as tokens if they are not icon specific ?
    xLarge: '40px',
    header: '18px',
    fluid: '100%',
  };

  return result[key];
};

const convertColor = (key: SupportedIconColors) => {
  const colors = {
    alt: colorTokens.white.base.value,
    muted: colorTokens.casper.base.value,
    primary: colorTokens.purple.base.value,
    brand: colorTokens.mango.base.value,
  };

  return colors[key];
};

// eslint-disable-next-line react/display-name
const createIcon: CreateIcon = Icon => ({
  size = 'base',
  className,
  number,
  color,
}) => {
  const convertedSize = convertSize(size);
  const IconRoot = styled(Icon, {
    shouldForwardProp: isPropValid,
  })<IconRootProps>`
    width: 30px;
    height: ${p => p.height};
    ${({ customColor }) =>
      customColor
        ? css`
            > * {
              fill: ${customColor};
            }
          `
        : ''}
  `;

  return (
    <IconRoot
      className={className}
      width={convertedSize}
      height={convertedSize}
      customColor={color ? convertColor(color) : undefined}
      number={number}
    />
  );
};

export default createIcon;
