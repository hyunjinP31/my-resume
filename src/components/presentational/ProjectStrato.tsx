import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from 'styled-components';
import {FaRegWindowClose} from 'react-icons/fa';

export const BlackBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
`
type ProjectStratoProps = {
    stratoToggle: () => void;
}

const ProjectStrato = ({stratoToggle}: ProjectStratoProps) => {
    return (
        <div className='pDetailWrap'>
            <BlackBg onClick={stratoToggle}/>
            <div className='pDetailExplain'>
                <FaRegWindowClose className='pDetailClose' onClick={stratoToggle} />
                <Swiper
                    className='pDetailImg mySwiper'
                    slidesPerView={1}
                    slidesPerGroup={1}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}>
                    <SwiperSlide>
                        <img src='' alt='strato 메인 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='strato 상세 페이지 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='strato 회원가입 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='strato 예약 화면' />
                    </SwiperSlide>
                </Swiper>
                <div className='pDetailRight'>
                    <div className='pDetailTitleWrap'>
                        <h1 className='projectTitle'>STRATO</h1>
                        <p>개발일자 : 2022.07</p>
                    </div>
                    <div className='tempusMoreExplain'>
                        <ul className='projectsUrls pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔗</span>Url</h2></li>
                            <li>
                                <p><strong>Git Source Code</strong>(client): <a href='https://github.com/hyunjinP31/strato-client'>https://github.com/hyunjinP31/strato-client</a></p>
                                <p><strong>Git Source Code</strong>(server): <a href='https://github.com/hyunjinP31/strato-server'><span>https://github.com/hyunjinP31/strato-server</span></a></p>
                            </li>
                            <li>
                                <strong>Site</strong>: <a href='https://strato-client.vercel.app/'>https://strato-client.vercel.app/</a>
                            </li>
                        </ul>
                        <div className='description pDetailSection'>
                            <h2 className='pDetailSectionTitle'><span>📋</span>Short Description</h2>
                            <p className='motivation'>
                                스크롤 이벤트를 다뤄보고 싶어 최대한 스크롤 이벤트를 활용할 수 있는 주제를 찾게되었고,
                                이미지를 창을 전부 차지할 정도로 크게 잡아도 세련되어 보이는 호텔이라는 주제를 골랐습니다.
                                벤치마킹을 하던 중 호텔 '메이필드'의 디자인을 보고 모티브 삼아 사이트를 제작하였습니다.
                            </p>
                            <br/>
                            <p className='develop'>
                                처음 <strong className='emphasis'>Git으로 협업</strong>하며 진행한 사이트입니다. 팀장님의 github를 메인으로 하여 각자 <strong className='emphasis'>branch를 나눠 작업</strong>하였고, 팀장님의 컴퓨터에서 Marge 작업을 진행했습니다.
                                또 처음 <strong className='emphasis'>AWS를 사용</strong>한 프로젝트 이기도 합니다. 그전에는 로컬 mySQL로 작업하여 메인 컴퓨터를 제외한 나머지 컴퓨터에서 데이터를 받아오는 등의 어려움이 있었는데
                                AWS를 사용하며 그런 불편함이 해소되어 <strong className='emphasis'>클라우드의 중요성</strong>을 깨닫게 되었습니다.
                                <strong className='emphasis'>ReactJs</strong>와 <strong className='emphasis'>Redux, Redux-thunk</strong>를 사용하여 개발하였는데 React로는 처음 프로젝트를 진행하는 것이라
                                Redux를 사용하지 않고 있다가 중반쯤 작업을 하다보니 프롭스로 상태를 주고 받는 것에 한계를 느꼈고,
                                결국 Redux 사용을 택하며 <strong className='emphasis'>상태관리의 중요성</strong>을 실감했습니다.
                            </p>
                        </div>
                        <ul className='mainFunction pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>💡</span>Main Function</h2></li>
                            <li><strong>예약하기</strong> <span>(로그인을 하고 방과 날짜, 인원수를 체크하면 예약완료)</span></li>
                            <li><strong>스크롤이벤트</strong> <span>(메인 페이지의 가장 중요한 이벤트 중 하나. 가장 하단에서 한 번 더 스크롤 하면 footer showing)</span></li>
                        </ul>
                        <ul className='pDetailstacks pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔨</span>Stacks</h2></li>
                            <li><strong>Frontend</strong>: ReactJs, Redux, Redux-thunk, Sass</li>
                            <li><strong>Backend</strong>: node.js</li>
                            <li><strong>Database</strong>: mySQL</li>
                            <li><strong>Deployment</strong>: varcel, heroku, AWS(RDS, ED2)</li>
                            <li></li>
                        </ul>
                        <ul className='member pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>😎</span>Member</h2></li>
                            <li><strong>2인</strong> 개발 프로젝트</li>
                            <li><strong>박현진</strong>(본인), <strong>이국현</strong>(Front-end)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStrato;