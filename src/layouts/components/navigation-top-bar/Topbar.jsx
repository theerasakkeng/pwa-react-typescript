import { useNavigate, useLocation } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const pathMapperPage = () => {
    switch (pathname) {
      case "/privilege":
        return "Privilege";
      case "/history":
        return "History";
      case "/scanpoint":
        return "Scan";
      case "/profile":
        return "Profile";
      case "/profile/editprofile":
        return "Edit Profile";
    }
  };

  const goTo = (name) => {
    if (pathname != "/profile") {
      navigate(name);
    }
  };

  const backTo = () => {
    let pathArr = pathname.split("/");
    navigate(`/${pathArr[pathArr.length - 2]}`);
  };
  return (
    <>
      <div className={styles.topbarWrapContainer}>
        <div
          className={styles.topbarWrap}
          style={{ display: pathname == "/" ? "none" : "" }}
        >
          <div className={styles.iconBackWrap}>
            <ArrowBackIosIcon
              onClick={backTo}
              sx={{
                visibility:
                  pathname != "/privilege" &&
                  pathname != "/scanpoint" &&
                  pathname != "/history"
                    ? "visible"
                    : "hidden",
                color: "#d2effb",
                fontSize: "30px",
              }}
            />
          </div>
          <div className={styles.pageTitle}>{pathMapperPage()}</div>
          <div
            className={styles.miniProfile}
            onClick={() => goTo("/profile")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
