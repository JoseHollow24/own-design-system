import {
  DshColorSecondaryX1,
  DshColorPrimaryC1,
  DshColorPrimaryC2,
  DshColorPrimaryA2,
  DshColorSecondaryM1,
  DshColorSecondaryM2,
  DshColorSecondaryG1,
  DshColorSecondaryG2,
  DshColorComplementaryL1,
  DshColorComplementaryL2,
  DshColorSecondaryG6,
} from '@tokens';

const Palette = {
  background: DshColorSecondaryG6,
  transversal: { line: DshColorSecondaryX1, icon: DshColorSecondaryX1 },
  blue: { line: DshColorPrimaryC1, icon: DshColorPrimaryC1 },
  purple: { line: DshColorSecondaryM1, icon: DshColorSecondaryM2 },
  slate: { line: DshColorSecondaryG1, icon: DshColorSecondaryG2 },
  cav: { line: DshColorPrimaryC2, icon: DshColorPrimaryC2 },
  ffmm: { line: DshColorPrimaryA2, icon: DshColorPrimaryA2 },
  apv: { line: DshColorComplementaryL1, icon: DshColorComplementaryL2 },
};

export default Palette;
