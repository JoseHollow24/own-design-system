import { c, css } from 'atomico';
import { DshTextSizeLg, DshTextWeight500, DshColorMonoBlack } from '@tokens';

function FileUploaderTitleComponent() {
  return (
    <host shadowDom>
      <slot />
    </host>
  );
}

FileUploaderTitleComponent.styles = [css`
  :host {
    font-size: ${DshTextSizeLg};
    font-weight: ${DshTextWeight500};
    color: ${DshColorMonoBlack};
  }
  :host:empty {
    display: none;
  }
`];

export const FileUploaderTitle = c(FileUploaderTitleComponent);
