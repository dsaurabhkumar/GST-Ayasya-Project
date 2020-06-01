import React, { useState } from 'react';

const UploadFile = (props) => {

  return (
        <input
          type='file'
          multiple={true}
          onChange={props.fileUpload}
        />
  )
}
export default UploadFile;