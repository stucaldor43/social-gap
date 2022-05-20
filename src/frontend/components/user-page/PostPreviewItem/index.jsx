import React from "react";
import { Link } from "react-router-dom";
import CommentsSvg from "../../svg/Comments";
import HeartSvg from "../../svg/Heart";
import styles from "./styles.module.scss";

export function PostPreviewItem({ item }) {
  const imageElement = (
    <img
      className={styles.image}
      src={item.mediaLink[0] || item.mediaLink}
    ></img>
  );

  const videoElement = (
    <video className={styles.video} width="250">
      <source src={item.mediaLink[0] || item.mediaLink} type="video/webm" />
      <source src={item.mediaLink[0] || item.mediaLink} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );

  const isVideo = item.mediaLink[0].includes(".mp4");

  return (
    <div className={styles.postPreviewItem}>
      <Link to={`/post/${item.id}`}>
        {isVideo ? videoElement : imageElement}
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.box}>
              <HeartSvg />
              <span>25k</span>
            </div>
            <div className={styles.box}>
              <CommentsSvg />
              <span>4</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
