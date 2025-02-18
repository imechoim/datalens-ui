import type {DatalensGlobalState} from 'ui';

export const yadocsAddSectionStateSelector = (state: DatalensGlobalState) => {
    return state.connections.yadocs.addSectionState;
};

export const yadocsItemsSelector = (state: DatalensGlobalState) => {
    return state.connections.yadocs.items;
};

export const yadocsActiveDialogSelector = (state: DatalensGlobalState) => {
    return state.connections.yadocs.activeDialog;
};

export const yadocsSelectedItemIdSelector = (state: DatalensGlobalState) => {
    return state.connections.yadocs.selectedItemId;
};
