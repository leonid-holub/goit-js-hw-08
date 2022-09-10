import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  let currentSecondsJson = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', currentSecondsJson);
};

player.on('timeupdate', throttle(onPlay, 1000));

try {
  let currentSeconds = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  player.setCurrentTime(currentSeconds);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
