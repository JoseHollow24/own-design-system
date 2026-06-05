import { c, css, useState, useEffect, useEvent } from 'atomico';
import {
  DshBorderRadius50,
  DshTextLineHeightXl,
  DshTextSizeLg,
  DshTextSizeXl,
  DshSpace0,
  DshSpace50,
  DshSpace100,
  DshTextWeight400,
  DshColorSecondaryG1,
  DshColorSecondaryG4,
  DshColorSecondaryG6,
  DshColorPrimaryC3,
  DshColorPrimaryC1,
  DshColorPrimaryC0,
  DshColorPrimaryC6,
  DshColorSecondaryX1,
} from '@tokens';
import IconNew from './assets/icon-new.jsx';
import IconSuccess from './assets/icon-success.jsx';

function FileUploaderFileComponent({ file, name, state, disabled }) {
  const onFileDelete = useEvent('onFileDelete', { bubbles: true, composed: true });

  const [calculated, setCalculated] = useState();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const run = async () => {
      if (state === 'ready') {
        setCalculated('ready');
      } else if (!disabled && state !== 'ready') {
        setCalculated('new');
        await delay(2000);
        setCalculated('loading');
        await delay(2000);
        setCalculated('ready');
      } else {
        setCalculated('ready');
      }
    };
    run();
  }, [state, disabled]);

  return (
    <host shadowDom>
      <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill={calculated === 'ready' ? DshColorPrimaryC1 : DshColorSecondaryG1} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
      </svg>
      <span className="text-container">
        {['new', 'loading'].includes(calculated) && (
          <span className="text">{name}</span>
        )}
        {calculated === 'ready' && (
          <a href={file?.url} target="_blank" rel="noopener noreferrer" className="link">{name}</a>
        )}
      </span>
      <span className="custom-icon">
        {calculated === 'new' && <IconNew className="icon-svg rotation" />}
        {calculated === 'loading' && <IconSuccess className="icon-svg" />}
        {calculated === 'ready' && (
          <button
            className="delete-btn"
            onclick={() => onFileDelete(file)}
            disabled={disabled}
            aria-label="Eliminar archivo"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        )}
      </span>
    </host>
  );
}

FileUploaderFileComponent.props = {
  name: { type: String, reflect: true },
  state: { type: String, reflect: true },
  file: { type: Object, reflect: true },
  disabled: { type: Boolean, reflect: true, value: () => false },
};

FileUploaderFileComponent.styles = [css`
  :host {
    position: relative;
    outline: 1px solid ${DshColorSecondaryG4};
    width: 100%;
    border-radius: ${DshBorderRadius50};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: ${DshSpace100};
    height: 48px;
    --icon-size: ${DshTextSizeXl};
  }
  :host:empty {
    display: none;
  }
  @keyframes rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(1turn); }
  }
  .text-container {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 12px 0;
    width: 100%;
  }
  .text {
    color: ${DshColorSecondaryG1};
  }
  .link:link {
    font-weight: ${DshTextWeight400};
    font-size: ${DshTextSizeLg};
    line-height: ${DshTextLineHeightXl};
    color: ${DshColorPrimaryC1};
    padding: ${DshSpace0} ${DshSpace50};
    border-radius: ${DshBorderRadius50};
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    text-decoration: none;
    cursor: pointer;
  }
  .link:visited {
    color: ${DshColorPrimaryC0};
  }
  .link:hover {
    text-decoration: underline;
    color: ${DshColorPrimaryC1};
    background: ${DshColorSecondaryG6};
  }
  .link:active {
    color: ${DshColorPrimaryC3};
    cursor: pointer;
    text-decoration: unset;
    background: none;
    outline: unset;
  }
  .link:focus-visible {
    text-decoration: underline;
    color: ${DshColorSecondaryX1};
    cursor: pointer;
    outline: none;
    box-shadow: none;
    background: ${DshColorPrimaryC6};
  }
  .icon {
    padding: 12px;
    flex-shrink: 0;
  }
  .custom-icon {
    padding: ${DshSpace0};
    z-index: 5;
    flex-shrink: 0;
  }
  .custom-icon .icon-svg {
    display: flex;
    padding: 12px;
  }
  .icon-svg.rotation {
    animation-name: rotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${DshColorSecondaryG1};
    border-radius: ${DshBorderRadius50};
  }
  .delete-btn:hover {
    background: ${DshColorSecondaryG6};
  }
  .delete-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`];

export const FileUploaderFile = c(FileUploaderFileComponent);
