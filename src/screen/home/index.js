import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  navigationClick ,
  updateHomeDetails , 
  onShortlistClick , 
  onRemoveShortlistClick ,
  onDeleteClick,
  onSubmit
} from './store/dispatchers';
import ApplicationHeader from '../../helper/ApplicationHeader';
import ApplicationFooter from '../../helper/ApplicationFooter';
import ApplicationPageLayout from '../../helper/ApplicationPageLayout';
import AddCityForm from './component/AddCityForm';
import AllTable from './component/AllTable';
import Loader from '../../helper/Loader/Loader';
import ShortlistTable from './component/ShortlistTable'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

class Home extends Component {
  constructor(props){
    super();
    this.state = {
        searchValue : ""
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
}
  componentDidMount() {
    const {updateHomeDetails} = this.props
    const apiUrl = 'https://api.jsonbin.io/b/5f5c76a5302a837e9564b5ca';
    updateHomeDetails(true)
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => 
      updateHomeDetails(false,data)
    );
  }
  onChangeSearch(event){
    this.setState({searchValue: event.target.value});
  }
  render() {
      const {
        count,
        detail ,
        stateList ,
        districtList,
        loadingListDetails,
        selectedNavigationMenu ,
        navigationClick ,
        onShortlistClick ,
        onRemoveShortlistClick ,
        onDeleteClick,
        onSubmit
      }  = this.props;
      const{searchValue} = this.state
      
      const filterdDetail = searchValue=== '' ?  detail : detail.filter(value => {
          return value.State.toLowerCase().includes(searchValue.toLowerCase())  
            || value.District.toLowerCase().includes(searchValue.toLowerCase()) 
            || value.City.toLowerCase().includes(searchValue.toLowerCase())
      })
      return  (
          <React.Fragment>
            <ApplicationHeader navigationClick = {navigationClick} selectedNavigationMenu={selectedNavigationMenu}/>
            <ApplicationPageLayout>
              <div className="appliction-body">
                <div className="search-box-container">
                  <input 
                    className="search-box" 
                    type="text" value={searchValue} 
                    onChange={e=>this.onChangeSearch(e)} 
                    placeholder= "Search by State,District or City" />
                  <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                </div>
                {
                  loadingListDetails ?
                    <div className ="body-div">
                        <Loader/>   
                    </div >

                  : selectedNavigationMenu === 'all'
                    ? <AllTable detail = {filterdDetail} onShortlistClick = {onShortlistClick} onDeleteClick={onDeleteClick}/>
                    : <ShortlistTable detail = {filterdDetail} onRemoveShortlistClick = {onRemoveShortlistClick} count={count}/>
                }
                {
                  selectedNavigationMenu === 'all' &&  <AddCityForm 
                  stateList = {stateList}
                  districtList= {districtList}
                  onSubmit = {onSubmit}
                />
                }
              </div>
            </ApplicationPageLayout>
            <ApplicationFooter />
          </React.Fragment>
            
      )
  }
}

const mapStateToProps = ({ home }) => {
  return {
    detail : home.detail,
    isFormActive : home.isFormActive,
    selectedNavigationMenu: home.selectedNavigationMenu,
    districtList : home.districts,
    stateList : home.states,
    loadingListDetails : home.loadingListDetails,
    count : home.count
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    navigationClick(status, details) {
      dispatch(navigationClick(status, details));
    },
    updateHomeDetails(status,details){
      dispatch(updateHomeDetails(status,details))
    },
    onShortlistClick(details){
      dispatch(onShortlistClick(details))
    },
    onRemoveShortlistClick(details){
      dispatch (onRemoveShortlistClick(details))
    },
    onDeleteClick(details){
      dispatch(onDeleteClick(details))
    },
    onSubmit(details){
      dispatch(onSubmit(details))
    }
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)((Home));