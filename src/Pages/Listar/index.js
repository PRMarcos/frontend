import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {MdInsertDriveFile, MdFolder } from 'react-icons/md';
import logo from '../../assets/logo.svg';

import "./styles.css";
import { timingSafeEqual } from 'crypto';


export default class Main extends Component {
    state = {boxes:{ data:[]}}


    async componentDidMount() {

        //this.SubscribeToNewFiles();
        const response = await api.get(`boxes/list`);
    
        this.setState({boxes:response}); 
        //console.log(this.state.boxes.data);
      }

      backToMain = (e) =>{
       
      }

  render() {

    return (
        <div id= "box-container">
        <header>
          <a href="/">
            <img src={logo} alt="" />
          </a>
            
            <h1>Caixas do Servidor</h1>
        </header>
        
          
        <ul>       
            {this.state.boxes.data &&  this.state.boxes.data.map( caixa => (
                <li key={caixa._id}>
                    <a className="fileInfo" href={`/box/${caixa._id}`} >

                        <MdFolder size={24} color= "#A5Cfff" />
                        <strong>{caixa.title}</strong>
                    </a>
                    <span> Criada há {" "}{distanceInWords(caixa.createdAt, new Date(), {locale: pt})}</span>
                </li>

            ))}
                         
        </ul>
        </div>

    );
  }
}