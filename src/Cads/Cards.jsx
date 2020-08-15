import React from 'react';
import Card from './CardUI';
import image1 from '../ProjectsPhotos/animals.jpg';
import image2 from '../ProjectsPhotos/youtube.jpg';
import image3 from '../ProjectsPhotos/portfolio.jpg';
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div>
                    <div className="row">
                        <div className="col-md-3" style={{ marginLeft: '70px' }}>
                            <Card
                                imgsrc={image1}
                                title="Animals Adoption System"
                                description="Adoptions management at the association"
                                href="https://github.com/motibarshazky1/Animal-Adoption-Management-System"
                                platforms="Java, Database"
                            />
                        </div>
                        <div className="col-md-4" style={{ marginLeft: '70px' }}>
                            <Card
                                imgsrc={image2}
                                title="Youtube Browser"
                                description="A web application using Youtube API"
                                href="https://github.com/motibarshazky1/Youtube-Videos"
                                platforms="React, Axios"
                            />
                        </div>
                        <div className="col-md-3" style={{ marginLeft: '-30px' }}>
                            <Card
                                imgsrc={image3}
                                title="Portfolio Website"
                                description="My own personalized website"
                                href="https://github.com/motibarshazky1/Portfolio"
                                platforms="React, HTML, CSS"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;
