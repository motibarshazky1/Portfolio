import React from 'react';
import './index.css';
import { FaRegKeyboard } from 'react-icons/fa';
import cIcon from '../../icons/c.png';
import cppIcon from '../../icons/c++.png';
import jsIcon from '../../icons/javascript.png';
import javaIcon from '../../icons/java.png';
import sqlIcon from '../../icons/sql.png';
import htmlIcon from '../../icons/html.png';
import cssIcon from '../../icons/css.png';
import reactIcon from '../../icons/react.png';
import LightSpeed from 'react-reveal/LightSpeed';

class Skills extends React.Component {
    state = {
        icons: [
            [jsIcon, 'JavaScript'],
            [reactIcon, 'React'],
            [javaIcon, 'Java'],
            [htmlIcon, 'HTML'],
            [cssIcon, 'CSS'],
            [sqlIcon, 'SQL'],
            [cIcon, 'C'],
            [cppIcon, 'C++'],
        ],
    };

    renderIcons = () => {
        return this.state.icons.map((icon, index) => {
            return (
                <div className="skill-icon-warp" key={index}>
                    <img className="skill-icon" alt="error" src={icon[0]} />
                    <h1 className="skill-text">{icon[1]}</h1>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="skills-title text-center">
                    <LightSpeed left>
                        <h1>
                            SKILLS
                            <FaRegKeyboard className="FaRegKeyboard" />
                        </h1>
                    </LightSpeed>
                </div>
                <hr size="2" className="skills-hr" />
                <div className="skill-list">{this.renderIcons()}</div>
            </div>
        );
    }
}
export default Skills;
