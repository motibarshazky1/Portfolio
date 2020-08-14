import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
    render() {
        return (
            <div className="ui-container">
                <Navbar title="navbar" id="about" />
                <Header title="header" id="header" />
                <About title="about" id="about" />
                <Skills title="skills" id="skills" />
                <Projects title="projects" id="projects" />
                <Contact title="contact" id="contact" />
            </div>
        );
    }
}

export default App;
