import React from 'react';
import './index.css';
import Card from '../../Cads/Cards';
import { TiStarOutline } from 'react-icons/ti';
class Projects extends React.Component {
    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="projects-title">
                    <h1>PROJECTS</h1>
                    <TiStarOutline className="TiStarOutline" />
                </div>
                <hr size="2" className="projects-hr" />
                <div className="all-cards">
                    <div className="row">
                        <Card />
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;
