import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNav}>
        {ROUTES.map(
          ({ path, name, isNavigation }) =>
            isNavigation && (
              <NavLink
                className={(item) => (item.isActive ? styles.selected : "")}
                key={name}
                to={path}
              >
                <p>{name}</p>
              </NavLink>
            )
        )}
      </div>
      <div className={styles.wrapperTheme}></div>
    </div>
  );
};
