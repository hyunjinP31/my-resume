import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoEnterOutline } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
const AboutMe = () => {
    return (
        <div className='aboutMe inner'>
            <div className='meLeft'>
                <h1>매일 하나 더 배워가는 개발자 <span>박현진</span></h1>
                <div className='simpleInfo'>
                    <div className='infoImg'>
                        <img src='' alt='개발자 박현진의 사진' />
                    </div>
                    <ul className='introducing'>
                        <li>
                            <p><AiFillGithub className='infoIcon' />Github</p>
                            <a href='https://github.com/hyunjinP31'><span>https://github.com/hyunjinP31</span></a>
                        </li>
                        <li>
                            <p><SiGmail className='infoIcon' />Email</p>
                            <span>wiseblue31@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='meRight'>
                <div className='stacks'>
                    <h1>Stacks</h1>
                    <ul>
                        <li>
                            <h3>Front-End</h3>
                            <p>HTML5</p>
                            <p>CSS3(SCSS)</p>
                            <p>JAVASCRIPT</p>
                            <p>REACT</p>
                            <p>TYPESCRIPT</p>
                        </li>
                        <li>
                            <h3>Back-End</h3>
                            <p>Node.js, express</p>
                        </li>
                        <li>
                            <h3>Database</h3>
                            <p>MySQL</p>
                        </li>
                        <li>
                            <h3>DevOps</h3>
                            <p>AWS</p>
                            <p>Git</p>
                        </li>
                    </ul>
                </div>
                <ul className='quickConnect'>
                    <h1>Projects</h1>
                    <li>
                        <a href='https://comet-client.vercel.app/'><img src='' alt='tempus site' /></a>
                        <div className='usedSkill'>
                            <div className='skills'>React</div>
                            <div className='skills'>Javascript</div>
                            <div className='skills'>Redux</div>
                            <div className='skills'>Node.js</div>
                            <div className='skills'>MySQL</div>
                            <div className='skills'>S3</div>
                        </div>
                        <div className='simpleExplain'>
                            원하는 프로젝트를 찜하거나 후원할 수 있고 내가 직접 프로젝트를 올릴 수 있는 가상의 펀딩 사이트
                        </div>
                        <div>
                            <a href='https://github.com/hyunjinP31/comet-client'><AiFillGithub title='tempus client git 주소' /></a>
                            <a href='https://github.com/hyunjinP31/comet-server'><AiFillGithub title='tempus server git 주소' /></a>
                            <a href='https://comet-client.vercel.app/'><IoEnterOutline title='tempus 사이트 주소' /></a>
                        </div>
                    </li>
                    <li>
                        <a href='https://strato-client.vercel.app/'><img src='' alt='strato site' /></a>
                        <div className='usedSkill'>
                            <div className='skills'>React</div>
                            <div className='skills'>Javascript</div>
                            <div className='skills'>Redux</div>
                            <div className='skills'>Node.js</div>
                            <div className='skills'>MySQL</div>
                        </div>
                        <div className='simpleExplain'>
                            가상의 호텔 스트라토를 소개하는 사이트
                        </div>
                        <div>
                            <a href='https://github.com/hyunjinP31/strato-client'><AiFillGithub title='strato client git 주소' /></a>
                            <a href='https://github.com/hyunjinP31/strato-server'><AiFillGithub title='strato server git 주소' /></a>
                            <a href='https://strato-client.vercel.app/'><IoEnterOutline title='strato 사이트 주소' /></a>
                        </div>
                    </li>
                    <li>
                        <img src='' alt='greenBooks site' />
                        <div className='usedSkill'>
                            <div className='skills'>PHP</div>
                            <div className='skills'>Javascript</div>
                            <div className='skills'>MySQL</div>
                        </div>
                        <div className='simpleExplain'>
                            원하는 도서를 장바구니에 넣고 구매할 수 있는 가상의 도서 판매 사이트
                        </div>
                        <div>
                            <a href='https://github.com/hyunjinP31/comet-client'><AiFillGithub title='greenBooks git 주소' /></a>
                            <a href='https://comet-client.vercel.app/'><IoEnterOutline title='greenBooks 사이트 주소' /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;