import { useMutation } from "@apollo/client";
import React, { useState, ChangeEvent } from "react";
import { UPLOAD_FILE } from '../graphql/uploadFile ';


function FileUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadFile, { data, loading, error }] = useMutation(UPLOAD_FILE);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
        setSelectedFile(event.target.files[0]);  // use setSelectedFile here
    }
};

  const handleFileUpload = () => {
    uploadFile({ variables: { File } });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default FileUploader;
