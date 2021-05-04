import {
  FaTimes,
  FaMinusSquare,
  FaTachometerAlt,
  FaRegBuilding,
  FaProductHunt,
  FaBars,
  FaUtensils,
  FaUserAlt,
  FaUserTie,
  FaRegMoneyBillAlt,
  FaTasks,
  FaTextHeight,
  FaPowerOff,
} from "react-icons/fa";
import styles from "./styles.module.scss";

export default function SidebarComponet({ openSidebar, closeSidebar }) {
  return (
    <div
      className={openSidebar ? styles.sidebar__responsive : ""}
      id={styles.sidebar}
    >
      <div className={styles.sidebar__title}>
        <div className={styles.sidebar__img}>
          <img src="/logo-via-logohub.svg" alt="Logo" />
          <h1>Dashbord - Admin</h1>
        </div>

        <FaTimes
          style={{ fontSize: 18 }}
          onClick={() => closeSidebar()}
          id="sidebarIcon"
          aria-hidden="true"
        />
      </div>

      <div className={styles.sidebar__menu}>
        <div className={(styles.sidebar__link, styles.active_menu_link)}>
          <FaMinusSquare style={{ fontSize: 18, marginRight: 10 }} />
          <a href="#">Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className={styles.sidebar__link}>
          <FaTachometerAlt style={{ fontSize: 18, marginRight: 10 }} />
          <a href="#">Área administrativa</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaRegBuilding style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Lojas</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaProductHunt style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Produtos</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaBars style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Categorias</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaUtensils style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className={styles.sidebar__link}>
          <i>
            <FaUserTie style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Administradores</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaUserAlt style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Usuários</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaRegMoneyBillAlt style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Pagamentos</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaTasks style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">A Plataforma</a>
        </div>
        <div className={styles.sidebar__link}>
          <i>
            <FaTextHeight style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">Política de privacidade</a>
        </div>
        <div className={styles.sidebar__logout}>
          <i>
            <FaPowerOff style={{ fontSize: 18, marginRight: 10 }} />
          </i>
          <a href="#">LogOut</a>
        </div>
      </div>
    </div>
  );
}
