import styles from "./footer.module.scss";
import Link from "next/link";
import version from "./version";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desktopVersion}>Version: {version}</div>
      <ul className={styles.footerMenu}>
        <li>
          <Link className={styles.menuLink} href="#">
            Docs
          </Link>
        </li>
        <li>
          <Link className={styles.menuLink} href="#">
            API
          </Link>
        </li>
        <li>
          <Link className={styles.menuLink} href="#">
            Help
          </Link>
        </li>
        <li>
          <Link className={styles.menuLink} href="#">
            Community
          </Link>
        </li>
      </ul>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/logo-small.svg"
        alt="logo"
        className={styles.footerLogo}
      />
      <div className={styles.mobileVersion}>Version: {version}</div>
    </footer>
  );
}
