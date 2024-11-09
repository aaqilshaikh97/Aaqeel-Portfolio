import React from "react";
import SkBox from "../../components/SkBox";
import SkCard from "../../components/SkCard";
import SkTypography from "../SkTypography";
import styles from "../../assets/colors/index";
const Details = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heading: {
    align: "center",
    variant: "h6",
    color: styles.colors.redName,
    fontWeight: "bold",
    fontSize: "24px",
  },
};
function PageLayout() {
  return (
    <>
      <SkCard sx={{  width: "Auto", height: 720}}>
        <SkBox sx={Details.container}>
          <SkTypography variant="h6" sx={Details.heading}>
            Projects
          </SkTypography>
         
        </SkBox>
      </SkCard>
    </>
  );
}

export default PageLayout;
