import React from 'react';
import './css/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import { Grid, Slider } from '@material-ui/core';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img
          className='footer-album-logo'
          src='https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/square/7aacc5-20130508-favorite-album-covers.jpg'
          alt='Album Cover'
        />
        <div className='footer-song-info'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className='footer-center'>
        <ShuffleIcon className='footer-green' />
        <SkipPreviousIcon className='footer-icon' />
        <PlayCircleOutlineIcon className='footer-icon' fontSize='large' />
        <SkipNextIcon className='footer-icon' />
        <RepeatIcon className='footer-green' />
      </div>

      <div className='footer-right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
