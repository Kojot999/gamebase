import { DOMAIN_URL } from "../../../api/source";
import { ICON_CONFIG } from "../../../constants/icons.config";
import styles from "./Tile.module.scss";

export const StoresTile = ({ data }) => {
  const { id, name, games_count: gamesCount, domain, slug } = data;

  return (
    <div className={styles.wrapper}>
      <a
        href={DOMAIN_URL + domain}
        target="_blank"
        rel="noreferrer"
        key={id}
        className={styles.tile}
      >
        <img alt={name} src={ICON_CONFIG[slug]} />
        <h3>{name}</h3>
        <p>Avilable games: {gamesCount}</p>
      </a>
    </div>
  );
};
