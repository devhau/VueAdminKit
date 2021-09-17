import { VHAccordion } from './accordion';
import { VHAccordionItem } from './accordion-item';
import { VHAlert } from './alert';
import { VHBreadcrumb } from './breadcrumb';
import { VHBreadcrumbItem } from './breadcrumb-item';
import { VHFlexAuto } from './flex-auto';
import { VHRenderNode } from './render-node';
//import draggable from 'vuedraggable';
export default (app) => {
    //app.component('vh-draggable', draggable);
    app.component(VHFlexAuto.name, VHFlexAuto);
    app.component(VHAccordion.name, VHAccordion);
    app.component(VHAccordionItem.name, VHAccordionItem);
    app.component(VHAlert.name, VHAlert);
    app.component(VHBreadcrumb.name, VHBreadcrumb);
    app.component(VHBreadcrumbItem.name, VHBreadcrumbItem);
    app.component(VHRenderNode.name, VHRenderNode);
};