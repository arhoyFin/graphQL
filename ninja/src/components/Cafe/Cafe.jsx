import React, { Component } from 'react';
import {firebaseCafe} from '../../firebase'
import {firebaseLooper} from '../ui/misc';
import './Cafe.css';
import Block from './Block/Block';
class Cafe extends Component {
    state = {
        cafes: [],
        isLoading: true
    }
    componentDidMount() {
    
        firebaseCafe.get().then( (snapshot)=>{
               const cafes =  firebaseLooper(snapshot);
               this.setState({cafes, isLoading:false})
            });
    }

    render() {
        console.log(this.state.cafes);
        return (
            <div className = "container container__cafe">
                {this.state.cafes.map( cafe =>(
                    <div key = {cafe.name}>
                        <Block
                            name = {cafe.name}
                            city = {cafe.city}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Cafe;