import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import RedeemIcon from "@mui/icons-material/Redeem";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import styles from "./Bottom.module.css";

const Bottombar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [partName, setPartname] = useState("");

  useEffect(() => {
    setPartname(pathname);
  }, [pathname]);

  const goTo = (name) => {
    navigate(name);
    setPartname(name);
  };
  return (
    <>
      <div
        className={styles.bottombarWrap}
        style={{
          display:
            pathname != "/privilege" &&
            pathname != "/scanpoint" &&
            pathname != "/history"
              ? "none"
              : "flex",
        }}
      >
        <div
          className={`${styles.bottombarMenuWrap} ${
            partName === "/privilege" ? styles.active : ""
          }`}
          onClick={() => goTo("/privilege")}
        >
          <RedeemIcon
            className={styles.iconMenu}
            sx={{
              color: "#7cd1f9",
              fontSize: "32px",
            }}
          />
          <div className={styles.menuTitle}>Privilege</div>
        </div>
        <div
          className={`${styles.bottombarMenuWrap} ${
            partName === "/scanpoint" ? styles.active : ""
          }`}
          onClick={() => goTo("/scanpoint")}
        >
          <QrCodeScannerIcon
            className={styles.iconMenu}
            sx={{
              color: "#7cd1f9",
              fontSize: "32px",
            }}
          />
          <div className={styles.menuTitle}>Point</div>
        </div>
        <div
          className={`${styles.bottombarMenuWrap} ${
            partName === "/history" ? styles.active : ""
          }`}
          onClick={() => goTo("/history")}
        >
          <HistoryIcon
            className={styles.iconMenu}
            sx={{
              color: "#7cd1f9",
              fontSize: "32px",
            }}
          />
          <div className={styles.menuTitle}>History</div>
        </div>
        {/* <div
          className={`${styles.bottombarMenuWrap} ${
            partName === "/profile" ? styles.active : ""
          }`}
          onClick={() => goTo("/profile")}
        >
          <AccountCircleIcon
            sx={{
              color: "#7cd1f9",
              fontSize: "32px",
            }}
          />
          <div className={styles.menuTitle}>Profile</div>
        </div> */}
      </div>
    </>
  );
};

export default Bottombar;
