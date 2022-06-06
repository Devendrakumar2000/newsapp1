import React, { Component } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import '../style.css'

export class Contact extends Component {
    constructor(){
        super();
        this.state={
            fName:'',
            lName:'',
            email:'',
            mobile:'',
            gender:'',
            interest:[],
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleInterestChange=this.handleInterestChange.bind(this);
    }
    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value,
        }); 
    }
    handleInterestChange(e){
        this.setState({
          [e.target.name]: [...this.state.interest,e.target.value],
        }); 
    }

    render(){
        const {fName,lName,email,mobile} = this.state;
        return(
              <Layout>
              <form className='contact'>
              <section className='input__container'>
                    <label>First Name</label>
                        <input 
                        type="text" 
                        value={fName} 
                        name="fName"
                        onChange={this.handleChange}
                     />
                </section>
                <section className='input__container'>
                    <label>Last Name</label>
                    <input type="text" value={lName} name="lName"
                    onChange={this.handleChange}/>
                </section>
                <section className='input__container'>
                    <label>Mobile Number</label>
                    <input type="text" value={mobile} name="mobile"
                    onChange={this.handleChange}/>
                </section>
                <section className='input__container'>
                    <label>Email</label>
                    <input type="email" value={email} name="email" 
                    onChange={this.handleChange}/>
                </section>
                <section className='input__container'>
                    <label>Gender</label>
                    <input type="radio" name='gender' value="male" onChange={this.handleChange}/>Male
                    <input type="radio" name='gender' value="female" onChange={this.handleChange}/>Female
                    <input type="radio" name='gender' value="other" onChange={this.handleChange}/>Other
                </section>
                <section className='input__container'>
                    <label>Interest</label>
                    <input type="checkbox" name='interest' value="Football"onChange={this.handleInterestChange} />Football
                    <input type="checkbox" name='interest' value="Cricket" onChange={this.handleInterestChange}/>Cricket
                    <input type="checkbox" name='interest' value="other" onChange={this.handleInterestChange}/>Others
                </section>
                <section className='input__container'>
                       <Button buttontext='Submit Contact' type="submit" onClick={()=>{console.log(this.state);}} />
                </section>
              </form>
              </Layout>
        );
    } 

}
export default Contact;