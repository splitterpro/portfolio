import { Fragment, memo, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
//image
import heroImage from '../assets/images/Telecommuting-pana.svg'
//type-animation
import { TypeAnimation } from 'react-type-animation'
//utility
import { onFormatSkillInfo, onGetIconInfo } from './Utility/PortfolioUtility'


const Portfolio = () => {

    //ref
    const projectsRef = useRef<any>(null);

    const [portfolioInfo, setPortfolioInfo] = useState<any>(null);

    useEffect(() => {

        fetch("https://api.jsonbin.io/v3/b/6871df506063391d31abdd21")
            .then((res) => res.json())
            .then((json) => setPortfolioInfo(json.record))
            .catch((err) => console.error("Error fetching JSONBin:", err));
    }, []);

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const downloadFile = () => {
        const url = "https://drive.google.com/uc?export=download&id=1-lFgHVpUv0jg-buz-yYL2R1RkWaFta_j";
        window.location.href = url;
    };

    console.log("ad", portfolioInfo);


    return (
        <div className='portfolio-container'>

            {/* hero section */}
            <div className='portfolio-head'>
                <div className='hero-section'>
                    <div className='hero-heading'>
                        <h2>Hi, I'm Roshin <span role='image' title='Waving hand'>👋</span></h2>
                        {Array.isArray(portfolioInfo?.skillInfo) && portfolioInfo.skillInfo.length > 0 && (
                            <TypeAnimation
                                sequence={onFormatSkillInfo(portfolioInfo?.skillInfo)}
                                wrapper="h2"
                                speed={50}
                                deletionSpeed={70}
                            />
                        )}
                        <p>Passionate about building interactive and scalable frontend apps.</p>
                        <div className='hero-button'>
                            <Button variant='outline-dark' onClick={scrollToProjects}>View My Work</Button>
                            <Button variant='outline-dark' onClick={downloadFile}>Download Resume</Button>
                        </div>
                    </div>

                    <div className='hero-image'>
                        <img src={heroImage} alt="Developer illustration" />
                    </div>
                </div>
            </div>

            {/* skill */}
            <div className='skill'>
                {Array.isArray(portfolioInfo?.iconInfo) && portfolioInfo.iconInfo.length > 0 && (
                    <>
                        {portfolioInfo?.iconInfo?.map((item: any, index: number) => (
                            <Fragment key={index}>
                                {onGetIconInfo(item)}
                            </Fragment>
                        ))}
                    </>
                )}
            </div>

            {/* projects */}
            <div className='projects-section' ref={projectsRef}>
                {Array.isArray(portfolioInfo?.projects) && portfolioInfo?.projects?.length > 0 && (
                    <>
                        <h3 className='section-title'>Projects</h3>
                        <div className='projects-grid'>
                            {portfolioInfo?.projects?.map((project: any, index: number) => (
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
                    </>
                )}
            </div>
        </div>
    )
}

export default memo(Portfolio)

