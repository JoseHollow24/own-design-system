import {
  DshColorSecondaryM1,
  DshColorMonoWhite,
  DshColorPrimaryC1,
  DshColorSecondaryG1,
  DshColorSecondaryG3,
  DshColorSecondaryX6,
} from '@tokens';

const tokens = {
  primario: {
    background: DshColorSecondaryX6,
    borderColor: DshColorSecondaryX6,
    borderColorBottom: DshColorSecondaryX6,
  },
  secundario: {
    background: DshColorMonoWhite,
    borderColor: DshColorPrimaryC1,
    borderColorBottom: DshColorPrimaryC1,
  },
  borderbottom: {
    background: 'transparent',
    borderColor: 'transparent',
    borderColorLeft: 'transparent',
    borderColorBottom: DshColorSecondaryG3,
  },
  none: {
    background: 'transparent',
    borderColor: 'transparent',
    borderColorLeft: 'transparent',
    borderColorBottom: 'transparent',
  },
  blue: { borderColorLeft: DshColorPrimaryC1 },
  slate: { borderColorLeft: DshColorSecondaryG1 },
  purple: { borderColorLeft: DshColorSecondaryM1 },
  transversal: {
    background: DshColorMonoWhite,
    borderColor: DshColorPrimaryC1,
    borderColorLeft: 'transparent',
    borderColorBottom: DshColorPrimaryC1,
  },
};

export const getTokenBg = (type, variant) => {
  if (variant === 'transversal') return tokens.borderbottom.background;
  return tokens[type]?.background || 'transparent';
};

export const getTokenBorderLeft = (variant, type) => {
  if (type === 'borderbottom' || type === 'none') return tokens[type].borderColorLeft;
  return tokens[variant]?.borderColorLeft || DshColorPrimaryC1;
};

export const getTokenBorderBottom = (type, variant) => {
  if (variant === 'transversal') return tokens.borderbottom.borderColorBottom;
  return tokens[type]?.borderColorBottom || 'transparent';
};

export const getTokenBorder = (type, variant) => {
  if (variant === 'transversal') return tokens.borderbottom.borderColor;
  return tokens[type]?.borderColor || 'transparent';
};
