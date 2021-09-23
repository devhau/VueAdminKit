
// Import vue components
import * as components from '@/lib-components/index';
import * as directives from '@/lib-directives/index';
import * as constants from '@/lib-constants/index';
import '@/scss/_index.scss'
// install function executed by Vue.use()
const install = function installVueAdminKit(app, options) {

  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
  Object.entries(directives).forEach(([directiveName, directive]) => {
    app.directive(directiveName, directive);
  });
  if (options === undefined) {
    Object.entries(constants).forEach(([constantName, constant]) => {
      app.config.globalProperties[`$${constantName}`] = constant;
    });

  }
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
export * from '@/lib-directives/index';
export * from '@/lib-constants/index';
