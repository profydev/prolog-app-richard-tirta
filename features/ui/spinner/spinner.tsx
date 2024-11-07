import styles from "./spinner.module.scss";

export function Spinner({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.loader} id="loading-spinner">
      <div className={styles.spinner}></div>
      <span className={styles.loadingText}>{children}</span>
    </div>
  );
}
