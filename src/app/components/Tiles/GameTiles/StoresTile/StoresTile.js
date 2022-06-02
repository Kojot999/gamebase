import styles from "./StoresTile.module.scss";
import { ICON_CONFIG } from "../../../../constants/icons.config";

export const StoresTile = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stores}>
        <h2>Available in:</h2>
        <div className={styles.wrapperItems}>
          {data.map(({ store, id }) => (
            <div key={id} className={styles.items}>
              <img alt={store.name} src={ICON_CONFIG[store.slug]} />
              <p>{store.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
