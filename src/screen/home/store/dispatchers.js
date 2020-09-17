import Actions from './actions';

export function updateHomeDetails(status, values) {
    return {
        type: Actions.ON_UPDATE_HOME_DETAILS,
        data : values,
        status: status
    }
}
export function navigationClick(values) {
    return {
        type: Actions.ON_NAVIGATION_CLICK,
        data : values,
    }
}
