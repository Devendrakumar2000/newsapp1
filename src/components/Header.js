import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

export class Header extends Component {
    render() {
    return(
        <header>
        <Link style={{fontSize:'30px',color:'white',textDecoration:'none'}} className='anchor__cus' to="/">TAZA KHABAR</Link>
        <ul>
            <li>
              <Link className='anchor__cus' to='/'>News</Link>
              </li>
            <li>
              <Link  className='anchor__cus' to='/Contact'>Contact</Link>
            </li>
              
        </ul>
        </header>
    );
 }

}
export default Header;
/* <header>
        <Link style={{fontSize:'30px',color:'white',textDecoration:'none'}} className='anchor__cus' to="/">TAZA KHABAR</Link>
        <ul>
            <li>
              <NavNavLink style={({isActive})=>
                isActive ? {color:'red'} : {color:'white'}
              }className='anchor__cus' to='/'>News</NavNavLink>
              </li>
            <li>
              <NavNavLink style={({isActive})=>
                isActive ? {color:'red'} : {color:'white'}
              } className='anchor__cus' to='/Contact'>Contact</NavNavLink>
            </li>
              
        </ul>
        </header> */