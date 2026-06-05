import { c, css } from 'atomico';
import { DshTextSizeBase, DshTextWeight400, DshColorSecondaryG1 } from '@tokens';

function FileUploaderSubtitleComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

FileUploaderSubtitleComponent.styles = [css`
  :host {
    font-size: ${DshTextSizeBase};
    font-weight: ${DshTextWeight400};
    color: ${DshColorSecondaryG1};
  }
  :host:empty {
    display: none;
  }
`];

export const FileUploaderSubtitle = c(FileUploaderSubtitleComponent);
