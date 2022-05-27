import styles from "./Sidebar.module.scss";
import { useSidebar } from "../../hooks/api/useSidebar";
import { Dropdown } from "./Dropdown/Dropdown";
import { NavLink } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

export const Sidebar = ({ store }) => {
  const { data, isLoading, error } = useSidebar();
  const isContentVisible = !isLoading && !error;
  const { platforms, genres } = data;
  const DROPDOWNS = [
    {
      name: "Platforms",
      data: platforms,
      queryParam: "parent_platforms",
    },
    {
      name: "Genres",
      data: genres,
      queryParam: "genres",
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
              <Dropdown store={store} key={dropdown.name} {...dropdown} />
            ))}
          </>
        )}
        {isLoading && (
          <div className={styles.loadingwrapper}>
            <TailSpin
              className={styles.loading}
              ariaLabel="loading-indicator"
              color="white"
            />
          </div>
        )}
        {error && <div>Error: Unknown error</div>}
      </div>
    </div>
  );
};
