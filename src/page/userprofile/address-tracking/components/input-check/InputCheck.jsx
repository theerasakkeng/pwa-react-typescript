import styles from "./InputCheck.module.css";

const InputCheck = () => {
  return (
    <div className={styles.checkboxWrap}>
      <input
        type="checkbox"
        name="selected"
        className={styles.customCheckbox}
      />
      <div className={styles.checkedCircleWrap}>
        <div className={styles.checkedCircle}>
          <div className={styles.circleWhite}></div>
        </div>
      </div>
    </div>
  );
};

export default InputCheck;
