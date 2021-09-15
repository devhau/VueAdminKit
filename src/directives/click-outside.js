const clickOutside = {
  beforeMount(el, binding) {
    const action = binding.value?.action ?? binding.value;
    const app = binding.instance;
    const checkEvent = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      return path ? path.indexOf(el) < 0 : !(el === event.target || el.contains(event.target));
    };
    el.clickOutsideEvent = (event) => {
      if (checkEvent(event) && action) {
        action(event, el, app);
      }
    };
    if (action) {
      setTimeout(() => {
        document.body.addEventListener('click', el.clickOutsideEvent);
      }, 100);
    }
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default (app) => {
  app.directive('click-outside', clickOutside);
};
