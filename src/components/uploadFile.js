import { connect } from 'react-redux';
import { onDrop, dropFileAccepted, dropFileRejected } from '../actions';
import FileDropzone from './FileDropzone';

const mapDispatchToProps = dispatch => ({
  onDrop: files => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = upload => {
      const image = upload.target.result;
      dispatch(onDrop(image));
    };
    reader.readAsDataURL(file);
  },
  dropFileAccepted: files => {
    dispatch(dropFileAccepted(files));
  },
  dropFileRejected: () => {
    dispatch(dropFileRejected());
  },
});

const mapStateToProps = state => ({
  droped: state.uploadFile.droped,
  files: state.uploadFile.files,
  message: state.uploadFile.message,
});

export default connect(mapStateToProps, mapDispatchToProps)(FileDropzone);
