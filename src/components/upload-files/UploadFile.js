import React, { useState } from 'react';

const UploadFile = (props) => {
    return (
      <div>
        <input
          type='file'
          multiple={true}
          onChange={props.fileUpload}
        />
      </div>
    )
}
export default UploadFile;