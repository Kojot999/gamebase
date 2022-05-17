import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
