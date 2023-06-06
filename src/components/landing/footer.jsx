import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { discordIcon, Logo } from "../../utils/images";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@material-ui/core/TextField";

const Footer = () => {
  const theme = useTheme();
  const SearchButton = () => (
    <IconButton style={theme.palette.primary.newsLetterBtn}>
      <SendIcon />
    </IconButton>
  );

  return (
    <section style={theme.palette.primary.footer} className="footer-banner">
      <div className="container">
        <div style={theme.palette.primary.footerLogo}>
          <img src={Logo} alt="" />
        </div>
        <Grid
          className="pb-4"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={3}>
            <Typography
              style={theme.palette.primary.footerHead}
              variant="h3"
              mb={1}
            >
              Ingredients
            </Typography>
            <List aria-labelledby="basic-list-demo">
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Post Assignments
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Students List
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Evaluate
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Upload Assignments
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography
              style={theme.palette.primary.footerHead}
              variant="h3"
              mb={1}
            >
              resources
            </Typography>
            <List aria-labelledby="basic-list-demo">
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Disclaimer
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Terms & Conditions
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  Privacy Policy
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography
              style={theme.palette.primary.footerHead}
              variant="h3"
              mb={1}
            >
              Resources
            </Typography>
            <List aria-labelledby="basic-list-demo">
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  <span className="d-inline-block me-2">
                    <FacebookIcon />
                  </span>
                  Facebook
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  <span className="d-inline-block me-2">
                    <TwitterIcon />
                  </span>
                  Twitter
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  <span className="d-inline-block me-2">
                    <TelegramIcon />
                  </span>
                  Telegram
                </Link>
              </ListItem>
              <ListItem style={theme.palette.primary.footerListItem}>
                <Link style={theme.palette.primary.footerListItemLink} to="#">
                  <span className="d-inline-block me-3">
                    <img src={discordIcon} alt="" />
                  </span>
                  Discord
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography
              style={theme.palette.primary.footerHead}
              variant="h3"
              mb={1}
            >
              Subscribe Newletter
            </Typography>
            <TextField
              id="standard-name"
              value="Email Address"
              style={theme.palette.primary.newsLetter}
              fullWidth
              InputProps={{ endAdornment: <SearchButton /> }}
            />
          </Grid>
        </Grid>
        <Typography
          className="border-top"
          style={theme.palette.primary.footerBottom}
          variant="h5"
        >
          © 2022 , All rights reserved
        </Typography>
      </div>
    </section>
  );
};

export default Footer;
