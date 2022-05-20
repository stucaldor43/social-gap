import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostPreviewItem } from "../../components/user-page/PostPreviewItem";
import styles from "./styles.module.scss";

function User() {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Posts");
  const [items, setItems] = useState([]);

  const setTab = (tabName) => {
    if (tabName !== activeTab) setActiveTab(tabName);
  };

  let { id } = useParams();

  const fetchItems = () => {
    return axios
      .get(`/posts?accountId=${id}&_page=${page}&_limit=6`)
      .then((response) => {
        setItems((oldState) => oldState.concat(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const scrollHandler = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 5) {
      setPage((oldState) => oldState + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("touchmove", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("touchmove", scrollHandler);
    };
  }, []);

  useEffect(() => {
    fetchItems();
  }, [page]);

  return (
    <div className={styles.page}>
      <div className={styles.influencerDetails}>
        <div className={styles.outerImageBorder}>
          <div className={styles.influencerImage} style={{}}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.influencerName}>Rose BlackPink</div>
          <div className={styles.influencerStats}>
            Posts 20 | Follow 90k | Follower 7.5M
          </div>
          <div className={styles.influencerEmail}>
            Email: Business@nusantrhouse.com
          </div>
        </div>
      </div>
      <div>
        {/* <div className={styles.tabs}>
          <div className={styles.tabItem}>Posts</div>
          <div className={styles.tabItem}>Videos</div>
          <div className={styles.tabItem}>Favorited</div>
        </div> */}

        <div className={styles.shelf}>
          {items.map((item) => {
            return <PostPreviewItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default User;
