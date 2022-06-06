import React,{Component} from 'react';
import BannerImage from "../Images/banner.jpg"
import Button from './Button';

export class Banner extends Component {
   render()  {
       return(
           <div className='banner'>
               <section className="banner__text">
                   <h2>Welcome To Taza Khabar</h2>
                   <h3>Some Text...!!</h3>
                   <Button buttontext="Explore News" />
               </section>
               <section className="banner__img">
                   <img src={BannerImage} alt="banner--logo" width="100%" />
               </section>

           </div>
       );
   }

}
export default Banner;