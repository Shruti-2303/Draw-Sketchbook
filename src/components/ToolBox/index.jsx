import { useSelector } from "react-redux";
import styles from "./index.module.css";

const ToolBox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === "Pencil";
  const showBrushToolOption =
    activeMenuItem === "Pencil" || activeMenuItem === "Eraser";
  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <div className={styles.toolText}>Stroke Color</div>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: "black" }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: "red" }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: "orange" }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: "green" }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: "blue" }}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <div className={styles.toolText}>Brush Stroke {activeMenuItem}</div>
          <div className={styles.itemContainer}>
            <input type="range" min={1} max={10} step={1} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBox;
