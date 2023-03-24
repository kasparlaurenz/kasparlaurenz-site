import styles from "./MenuButton.module.css";
import { FC } from "react";

type MenuButtonProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const MenuButton: FC<MenuButtonProps> = ({ isOpen, open, close }) => {
  return (
    <button
      onClick={isOpen ? close : open}
      className={`${styles.menu} fixed top-32 right-48 z-10`}
    >
      <div className={isOpen ? styles.clickedTop : ""}></div>
      <div className={isOpen ? styles.clickedBottom : ""}></div>
    </button>
  );
};

export default MenuButton;
