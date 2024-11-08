import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "xlarge";
  color?:
    | "primary"
    | "secondary"
    | "gray"
    | "empty"
    | "empty-gray"
    | "error"
    | "empty-error";
  leadingIconSrc?: string;
  trailingIconSrc?: string;
  iconOnlySrc?: string;
}

export function Button({
  size,
  color,
  leadingIconSrc,
  trailingIconSrc,
  iconOnlySrc,
  ...props
}: ButtonProps) {
  console.log("button", props);

  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        props.className,
        size && styles[size],
        color && styles[color],
        leadingIconSrc && styles.leadingIcon,
        trailingIconSrc && styles.trailingIcon,
        iconOnlySrc && styles.iconOnly,
      )}
      onClick={props.onClick}
    >
      {leadingIconSrc ? <img src={leadingIconSrc} /> : null}
      {iconOnlySrc ? (
        <img src={iconOnlySrc} alt={`${props.children}`} />
      ) : (
        props.children
      )}
      {trailingIconSrc ? <img src={trailingIconSrc} /> : null}
    </button>
  );
}
