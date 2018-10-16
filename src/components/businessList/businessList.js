import React from 'react';
import './businessList.css';
import business from '../business/business';

class businessList extends React.Component {
    render() {
        return (
            <div className = "businessList" >
                <business />
                <business />
                <business />
                <business />
                <business />
                <business />
            </div>
        )
    }
}
export default businessList;