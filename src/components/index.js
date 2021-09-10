import LayoutComponent from './layout';
import FormComponent from './form';
import CommonComponent from './common';
import ButtonComponent from './button';
export default (app) => {
    app.use(ButtonComponent);
    app.use(CommonComponent);
    app.use(FormComponent);
    app.use(LayoutComponent);
};