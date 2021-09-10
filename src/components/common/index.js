import { VHAccordion } from './accordion';
import { VHAccordionItem } from './accordion-item';
import { VHAlert } from './alert';
import { VHBreadcrumb } from './breadcrumb';
import { VHBreadcrumbItem } from './breadcrumb-item';
import { VHButton } from './button';
import { VHButtonGroup } from './button-group';

export default (app) => {
    app.component(VHAccordion.name, VHAccordion);
    app.component(VHAccordionItem.name, VHAccordionItem);
    app.component(VHAlert.name, VHAlert);
    app.component(VHBreadcrumb.name, VHBreadcrumb);
    app.component(VHBreadcrumbItem.name, VHBreadcrumbItem);
    app.component(VHButton.name, VHButton);
    app.component(VHButtonGroup.name, VHButtonGroup);
};