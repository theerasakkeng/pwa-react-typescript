import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useLoading } from "../../context/loading";

// MUI Components
import Grid from "@mui/material/Unstable_Grid2";

// CSS
import styles from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const { show, hide } = useLoading();

  const goTo = (name) => {
    navigate(name);
  };
  return (
    <>
      <div className={styles.profileHeader}></div>
      <div className="container-content">
        <div className={styles.profileImageWrap}>
          <div
            className={styles.profileImage}
          ></div>
        </div>
        <div className={styles.lineName}>
          <h3></h3>
        </div>
        <Grid container spacing={1} sx={{ marginTop: "40px" }}>
          <Grid xs={12}>
            <div className={`glass-box ${styles.profileDetail}`}>
              <div>
                ชื่อ: <span></span>
              </div>
              <div>
                เบอร์โทรศัพท์: <span></span>
              </div>
              <div>
                ที่อยู่:
                <span>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ marginTop: "20px" }}>
          <Grid xs={12}>
            <div
              className="glass-box"
              onClick={() => goTo("/profile/editprofile")}
            >
              แก้ไขข้อมูลส่วนตัว
            </div>
          </Grid>
          <Grid xs={12}>
            <div className="glass-box" onClick={() => goTo("/profile/address-tracking")}>ที่อยู่จัดส่ง</div>
          </Grid>
          <Grid xs={12}>
            <div className="glass-box" onClick={() => goTo("/profile/privacy")}>นโยบายความเป็นส่วนตัว</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Profile;
