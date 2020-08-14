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
                    <h1>
                        CONTACT ME
                        <GrContact className="GrContact" />
                    </h1>
                </div>
                <hr size="2" className="contact-hr" />
                <div className="icons">
                    <ul className="list-unstyled list-inline text-center" id="iconsList">
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
                <div className="row" style={{ marginBottom: '-110px' }} id="detailsList">
                    <div className="col-md-3">
                        <h4 className="location-details" style={{ display: 'inline' }}>
                            Ramat-Gan, Israel
                        </h4>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mail-details" style={{ display: 'inline' }}>
                            Motibarshazky1@gmail.com
                        </h4>
                    </div>
                    <div className="col-md-3">
                        <h4 className="phone-details" style={{ display: 'inline' }}>
                            052-788-9993
                        </h4>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '255px' }}>
                    <a className="downloadLink" href="https://docdro.id/Nrd5yDC" download>
                        <FaFileDownload className="downloadIcon" />
                        <button className="btn">Download CV</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
