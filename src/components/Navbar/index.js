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
                    style={{ color: 'rgb(177, 229, 255)', marginLeft: '100px', fontSize: '30px' }}
                >
                    MB
                </Link>
                <ul className="navbar-nav ml-auto" style={{ marginRight: '120px' }}>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px', color: 'rgb(217, 229, 255)' }}
                            to="about"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-58}
                            duration={600}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px', color: 'rgb(217, 229, 255)' }}
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
                            style={{ fontSize: '17px', color: 'rgb(217, 229, 255)' }}
                            activeClass="active"
                            to="projects"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-82}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            style={{ fontSize: '17px', color: 'rgb(217, 229, 255)' }}
                            activeClass="active"
                            to="contact"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-69}
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
