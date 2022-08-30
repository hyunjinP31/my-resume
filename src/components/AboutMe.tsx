import React from 'react';
import { AiFillGithub, AiFillPhone } from 'react-icons/ai';
import { IoEnterOutline } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { UtilState } from './module/util';

type AboutMeProps = {
    util: UtilState;
    tempusToggle: () => void;
    stratoToggle: () => void;
    greenBooksToggle: () => void;
    myResumeToggle: () => void;
}

const AboutMe = ({ util, tempusToggle, stratoToggle, greenBooksToggle, myResumeToggle }: AboutMeProps) => {
    return (
        <div className='aboutMe inner'>
            <div className='meLeft'>
                <h1><span>매일 한층 더 <strong className='emphasis'>성장</strong>하는 개발자</span> <strong className='emphasis'>박현진</strong></h1>
                <div className='simpleInfo'>
                    <div className='infoImg'>
                        <img src='image/meWithTree.jpg' alt='개발자 박현진의 사진' />
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
                        <li>
                            <p><AiFillPhone className='infoIcon' />Phone</p>
                            <span>010. 9962. 9620</span>
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
                            <p>PHP</p>
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
                        slidesPerView={1.4}
                        navigation={true}
                        modules={[Navigation, FreeMode]}
                        centeredSlides={false}
                        freeMode={true}
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
                            <div className='projectImg myResumeImg'>
                                <img src='image/compass.png' alt='나침반' />
                            </div>
                            <Swiper slidesPerView={3} modules={[Pagination]} pagination={{ type: "progressbar" }} className='usedSkill mySwiper'>
                                <SwiperSlide className='skills'>React</SwiperSlide>
                                <SwiperSlide className='skills'>TypeScript</SwiperSlide>
                                <SwiperSlide className='skills'>Redux</SwiperSlide>
                            </Swiper>
                            <div className='simpleExplain'>
                                개발자 박현진을 소개하는 사이트 <span>(현재 보고계신 사이트입니다)</span>
                            </div>
                                <div className='showDetail'>
                                    <div className="content__item" onClick={myResumeToggle}>
                                        <span className="link link--helike"><span>Detail Show</span></span>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='projectItem'>
                            <div className='projectImg'>
                                <img src='image/sand-watch.png' alt='tempus site' />
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
                                <div className='showDetail'>
                                    <div className="content__item" onClick={tempusToggle}>
                                        <span className="link link--helike"><span>Detail Show</span></span>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='projectItem'>
                            <div className='projectImg'>
                                <img src='image/lift.png' alt='strato site' />
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
                                <div className='showDetail'>
                                    <div className="content__item" onClick={stratoToggle}>
                                        <span className="link link--helike"><span>Detail Show</span></span>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='projectItem'>
                            <div className='projectImg'>
                                <img src='image/bookmark.png' alt='greenBooks site' />
                            </div>
                            <Swiper slidesPerView={3} modules={[Pagination]} pagination={{ type: "progressbar" }} className='usedSkill mySwiper'>
                                <SwiperSlide className='skills'>PHP</SwiperSlide>
                                <SwiperSlide className='skills'>Javascript</SwiperSlide>
                                <SwiperSlide className='skills'>MySQL</SwiperSlide>
                            </Swiper>
                            <div className='simpleExplain'>
                                원하는 도서를 장바구니에 넣고 구매할 수 있는 도서 판매 사이트
                            </div>
                                <div className='showDetail' onClick={greenBooksToggle}>
                                    <div className="content__item">
                                        <span className="link link--helike"><span>Detail Show</span></span>
                                    </div>
                                </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;