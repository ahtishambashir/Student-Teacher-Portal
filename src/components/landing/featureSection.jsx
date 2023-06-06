import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  checkManageCardImg,
  evaluateCardImg,
  postAssignmentsCardImg,
  studentsListCardImg,
  uploadAssignmentsCardImg,
  viewScoresCardImg,
} from "../../utils/images";
import { useTheme } from "@material-ui/core";

export default function FeatureSection() {
  const theme = useTheme();
  return (
    <section className="py-5">
      <div className="container">
        <Typography style={theme.palette.primary.homeMainHeading} variant="h2">
          FEATURES
        </Typography>
        <Typography
          style={theme.palette.primary.homeMainSubHeading}
          variant="h6"
        >
          Make your learning experience awesome!
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={postAssignmentsCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Post Assignments
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  Professors can post assignments in their respective
                  classrooms, that students can access and work on.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={studentsListCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Students List
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  Professors can view the enrolled students in a respective
                  class add, edit and delete any of the student’s data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={evaluateCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Evaluate
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  Professors can evaluate the submitted assignments of students,
                  accept, evaluate, reject ot comment on any of the assignment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={uploadAssignmentsCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Upload Assignments
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  Students are able to create, format and upload their
                  assignments to be evaluated by the professors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={checkManageCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Check and Manage previous work
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  Students can view their previous assignment history, date of
                  submission and status.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              style={theme.palette.primary.featureCard}
              sx={{ maxWidth: "100%" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="310"
                image={viewScoresCardImg}
              />
              <CardContent>
                <Typography
                  style={theme.palette.primary.featureCardHeading}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  View scores
                </Typography>
                <Typography
                  style={theme.palette.primary.featureCardDesc}
                  variant="body2"
                >
                  Students can view the evaluated assignments, scores, grades
                  and comments on respective assignment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
