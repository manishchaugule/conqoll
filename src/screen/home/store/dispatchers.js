import Actions from './actions';

export function updateHomeDetails(status,values) {
    return {
        type: Actions.ON_UPDATE_HOME_DETAILS,
        status : status,
        data : values,
        
    }
}
export function onShortlistClick(values){
    return{
        type: Actions.ON_SELECT,
        data : values,
    }
}
export function navigationClick(values) {
    return {
        type: Actions.ON_NAVIGATION_CLICK,
        data : values,
    }
}
export function onRemoveShortlistClick(values){
    return {
        type: Actions.ON_DESELECT,
        data : values,
    }
}
export function onDeleteClick(values){
    return {
        type: Actions.ON_DELETE,
        data : values,
    }
}
export function onSubmit(values){
    return{
        type: Actions.ON_SUBMIT,
        data : values,
    }
}
