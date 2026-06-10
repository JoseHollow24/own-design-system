import {
  DshColorMonoWhite,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryC3,
  DshColorPrimaryC4,
  DshColorPrimaryC6,
  DshColorSecondaryG3,
  DshColorSecondaryG6,
  DshColorSecondaryX2,
  DshColorSecondaryX3,
  DshColorSecondaryX4,
  DshColorComplementaryR1,
  DshColorComplementaryR5,
  DshColorComplementaryR6,
} from '@tokens';

export const lightBgTokens = {
  default:  DshColorMonoWhite,
  checked:  DshColorPrimaryC3,
  disabled: DshColorSecondaryG6,
  error:    DshColorComplementaryR6,
};

export const lightBorderTokens = {
  default:  DshColorPrimaryC1,
  hover:    DshColorPrimaryC0,
  checked:  DshColorPrimaryC3,
  disabled: DshColorSecondaryX4,
  error:    DshColorComplementaryR1,
};

export const darkBgTokens = {
  default:  DshColorMonoWhite,
  checked:  DshColorPrimaryC2,
  disabled: DshColorSecondaryX3,
  error:    DshColorComplementaryR6,
};

export const darkBorderTokens = {
  default:  DshColorPrimaryC6,
  hover:    DshColorPrimaryC4,
  checked:  DshColorPrimaryC6,
  disabled: DshColorSecondaryX2,
  error:    DshColorComplementaryR5,
};

export const disabledCheckMarkTokens = {
  light: DshColorSecondaryG3,
  dark:  DshColorSecondaryG6,
};
