import styles from "./Sidebar.module.scss";
import { useSidebar } from "./useSidebar";
import { Dropdown } from "./Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { data, isLoading, error } = useSidebar();
  const isContentVisible = !isLoading && !error;
  const { platforms, genres } = data;
  const DROPDOWNS = [
    {
      name: "Platforms",
      data: platforms,
    },
    {
      name: "Genres",
      data: genres,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <span>
          Game<strong>Base</strong>
        </span>
      </div>
      <div className={styles.menu}>
        <div className={styles.allGames}>
          <NavLink to="/">
            <h2>All Games</h2>
          </NavLink>
        </div>
        {isContentVisible && (
          <>
            {DROPDOWNS.map((dropdown) => (
              <Dropdown key={dropdown.name} {...dropdown} />
            ))}
          </>
        )}
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: Unknown error</div>}
      </div>
    </div>
  );
};
