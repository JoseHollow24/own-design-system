import { c, useRef, useState, useEffect, useProp, useEvent } from 'atomico';
import { customProperties, mainStyles } from './textarea.style';

function TextAreaComponent({
  value, disabled, label, maxlength, counter, helpermessage,
  resizeHeight, maxHeight, a11yLabel, darkMode, ...props
}) {
  const textareaRef = useRef();
  const [state, setState] = useState('default');
  const [textareaValue, setTextareaValue] = useState(value);
  const [rows, setRows] = useProp('rows');

  const dispatchEvent = useEvent('changeTextarea', {
    bubbles: true,
    composed: true,
  });

  const setInitialState = () => {
    let st = '';
    if (props.default) st = 'default';
    if (props.success) st = 'success';
    if (props.warning) st = 'warning';
    if (props.error) st = 'error';
    if (st === '') st = 'default';
    setState(st);
  };

  useEffect(() => {
    if (value.length > maxlength) {
      setTextareaValue(value.substring(0, maxlength));
    } else {
      setTextareaValue(value);
    }
  }, [value, maxlength]);

  const handleFocus = (e) => {
    const bodyTextArea = e.target.parentNode;
    bodyTextArea.classList.remove('outfocus');
  };

  const handleBlur = (e) => {
    e.target.scrollTop = 0;
    const bodyTextArea = e.target.parentNode;
    if (!resizeHeight) bodyTextArea.classList.add('outfocus');
  };

  const adjustTextareaHeight = () => {
    const { current } = textareaRef;
    current.style.height = 'auto';
    const { lineHeight } = window.getComputedStyle(current);
    const lineHeightNumber = lineHeight.substring(0, lineHeight.length - 2);
    const nRows = current.scrollHeight / lineHeightNumber - 1;
    if (maxHeight > 0) {
      current.style.height = `${Math.min(nRows, maxHeight) * lineHeightNumber}px`;
    } else {
      current.style.height = `${nRows * lineHeightNumber}px`;
    }
  };

  const handleInputText = (e) => {
    const textValue = e.target.value;
    setState(textValue.length > 0 ? 'completed' : 'default');
    setTextareaValue(textValue);
    if (resizeHeight) adjustTextareaHeight();
  };

  useEffect(() => { setInitialState(); }, []);

  return (
    <host shadowDom>
      {customProperties(state, disabled, rows, darkMode)}
      <div class="content-textarea">
        <div class={`body-textarea ${!resizeHeight ? 'outfocus' : ''}`}>
          {label && (
            <div class="label">
              <label aria-label={a11yLabel} id="label" for={props.id || 'textarea'}>
                {label}
              </label>
            </div>
          )}
          <textarea
            id="textarea"
            disabled={disabled}
            oninput={(e) => {
              handleInputText(e);
              dispatchEvent(e.target.value);
            }}
            maxlength={maxlength}
            ref={textareaRef}
            onfocus={handleFocus}
            onblur={handleBlur}
            value={textareaValue}
            aria-labelledby="label desc"
            aria-describedby="charcounter"
            {...props}
          >
            {textareaValue}
          </textarea>
          {!resizeHeight && <div class={`cover${disabled ? ' disabled' : ''}`}></div>}
        </div>
        {(helpermessage || counter) && (
          <div className="footer-textarea">
            {helpermessage && <div class="helper" id="desc">{helpermessage}</div>}
            {counter && (
              <div id="charcounter" class="charcounter">
                {textareaValue.length} de {maxlength}
              </div>
            )}
          </div>
        )}
      </div>
    </host>
  );
}

TextAreaComponent.props = {
  id: String,
  a11yLabel: String,
  name: String,
  rows: { type: Number, value: 1 },
  maxHeight: { type: Number, value: 0 },
  placeholder: { type: String, reflect: true, value: '' },
  label: { type: String, reflect: true, value: '' },
  disabled: { type: Boolean, reflect: true, value: false },
  value: { type: String, reflect: true, value: '' },
  maxlength: { type: Number, value: 280 },
  counter: { type: Boolean, reflect: true, value: false },
  helpermessage: { type: String, reflect: true, value: '' },
  resizeHeight: { type: Boolean, value: false, reflect: true },
  darkMode: { type: Boolean, reflect: true, value: false },
  default: { type: Boolean, reflect: true, value: true },
  success: { type: Boolean, reflect: true, value: false },
  warning: { type: Boolean, reflect: true, value: false },
  error: { type: Boolean, reflect: true, value: false },
};

TextAreaComponent.styles = mainStyles;

const TextArea = c(TextAreaComponent);

export default TextArea;
export { TextArea };

customElements.define('dsh-textarea', TextArea);
