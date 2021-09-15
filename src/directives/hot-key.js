const hotKey = {
  beforeMount(el, binding) {
    const hotKeyTarget = binding.value?.key;
    if (hotKeyTarget === null || hotKeyTarget.trim().length === 0) return;
    const app = binding.instance;
    const arKeys = hotKeyTarget.split('+').map((item) => item?.trim()?.toLowerCase()).filter((item) => item !== null && item !== '');
    const isShift = arKeys.indexOf('shift') >= 0;
    const isAlt = arKeys.indexOf('alt') >= 0;
    const isCtrl = arKeys.indexOf('ctrl') >= 0;
    const checkEvent = (event) => {
      if (!event) return false;
      let flg = true;
      if (isShift && !event.shiftKey) {
        flg = false;
      }
      if (isAlt && !event.altKey) {
        flg = false;
      }
      if (isCtrl && !event.ctrlKey) {
        flg = false;
      }
      if (event && arKeys.indexOf(event.key.toLowerCase()) < 0) {
        flg = false;
      }
      return flg;
    };
    el.hotKeyEvent = (event) => {
      if (binding.value?.action && checkEvent(event)) {
        binding.value.action(event, el, app);
      }
    };
    document.body.addEventListener('keyup', el.hotKeyEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('keyup', el.hotKeyEvent);
  },
};

export default (app) => {
  app.directive('hot-key', hotKey);
};
