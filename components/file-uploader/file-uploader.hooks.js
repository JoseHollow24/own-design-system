export const useValidateFileTypes = () => {
  const validateFileType = (file, allowedFileTypes) => {
    if (!allowedFileTypes) return true;
    const allowedArray = allowedFileTypes.split(',').map((t) => t.trim());
    const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    return allowedArray.includes(ext);
  };

  const validateFileTypes = (files, allowedFileTypes) => {
    if (!allowedFileTypes) return true;
    const allowedArray = allowedFileTypes.split(',').map((t) => t.trim());
    return Array.from(files).every((file) => {
      const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      return allowedArray.includes(ext);
    });
  };

  return { validateFileType, validateFileTypes };
};
