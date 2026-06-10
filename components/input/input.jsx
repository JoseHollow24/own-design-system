import { c, useState, useEffect, useProp, useHost, useEvent, useRef } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';

import componentProps from './input.props';
import { customProperties, styles } from './input.style';
import { validatePhoneNumber, formatRut, isValidRut } from './input.validate';

const Component = (props) => {
  const { id, name, type, disabled, clearable, label, ariaLabel, required, darkMode, ...rest } = props;

  const [helpermessage, setHelperMessage] = useProp('helpermessage');
  const [value, setValue] = useProp('value');
  const [variant, setVariant] = useProp('variant');
  const [errormessage, setErrorMessage] = useProp('errormessage');
  const [maxlength, setMaxlength] = useProp('maxlength');
  const [placeholder, setPlaceholder] = useProp('placeholder');
  const [typeInput, setTypeInput] = useState('text');
  const [visibility, setVisibility] = useState(false);
  const [showText, setShowText] = useState(false);
  const [colorPassword, setColorPassword] = useState('g1');

  const refIconPassword = useRef();
  const refIconClose = useRef();
  const refInput = useRef();
  const refMain = useRef();

  const { current } = useHost();
  const iconSlotRef = useRef();
  const iconSlot = useSlot(iconSlotRef);
  const icon = iconSlot;

  const dispatchEventclick = useEvent('clickClear', { bubbles: true, composed: true });
  const dispatchEvent = useEvent('changeInput', { bubbles: true, composed: true });
  const dispatchEventValidateRut = useEvent('ValidateRut', { bubbles: true, composed: true });

  const clearText = () => {
    setValue('');
    setVariant('');
  };

  const clearStatus = () => setVariant('');

  useEffect(() => {
    const handleFocus = (event) => {
      if (type === 'password' && refMain.current?.contains(event.target) && !refIconClose?.current?.contains(event.target)) {
        setColorPassword('b1');
      }
    };
    current?.shadowRoot?.addEventListener('focusin', handleFocus);
    switch (type) {
      case 'rut':
        if (placeholder === '') setPlaceholder('Ej: 9.477.123-4');
        setMaxlength('12');
        break;
      case 'email':
        if (placeholder === '') setPlaceholder('Ej: correo@ejemplo.com');
        break;
      case 'tel':
        if (placeholder === '') setPlaceholder('Ej: 987654321');
        setMaxlength('9');
        break;
      default:
        break;
    }
    if (Number(maxlength) > 700 || Number.isNaN(Number(maxlength))) setMaxlength('700');
  });

  useEffect(() => {
    const handleFocus = (event) => {
      if (type === 'password' && refMain.current?.contains(event.target)) setColorPassword('g1');
    };
    current?.shadowRoot?.addEventListener('focusout', handleFocus);
  });

  if (type === 'password' && !showText) {
    setTypeInput('password');
  } else if (type === 'number') {
    setTypeInput('number');
    if (Number.isNaN(Number(value))) setTimeout(() => setValue('0'), 100);
  } else {
    setTypeInput('text');
  }

  const toogleFocus = () => refInput.current?.focus();

  const togglePassword = () => {
    if (!disabled) {
      setVisibility(!visibility);
      setShowText(!visibility);
      setTypeInput(!visibility ? 'text' : 'password');
    }
  };

  const handleCheckRut = (e, isOnInput) => {
    e.preventDefault();
    const text = e.target.value;
    try {
      const rut = formatRut(text);
      const valid = isValidRut(rut);
      dispatchEventValidateRut(valid);
      if (isOnInput) {
        if (valid) setErrorMessage('');
        else setErrorMessage('Ingresa un RUT');
        setHelperMessage('');
        setValue(valid ? rut : text);
        dispatchEvent(valid ? rut : text);
        setVariant(valid ? 'success' : 'error');
      } else if (!valid) {
        setErrorMessage('Ingresa un RUT');
        setHelperMessage('');
        setVariant('error');
        setValue('');
      }
    } catch {
      setErrorMessage('Ingresa un RUT');
      setVariant('error');
      if (isOnInput) setValue(text);
      else setValue('');
    }
  };

  const handleFormatPhoneNumber = (e, onInput) => {
    clearStatus();
    if (!onInput) {
      if (validatePhoneNumber(e)) {
        setVariant('success');
        setErrorMessage('');
      } else if (e.target.value === '') {
        setVariant('');
      } else {
        setVariant('error');
        if (errormessage === '') setErrorMessage('Debes ingresar 9 dígitos');
      }
    }
  };

  const handleOnInput = (e, onInput) => {
    switch (type) {
      case 'rut':
        handleCheckRut(e, onInput);
        break;
      case 'tel':
        handleFormatPhoneNumber(e, onInput);
        setValue(e.target.value);
        dispatchEvent(e.target.value);
        break;
      case 'password':
        setValue(e.target.value);
        dispatchEvent(e.target.value);
        break;
      default:
        setValue(e.target.value);
        dispatchEvent(e.target.value);
        break;
    }
  };

  useEffect(() => {
    if (!errormessage && !helpermessage && !value && !required && type === 'rut') {
      setErrorMessage('');
      setHelperMessage('Puntos y guion se autocompletan');
    }
    if (!errormessage && !helpermessage && !value && required && type === 'rut') {
      setErrorMessage('Ingresa un RUT');
      setHelperMessage('');
      setVariant('error');
    }
  }, [value, type, required, errormessage, helpermessage]);

  const inputItemStart = () => {
    if (type === 'rut') {
      return (
        <div class={`input-group-prepend`}>
          <button aria-label={ariaLabel || ''} class="input-group-text button-actionable" onclick={() => togglePassword()} ref={refIconPassword} tabindex="1">
            <dsh-icon size="s2" icon-name="fa-user" fa-styles="fas" color={colorPassword === 'g1' ? 'g1' : 'negro'}></dsh-icon>
          </button>
        </div>
      );
    }
    if (type === 'password') {
      return (
        <div class="input-group-prepend">
          <button aria-label={ariaLabel || ''} class="input-group-text button-actionable" onclick={() => togglePassword()} ref={refIconPassword} tabindex="1">
            <dsh-icon size="s2" icon-name={visibility ? 'fa-eye' : 'fa-eye-slash'} fa-styles="fas" color={colorPassword === 'g1' ? 'g1' : 'negro'}></dsh-icon>
          </button>
        </div>
      );
    }
    if (icon.length !== 0) {
      return (
        <div class="input-group-prepend icon">
          <button aria-label={ariaLabel || ''} tabindex="-1" class="input-group-text">
            <slot name="icon" ref={iconSlotRef}></slot>
          </button>
        </div>
      );
    }
    return '';
  };

  const inputItemEnd = () => {
    if (type === 'password' && variant !== '') {
      return (
        <div class="input-error-success">
          <dsh-icon
            size="s2"
            icon-name={variant === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'}
            fa-styles="fas"
            color={variant === 'success' ? 'v1' : 'r2'}
          ></dsh-icon>
        </div>
      );
    }
    if (clearable && !disabled && value.length > 0) {
      return (
        <div class="input-group-append">
          <button
            aria-label="limpiar texto"
            class="input-group-text button-actionable"
            onclick={(e) => { clearText(); dispatchEventclick(e); }}
            tabindex={disabled ? '-1' : '3'}
            ref={refIconClose}
          >
            <dsh-icon size="s2" icon-name="fa-xmark" fa-styles="fas" color="negro"></dsh-icon>
          </button>
        </div>
      );
    }
    return '';
  };

  const inputClass = () => {
    if (type === 'password' && (variant === 'success' || variant === 'error')) return 'end-icon-spacing';
    if (clearable && !disabled && value.length > 0) return 'end-clear-spacing';
    return '';
  };

  return (
    <host shadowDom onfocus={() => toogleFocus()}>
      {customProperties(variant, darkMode)}
      <div class="main">
        <label class="label">{label}</label>
        <div class="input-family">
          <div class={`input-group ${disabled ? 'disabled' : ''}`} ref={refMain}>
            {inputItemStart()}
            <input
              id={id}
              name={name}
              part="dsh-input__input"
              maxlength={maxlength}
              {...rest}
              type={typeInput}
              value={value}
              oninput={(e) => handleOnInput(e, true)}
              onwheel={(e) => e.preventDefault()}
              onblur={(e) => handleOnInput(e, false)}
              class={`form-control ${inputClass()}`}
              placeholder={placeholder}
              disabled={disabled}
              ref={refInput}
              tabindex="2"
              onkeydown={(event) => {
                if (type === 'number' && event.keyCode === 69) event.preventDefault();
              }}
            />
            {inputItemEnd()}
          </div>
        </div>
        {helpermessage && !errormessage && <div class="help-message">{helpermessage}</div>}
        {errormessage && <div class="help-message">{errormessage}</div>}
      </div>
    </host>
  );
};

Component.props = componentProps;
Component.styles = [styles];

const Input = c(Component);

export default Input;
export { Input };

customElements.define('dsh-input', Input);
