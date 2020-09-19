import React from 'react';
import LoaderImage from '../../assets/image/mdj_loader.gif';
import './Loader.scss';

export default function loader({customLoader = false}){
    return (
        <div className={customLoader ? 'custom' : 'loader'}>
            <img src={LoaderImage}  alt ="loader"/>
        </div>
    );
};

