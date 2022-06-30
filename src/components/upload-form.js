import React from "react";
import api from "../services/api";

const UploadForm = () => {
  const state = { selectedFile: null };
  const fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", state.selectedFile, state.selectedFile.name);
    api
      .post("", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="UploadForm">
      <input
        style={{ display: "none" }}
        type="file"
        onChange={fileSelectedHandler}
        ref={(fileInput) => (this.fileInput = fileInput)}
      />
      <button onClick={() => this.fileInput.click()}>Pick File</button>
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
};
export default UploadForm;
