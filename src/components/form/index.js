import { VHInput } from './input';
import { VHCheckbox } from './checkbox';
import { VHSelect } from './select';
import { VHOption } from './option';
import { VHTextarea } from './textarea';

export default (app) => {
    app.component(VHInput.name, VHInput);
    app.component(VHCheckbox.name, VHCheckbox);
    app.component(VHSelect.name, VHSelect);
    app.component(VHOption.name, VHOption);
    app.component(VHTextarea.name, VHTextarea);
};