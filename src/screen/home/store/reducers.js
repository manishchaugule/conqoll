import Actions from './actions';

const defaultState = {
    selectedNavigationMenu :"all",
    detail : [],
    districts : [],
    states : [],
    count : true,
    loadingListDetails: false,
}
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const StateA = a.State.toUpperCase();
    const StateB = b.State.toUpperCase();
  
    let comparison = 0;
    if (StateA > StateB) {
      comparison = 1;
    } else if (StateA < StateB) {
      comparison = -1;
    }
    return comparison;
  }

function checkAndAddInArrya (array, data){
    const Index = array.findIndex(value => value === data);
    if(Index === -1){
        array.push(data)
    }
    return array
}
function checkAndAddFordistrict(array, data){
    const Index = array.findIndex(value => value.District === data.District);
    if(Index === -1){
        array.push(data)
    }
    return array
}
export default function HomeReducer(state = defaultState, action) {
    switch (action.type) {
        case Actions.ON_UPDATE_HOME_DETAILS:
            const updatedData = action.data &&  action.data.map((value,index) => {
                checkAndAddFordistrict(state.districts , value)
                checkAndAddInArrya(state.states , value.State)
                return {
                    ...value,
                    isSelected : false,
                    id: index
                }
            })
            return {
                ...state,
                detail : !updatedData ? [] : updatedData.sort(compare),
                loadingListDetails : action.status
            }
        case Actions.ON_NAVIGATION_CLICK:
            return {
                ...state,
                selectedNavigationMenu : action.data
            }
        case Actions.ON_SELECT:
            const updatedDetail = state.detail.map((value)=>{
                if(value.id===action.data){
                    return{
                        ...value,
                    isSelected : true
                    }
                }
                else{
                    return{
                        ...value,
                    }
                }
            })
            const total = updatedDetail.findIndex((value)=> value.isSelected === true)
            return {
                ...state,
                detail: updatedDetail,
                count: total=== -1 ? true :false
                
            }
        case Actions.ON_DESELECT:
            const updatedArray = state.detail.map((value)=>{
                if(value.id===action.data){
                    return{
                        ...value,
                    isSelected : false
                    }
                }
                else{
                    return{
                        ...value,
                    }
                }
            })
            const removedtotal = updatedArray.findIndex((value)=> value.isSelected === true)

            return{
                ...state,
                detail: updatedArray,
                count: removedtotal=== -1 ? true :false
            }
        case Actions.ON_DELETE:
            const FilteredArray = state.detail.filter((value)=> value.id !== action.data)
            const deletetotal = FilteredArray.findIndex((value)=> value.isSelected === true)
            return{
                ...state,
                detail: FilteredArray,
                count: deletetotal=== -1 ? true :false
            }
        case Actions.ON_SUBMIT:
            let addedArray = state.detail.map(value=>value)
            addedArray.push(action.data)
            const updatedDetails = addedArray.sort(compare)
            return{
                ...state,
                detail: updatedDetails
            }
        default:
            return state;
    }
}