import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesComponent extends Component {
    render() {
        return (
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 127,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#fff',
                        },
                        shape: {
                            type: 'star',
                            stroke: {
                                width: 0,
                                color: '#000000',
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 40,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 6,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: false,
                            distance: 500,
                            color: '#ffffff',
                            opacity: 0.4484843631121611,
                            width: 0,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'bottom',
                            random: true,
                            straight: false,
                            out_mode: 'bounce',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab',
                            },
                            onclick: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 0.5,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 4,
                                duration: 0.3,
                                opacity: 1,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        );
    }
}
export default ParticlesComponent;
