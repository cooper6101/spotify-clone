import React from 'react';
import { useStateValue } from '../StateProvider';
import './css/Body.css';
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body-info'>
        <img src={discover_weekly?.images[0].url} alt='Discover Weekly' />
        <div className='body-info-text'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='body-songs'>
        <div className='body-icons'>
          <PlayCircleFilledIcon className='body-shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
