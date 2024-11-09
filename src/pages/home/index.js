import React from "react";
import Profile from "../../components/profile";
import SkNavbar from "../../components/navbar";
import SkBox from "../../components/SkBox";

function Home() {
  return (
    <>
      <SkNavbar />

      <SkBox sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Profile />
      </SkBox>
    </>
  );
}

export default Home;
