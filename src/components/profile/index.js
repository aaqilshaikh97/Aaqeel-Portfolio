import React from "react";
import SkTypography from "../../components/SkTypography";
import SkCard from "../SkCard";
import SkButton from "../SkButton";
import SkBox from "../SkBox";
import Aaqil from "../../assets/media/images/aaqil.jpg";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../../assets/colors";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessIcon from "@mui/icons-material/Business";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Details = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
    color: "text.primary",
  },
  emailText: {
    color: "text.secondary",
  },
  iconsStyle: {
    display: "flex",
    alignItems: "center",
    fontSize: styles.sizes.spacingMedium,
    color: "text.secondary",
    mb: 2,
  },
  socialICons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    align: "center",
    variant: "h6",
    color: styles.colors.redName,
    fontWeight: "bold",
    fontSize: "24px",
  },
  
  imageStyle: {
    width: "200px",
    height: "200px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
};

function Profile() {
  return (
    <>
      <SkCard>
      <SkBox >

        <img src={Aaqil} alt="Aaqil" style={Details.imageStyle} />
</SkBox>
        <SkBox sx={{ flexDirection: "column" }}>
          <SkTypography variant="h6" sx={Details.name}>
            Shaikh Aaqeel
          </SkTypography>
          <SkButton color="secondary" variant="outlined">
            Web Developer
          </SkButton>
        </SkBox>
        <hr />

        <SkBox sx={Details.iconBox}>
          <SkTypography sx={Details.iconsStyle}>
            <EmailIcon sx={{ fontSize: 30 }} />
          </SkTypography>

          <SkBox sx={Details.container}>
            <SkTypography sx={Details.label} variant="caption">
              Email
            </SkTypography>
            <SkTypography sx={Details.emailText}>
              shaikhaaqeel97@gmail.com
            </SkTypography>
          </SkBox>
        </SkBox>

        <SkBox sx={Details.iconBox}>
          <SkTypography sx={Details.iconsStyle}>
            <SmartphoneIcon sx={{ fontSize: 30 }} />
          </SkTypography>

          <SkBox sx={Details.container}>
            <SkTypography sx={Details.label} variant="caption">
              Phone
            </SkTypography>
            <SkTypography sx={{ ...Details.emailText, paddingRight: "80px" }}>
              +91-8468849455
            </SkTypography>
          </SkBox>
        </SkBox>

        <SkBox sx={Details.iconBox}>
          <SkTypography sx={Details.iconsStyle}>
            <CalendarMonthIcon sx={{ fontSize: 30 }} />
          </SkTypography>

          <SkBox sx={Details.container}>
            <SkTypography sx={Details.label} variant="caption">
              DOB
            </SkTypography>
            <SkTypography sx={{ ...Details.emailText, paddingRight: "100px" }}>
              June 05, 1997
            </SkTypography>
          </SkBox>
        </SkBox>

        <SkBox sx={Details.iconBox}>
          <SkTypography sx={Details.iconsStyle}>
            <BusinessIcon sx={{ fontSize: 30 }} />
          </SkTypography>

          <SkBox sx={Details.container}>
            <SkTypography sx={Details.label} variant="caption">
              Address
            </SkTypography>
            <SkTypography sx={{ ...Details.emailText, paddingRight: "5px" }}>
              Ambad, Maharashtra, India
            </SkTypography>
          </SkBox>
        </SkBox>

        <SkBox sx={{ ...Details.socialICons, gap: 1 }}>
          <LinkedInIcon />
          <GitHubIcon />
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </SkBox>
      </SkCard>
    </>
  );
}

export default Profile;
