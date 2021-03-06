import React from 'react';
import './card-style.css';
const Card = (props) => {
    return (
        <div className="card text-center shadow">
            <div className="card-imp-top">
                <img src={props.imgsrc} alt="projects" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title" style={{ fontSize: '18px' }}>
                    {props.title}
                </h4>
                <p className="card-text text-secondary">{props.description}</p>
                <a
                    style={{ float: 'left' }}
                    href={props.href}
                    className="btn btn-outline-success"
                    id="aGithub"
                    target={'_blank'}
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
                <span className="used-platforms" style={{ float: 'right', marginTop: '18px' }}>
                    {props.platforms}
                </span>
            </div>
        </div>
    );
};

export default Card;
