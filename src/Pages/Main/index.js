import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import "./styles.css";
import { timingSafeEqual } from 'crypto';


export default class Main extends Component {
  state = {
     newBox: '',
  };

  handleSubmit = async (e) =>{
    e.preventDefault();
    
    const response =  await api.post('boxes', {
      title: this.state.newBox,
    }); 

    this.props.history.push(`/box/${response.data._id}`)
  
  }
  handleListarBox = (e) => {
    this.props.history.push('/box/listar');
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
    
  }


  render() {
    return (
        <div id= "main-container">
           <form onSubmit={this.handleSubmit} action="">

            <img src={logo} alt=""/>

            <input 
              placeholder="Criar um Box"
              value = {this.state.newBox}
              onChange = {this.handleInputChange}
              />

            <button type="submit">Criar</button>
           
           </form>
           <button id="btn-listar" onClick={this.handleListarBox}>Lstar Boxes</button>
          
        </div>

    );
  }
}
