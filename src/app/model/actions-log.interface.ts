export const ACTION_TYPE = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    EDIT:'EDIT'
}

export interface IActionLog {
    id: number;
    action: string; // ADD, REMOVE, EDIT
    websiteName: string;
    url: string;
}