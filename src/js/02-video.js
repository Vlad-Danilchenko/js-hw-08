import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storege';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

function savePlayTime(data) {
  save(CURRENT_TIME, Math.floor(data.seconds));
}

player.on('timeupdate', throttle(savePlayTime, 1000));

let loadedTime = load(CURRENT_TIME);
if (loadedTime) {
  player.setCurrentTime(loadedTime);
}
