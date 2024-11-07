import styles from "./fetch-error.module.scss";
import Link from "next/link";

interface FetchErrorProps {
  error: { message: string };
  refetch: () => void;
}

export function FetchError({ error, refetch }: FetchErrorProps) {
  return (
    <div className={styles.error}>
      <div className={styles.errorMessage}>
        <img src="/icons/alert-circle.svg"></img>
        <span id="error-message">{error.message}</span>
      </div>
      <Link
        href="#"
        className={styles.errorTryAgainLink}
        id="error-try-again-link"
        onClick={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        Try again
        <img src="/icons/arrow-right.svg"></img>
      </Link>
    </div>
  );
}
