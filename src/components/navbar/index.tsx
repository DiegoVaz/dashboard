import { FaBars, FaSearch, FaUserCircle, FaRegClock } from "react-icons/fa";
//import scss
import styles from "./styles.module.scss";

export default function NavbarComponent({ openSidebar, sidebarOpen }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav__icon} onClick={() => openSidebar()}>
        <FaBars style={{ fontSize: 26, color: "#a5aaad" }} />
      </div>
      <div className={styles.navbar__left}>
        <a href="#">Produtos</a>
        <a href="#">Usuários</a>
        <a href="#" className={styles.active__link}>
          Admin
        </a>
      </div>

      <div className={styles.navbar__right}>
        <a href="#">
          <FaSearch
            style={{
              fontSize: 16,
              color: "#a5aaad",
              borderRadius: 50,
              background: "#FFF",
            }}
          />
        </a>
        <a href="#">
          <FaRegClock style={{ fontSize: 16, color: "#a5aaad" }} />
        </a>
        <a href="#">
          <FaUserCircle style={{ fontSize: 40 }} />
        </a>
      </div>
    </nav>
  );
}
