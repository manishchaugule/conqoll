import React ,{ Component } from 'react';
import ApplictaionDropdwon from '../../../../helper/ApplictaionDropdown'
import ApplicationOutsideClick from '../../../../helper/ApplicationOutsideClick'
import './index.scss';

export default class AddCityForm extends Component  {
    constructor(props){
        super();
        this.state = {
            selectedDistrict : "",
            selectedState : "" ,
            selectedCity : "" ,
            isFormActive : false,
            districtDisable: true
        }
        this.onSelectState = this.onSelectState.bind(this)
        this.onSelectDistrict = this.onSelectDistrict.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCancle = this.onCancle.bind(this)
    }
    onCancle(){
        this.setState(state => {
            return {
                selectedDistrict : "",
                selectedState : "" ,
                selectedCity : "" ,
                isFormActive : false,
                districtDisable : true
            };
        });
    }
    onSelectState(value){
        this.setState(state => {
            return {
                ...state,
                selectedState: value,
                districtDisable : false
            };
        });
    }
    handleChange(event) {
        this.setState({selectedCity: event.target.value});
      }

      handleSubmit(event) {
        const { selectedDistrict , selectedState , selectedCity } = this.state
        const {onSubmit} =this.props
        if(selectedState !=='' && selectedDistrict !== '' && selectedCity !==''){
            onSubmit ({
                City: selectedCity,
                State: selectedState,
                District: selectedDistrict
            })
            this.onformClick()
        }
      }
    onSelectDistrict(value){
        this.setState(state => {
            return {
                ...state,
                selectedDistrict: value
            };
        });
    }
    onformClick(){
        this.setState(state => {
            return {
                ...state,
                isFormActive: !state.isFormActive
            };
        });
    }
    render(){
        const {
            districtList ,
            stateList
        } = this.props
        const {
            isFormActive,
            selectedDistrict,
            selectedState,
            selectedCity ,
            districtDisable
        } = this.state
        const updatedDistrictList = districtList.reduce((acc,{ State , District}) => {
            if(State === selectedState ){
                acc.push(District)
            }
            return acc
        },[]) 
        return (
            !isFormActive
            ?   <div className="add-city-button-container" onClick= {_ => {this.onformClick()}}>
                    add city
                </div>
            :   <ApplicationOutsideClick  onOutsideClick = {_ => this.onCancle()}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="add-city-form-container" >
                        ADD CITY
                            <ApplictaionDropdwon 
                                data = {stateList.sort()}  
                                placeholder = {"Select State"} 
                                onSelect = {this.onSelectState}
                                selectedItem = {selectedState}
                            />
                            <ApplictaionDropdwon 
                                data = {updatedDistrictList.sort()}  
                                placeholder = {"Select District"} 
                                onSelect = {this.onSelectDistrict}
                                selectedItem = {selectedDistrict}
                                isDisable = {districtDisable}
                            />
                            <input 
                                className = "inuput-box" 
                                type="text" value={selectedCity} 
                                onChange={this.handleChange} 
                                placeholder= "Enter CIty Name"></input>
                            <div className="form-buttons">
                                <div className= "button form-btn ml-1" onClick = {_ => { this.handleSubmit()}}> Submit </div>
                                <div className= "button form-btn" onClick = {_ => { this.onCancle()}}> Cancle </div>
                            </div>  
                        </div>
                    </form>
                </ApplicationOutsideClick>
        )
    }
    
}
