// CSS
import styles from "./Privilege.module.css";

// MUI Components
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Unstable_Grid2";

// Internal Components
import Category from "./components/category/Category";
import RewardCard from "./components/reward-card/RewardCard";
import Header from "../../@core/components/header/Header";

const CssOutlineInput = styled(OutlinedInput)({
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

const Privilege = () => {
  return (
    <>
      <Header/>
      <div className="container-content">
        <div className={styles.search}>
          <CssOutlineInput
            fullWidth
            sx={{
              borderRadius: "30px",
              backgroundColor: "#fff",
              height: "40px",
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </div>
        <div className={styles.categorySection}>
          <Category />
        </div>
        <div className={styles.rewardSection}>
          <Grid container spacing={2}>
            <Grid xs={6} sm={3} md={2} lg={1}>
              <RewardCard/>
            </Grid>
            <Grid xs={6} sm={3} md={2} lg={1}>
            <RewardCard/>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Privilege;
