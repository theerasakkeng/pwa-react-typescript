// CSS
import styles from "./RewardCard.module.css";

// Image
import Coin from "../../../../@core/assets/images/reward/coin.webp";

const RewardCard = () => {
  return (
    <div className={styles.rewardCardWrap}>
      <div className={styles.pointWrap}>
        <span className={styles.point}>10</span>
        <img src={Coin} alt="" width="15px" />
      </div>
      <div className={styles.rewardCardTop}></div>
      <div className={styles.rewardCardBottom}>
        <div className={styles.rewardName}>Gift Voucher</div>
        <div className={styles.rewardDetail}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          accusamus eaque sint non numquam rem repellendus a ipsum nam sed
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
