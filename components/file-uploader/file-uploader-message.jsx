import { c, css, useState, useEffect } from 'atomico';
import {
  DshSpace50,
  DshTextWeight400,
  DshTextWeight500,
  DshTextSizeBase,
  DshColorComplementaryV1,
  DshColorComplementaryR1,
} from '@tokens';
import Data from './file-uploader.data.js';

function FileUploaderMessageComponent({ default: defaultState, message, uploaded, errors, multiple, maxSize, allowedTypes, removeGap }) {
  const [text, setText] = useState(message);
  const [color, setColor] = useState(defaultState);

  useEffect(() => {
    if (errors?.length) {
      const key = multiple ? 'multiple' : 'single';
      const errorKey = errors[0];
      const current = Data[key][errorKey]?.replace('FORMAT', allowedTypes).replace('SIZE', maxSize);
      setText(current);
      setColor('error');
    }
    if (uploaded && !errors?.length) {
      const current = multiple ? `${uploaded} archivos subidos` : `${uploaded} archivo subido`;
      setText(current);
      setColor('success');
    }
  }, [errors, multiple, uploaded]);

  return (
    <host shadowDom>
      <span className={`container ${color || ''} ${removeGap ? 'remove-gap' : ''}`}>
        {color === 'error' && (
          <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill={DshColorComplementaryR1} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        )}
        {text}
      </span>
    </host>
  );
}

FileUploaderMessageComponent.props = {
  errors: { type: Array, reflect: true },
  uploaded: { type: Number, reflect: true },
  default: { type: String, reflect: true },
  message: { type: String, reflect: true },
  multiple: { type: Boolean, reflect: true, value: false },
  maxSize: { type: String, reflect: true },
  allowedTypes: { type: String, reflect: true },
  removeGap: { type: Boolean, reflect: true, value: false },
};

FileUploaderMessageComponent.styles = [css`
  :host {
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon {
    margin-right: ${DshSpace50};
    flex-shrink: 0;
  }
  .success {
    color: ${DshColorComplementaryV1};
    font-weight: ${DshTextWeight400};
    font-size: ${DshTextSizeBase};
  }
  .error {
    color: ${DshColorComplementaryR1};
    font-weight: ${DshTextWeight500};
    font-size: ${DshTextSizeBase};
  }
  .remove-gap {
    margin-top: -12px;
  }
  :host:empty {
    display: none;
  }
`];

export const FileUploaderMessage = c(FileUploaderMessageComponent);
