import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = localStorage.getItem('videoplayer-current-time');
console.log(time ? time : 0);

player.setCurrentTime(time ? time : 0);

const setPlayTime = e => {
  console.log(e.seconds);
  localStorage.setItem('videoplayer-current-time', e.seconds);
};
player.on('timeupdate', throttle(setPlayTime, 1000));
