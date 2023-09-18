// React
import { useState } from "react";

// CSS
import styles from "./Category.module.css";

// MUI Components
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DirectionsSubwayFilledIcon from "@mui/icons-material/DirectionsSubwayFilled";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";

const Category = () => {
  const [categoryActive, setCategoryActive] = useState("shopping");
  const selectCategory = (categoryName) => {
    setCategoryActive(categoryName);
  };

  return (
    <div className={styles.categoryWrap}>
      <div className={styles.categoryItemWrap}>
        <LocalMallIcon
          onClick={() => selectCategory("shopping")}
          className={styles.categoryItem}
          sx={{
            color: categoryActive == "shopping" ? "#7cd1f9" : "#fff",
            fontSize: "40px",
          }}
        />
      </div>
      <div className={styles.categoryItemWrap}>
        <LocalCafeIcon
          onClick={() => selectCategory("cafe")}
          className={styles.categoryItem}
          sx={{
            color: categoryActive == "cafe" ? "#7cd1f9" : "#fff",
            fontSize: "40px",
          }}
        />
      </div>
      <div className={styles.categoryItemWrap}>
        <LocalDiningIcon
          onClick={() => selectCategory("food")}
          className={styles.categoryItem}
          sx={{
            color: categoryActive == "food" ? "#7cd1f9" : "#fff",
            fontSize: "40px",
          }}
        />
      </div>
      <div className={styles.categoryItemWrap}>
        <DirectionsSubwayFilledIcon
          onClick={() => selectCategory("transporation")}
          className={styles.categoryItem}
          sx={{
            color: categoryActive == "transporation" ? "#7cd1f9" : "#fff",
            fontSize: "40px",
          }}
        />
      </div>
      <div className={styles.categoryItemWrap}>
        <LibraryMusicIcon
          onClick={() => selectCategory("music")}
          className={styles.categoryItem}
          sx={{
            color: categoryActive == "music" ? "#7cd1f9" : "#fff",
            fontSize: "40px",
          }}
        />
      </div>
      <div className={styles.categoryItemWrap}>
        <LocalHotelIcon
          onClick={() => selectCategory("hotel")}
          className={styles.categoryItem}
          sx={{
            color: categoryActive == "hotel" ? "#7cd1f9" : "#fff",
            fontSize: "40px",
          }}
        />
      </div>
    </div>
  );
};
export default Category;
