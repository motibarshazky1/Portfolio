import React from 'react';
import './card-style.css';
const Card = (props) => {
    return (
        <div className="card text-center shadow">
            <div className="card-imp-top">
                <img src={props.imgsrc} alt="projects" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title" style={{ fontSize: '19px' }}>
                    {props.title}
                </h4>
                <p className="card-text text-secondary">{props.description}</p>
                <a href={props.href} className="btn btn-outline-success">
                    View on GitHub
                </a>
                <span className="used-platforms" style={{ marginLeft: '20px' }}>
                    {props.platforms}
                </span>
            </div>
        </div>
    );
};

export default Card;
