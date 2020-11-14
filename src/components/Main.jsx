import React from 'react';
import './Main.css';
import Product from './Product';
import firebase from '../config/firebase';

class Main extends React.Component {
constructor(props) {  
    super(props);
    this.state = {ads : []}
  }
  
  componentDidMount() {
      firebase.database().ref("olxads").on("value", snapshot => {
        let ad = [];
        snapshot.forEach(snap => {   
            ad.push(snap.val());
        });
        this.setState({ ads: ad });
      });   
 }

  render(){
  return (
          <div>
          <div className="row">
          {this.state.ads.map((ads,index) => {
              return (
                  <li key = {index}> 
                  <Product url = {ads.url} price = {ads.price} title = {ads.title} phone = {ads.phone} name = {ads.name} description = {ads.description} condition = {ads.condition} type = {ads.type} date = {ads.date} month = {ads.month} city = {ads.city} state = {ads.state} showphonenumber = {ads.showphonenumber} />
                  
                  </li>      
              );
              })}     
          </div> 
        

          </div>  
            
  );
}
}

export default Main;
