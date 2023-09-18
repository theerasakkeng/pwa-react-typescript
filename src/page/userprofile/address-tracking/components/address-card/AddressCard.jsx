import InputCheck from "../input-check/InputCheck";

import EditIcon from "@mui/icons-material/Edit";

import styles from "./AddressCard.module.css";

const AddressCard = () => {
  return (
    <div className={`${styles.addressCardWrap} glass-box`}>
      <div className={styles.topCard}>
        <div className={styles.topCardLeft}>
          <InputCheck />
          <div>ที่บ้าน</div>
        </div>
        <div>
          <EditIcon
            sx={{
              border: "1px solid #4b5c92",
              borderRadius: "6px",
              color: "#4b5c92",
            }}
          />
        </div>
      </div>
      <div>ธีรศักดิ์ พันสาย</div>
      <div>0878742011</div>
      <div>102/4 ถนน สุขุมวิท แขวง บางจาก เขต พระโขนง กรุงเทพมหานคร 10260</div>
    </div>
  );
};
export default AddressCard;
