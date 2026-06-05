import { c, css, useState, useEffect } from 'atomico';
import { DshSpace100 } from '@tokens';

function FileUploaderListComponent({ name, list, disabled }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (!list) return;
    const ready = list
      .filter((f) => ['old', 'ready'].includes(f.state))
      .map((f) => ({ ...f, state: 'ready' }));
    const loading = list
      .filter((f) => f.state === 'new')
      .map((f) => ({ ...f, state: 'loading' }));
    setFiles([...ready, ...loading]);
  }, [list]);

  return (
    <host shadowDom>
      {files.map((file, index) => (
        <dsh-file-uploader-file
          key={`${name}-file-${index}`}
          file={file}
          name={file.name}
          state={file.state}
          disabled={disabled}
        />
      ))}
    </host>
  );
}

FileUploaderListComponent.props = {
  name: { type: String, reflect: true },
  list: { type: Array, reflect: true },
  disabled: { type: Boolean, reflect: true, value: () => false },
};

FileUploaderListComponent.styles = [css`
  :host {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${DshSpace100};
  }
  :host:empty {
    display: none;
  }
`];

export const FileUploaderList = c(FileUploaderListComponent);
