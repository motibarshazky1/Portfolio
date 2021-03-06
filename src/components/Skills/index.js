import React from 'react';
import './index.css';
import { FaRegKeyboard } from 'react-icons/fa';
import cIcon from '../../icons/c.png';
import cppIcon from '../../icons/c++.png';
import nodeIcon from '../../icons/nodejs.png';
import mongodbIcon from '../../icons/mongo.png';
import jsIcon from '../../icons/javascript.png';
import javaIcon from '../../icons/java.png';
import sqlIcon from '../../icons/sql.png';
import htmlIcon from '../../icons/html.png';
import cssIcon from '../../icons/css.png';
import reactIcon from '../../icons/react.png';

class Skills extends React.Component {
    state = {
        icons: [
            [jsIcon, 'JavaScript'],
            [reactIcon, 'React'],
            [nodeIcon, 'Node.js'],
            [javaIcon, 'Java'],
            [htmlIcon, 'HTML'],
            [cssIcon, 'CSS'],
            [mongodbIcon, 'MongoDB'],
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
                    <h1>
                        SKILLS
                        <FaRegKeyboard className="FaRegKeyboard" />
                    </h1>
                </div>
                <hr size="2" className="skills-hr" />
                <div className="skill-list">{this.renderIcons()}</div>
            </div>
        );
    }
}
export default Skills;
