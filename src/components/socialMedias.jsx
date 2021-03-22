import React, { Component } from 'react';
import facebookLogo from '../img/facebook.svg'
import instagramLogo from '../img/instagram.svg'
import twitterLogo from '../img/twitter.svg'
import newsLogo from '../img/newspaper.png'
import '../style/socialMedias.css'
class SocialMedias extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ="container">
                <div className="row">
                <div className="card col-sm">
                    <img className="card-img-top" src={facebookLogo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Facebook</h5>
                    <p className="card-text">This will redirect to a facebook dashboard</p>
                    <a href="#" className="btn btn-primary">GO</a>
                 </div>
                </div>
                <div className="card col-sm" >
                    <img className="card-img-top" src={twitterLogo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">twitter</h5>
                    <p className="card-text">This will redirect to a twitter dashboard</p>
                    <a href="#" className="btn btn-primary">GO</a>
                 </div>
                </div>
                <div className="card col-sm">
                    <img className="card-img-top" src={instagramLogo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Instagram</h5>
                    <p className="card-text">This will redirect to an Insatgram dashboard</p>
                    <a href="#" className="btn btn-primary">Go</a>
                 </div>
                </div>
                <div className="card col-sm">
                    <img className="card-img-top" src={newsLogo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">News Outlets</h5>
                    <p className="card-text">This will redirect to other forms of newsoutlets</p>
                    <a href="#" className="btn btn-primary">Go</a>
                 </div>
                </div>
                </div>
            </div>
            
         );
    }
}
 
export default SocialMedias;