import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { changeColor, changeBrushSize } from "@/slice/toolBoxSlice";
import cx from "classnames";
import { MENU_ITEMS } from "@/constants";
const ToolBox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color } = useSelector((state) => state.toolbox[activeMenuItem]);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  const dispatch = useDispatch();
  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };
  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };
  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <div className={styles.toolText}>Stroke Color</div>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === "black",
              })}
              style={{ backgroundColor: "black" }}
              onClick={() => updateColor("black")}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === "red",
              })}
              style={{ backgroundColor: "red" }}
              onClick={() => updateColor("red")}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === "orange",
              })}
              style={{ backgroundColor: "orange" }}
              onClick={() => updateColor("orange")}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === "green",
              })}
              style={{ backgroundColor: "green" }}
              onClick={() => updateColor("green")}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === "blue",
              })}
              style={{ backgroundColor: "blue" }}
              onClick={() => updateColor("blue")}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <div className={styles.toolText}>Brush Stroke {activeMenuItem}</div>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBox;
