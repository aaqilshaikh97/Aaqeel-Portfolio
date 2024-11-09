import React from 'react';
import SkCard from "../../components/SkCard";
import SkButton from "../../components/SkButton";
import SkBox from "../../components/SkBox";
import SkTypography from "../../components/SkTypography";
import styles from "../../assets/colors";
import SkNavbar from '../../components/navbar';

function About() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <SkNavbar/>
      <h2>About Page</h2>
      <p>This is the About Page.</p>

        
      <div>
        <SkTypography variant="h6" color="text.secondary">
          This is some content for the first card.
        </SkTypography>
        <SkTypography variant="body1" align="center">
          This is some content for the second card.
        </SkTypography>
        <SkTypography variant="subtitle1" color="text.primary"   sx={{ fontSize: styles.sizes.spacingLarge }}>
          This card has no image but can still contain text or other components.
        </SkTypography>
        <SkBox
          bgcolor="lightblue"
          padding={3}
          borderRadius={2}
          boxShadow={3}
          sx={{ 
            maxWidth: 345, 
            margin: styles.sizes.spacingMedium, 
            borderRadius: styles.sizes.cardBorderRadius, 
            border: `1px solid ${styles.colors.border}`, 
            backgroundColor: styles.colors.background, 
          }}
        >
          <h2>Profile Page</h2>
          <p>Welcome to the Home Page!</p>
        </SkBox>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <SkCard title="Card Title 1" image="https://via.placeholder.com/150">
            This is some content for the first card.
            <SkButton onClick={handleClick}>Click Me</SkButton>
          </SkCard>

          <SkCard
            title="Card Title 2"
            image="https://via.placeholder.com/150"
            actions={
              <>
                <SkButton
                  variant="outlined"
                  color="secondary"
                  onClick={handleClick}
                >
                  Action 1
                </SkButton>
                <SkButton variant="contained" onClick={handleClick}>
                  Action 2
                </SkButton>
              </>
            }
          >
            This is some content for the second card.
          </SkCard>

          <SkCard title="Card Title 3">
            This card has no image but can still contain text or other
            components.
            <SkButton disabled>Disabled Button</SkButton>
          </SkCard> 
          </div>
          </div>
       



    </div>
  );
}

export default About;
