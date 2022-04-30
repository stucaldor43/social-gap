import react from "react";
import { NavLink } from "react-router-dom";
import HomeSvg from "./../../svg/Home";
import SearchSvg from "../../svg/Search";
import MailSvg from "./../../svg/Mail";
import ProfileSvg from "./../../svg/Profile";
import styles from "./styles.module.scss";
import PlusSvg from "../../svg/Plus";

function Navigation({ openAdditionalActionsModal }) {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" className="navLinkItem" activeClassName={styles.active}>
        <HomeSvg />
      </NavLink>
      <NavLink
        to="/search"
        className="navLinkItem"
        activeClassName={styles.active}
      >
        <SearchSvg />
      </NavLink>
      <button
        className={styles.moreActionsButton}
        onClick={openAdditionalActionsModal}
      >
        <PlusSvg />
      </button>
      <NavLink
        to="/messages"
        className="navLinkItem"
        activeClassName={styles.active}
      >
        <MailSvg />
      </NavLink>
      <NavLink
        to="/profile"
        className="navLinkItem"
        activeClassName={styles.active}
      >
        <ProfileSvg />
      </NavLink>
    </nav>
  );
}

export default Navigation;
