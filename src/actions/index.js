export const onDrop = (url) => {
  return {
    type: 'FILE_UPLOAD',
    url,
  };
};

export const dropFileAccepted = files => {
  return {
    type: 'DROP_FILE_ACCEPTED',
    files: files,
  };
};

export const dropFileRejected = () => {
  return {
    type: 'DROP_FILE_REJECTED',
  };
};
