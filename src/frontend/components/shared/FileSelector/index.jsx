import React, { useEffect, useState } from "react";
import CrossSvg from "../../svg/Cross";
import UploadSvg from "../../svg/Upload";
import { generateVideoThumbnail } from "../../../utils/generate-video-thumbnail";
import styles from "./styles.module.scss";

function FileSelector({ onFileSelect = () => {} }) {
  const [files, setFiles] = useState([]);

  const createFileReference = (file, previewSrc) => ({
    id: Math.random().toString(16).slice(2),
    name: file.name,
    lastModified: file.lastModified,
    file,
    src: previewSrc,
  });

  const deleteFileReference = (fileToDelete) =>
    setFiles(files.filter((file) => file.id !== fileToDelete.id));

  const changeHandler = (e) => {
    const fileCount = e.target.files.length;
    const file = e.target.files[fileCount - 1];

    if (file.type.includes("image")) {
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        const fileItem = createFileReference(file, reader.result);
        setFiles(files.concat(fileItem));
      });

      reader.readAsDataURL(file);
    }

    if (file.type.includes("video")) {
      generateVideoThumbnail(file)
        .then((thumbnailUrl) => {
          const fileItem = createFileReference(file, thumbnailUrl);
          setFiles(files.concat(fileItem));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(
    function () {
      onFileSelect(files);
    },
    [files]
  );

  return (
    <div className={styles.fileSelector}>
      <div className={styles.shelf}>
        <div className={styles.uploader}>
          <div className={styles.innerBlock}>
            <UploadSvg />
          </div>
          <input
            type="file"
            className={styles.fileInput}
            onChange={changeHandler}
          ></input>
        </div>
        {files.map((file) => {
          return (
            <div key={file.id} className={styles.filePreviewThumbnail}>
              <button
                className={styles.deleteFileButton}
                onClick={() => deleteFileReference(file)}
              >
                <CrossSvg />
              </button>
              <img
                className={styles.image}
                src={file.src}
                width={256}
                height={256}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FileSelector;
