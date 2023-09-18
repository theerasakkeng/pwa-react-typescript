// React
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Loading Context
import { useLoading } from "../../../context/loading";

// MUI Componsnts
import { styled } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Internal Components
import Header from "../../../@core/components/header/Header";

//JSON Aaddress
import Province from "../../../@core/assets/address/Province";
import District from "../../../@core/assets/address/District";
import SubDistrict from "../../../@core/assets/address/SubDistrict";

// CSS
import styles from "./EditProfile.module.css";

const CssOutlineInput = styled(OutlinedInput)({
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#dcdcdc80",
    },
    "&:hover fieldset": {
      borderColor: "#b1e1f5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#b1e1f5",
    },
  },
});

const CssButton = styled(Button)({
  "&.MuiButton-root": {
    "&:hover": {
      backgroundColor: "#4ac8f3",
      boxShadow: "5px 5px 5px #d5d8df,-5px -5px 5px #ffffff",
    },
  },
});

const CssSelect = styled(Select)({
  "&.MuiInputBase-root": {
    "& fieldset": {
      borderColor: "#dcdcdc80",
    },
    "&:hover fieldset": {
      borderColor: "#b1e1f5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#b1e1f5",
    },
  },
});

const EditProfile = () => {
  const { show, hide } = useLoading();
  const navigate = useNavigate();

  const [loadApi, setLoadApi] = useState(false);
  const [customerProfile, setCustomerProfile] = useState({
    address: {
      address_info: "",
      sub_district: "",
      district: "",
      province: "",
      post_code: "",
    },
    line_name: "",
    img_profile_url: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    birth_date: "",
  });
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [subdistrictList, setSubdistrictList] = useState([]);

  const getProvince = (event, child) => {
    if (child.props.value != customerProfile.address.province) {
      (customerProfile.address.district = ""),
        (customerProfile.address.sub_district = ""),
        (customerProfile.address.post_code = "");
    }
    setCustomerProfile({
      ...customerProfile,
      address: {
        ...customerProfile.address,
        province: child.props.value,
      },
    });
    let districtData = [];
    District.forEach((o, index) => {
      if (`.$${o.ProvinceId}` == child.key) {
        districtData.push(o);
      }
    });
    setDistrictList(districtData);
  };

  const getDistrict = (event, child) => {
    if (child.props.value != customerProfile.address.district) {
      (customerProfile.address.sub_district = ""),
        (customerProfile.address.post_code = "");
    }
    setCustomerProfile({
      ...customerProfile,
      address: {
        ...customerProfile.address,
        district: child.props.value,
      },
    });
    let subdistrictData = [];
    SubDistrict.forEach((o, index) => {
      if (`.$${o.DistrictId}` == child.key) {
        subdistrictData.push(o);
      }
    });
    setSubdistrictList(subdistrictData);
  };

  const getSubdistrict = (event, child) => {
    let post_code = "";
    subdistrictList.forEach((o) => {
      if (`.$${o.SubDistrictId}` == child.key) {
        post_code = o.ZipCode;
      }
    });
    setCustomerProfile({
      ...customerProfile,
      address: {
        ...customerProfile.address,
        sub_district: child.props.value,
        post_code: post_code,
      },
    });
  };

  const initDistrict = (province) => {
    let peovice_id = null;
    Province.forEach((o, index) => {
      if (o.ProvinceTh == province) {
        peovice_id = o.ProvinceId;
      }
    });
    let districtData = [];
    District.forEach((o, index) => {
      if (o.ProvinceId == peovice_id) {
        districtData.push(o);
      }
    });
    setDistrictList(districtData);
  };

  const initSubDustrict = (district) => {
    let district_id = null;
    District.forEach((o, index) => {
      if (o.DistrictTh == district) {
        district_id = o.DistrictId;
      }
    });
    let subdistrictData = [];
    SubDistrict.forEach((o, index) => {
      if (o.DistrictId == district_id) {
        subdistrictData.push(o);
      }
    });
    setSubdistrictList(subdistrictData);
  };

  const provinceListElement = provinceList?.map((province, index) => {
    return (
      <MenuItem value={province.ProvinceTh} key={province.ProvinceId}>
        {province.ProvinceTh}
      </MenuItem>
    );
  });

  const districtListElement = districtList?.map((district, index) => {
    return (
      <MenuItem value={district.DistrictTh} key={district.DistrictId}>
        {district.DistrictTh}
      </MenuItem>
    );
  });

  const subDistrictListElement = subdistrictList?.map((subDistrict, index) => {
    return (
      <MenuItem
        value={subDistrict.SubDistrictTh}
        key={subDistrict.SubDistrictId}
      >
        {subDistrict.SubDistrictTh}
      </MenuItem>
    );
  });

  useEffect(() => {
    setProvinceList(Province);
  }, []);
  return (
    <>
      <Header />
      <div className="container-content">
        <div className={styles.profileImageWrap}>
          <div className={styles.profileImage}>
            <div className={styles.uploadImg}>
              <CameraAltIcon sx={{ fontSize: "20px" }} />
            </div>
            <div
              className={styles.imgInner}
              style={{
                backgroundImage: `url('https://loremflickr.com/320/240')`,
              }}
            ></div>
          </div>
        </div>
        <div className={styles.lineName}>
          <h3>{customerProfile.line_name}</h3>
        </div>
        <div className={`glass-box ${styles.formEdit}`}>
          <Grid container spacing={1} sx={{ marginTop: "40px" }}>
            <Grid xs={12} sm={6}>
              <CssOutlineInput
                placeholder="ชื่อ"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCustomerProfile({
                    ...customerProfile,
                    first_name: e.target.value,
                  })
                }
                value={customerProfile.first_name}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <CssOutlineInput
                placeholder="นามสกุล"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCustomerProfile({
                    ...customerProfile,
                    last_name: e.target.value,
                  })
                }
                value={customerProfile.last_name}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <CssOutlineInput
                placeholder="Mobile No"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCustomerProfile({
                    ...customerProfile,
                    mobile_no: e.target.value,
                  })
                }
                value={customerProfile.mobile_no}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <CssOutlineInput
                placeholder="อีเมล"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCustomerProfile({
                    ...customerProfile,
                    email: e.target.value,
                  })
                }
                value={customerProfile.email}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <CssOutlineInput
                placeholder="วันเกิด"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCustomerProfile({
                    ...customerProfile,
                    birth_date: e.target.value,
                  })
                }
                value={customerProfile.birth_date}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <CssOutlineInput
                placeholder="ที่อยู่"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setCustomerProfile({
                    ...customerProfile,
                    address: {
                      ...customerProfile.address,
                      address_info: e.target.value,
                    },
                  })
                }
                value={customerProfile.address.address_info}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
            <Grid xs={6} sm={6}>
              <CssSelect
                variant="outlined"
                fullWidth
                displayEmpty
                onChange={(event, child) => {
                  getProvince(event, child);
                }}
                value={customerProfile.address.province}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <span style={{ color: "#a3a3a3", fontSize: "14px" }}>
                        จังหวัด
                      </span>
                    );
                  }
                  return selected;
                }}
              >
                {provinceListElement}
              </CssSelect>
            </Grid>
            <Grid xs={6} sm={6}>
              <CssSelect
                variant="outlined"
                fullWidth
                displayEmpty
                onChange={(event, child) => {
                  getDistrict(event, child);
                }}
                value={customerProfile.address.district}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <span style={{ color: "#a3a3a3", fontSize: "14px" }}>
                        เขต/อำเภอ
                      </span>
                    );
                  }
                  return selected;
                }}
              >
                {districtListElement}
              </CssSelect>
            </Grid>
            <Grid xs={6} sm={6}>
              <CssSelect
                variant="outlined"
                fullWidth
                displayEmpty
                onChange={(event, child) => {
                  getSubdistrict(event, child);
                }}
                value={customerProfile.address.sub_district}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <span style={{ color: "#a3a3a3", fontSize: "14px" }}>
                        แขวง/ตำบล
                      </span>
                    );
                  }
                  return selected;
                }}
              >
                {subDistrictListElement}
              </CssSelect>
            </Grid>
            <Grid xs={6} sm={6}>
              <CssOutlineInput
                placeholder="รหัสไปรษณีย์"
                variant="outlined"
                fullWidth
                value={customerProfile.address.post_code}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "40px",
                  fontSize: "14px",
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Grid container sx={{ marginTop: "10px", marginBottom: "20px" }}>
          <Grid xs={12}>
            <CssButton
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "30px",
                backgroundColor: "#4ac8f3",
                boxShadow: "5px 5px 5px #d5d8df,-5px -5px 5px #ffffff",
              }}
            >
              Submit
            </CssButton>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default EditProfile;
