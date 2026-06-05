import {
  DshTextSizeBase,
  DshTextSizeLg,
  DshTextSizeXl,
  DshTextLineHeightLg,
  DshTextLineHeightXl,
  DshTextLineHeight2xl,
  DshColorSecondaryX1,
  DshColorPrimaryC6,
  DshColorSecondaryM6,
  DshColorSecondaryG6,
} from '@tokens';

export const bgTokens = {
  default: DshColorSecondaryX1,
  blue: DshColorPrimaryC6,
  purple: DshColorSecondaryM6,
  slate: DshColorSecondaryG6,
};

export const fontTokens = {
  small: DshTextSizeBase,
  default: DshTextSizeLg,
  large: DshTextSizeXl,
};

export const lhTokens = {
  small: DshTextLineHeightLg,
  default: DshTextLineHeightXl,
  large: DshTextLineHeight2xl,
};
