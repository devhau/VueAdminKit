import { VHButton } from './button';
import { VHButtonClose } from './button-close';
import { VHButtonGroup } from './button-group';

export default (app) => {
    app.component(VHButton.name, VHButton);
    app.component(VHButtonGroup.name, VHButtonGroup);
    app.component(VHButtonClose.name, VHButtonClose);
};