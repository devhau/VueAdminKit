import { VHInput } from './input';
import { VHCheckbox } from './checkbox';
import { VHSelect } from './select';
import { VHOption } from './option';
import { VHTextarea } from './textarea';
import { VHFieldInput } from './field-input';

export default (app) => {
    app.component(VHFieldInput.name, VHFieldInput);
    app.component(VHInput.name, VHInput);
    app.component(VHCheckbox.name, VHCheckbox);
    app.component(VHSelect.name, VHSelect);
    app.component(VHOption.name, VHOption);
    app.component(VHTextarea.name, VHTextarea);
};