import { Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function HeroBanner() {
  const theme = useTheme();
  const history = useHistory();
  const handleProfessor = () => {
    localStorage.setItem("type", "professor");
    history.push(`/home`);
  };
  const handleStudent = () => {
    localStorage.setItem("type", "student");
    history.push(`/home`);
  };
  return (
    <section style={theme.palette.primary.heroBanner} className="hero-banner">
      <div>
        <Typography
          style={theme.palette.primary.heroBannerHeading}
          variant="h2"
        >
          Asses | Instruct | Measure
        </Typography>
        <Typography style={theme.palette.primary.heroBannerDesc} variant="h6">
          MyWebApp introduces a fast and flexible study toolkit that makes
          learning more interesting and engaging.
        </Typography>
        <div className="login-view text-center mt-4">
          <div class="d-flex justify-content-center gap-5">
            <button
              style={theme.palette.primary.navButton}
              className="btn btn-primary border-0"
              onClick={handleProfessor}
            >
              Professor Dashboard
            </button>
            <button
              className="btn btn-info border-0"
              onClick={handleStudent}
              style={theme.palette.primary.navButton}
            >
              Student Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
