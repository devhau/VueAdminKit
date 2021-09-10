import { VHContainer } from './container';
import { VHRow } from './row';
import { VHCol } from './col';

export default (app) => {
    app.component(VHContainer.name, VHContainer);
    app.component(VHRow.name, VHRow);
    app.component(VHCol.name, VHCol);
};