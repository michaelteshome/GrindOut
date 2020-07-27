import React from 'react';
import './landing-page.css';
import BackgroundImage from '../../images/BackgroundImage.jpg';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import MainLogo from '../../images/MainLogo.png';
import PerformanceLogo from '../../images/PerformanceLogo.svg';
import TimeLogo from '../../images/TimeLogo.svg';
import ClientFeedback from '../../images/ClientFeedback.svg';
import CovidSocialDistance from '../../images/CovidSocialDistance.svg';
import CovidWashHand from '../../images/CovidWashHand.svg';
import CovidMedCare from '../../images/CovidMedCare.svg';
import ProfilePic from '../../images/ProfilePic.jpg';
import ContactMeLogo1 from '../../images/ContactMeLogo1.svg';
import ContactMeLogo2 from '../../images/ContactMeLogo2.svg';


/**
Mongo DB Contents: 

Collections: User, Credentials Collection, Encryption
    User: FirstName, LastName, Email, Confirm Email, Password, AccountExists

    Credentials: Company or Party Name, Password, Password Renewal Date, Character Length, Numbers

    Encryption: UserID, Passoword, OldPassword, ReminderDate
 */

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: teal[700],
        },
    },
});



export default class LandingPage extends React.Component {
    constructor(props){
        super(props);

        this.state =  {
            username: '',
            password: '',
            FirstName: '',
            confirmPassword: '',
            LastName: '',
        }
    }

    checkAccount(){
        /*Check if the account exist, and if not, return false, otherwise, return true.
        */

        if(this.state.FirstName.length() === 0 || this.state.LastName.length() === 0){
            alert("Enter a Valid Full Name: ");
        }
        else {

        }
    }

    createAccount(){
        /*Check if the account exists, and if not, add it to the database.
        */ 
    }

    handleLogin(){
        /*Login User into the application.*/
        //return <AlertDialogSlide value={true}/>;
        //this.showDialog = true;
        this.setState({
            showDialog: true
        });
    }

    handleSignUp(){
        /*Sign Up User through the application.*/
        //return <AlertDialogSlide value={true}/>;
        //this.showDialog = true;
        this.setState({
            showDialog: true
        });
    }

