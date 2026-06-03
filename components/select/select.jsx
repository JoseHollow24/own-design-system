import { c, useRef, useState, useProp, useEffect, useEvent, useHost, useUpdate } from 'atomico';
import { useChildNodes } from '@atomico/hooks/use-child-nodes';
import { useSlot } from '@atomico/hooks/use-slot';

import { customProperties, styles } from './select.style';
import componentProps from './select.props';

function SelectComponent({
  type, option, variant, label, placeholder,
  checkboxPlaceholderPlural, checkboxPlaceholderSingular,
  helper, disabled, error, modal, nested, value, alphabeticalOrder,
}) {
  const [childNodes] = useChildNodes();
  const refSlot = useRef();
  const slotOptions = useSlot(refSlot).filter((e) => e instanceof HTMLElement);
  const [active, setActive] = useProp('active');
  const [hasError, setHasError] = useProp('error');
  const [inside, setInside] = useState(false);
  const [text, setText] = useState('');
  const refSelect = useRef();
  const update = useUpdate();
  const { current } = useHost();

  const cantSelected = Array.from(childNodes || []).filter((el) => el instanceof HTMLElement && el.selected).length;

  const buildList = () => {
    const list = slotOptions.map((opt) => ({
      value: opt.value,
      text: opt.innerText,
      icon: opt.icon,
      selected: opt.selected,
      disabled: opt.disabled,
      error: opt.error,
      href: opt.href,
    }));
    if (alphabeticalOrder) list.sort((a, b) => a.text.localeCompare(b.text));
    return list;
  };

  const dispatchClickButton = useEvent('clickBoton', { bubbles: true, composed: true });
  const dispatchClickOption = useEvent('ClickOption', { bubbles: true, composed: true });
  const dispatchSelectItem = useEvent('Selected', { bubbles: true, composed: true });
  const dispatchClickCheckbox = useEvent('clickCheckbox', { bubbles: true, composed: true });

  useEffect(() => {
    const handleClickOutside = () => { if (!inside) setActive(false); };
    const handleEnter = (e) => {
      if (e.keyCode === 13) { e.preventDefault(); setActive((prev) => !prev); }
    };
    const handleFocusOut = (e) => {
      if (!refSelect.current?.contains(e.relatedTarget)) setActive(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    refSelect.current?.addEventListener('keyup', handleEnter);
    current?.shadowRoot?.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      refSelect.current?.removeEventListener('keyup', handleEnter);
      current?.shadowRoot?.removeEventListener('focusout', handleFocusOut);
    };
  }, [inside]);

  useEffect(() => {
    if (nested) {
      setText('');
      dispatchClickButton();
      dispatchClickOption();
    }
  }, [value]);

  slotOptions.forEach((opt) => {
    if (opt.selected && type !== 'checkbox') {
      setText(opt.innerText);
      opt.selected = false;
      dispatchSelectItem(opt.value);
    }
  });

  const handleActive = () => { if (!disabled) setActive((prev) => !prev); };

  const handleOptionClick = (opt) => {
    setText(opt.text);
    setHasError(false);
    setActive(false);
    dispatchClickButton(opt.value);
    dispatchClickOption(opt.value);
  };

  const handleCheckboxClick = (opt) => {
    const slotOpt = slotOptions.find((s) => s.value === opt.value);
    if (slotOpt) slotOpt.selected = !slotOpt.selected;
    setHasError(false);
    const selectedList = slotOptions.filter((s) => s.selected).map((s) => s.value);
    dispatchClickCheckbox(selectedList);
    update();
  };

  const selectedText = () => {
    if (type === 'checkbox') {
      return cantSelected > 0
        ? `${cantSelected} ${cantSelected > 1 ? checkboxPlaceholderPlural : checkboxPlaceholderSingular}`
        : placeholder;
    }
    return text || placeholder;
  };

  const renderDropdown = (list) => (
    <div class="dropdown-list">
      {list.map((opt, i) => (
        <div
          key={i}
          class={`dropdown-item ${opt.disabled ? 'disabled' : ''} ${opt.selected ? 'selected' : ''} ${opt.error ? 'error' : ''}`}
          role="option"
          aria-selected={opt.selected}
          onclick={() => {
            if (!opt.disabled) {
              if (type === 'checkbox') handleCheckboxClick(opt);
              else handleOptionClick(opt);
            }
          }}
        >
          {type === 'checkbox' && (
            <span class="dropdown-checkbox" style={opt.selected ? 'background:currentColor' : ''}></span>
          )}
          {opt.text}
        </div>
      ))}
    </div>
  );

  const list = buildList();

  return (
    <host shadowDom>
      {customProperties()}
      <div class="mock">
        <slot ref={refSlot} />
      </div>
      {!modal ? (
        <div class="main-container">
          <div class={`${disabled ? 'disabled' : ''} ${hasError ? 'error' : ''}`}>
            <p class="label truncate">{label}</p>
            <div
              class="select-box"
              onmouseover={() => setInside(true)}
              onmouseleave={() => setInside(false)}
              ref={refSelect}
            >
              <div class="select-container" onclick={handleActive} tabIndex={disabled ? -1 : 0}>
                <div class="selected">
                  <p class="text">{selectedText()}</p>
                  <div class="icon">
                    <dsh-icon
                      size="s2"
                      color="g1"
                      icon-name={active ? 'fa-chevron-up' : 'fa-chevron-down'}
                      fa-styles="fas"
                    ></dsh-icon>
                  </div>
                </div>
                {hasError && !disabled && (
                  <div class="error-icon">
                    <dsh-icon size="s3" color="r2" icon-name="fa-circle-xmark" fa-styles="fas"></dsh-icon>
                  </div>
                )}
              </div>
              {active && renderDropdown(list)}
            </div>
            <p class="helper truncate">{helper}</p>
          </div>
        </div>
      ) : (
        <div
          class="main-container"
          onmouseover={() => setInside(true)}
          onmouseleave={() => setInside(false)}
          ref={refSelect}
        >
          <div class="modal">
            <div class="modal-button" onclick={handleActive} tabindex="0">
              <div class="modal-top">
                <div class="modal-label truncate">{label}</div>
                <div class="modal-icon">
                  <dsh-icon
                    size="s2"
                    color="c1"
                    icon-name={active ? 'fa-chevron-up' : 'fa-chevron-down'}
                    fa-styles="fas"
                  ></dsh-icon>
                </div>
              </div>
              <div class="modal-bottom">
                <div class="modal-placeholder">{text || placeholder}</div>
              </div>
            </div>
            {active && (
              <div class="modal-dropdown">
                {renderDropdown(list)}
              </div>
            )}
          </div>
        </div>
      )}
    </host>
  );
}

SelectComponent.props = componentProps;
SelectComponent.styles = [styles];

const Select = c(SelectComponent);

export { Select };

customElements.define('dsh-select', Select);
