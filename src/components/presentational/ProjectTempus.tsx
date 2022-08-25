import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from 'styled-components';

export const BlackBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
`

const ProjectTempus = () => {
    return (
        <div className='pDetailWrap'>
            <BlackBg />
            <div className='pDetailExplain'>
                <Swiper
                    className='pDetailImg mySwiper'
                    slidesPerView={1}
                    slidesPerGroup={1}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}>
                    <SwiperSlide>
                        <img src='' alt='tempus 메인 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='tempus 상품 디테일 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='tempus 회원가입 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='tempus 내정보 화면' />
                    </SwiperSlide>
                </Swiper>
                <div className='pDetailLeft'>
                    <h1>TEMPUS</h1>
                    <p>개발일자 : 2022.08</p>
                    <div className='tempusMoreExplain'>
                        <div className='projectsUrls'>
                            <p>
                                Git Source Code: <a href='https://github.com/hyunjinP31/comet-client'>https://github.com/hyunjinP31/comet-client<span>(클라이언트)</span></a>
                                <a href='https://github.com/hyunjinP31/comet-server'><span>https://github.com/hyunjinP31/comet-server</span><span>(서버)</span></a>
                            </p>
                            <p>
                                Site: <a href='https://comet-client.vercel.app/'>https://comet-client.vercel.app/<span>(서버)</span></a>
                            </p>
                        </div>
                        <div className='description'>
                            <h2>Short Description</h2>
                            <span>
                                나의 프로젝트를 등록하거나 타사용자의 프로젝트를 찜하거나 후원할 수 있는 펀딩 사이트 입니다.
                                소규모 프로젝트나 개인이 상품을 런칭할 때 많이 사용되는 펀딩 사이트들의 프로세스에 흥미를 느껴 제작하게 되었습니다.
                            </span>
                            ReactJs를 사용해 개발하였으며 서버는 node.js로 만들었습니다.
                            Redux, Redux-thunk 를 이용해 상태와 비동기 처리를 관리하며 비동기 처리에 대해 더 깊이 이해하고
                            상태관리 라이브러리를 더 완벽히 숙지할 수 있었습니다.
                            heroku로 배포하며 서버에서의 이미지 저장에는 다른 storage 사용이 필요하다는 것을 알게 되었고
                            AWS의 S3 서비스를 사용하여 이미지 저장을 따로 관리해 주었습니다.
                        </div>
                        <ul className='mainFunction'>
                            <li><h2>Main Function</h2></li>
                            <li>회원가입 <span>(유효성 검사, submit 시 유효하지 않은 input이 있으면 focusing 처리)</span></li>
                            <li>프로젝트 등록 <span>(이미지 파일 업로드 시 input자리에 이미지 로드. 프로젝트 이름 중복 검사)</span></li>
                            <li>찜하기 <span>(찜한 상품이 바로 표시되도록 화면 렌더링에 많은 노력을 기울임. 찜한 상품을 데이터베이스에 넣어주는 처리를 하면서 눈속임용 하트가 바로 표시되도록 함.)</span></li>
                            <li>후원하기 <span>(후원을 했을 때 달성 percentage에 반영이 되도록 하고 후원현황이나 판매자인지에 따라 버튼의 표시를 다르게 함)</span></li>
                        </ul>
                        <ul className='stacks'>
                            <li><h2>Stacks</h2></li>
                            <li><strong>Frontend</strong>: ReactJs, Redux, Redux-thunk, Sass</li>
                            <li><strong>Backend</strong>: node.js</li>
                            <li><strong>Database</strong>: mySQL</li>
                            <li><strong>Deployment</strong>: varcel, heroku, AWS(RDS, ED2, S3)</li>
                            <li></li>
                        </ul>
                        <ul className='member'>
                            <li>1인 개발 프로젝트</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTempus;