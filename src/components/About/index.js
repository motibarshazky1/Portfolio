import React from 'react';
import './index.css';
import { GrCircleInformation } from 'react-icons/gr';

class About extends React.Component {
    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="left">
                    <div className="box-1">
                        <h1>ABOUT ME</h1>
                        <GrCircleInformation className="GrCircleInformation" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr size="2" className="about-hr" />
                    <div className="box-2">
                        <h5>
                            <p style={{ width: '500px' }}>
                                I'm 26 years old from Ramat Gan, Israel. Currently on my third year as a B.Sc
                                Computer Science student at HIT.
                                <br />
                                <br />
                                Using programming languages such as HTML, CSS, and JavaScript, I wish to create
                                various features for client websites.
                                <br />
                                <br />
                                I am a hard worker, self-learner, team-player and highly motivated, eager to
                                challenge myself while continuously learning and improving.
                                <br />
                                <br />
                                Scroll down to view my skills and projects, or to just contact me if you need.
                                Enjoy!
                            </p>
                        </h5>
                    </div>
                </div>
                <div className="right">
                    <div className="box-3">
                        <img className="card-imp-top" alt="Avatar" src="myimage.jpg"></img>
                    </div>
                    <div className="box-4">
                        <p style={{ width: '300px' }}>
                            <div className="my-details" style={{ wordSpacing: '300px' }}>
                                <div className="detail">Age:</div>
                                <div className="age-detail-desc">26</div>
                            </div>
                            <hr size="2" className="my-details-hr" />

                            <div className="my-details">
                                <div className="detail">Field Of Study:</div>
                                <div className="field-detail-desc">Computer Science</div>
                            </div>
                            <hr size="2" className="my-details-hr" />

                            <div className="my-details">
                                <div className="detail">Interest:</div>
                                <div className="interest-detail-desc">Web Development</div>
                            </div>
                            <hr size="2" className="my-details-hr" />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;
