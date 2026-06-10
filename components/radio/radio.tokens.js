import {
  DshColorMonoWhite,
  DshColorPrimaryC0,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryC4,
  DshColorPrimaryC6,
  DshColorSecondaryG1,
  DshColorSecondaryX3,
  DshColorSecondaryX4,
  DshColorSecondaryX6,
  DshColorComplementaryR1,
  DshColorComplementaryR5,
  DshColorComplementaryR6,
} from '@tokens';

export const lightBorderTokens = {
  default:  DshColorPrimaryC1,
  hover:    DshColorPrimaryC0,
  disabled: DshColorSecondaryX4,
  error:    DshColorComplementaryR1,
};

export const lightBgTokens = {
  default:  DshColorMonoWhite,
  disabled: DshColorSecondaryX6,
  error:    DshColorComplementaryR6,
};

export const lightCheckedTokens = {
  dot: DshColorPrimaryC2,
};

export const lightTextTokens = {
  default:  DshColorSecondaryG1,
  disabled: DshColorSecondaryX4,
};

export const darkBorderTokens = {
  default:  DshColorPrimaryC6,
  hover:    DshColorPrimaryC4,
  disabled: DshColorSecondaryX4,
  error:    DshColorComplementaryR5,
};

export const darkBgTokens = {
  default:  DshColorMonoWhite,
  disabled: DshColorSecondaryX6,
  error:    DshColorComplementaryR6,
};

export const darkCheckedTokens = {
  dot: DshColorPrimaryC2,
};

export const darkTextTokens = {
  default:  DshColorMonoWhite,
  disabled: DshColorSecondaryX3,
};
