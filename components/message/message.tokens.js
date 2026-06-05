import {
  DshColorPrimaryC6,
  DshColorComplementaryT6,
  DshColorComplementaryR6,
  DshColorComplementaryN6,
  DshColorSecondaryX1,
  DshColorSecondaryX6,
  DshColorComplementaryT1,
  DshColorComplementaryR1,
  DshColorComplementaryN1,
} from '@tokens';

const tokens = {
  info: {
    backgroundColor: '#ffffff',
    border: '1px solid #ffffff',
  },
  informative: {
    backgroundColor: DshColorPrimaryC6,
    border: `1px solid ${DshColorSecondaryX1}`,
  },
  success: {
    backgroundColor: DshColorComplementaryT6,
    border: `1px solid ${DshColorComplementaryT1}`,
  },
  error: {
    backgroundColor: DshColorComplementaryR6,
    border: `1px solid ${DshColorComplementaryR1}`,
  },
  warning: {
    backgroundColor: DshColorComplementaryN6,
    border: `1px solid ${DshColorComplementaryN1}`,
  },
  important: {
    backgroundColor: DshColorSecondaryX6,
    border: `1px solid ${DshColorSecondaryX1}`,
  },
};

export default tokens;
