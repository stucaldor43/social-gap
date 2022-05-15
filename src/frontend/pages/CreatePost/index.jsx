import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FileSelector from "../../components/shared/FileSelector";
import { getUTCZuluDate } from "../../utils/date";
import styles from "./styles.module.scss";

function CreatePost() {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [fileReferences, setFileReferences] = useState([]);

  const uploadMediaFiles = () => {
    return axios.all(fileReferences.map((ref) => uploadFile(ref.file)));
  };

  const createPost = (response) => {
    const postData = {
      accountId: 11,
      commentCount: 0,
      createdAt: getUTCZuluDate(),
      id: Math.random().toString(16).slice(2),
      likeCount: 0,
      mediaLink: response.map((payload) => payload.data.secure_url),
      message,
    };

    return axios.post("/posts", postData).catch((error) => {
      console.log(error);
    });
  };

  const clickHandler = () => {
    if (message.trim().length < 1)
      // TODO replace with message that temporarily shows
      return alert("Message length must be at least 1 character");

    return uploadMediaFiles()
      .then((response) => {
        createPost(response);
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  const uploadFile = (file) => {
    let formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "vccy8199");
    formData.append("folder", "social-gap");

    const url = "https://api.cloudinary.com/v1_1/detdfblls/upload";
    return axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: false,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Create Post</h2>
        <div className={styles.box}>
          <label className={styles.label}>Caption</label>
          <textarea
            className={styles.textarea}
            placeholder=""
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={`${styles.box} ${styles.postMediaBox}`}>
          <label className={styles.label}>Upload media</label>
          <FileSelector
            onFileSelect={(fileRefs) => setFileReferences(fileRefs)}
          />
        </div>
        <div className={styles.box}>
          <button onClick={clickHandler} className={styles.publishButton}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
