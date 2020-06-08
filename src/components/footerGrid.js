import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 175,
    width: 100,
    backgroundColor: "transparent",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function FooterGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>
            <Grid >
              <Paper className={classes.paper} elevation={0}>
                <Link
                    href=""
                >
                <GitHubIcon className="mr-2"/>
                    GitHub
                </Link>
                <br></br>
                <Link
                    href=""
                >
                    <LinkedInIcon className="mr-2"/>
                    LinkedIn
                </Link>
                <br></br>
                <Link
                    href=""
                >
                    <InstagramIcon className="mr-2"/>
                    Instagram
                </Link>
                <br></br>
                <Link
                    href=""
                >
                    <FacebookIcon className="mr-2"/>
                    Facebook
                </Link>
                <br></br>
                <Link
                    href=""
                >
                    <TwitterIcon className="mr-2"/>
                    Twitter
                </Link>

                <Link
                    href=""
                >
                    <YouTubeIcon className="mr-2"/>
                    YouTube
                </Link>
                <Link
                    href=""
                >
                    <AppsIcon className="mr-2"/>
                    Slack
                </Link>
                </Paper>
            </Grid>
        </Grid>
      </Grid>
      
    </Grid>
  );
}