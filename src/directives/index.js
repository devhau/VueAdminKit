import clickOutside from './click-outside';
import hotKey from './hot-key';

export default (app) => {
  app.use(clickOutside);
  app.use(hotKey);
};
