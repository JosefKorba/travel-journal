import styles from "./NavBar.module.css";
import { FaGlobeAsia } from "react-icons/fa";

function NavBar() {
  return (
    <header className={styles.header}>
      <FaGlobeAsia className={styles.myIcon} />
      <h1 className={styles.headerTitle}>my travel journal.</h1>
    </header>
  );
}

export default NavBar;
