import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFileDownload,
} from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
import cx from "classnames";
import { MENU_ITEMS } from "@/constants";
const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuItem = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuItem(MENU_ITEMS.PENCIL)}
      >
        <FaPencilAlt className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuItem(MENU_ITEMS.ERASER)}
      >
        <FaEraser className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
      >
        <FaUndoAlt className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FaRedoAlt
          className={styles.icon}
          onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
        />
      </div>
      <div className={styles.iconWrapper}>
        <FaFileDownload
          className={styles.icon}
          onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
        />
      </div>
    </div>
  );
};

export default Menu;
