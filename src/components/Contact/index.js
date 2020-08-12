import React from 'react';
import './index.css';
import { GrContact } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { GiSmartphone } from 'react-icons/gi';
class Contact extends React.Component {
    render() {
        return (
            <div className="ui-container" id={this.props.id}>
                <div className="contact-title">
                    <h1>CONTACT ME</h1>
                    <GrContact className="GrContact" />
                </div>
                <hr size="2" className="contact-hr" />
                <div className="icons">
                    <ul class="list-unstyled list-inline text-center" id="iconsList">
                        <li className="list-inline-item">
                            <FaMapMarkerAlt className="mapIcon" />
                        </li>
                        <li className="list-inline-item">
                            <GrMail className="mailIcon" />
                        </li>
                        <li className="list-inline-item">
                            <GiSmartphone className="smartphoneIcon" />
                        </li>
                    </ul>
                </div>
                <div className="icons-details text-center" style={{ marginBottom: '-110px' }}>
                    <h4 className="location-details" style={{ display: 'inline' }}>
                        Ramat-Gan, Israel
                    </h4>
                    <h4 className="mail-details" style={{ display: 'inline' }}>
                        Motibarshazky1@gmail.com
                    </h4>
                    <h4 className="phone-details" style={{ display: 'inline' }}>
                        052-788-9993
                    </h4>
                </div>
                <div className="download">
                    <ul class="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <FaFileDownload className="downloadIcon" />
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <a className="downloadLink" href="https://docdro.id/Nrd5yDC" download>
                        Download CV
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
