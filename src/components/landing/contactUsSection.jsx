import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ContactUsSection = () => {
  const theme = useTheme();

  return (
    <>
      <section
        style={theme.palette.primary.contactBanner}
        className="contact-banner"
      >
        <div className="container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <div>
                <Typography
                  style={theme.palette.primary.contactBannerHeading}
                  variant="h3"
                >
                  Contact us
                </Typography>
                <Typography
                  style={theme.palette.primary.contactBannerDesc}
                  variant="h6"
                >
                  We’re here to help. Contact us and we’ll get back to you as
                  soon as we can.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="connectUs">
                <div className="px-5 py-4">
                  <Typography
                    style={theme.palette.primary.formTitle}
                    variant="h3"
                  >
                    Connect us
                  </Typography>
                </div>
                <div className="px-5">
                  <div className="mb-3">
                    <TextField
                      className="connect-us-textfield"
                      id="demo-helper-text-misaligned-no-helper"
                      label="Name"
                      fullWidth
                    />
                  </div>
                  <div className=" py-3">
                    <TextField
                      className="connect-us-textfield"
                      id="demo-helper-text-misaligned-no-helper"
                      label="Phone"
                      fullWidth
                    />
                  </div>
                  <div className="py-3 pb-5">
                    <TextField
                      className="connect-us-textfield"
                      id="demo-helper-text-misaligned-no-helper"
                      label="Email"
                      fullWidth
                    />
                  </div>
                  <Stack className="form-submit">
                    <Button style={theme.palette.primary.ContactButton}>
                      Message us
                    </Button>
                  </Stack>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
