import React, { useState } from 'react';
import './UploadFile.css';

const UploadFile = (props) => {

  const attachment_field = [
    {
      label: "External Attachment",
      name: 'externalAttachment'
    }
  ]

  return (
    <React.Fragment>
      {
        attachment_field.map((val, index) => (
          <div className="mb-3 col-12 col-md-12" key={"attachment" + index}>
            <div className="attachmentLabel">{val.label}</div>
          </div>
        ))
      }
      <div className="uploadFileAlign">
        <input
          type='file'
          multiple={true}
          onChange={props.fileUpload}
        />
      </div>
    </React.Fragment>
  )
}
export default UploadFile;