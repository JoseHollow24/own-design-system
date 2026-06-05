import { c, css, useState, useRef, useEffect, useEvent } from 'atomico';
import { useListener } from '@atomico/hooks/use-listener';
import '@components/button';
import '@components/icon';
import {
  DshTextFamilyRawsonPro,
  DshSpace50,
  DshSpace200,
} from '@tokens';
import { useValidateFileTypes } from './file-uploader.hooks.js';

function FileUploaderComponent({
  textTitle,
  textSubtitle,
  textButton,
  buttonVariant,
  name,
  state,
  message,
  maxSize,
  maxLoad,
  allowedTypes,
  disabled,
  defaults,
}) {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState();

  const inputFile = useRef();
  const listFile = useRef();
  const buttonRef = useRef();

  const { validateFileType } = useValidateFileTypes();

  const onChange = useEvent('onChange', { bubbles: true, composed: true });
  const onError = useEvent('onError', { bubbles: true, composed: true });
  const onDelete = useEvent('onDelete', { bubbles: false, composed: false });

  useListener(buttonRef, 'onClick', () => {
    if (!disabled && files.length < maxLoad) {
      inputFile.current.value = '';
      inputFile.current.click();
    }
  });

  const validateErrors = (collection) =>
    collection.map((file, index) => {
      const isInvalidType = allowedTypes ? !validateFileType(file, allowedTypes) : false;
      const isNotValidSize = !(maxSize * 1024 * 1024 >= file.size);
      const isDuplicated = files.some((item) => item.name === file.name);
      const isNotWithinLimits = !(files.length + (index + 1) <= maxLoad);
      return { index, filename: file.name, isInvalidType, isNotValidSize, isDuplicated, isNotWithinLimits };
    });

  const calculateStatus = (validation) => {
    const list = [];
    if (!validation.isValidType) list.push('not_valid_type');
    if (!validation.isValidSize) list.push('not_valid_size');
    if (validation.isNotWithinLimits) list.push('not_valid_max_load');
    if (!validation.isNotDuplicated) list.push('not_valid_duplicated');
    setErrors(list);
    return !!list.length;
  };

  const handleInputChange = (event) => {
    const filesInInput = event ? Array.from(event.target.files) : defaults;
    if (!filesInInput) return;

    const errorList = validateErrors(filesInInput);
    const isValidType = !errorList.some((f) => f.isInvalidType);
    const isValidSize = !errorList.some((f) => f.isNotValidSize);
    const isNotDuplicated = !errorList.some((f) => f.isDuplicated);
    const isNotWithinLimits = errorList.some((f) => f.isNotWithinLimits);

    const hasError = calculateStatus({ isValidType, isNotWithinLimits, isValidSize, isNotDuplicated });

    if (!hasError) {
      const uploads = filesInInput.map((file) => ({
        file,
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setFiles((prev) => {
        const oldFiles = prev.map((f) => ({ ...f, state: 'old' }));
        const newFiles = uploads.map((f) => ({ ...f, state: 'new' }));
        return [...oldFiles, ...newFiles].map((f, i) => ({ ...f, id: i }));
      });
    } else {
      const errItems = errorList.filter(
        (f) => f.isDuplicated || f.isInvalidType || f.isNotValidSize || f.isNotWithinLimits
      );
      if (errItems.length) onError(errItems);
    }
  };

  const deleteFile = (file) => {
    if (!files.length) return;
    const filtered = files.filter((f) => f.id !== file.id);
    if (!filtered.length) setErrors(undefined);
    setFiles(filtered);
    onDelete(file);
  };

  useEffect(() => {
    onChange(files);
  }, [files]);

  useEffect(() => {
    if (defaults) {
      const upload = defaults.map((item, index) => ({ ...item, id: index, state: 'ready' }));
      setFiles(upload);
    }
  }, [defaults]);

  useEffect(() => {
    const listEl = listFile.current;
    if (!listEl) return;
    const callback = (event) => deleteFile(event.detail);
    listEl.addEventListener('onFileDelete', callback);
    return () => listEl.removeEventListener('onFileDelete', callback);
  }, [listFile.current, files]);

  return (
    <host shadowDom>
      <span className="text-container">
        <dsh-file-uploader-title>{textTitle}</dsh-file-uploader-title>
        {textSubtitle && (
          <dsh-file-uploader-subtitle>{textSubtitle}</dsh-file-uploader-subtitle>
        )}
      </span>
      <input
        ref={inputFile}
        onchange={handleInputChange}
        disabled={disabled}
        type="file"
        multiple
        hidden
      />
      {(!!files?.length || !!errors?.length || !!message) && (
        <dsh-file-uploader-message
          default={state}
          uploaded={files.length}
          errors={errors}
          message={message}
          max-size={maxSize}
          allowed-types={allowedTypes}
          multiple={!!files.length}
          remove-gap={!textSubtitle}
        />
      )}
      <dsh-button
        ref={buttonRef}
        disabled={disabled || files.length === maxLoad}
        variant={buttonVariant}
        color="blue"
        fluid
      >
        {textButton ?? 'Subir archivo'}
        <dsh-icon slot="right" icon-name="fa-upload" fa-styles="fas" size="s2" />
      </dsh-button>
      <dsh-file-uploader-list
        ref={listFile}
        name={name}
        list={files}
        disabled={disabled}
      />
    </host>
  );
}

FileUploaderComponent.props = {
  name: { type: String, reflect: true },
  textTitle: { type: String, reflect: true },
  textSubtitle: { type: String, reflect: true },
  textButton: { type: String, reflect: true },
  buttonVariant: { type: String, reflect: true, value: 'secondary' },
  state: { type: String, reflect: true },
  message: { type: String, reflect: true },
  defaults: { type: Array, reflect: true },
  allowedTypes: { type: String, value: '', reflect: true },
  maxLoad: { type: Number, reflect: true, value: 1 },
  maxSize: { type: Number, reflect: true, value: 3 },
  disabled: { type: Boolean, reflect: true, value: () => false },
};

FileUploaderComponent.styles = [css`
  :host {
    gap: ${DshSpace200};
    display: flex;
    flex-direction: column;
    font-family: ${DshTextFamilyRawsonPro};
    width: 100%;
    min-width: 288px;
    max-width: 735px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    gap: ${DshSpace50};
  }
`];

export const FileUploader = c(FileUploaderComponent);
