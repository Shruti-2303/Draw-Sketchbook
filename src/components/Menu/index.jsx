import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFileDownload,
} from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick } from "@/slice/menuSlice";
import cx from "classnames";
const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuItem = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === "Pencil",
        })}
        onClick={() => handleMenuItem("Pencil")}
      >
        <FaPencilAlt className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === "Eraser",
        })}
        onClick={() => handleMenuItem("Eraser")}
      >
        <FaEraser className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaUndoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaRedoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaFileDownload className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
