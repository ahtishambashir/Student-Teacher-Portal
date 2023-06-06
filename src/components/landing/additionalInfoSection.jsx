import { Grid, Typography } from "@mui/material";
import { howItWorksImg, solutionsImg } from "../../utils/images";
import { useTheme } from "@material-ui/core";

export default function AdditionalInfo() {
  const theme = useTheme();
  return (
    <section style={theme.palette.primary.infoSection} className="py-5">
      <div className="container">
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid item xs={6}>
            <img className="img-fluid" src={solutionsImg} alt="" />
          </Grid>
          <Grid
            item
            xs={6}
            className="d-flex flex-column justify-content-center"
          >
            <Typography
              style={theme.palette.primary.infoSectionHeading}
              variant="h2"
            >
              SOLUTIONS AND <br /> BENEFITS
            </Typography>
            <Typography
              style={theme.palette.primary.infoSectionDesc}
              variant="h6"
            >
              MyWebApp is your another solution for instruction and learning.
              Educators can manage, evaluate, and improve learning experiences
              with the aid of our user-friendly and secure tool.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            className="d-flex flex-column justify-content-center"
          >
            <Typography
              style={theme.palette.primary.infoSectionHeading}
              variant="h2"
            >
              HOW IT WORKS?
            </Typography>
            <Typography
              style={theme.palette.primary.infoSectionDesc}
              variant="h6"
            >
              Anyone in your school community can get up and running with
              Classroom in minutes. Bring all your learning tools together and
              manage multiple classes in one central destination.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img className="img-fluid" src={howItWorksImg} alt="" />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
