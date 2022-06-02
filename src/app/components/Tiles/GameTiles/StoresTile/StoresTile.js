import styles from "./StoresTile.module.scss";
import { ICON_CONFIG } from "../../../../constants/icons.config";
import { DOMAIN_URL } from "../../../../api/source/index";

export const StoresTile = ({ stores }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stores}>
        <h2>Available in:</h2>
        <div className={styles.wrapperItems}>
          {stores.map(({ store, id }) => (
            <div key={id} className={styles.items}>
              <img alt={store.name} src={ICON_CONFIG[store.slug]} />
              <a
                href={DOMAIN_URL + store.domain}
                target="_blank"
                rel="noreferrer"
                key={id}
              >
                {store.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
