import LayoutComponent from './layout';
import FormComponent from './form';
import MenuComponent from './menu';
import CommonComponent from './common';
import ButtonComponent from './button';
import ApplicationComponent from './application';
export default (app) => {
    app.use(ApplicationComponent);
    app.use(MenuComponent);
    app.use(ButtonComponent);
    app.use(CommonComponent);
    app.use(FormComponent);
    app.use(LayoutComponent);
};