import React from 'react';
import './index.css';
import Card from '../../Cards/Cards';
import { TiStarOutline } from 'react-icons/ti';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

class Projects extends React.Component {
    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="projects-title" style={{ justiftyContent: 'center', alignItems: 'center' }}>
                    <LightSpeed left>
                        <h1>
                            PROJECTS
                            <TiStarOutline className="TiStarOutline" />
                        </h1>
                    </LightSpeed>
                </div>
                <hr size="2" className="projects-hr" />
                <div className="all-cards">
                    <div className="cards-rows">
                        <Fade bottom>
                            <Card />
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;
