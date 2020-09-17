import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigationClick } from './store/dispatchers';
import ApplicationHeader from '../../helper/ApplicationHeader';
import ApplicationFooter from '../../helper/ApplicationFooter';
import ApplicationPageLayout from '../../helper/ApplicationPageLayout';
import AllTable from './component/AllTable'
import ShortlistTable from './component/ShortlistTable'
import './index.scss';

class Home extends Component {
  render() {     
      const { navigationClick ,selectedNavigationMenu ,detail } = this.props;
      return  (
          <React.Fragment>
            <ApplicationHeader navigationClick = {navigationClick} selectedNavigationMenu={selectedNavigationMenu}/>
            <ApplicationPageLayout>
            {
              selectedNavigationMenu === 'all'
              ? <AllTable detail = {detail}/>
              : <ShortlistTable />
            }
            </ApplicationPageLayout>
            <ApplicationFooter />
          </React.Fragment>
            
      )
  }
}

const mapStateToProps = ({ home }) => {
  return {
    detail : home.detail,
    selectedNavigationMenu: home.selectedNavigationMenu
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    navigationClick(status, details) {
      dispatch(navigationClick(status, details));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)((Home));