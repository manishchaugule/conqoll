import { Children } from 'react';
import Actions from './actions';

const defaultState = {
    selectedNavigationMenu :"all",
    detail : [
        {
            stateId : 1,
            name : "Maharashtra",
            children : [
                {
                    districtId : 1,
                    name : "Thane" ,
                    children : [
                        {
                            cityId : 1,
                            name: "kalyan"
                        },
                        {
                            cityId : 2,
                            name: "dombivali"
                        },
                        {
                            cityId : 3,
                            name: "thane"
                        }
                    ]
                },
                {
                    districtId : 2,
                    name : "mumbai" ,
                    children : [
                        {
                            cityId : 1,
                            name: "dadar"
                        },
                        {
                            cityId : 2,
                            name: "kurla"
                        }
                    ]
                }
            ]
        }
    ]
        
    
}

export default function HomeReducer(state = defaultState, action) {
    switch (action.type) {
        // case Actions.ON_UPDATE_HOME_DETAILS:
        //     const categories = [...action.data];
        //     return {
        //         ...state,
        //         homeDetailsLoaded:action.status,
        //         categoryMenuList: categories.map(({ categoryId, displayName }) => {
        //             return { id: categoryId, displayName };
        //         }),
        //         selectedCategoryId: categories[0].categoryId,
        //         filings: {...getFillingsData(categories)},
        //     }
        case Actions.ON_NAVIGATION_CLICK:
            return {
                ...state,
                selectedNavigationMenu : action.data
            }
        default:
            return state;
    }
}