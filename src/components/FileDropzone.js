import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const style = {
  photo: {
    width: 200,
    height: 200,
  },
  usage: {
  },
};

class FileDropzone extends Component {
  onDropAccepted(func, files) {
    func(files);
  }
  render() {
    const { files, onDrop, dropFileAccepted, dropFileRejected } = this.props;
    return (
      <div>
        <Dropzone
          onDrop={onDrop}
          onDropAccepted={this.onDropAccepted.bind(this, dropFileAccepted)}
          onDropRejected={dropFileRejected}
          accept="image/gif,image/jpeg,image/png,image/jpg"
        >
          {(files.length > 0 &&
            files.map(file => {
              return (
                <div style={style.photo} key={file.preview}>
                  <img style={style.photo} src={file.preview} alt="" />
                </div>
              );
            })) ||
            <div style={style.usage}>
              <div>ファイルを指定またはドラッグ&ドロップ</div>
              <div>形式: gif/png/jpeg/jpg</div>
            </div>
          }
        </Dropzone>
      </div>
    );
  }
}

FileDropzone.propTypes = {
  files: PropTypes.array.isRequired,
  onDrop: PropTypes.func.isRequired,
  dropFileAccepted: PropTypes.func.isRequired,
  dropFileRejected: PropTypes.func.isRequired,
};

export default FileDropzone;
