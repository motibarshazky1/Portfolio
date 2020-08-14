import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './index.css';

class Navbar extends React.Component {
    onScrollTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav
                className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg"
                id="navbar"
                style={{ width: '100%' }}
            >
                <Link
                    to="navbar"
                    className="navbar-brand"
                    activeClass="active"
                    onClick={this.onScrollTop}
                    style={{ color: 'rgb(120, 121, 191)', marginLeft: '100px', fontSize: '30px' }}
                >
                    MB
                </Link>
                <ul className="navbar-nav ml-auto" style={{ marginRight: '120px' }}>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px' }}
                            to="about"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-52}
                            duration={600}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px' }}
                            activeClass="active"
                            to="skills"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-85}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px' }}
                            activeClass="active"
                            to="projects"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-88}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px' }}
                            activeClass="active"
                            to="contact"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-73}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
