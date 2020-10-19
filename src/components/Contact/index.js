import React from 'react';
import './index.css';
import { GrContact } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { GiSmartphone } from 'react-icons/gi';
class Contact extends React.Component {
    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="contact-title">
                    <h1>
                        CONTACT ME
                        <GrContact className="GrContact" />
                    </h1>
                </div>
                <hr size="2" className="contact-hr" />
                <div>
                    <div className="text-center">
                        <GiSmartphone className="smartphoneIcon" />
                        <span>
                            <h4 className="phone-details" style={{ display: 'inline' }}>
                                +972-52-788-9993
                            </h4>
                        </span>
                        <br />
                        <br />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.google.com/maps?q=32.0660485,34.8292901"
                        >
                            <FaMapMarkerAlt className="mapIcon" />
                        </a>
                        <span>
                            <h4 className="location-details" style={{ display: 'inline' }}>
                                Ramat-Gan, Israel
                            </h4>
                        </span>
                        <br />
                        <br />
                        <GrMail className="mailIcon" />
                        <span>
                            <h4 className="mail-details" style={{ display: 'inline' }}>
                                Motibarshazky1@gmail.com
                            </h4>
                        </span>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '65px' }}>
                    <a
                        className="pdfLink"
                        href="https://docdro.id/Z7vPnjo"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        <AiOutlineFilePdf className="pdfIcon" />
                        <button className="btn">View My CV</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
