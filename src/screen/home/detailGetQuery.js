import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigationClick } from './store/dispatchers';

class detailGetQuery extends Component {
    componentDidMount() {
        const apiUrl = 'https://api.jsonbin.io/b/5f5c76a5302a837e9564b5ca';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
    }
    render() {
        const { update } = this.props;
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
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    navigationClick(status, details) {
      dispatch(navigationClick(status, details));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)((detailGetQuery));