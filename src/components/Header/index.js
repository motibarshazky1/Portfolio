import React from 'react';
import './index.css';
import linkedinLogo from '../../icons/linkedin.png';
import githubLogo from '../../icons/github.png';
import facebookLogo from '../../icons/facebook.png';
import Particles from '../ParticlesComponent';

class Header extends React.Component {
    render() {
        return (
            <div
                className="ui-container"
                id="header"
                style={{
                    margin: '0 auto',
                    height: '500px',
                    marginBlockStart: '70px',
                }}
            >
                <div id="particles-js">
                    <Particles />
                </div>
                <header className="header">
                    <div className="title text-center">
                        <h1 className="name">MOTI BARSHAZKY</h1>
                        <hr size="2" className="header-hr" />
                        <div className="subtitle">FULL-STACK DEVELOPER</div>
                        <br />
                        <div className="frameworks-header">
                            JavaScript, ReactJS, Node.js, Redux, Java, HTML, CSS, MongoDB, SQL, C, C++
                        </div>
                    </div>
                    <ul className="list-unstyled list-inline text-center">
                        <li
                            className="list-inline-item"
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/moti-barshazky/', '_blank');
                            }}
                        >
                            <img className="linkedin-image" src={linkedinLogo} alt="" />
                        </li>
                        <li
                            className="list-inline-item"
                            onClick={() => {
                                window.open('https://github.com/motibarshazky1', '_blank');
                            }}
                        >
                            <img className="github-image" src={githubLogo} alt="" />
                        </li>
                        <li
                            className="list-inline-item"
                            onClick={() => {
                                window.open('https://www.facebook.com/Moti.Barshazky/', '_blank');
                            }}
                        >
                            <img className="facebook-image" src={facebookLogo} alt="" />
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}
export default Header;
