import React from 'react';
import './index.css';
import { GrCircleInformation } from 'react-icons/gr';

class About extends React.Component {
    render() {
        return (
            <div
                className="ui-container"
                id={this.props.id}
                style={{
                    marginLeft: '-30px',
                }}
            >
                <div className="alltext" style={{ float: 'left' }}>
                    <div className="about-me-title">
                        <h1>ABOUT ME</h1>
                        <GrCircleInformation className="GrCircleInformation" />
                    </div>
                    <hr size="2" className="about-hr" />
                    <div className="details" style={{ marginLeft: '105px', textAlign: 'left' }}>
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
                <div className="column">
                    <div className="profileImg">
                        <div className="circular--landscape">
                            <img alt="Avatar" src="myimage.jpg"></img>
                        </div>
                        <div className="mydetails" style={{ wordSpacing: '300px' }}>
                            <div className="detail">Age:</div>
                            <div className="detail-desc">26</div>
                        </div>
                        <hr size="2" className="details-hr" />

                        <div className="mydetails">
                            <div className="detail">Field Of Study:</div>
                            <div className="detail-desc">Computer Science</div>
                        </div>
                        <hr size="2" className="details-hr" />

                        <div className="mydetails">
                            <div className="detail">Interest:</div>
                            <div className="detail-desc">Web Development</div>
                        </div>
                        <hr size="2" className="details-hr" />
                    </div>
                </div>
            </div>
        );
    }
}
export default About;
