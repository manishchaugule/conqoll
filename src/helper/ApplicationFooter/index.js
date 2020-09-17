import React from 'react';
import { connect } from 'react-redux';
import ApplicationPageLayout from '../ApplicationPageLayout';
import './index.scss';

function ApplicationFooter() {
    return (
    <div className = 'application-footer'>
            <ApplicationPageLayout>
                <div className = 'application-footer__content'>
                    <div className = 'application-footer__content__text'>
                        <div className = 'application-footer__content__text__mdcourts-link'>
                            <span className = 'a'>www.eilaconsulting.com</span>
                        </div>
                        <div className = 'application-footer__content__text__copyright-text'>
                            Copyright &copy; 2020 Eila Consulting. All rights reserved.
                        </div>
                        <div className = 'application-footer__content__text__terms-text'>
                            <span className = 'a'>Term of Use/Disclaimer</span>
                        </div>
                    </div>
            </div>
            </ApplicationPageLayout>
        </div>
        
    );
};


const mapStateWithProps = ({dashboard}) => {
    return {
        
    };
};

export default connect(mapStateWithProps, null)(ApplicationFooter);