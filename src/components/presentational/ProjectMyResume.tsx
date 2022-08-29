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

type ProjectMyResumeProps = {
    myResumeToggle: () => void;
}

const ProjectMyResume = ({myResumeToggle}: ProjectMyResumeProps) => {
    return (
        <div className='pDetailWrap'>
            <BlackBg onClick={myResumeToggle} />
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
                        <img src='image/tempus_main.png' alt='tempus 메인 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='image/tempus_project_detail.png' alt='tempus 상품 디테일 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='image/tempus_create_project.png' alt='tempus 상품 등록 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='image/tempus_my_menu.png' alt='tempus 내정보 화면' />
                    </SwiperSlide>
                </Swiper>
                <div className='pDetailRight'>
                    <div className='pDetailClose'><FaRegWindowClose onClick={myResumeToggle} /></div>
                    <div className='pDetailTitleWrap'>
                        <h1 className='projectTitle'>JIN'S RESUME</h1>
                        <p>개발일자 : 2022.08</p>
                    </div>
                    <div className='tempusMoreExplain'>
                        <ul className='projectsUrls pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔗</span>Url</h2></li>
                            <li>
                                <p><strong>Git Source Code</strong>: <a href='https://github.com/hyunjinP31/my-resume'>https://github.com/hyunjinP31/my-resume</a></p>
                            </li>
                            <li>
                                <strong>Site</strong>: <div></div>
                            </li>
                        </ul>
                        <div className='description pDetailSection'>
                            <h2 className='pDetailSectionTitle'><span>📋</span>Short Description</h2>
                            <p className='motivation'>
                                프로젝트들을 한 번에 볼 수 있는 소개 사이트를 하나 만들자 생각해서 만들게 된 사이트입니다.
                                다른 사이트들보다 적은 기능이 들어가기 때문에 타입스크립트로 충분히 제작할 수 있다는 생각에 도전하게 되었습니다.
                            </p>
                            <br />
                            <p className='develop'>
                                <strong className='emphasis'>React와 Typescript</strong>로 개발하였습니다. Typescript는 약 일주일이라는 짧은 시간동안 배웠기 때문에 특히나 다른 언어들보다 미숙하였는데
                                이번 프로젝트를 진행하면서 다시 한 번 <strong className='emphasis'>공부하게되는 계기</strong>가 되었고, Typescript라는 언어와 조금 더 친해진 것 같습니다. <strong className='emphasis'>Typescript 전용 모듈</strong>이나
                                <strong className='emphasis'>Redux의 액션과 초깃값</strong>에 대한 <strong className='emphasis'>타입 설정</strong>, props를 주고 받을 때 자식 컴포넌트에서 <strong className='emphasis'>props의 타입을 지정</strong>해 주어야 하는 것들이 낯설었지만
                                기존 ReactJS를 하면서 했던 <strong className='emphasis'>실수들을 컴파일 단계에서 잡아주어</strong> 사소한 실수에 머리를 싸맬 일이 없다는 점에 개발을 하며 매력을 느꼈습니다.
                            </p>
                        </div>
                        <ul className='mainFunction pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>💡</span>Main Function</h2></li>
                            <li><strong>자세히 보기 팝업</strong> <span>(각 창 마다 Redux로 열림{'&'}닫힘 상태를 관리 )</span></li>
                        </ul>
                        <ul className='pDetailstacks pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔨</span>Stacks</h2></li>
                            <li><strong>Frontend</strong>: React, Redux, Typescript, Sass</li>
                            <li><strong>Deployment</strong>: varcel</li>
                            <li></li>
                        </ul>
                        <ul className='member pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>😎</span>Member</h2></li>
                            <li><strong>1인</strong> 개발 프로젝트</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectMyResume;