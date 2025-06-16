import { Fragment, memo } from 'react'
import { Button } from 'react-bootstrap'
//image
import heroImage from '../assets/images/Telecommuting-pana.svg'
//type-animation
import { TypeAnimation } from 'react-type-animation'
//utility
import { iconInfo, projects, skillInfo } from './Utility/PortfolioUtility'


const Portfolio = () => {

    const downloadFile = async (): Promise<void> => {
        const response = await fetch(`${process.env.PUBLIC_URL}/resume.pdf`);
        const blob: Blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'My_Resume.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className='portfolio-container'>
            <div className='portfolio-head'>
                <div className='hero-section'>
                    <div className='hero-heading'>
                        <h2>Hi, I'm Roshin <span role='image' title='Waving hand'>👋</span></h2>
                        <TypeAnimation
                            sequence={skillInfo}
                            wrapper="h2"
                            speed={50}
                        />
                        <p>Passionate about building interactive and scalable frontend apps.</p>
                        <div className='hero-button'>
                            <Button variant='outline-dark'>View My Work</Button>
                            <Button variant='outline-dark' onClick={downloadFile}>Download Resume</Button>
                        </div>
                    </div>

                    <div className='hero-image'>
                        <img src={heroImage} alt="Developer illustration" />
                    </div>
                </div>
            </div>

            <div className='skill'>
                {iconInfo?.map((item: any, index: number) => (
                    <Fragment key={index}>
                        <item.icon title={item.title} />
                    </Fragment>
                ))}
            </div>

            <div className='projects-section'>
                <h3 className='section-title'>Projects</h3>
                <div className='projects-grid'>
                    {projects.map((project, index) => (
                        <div className='project-card' key={index}>
                            <img src={project?.image} alt={`${project?.title} preview`} />
                            <h4>{project?.title}</h4>
                            <p>{project?.description}</p>
                            <div className='project-links'>
                                {project?.demo && <a href={project?.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                                {project?.code && <a href={project?.code} target="_blank" rel="noopener noreferrer">Source Code</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='contact'>
                {/* Add contact section here */}
            </div>
        </div>
    )
}

export default memo(Portfolio)

