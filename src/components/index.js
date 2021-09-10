import LayoutComponent from './layout';
import FormComponent from './form';
import CommonComponent from './common';
export default (app) => {
    app.use(CommonComponent);
    app.use(FormComponent);
    app.use(LayoutComponent);
};