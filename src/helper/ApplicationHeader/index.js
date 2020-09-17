import React from 'react';
import ApplicationPageLayout from '../ApplicationPageLayout';
import logo from '../../assets/image/logo1.png';
import './index.scss';

export default function ApplicationHeader({navigationClick ,selectedNavigationMenu}) {
    return (
        <div className="application-header">
            <ApplicationPageLayout>
                <div className="application-header__container">
                    <img className="application-header__logo" src={logo} alt="logo" />
                    <div className="application-header__navigation">
                        <div 
                            onClick = {_ => {navigationClick("all")}} 
                            className = {selectedNavigationMenu === 'all' 
                                ? "application-header__navigation__item selected-navigation"
                                : "application-header__navigation__item"}>
                            All
                        </div>
                        <div 
                            onClick = {_ => {navigationClick("shortlisted")}} 
                            className = {selectedNavigationMenu !== 'all' 
                            ? "application-header__navigation__item selected-navigation"
                            : "application-header__navigation__item"}>
                            Shortlisted
                        </div>
                    </div>
                </div>
            </ApplicationPageLayout>
        </div>
    )
}
