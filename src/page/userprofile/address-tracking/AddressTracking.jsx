import Header from "../../../@core/components/header/Header";
import styles from "./AddressTracking.module.css";

import Grid from "@mui/material/Unstable_Grid2";

import AddressCard from "./components/address-card/AddressCard";

const AddressTracking = () => {
  return (
    <>
      <Header />
      <div className="container-content">
        <div className={styles.pageTitle}>ที่อยู่จัดส่ง</div>
        <div className={styles.addressSelect}>
          <Grid container spacing={1}>
            <Grid xs={12}>
              <AddressCard />
            </Grid>
            <Grid xs={12}>
              <AddressCard />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AddressTracking;
