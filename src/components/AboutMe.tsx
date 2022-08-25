import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoEnterOutline } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
import { UtilState } from './module/util';

type AboutMeProps = {
    util: UtilState;
    tempusToggle: () => void;
    stratoToggle: () => void;
    greenBooksToggle: () => void;
}

const AboutMe = ({util, tempusToggle, stratoToggle, greenBooksToggle}:AboutMeProps) => {
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
                    <h1 className='categoryTitle'>Stacks</h1>
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
                <div className='projects'>
                    <h1 className='categoryTitle'>Projects</h1>
                    <Swiper className='quickConnect mySwiper'
                        spaceBetween={30}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        navigation={true}
                        modules={[Navigation]}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            }
                        }}>
                        <SwiperSlide className='projectItem'>
                            <div className='projectImg'>
                                <img src='' alt='tempus site' />
                                <div className='learnMore'>
                                    <div onClick={tempusToggle} className='learnMoreBtn'>Learn More</div>
                                </div>
                            </div>
                            <Swiper slidesPerView={3} modules={[Pagination]} pagination={{ type: "progressbar" }} className='usedSkill mySwiper'>
                                <SwiperSlide className='skills'>React</SwiperSlide>
                                <SwiperSlide className='skills'>Javascript</SwiperSlide>
                                <SwiperSlide className='skills'>Redux</SwiperSlide>
                                <SwiperSlide className='skills'>Node.js</SwiperSlide>
                                <SwiperSlide className='skills'>MySQL</SwiperSlide>
                                <SwiperSlide className='skills'>S3</SwiperSlide>
                            </Swiper>
                            <div className='simpleExplain'>
                                원하는 프로젝트를 찜하거나 후원할 수 있고 내가 직접 프로젝트를 올릴 수 있는 펀딩 사이트
                            </div>
                            <div className='directUrls'>
                                <a href='https://github.com/hyunjinP31/comet-client'><AiFillGithub title='tempus client Git 주소' /></a>
                                <a href='https://github.com/hyunjinP31/comet-server'><AiFillGithub title='tempus server Git 주소' /></a>
                                <a href='https://comet-client.vercel.app/'><IoEnterOutline title='tempus 사이트 주소' /></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='projectItem'>
                            <div className='projectImg'>
                                <img src='' alt='strato site' />
                                <div className='learnMore'>
                                    <div onClick={stratoToggle} className='learnMoreBtn'>Learn More</div>
                                </div>
                            </div>
                            <Swiper slidesPerView={3} modules={[Pagination]} pagination={{ type: "progressbar" }} className='usedSkill mySwiper'>
                                <SwiperSlide className='skills'>React</SwiperSlide>
                                <SwiperSlide className='skills'>Javascript</SwiperSlide>
                                <SwiperSlide className='skills'>Redux</SwiperSlide>
                                <SwiperSlide className='skills'>Node.js</SwiperSlide>
                                <SwiperSlide className='skills'>MySQL</SwiperSlide>
                            </Swiper>
                            <div className='simpleExplain'>
                                호텔 스트라토를 소개하는 사이트
                            </div>
                            <div className='directUrls'>
                                <a href='https://github.com/hyunjinP31/strato-client'><AiFillGithub title='strato client Git 주소' /></a>
                                <a href='https://github.com/hyunjinP31/strato-server'><AiFillGithub title='strato server Git 주소' /></a>
                                <a href='https://strato-client.vercel.app/'><IoEnterOutline title='strato 사이트 주소' /></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='projectItem'>
                            <div className='projectImg'>
                                <img src='' alt='greenBooks site' />
                                <div className='learnMore'>
                                    <div onClick={greenBooksToggle} className='learnMoreBtn'>Learn More</div>
                                </div>
                            </div>
                            <Swiper slidesPerView={3} modules={[Pagination]} pagination={{ type: "progressbar" }} className='usedSkill mySwiper'>
                                <SwiperSlide className='skills'>PHP</SwiperSlide>
                                <SwiperSlide className='skills'>Javascript</SwiperSlide>
                                <SwiperSlide className='skills'>MySQL</SwiperSlide>
                            </Swiper>
                            <div className='simpleExplain'>
                                원하는 도서를 장바구니에 넣고 구매할 수 있는 도서 판매 사이트
                            </div>
                            <div className='directUrls'>
                                <a href='https://github.com/hyunjinP31/comet-client'><AiFillGithub title='greenBooks Git 주소' /></a>
                                <a href='https://comet-client.vercel.app/'><IoEnterOutline title='greenBooks 사이트 주소' /></a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;