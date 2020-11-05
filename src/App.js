import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useStateValue();

  // Run code based on a given condition as soon as the app loads
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: ' SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcQOBXsmBj1jU').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        });
      });
    }
  }, [dispatch]);

  return (
    <div className='App'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
