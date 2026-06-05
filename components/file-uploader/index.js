import { FileUploader } from './file-uploader.jsx';
import { FileUploaderFile } from './file-uploader-file.jsx';
import { FileUploaderList } from './file-uploader-list.jsx';
import { FileUploaderMessage } from './file-uploader-message.jsx';
import { FileUploaderTitle } from './file-uploader-title.jsx';
import { FileUploaderSubtitle } from './file-uploader-subtitle.jsx';

if (!customElements.get('dsh-file-uploader'))
  customElements.define('dsh-file-uploader', FileUploader);

if (!customElements.get('dsh-file-uploader-file'))
  customElements.define('dsh-file-uploader-file', FileUploaderFile);

if (!customElements.get('dsh-file-uploader-list'))
  customElements.define('dsh-file-uploader-list', FileUploaderList);

if (!customElements.get('dsh-file-uploader-message'))
  customElements.define('dsh-file-uploader-message', FileUploaderMessage);

if (!customElements.get('dsh-file-uploader-title'))
  customElements.define('dsh-file-uploader-title', FileUploaderTitle);

if (!customElements.get('dsh-file-uploader-subtitle'))
  customElements.define('dsh-file-uploader-subtitle', FileUploaderSubtitle);

export * from './file-uploader.jsx';
export * from './file-uploader-file.jsx';
export * from './file-uploader-list.jsx';
export * from './file-uploader-message.jsx';
export * from './file-uploader-title.jsx';
export * from './file-uploader-subtitle.jsx';
