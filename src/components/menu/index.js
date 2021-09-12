import { VHMenu } from './menu';
import { VHMenuItem } from './menu-item';
import { VHMenuLabel } from './menu-label';
import { VHMenuLink } from './menu-link';
import { VHMenuSub } from './menu-sub';
export default (app) => {
    app.component(VHMenu.name, VHMenu);
    app.component(VHMenuItem.name, VHMenuItem);
    app.component(VHMenuLink.name, VHMenuLink);
    app.component(VHMenuSub.name, VHMenuSub);
    app.component(VHMenuLabel.name, VHMenuLabel);
};