    render() {
        return (
            
            <div className="landing-base">
                <NavBar />
                <div className="landingBackground">
                    
                    <img src={BackgroundImage} style={{width: "100%", height: "15%"}}></img>

                    <div className="" id="overlay">
                        <div className="headerContent">
                            <img src={MainLogo} style={{position: 'absolute', top: '0', left: '38%', paddingBottom: '20px',}}></img>
                            <h1 style={{marginTop: '25px', fontSize:'50px',}}>Study More Effectively with Simple Tools</h1>
                            {/*<p>Proud to be serving more than 200 Colleges Nationwide</p>*/}
                            <h3 style={{paddingTop: '105px', fontSize: '35px',}}>Proud to be serving more than 200 Colleges Nationwide</h3>
                        </div>

                        <div style={{position: 'relative', width: '30%', left: '875px', bottom: '80px', height: '75px'}}>
                            <button className="btn-member" >Login</button>
                            <button className="btn-member" >Sign Up</button>
                        </div>

                    </div>

                    
                </div>

                <div id="about-section">
                    <h1 id="about-banner">About Us</h1>
                    <h3 id="about-banner-msg">We help students with mitigating through rigorous coursework and scheduling with time efficient solutions.</h3>

                    <h2 id="services-message">Here are a few of our services that we offer</h2>

                    <div className="flex-container">
                        <div className="services" id="hover-card">
                            <div id="logo-placeholder"><img src={PerformanceLogo} style={{position:'absolute', height: '80px', width: '100%', right: '20px', left: '5px', top: '9px'}}>
                            </img></div>
                            <h1>Student Performance Analysis</h1>
                        </div>

                        <div className="services" id="hover-card">
                            <div id="logo-placeholder"><img src={TimeLogo} style={{position:'absolute', height: '80px', width: '100%', right: '20px', left: '5px', top: '9px'}}>
                            </img></div>
                            <h1>Per Weekly Schdeuling Time Management</h1>
                        </div>

                        <div className="services" id="hover-card">
                            <div id="logo-placeholder"><img src={ClientFeedback} style={{position:'absolute', height: '80px', width: '100%', right: '20px', left: '5px', top: '9px'}}>
                            </img></div>
                            <h1>Client Feedback Recommendation on Assigment Priorities</h1>
                        </div>

                    </div>
                </div>

                <div id="about-section-2">
                    <h2 id="covid-banner-msg">We know during tough times such as COVID-19, often whats missed is the ability to concenntrate and focus in safety-first environment.</h2>

                    <h3 id="covid-banner-tip-msg">Please follow these three tips to ensure you loved ones are safe.</h3>
                    <div className="covid">
                        <div id="covid-item-1">
                            <img src={CovidSocialDistance} style={{height: '435px',}}></img>
                        </div>
                        <div id="covid-item-2">
                            <h1 id="covid-banner-msg">Social Distance</h1>
                            <p style={{fontSize: '30px', marginTop: '15px'}}>Its import to social distance at all times, even if you are in a decently spaced environment. Whenever you social distnace, think
                            beyond 6 feet, and think for those that matter most to you, and how your efforts to protect them from being vulnerable to this pandemic
                            heavily relies on your practice of social distancing. I promise, there will be a day where we can joyfully come to contact with loved ones. </p>
                        </div>
                    </div>

                    <div className="covid">
                        <div id="covid-item-1-alt">
                            <img src={CovidWashHand} style={{height: '435px'}}></img>
                        </div>
                        <div id="covid-item-2-alt">
                            <h1 id="covid-banner-msg">Wash Your Hands</h1>
                            <p style={{fontSize: '30px', marginTop: '15px'}}>Even though you may not be giving the big high-fives to your favorite professors, or maybe having a nice coffee with your best pals. 
                            It is still your duty to ensure that you practice efficient hygiene by simply washing your hands with soap or an alcoholic based hand wash.
                            Your efforts to stop the disease by wearing PPE and routinely washing your hands can help lead to create safety in public areas </p>
                        </div>
                    </div>

                    <div className="covid">
                        <div id="covid-item-1">
                            <img src={CovidMedCare} style={{height: '435px'}}></img>
                        </div>
                        <div id="covid-item-2">
                            <h1 id="covid-banner-msg">Donate Blood</h1>
                            <p style={{fontSize: '38px', marginTop: '15px'}}>If you are able to donate blood, and even if you are a healthy individual, try to donate blood. Any vital antibodies is enough
                            to help someone in need to fasten recovery of patients with Covid-19.</p>
                        </div>
                    </div>


                </div>

                <div style={{ width: '100%', height: '750px', position:'relative', bottom:'3500px', color: '#ccd9ff',}}>
                    <h1>Hey, dont just take my word for it, lets hear what one of our customers had to say</h1>

                    <div id="review-1" style={{width: '55%', height: '200px', marginTop: '30px', marginLeft: '350px'}}>
                    <p id="featured-review"><i>
                    "I can't thank you enough. I was able to pass all my exams and keep up with my busy schedule with the help of your app.
                    I really love the UI and ease of navigating between upcoming coursework and scheduling. I highly recommend anyone who is a 
                    student to try this app, its honestly amazing."
                    </i> - Katie Wilkins (Southern Methodist University), Biology BS </p>
                    </div>

                    <h1 style={{marginTop: '50px'}}>Message from our CEO</h1>
                    <div>
                        <img src={ProfilePic} style={{borderRadius: '10%', marginTop: '10px'}}></img>
                        <p style={{fontSize: '30px'}}>It is my honor to create SaaS software that enable students, just like myself, to enhance their productivity amidst
                        this unprecedented situation our country is facing. I personally know how hard and diligent our customers work towards
                        becoming successfull and educated professionals in our society. Feel free to contact me on any ideas or feedback you would 
                        like to give.</p>
                    </div>
                </div>

                <div id="contact-me" style={{position: 'relative', bottom: '2800px', width: '50%', height:'500px', left: '400px'}}>
                    <h1 style={{color: '#cbd1f5', fontSize: '100px'}}>Contact Me</h1>
                    <a href="https://linkedin.com/in/michaelteshome" target= "_blank"><img src={ContactMeLogo1} 
                    style={{width: '250px', height: '250px', marginTop: '20px', marginRight: '15px'}}></img></a>
                    <a href="https://github.com/michaelteshome" target= "_blank"><img src={ContactMeLogo2}
                    style={{width: '250px', height: '250px', marginTop: '20px'}}></img></a>

                    <h1 style={{position: 'absolute', bottom: '0', color: '#cbd1f5'}}>Feel free to shoot me an email at michaelteshome5@gmail.com</h1>
                </div>

            </div>
        );
    }


}



function NavBar(props){
    
    
    return(
        <div className="navigation">
            <div id="logo-navbar">
                <img src={MainLogo} id="main-logo" ></img>
            </div>

            <div id="nav-content">
                <ul>
                    <li className="navLinks"><a href="#" id="nav-item">Home</a></li>
                    <li className="navLinks"><a href="#about-section" id="nav-item">About</a></li>
                    <li className="navLinks"><a href="#contact-me" id="nav-item">Contact</a></li>
                </ul>
            </div>
            
        </div>
    );
}

