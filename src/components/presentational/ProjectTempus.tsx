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
type ProjectTempusProps = {
    tempusToggle: () => void;
}

const ProjectTempus = ({tempusToggle}: ProjectTempusProps) => {
    return (
        <div className='pDetailWrap'>
            <BlackBg onClick={tempusToggle} />
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
                    <div className='pDetailClose'><FaRegWindowClose onClick={tempusToggle} /></div>
                    <div className='pDetailTitleWrap'>
                        <h1 className='projectTitle'>TEMPUS</h1>
                        <p>개발일자 : 2022.08</p>
                    </div>
                    <div className='tempusMoreExplain'>
                        <ul className='projectsUrls pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔗</span>Url</h2></li>
                            <li>
                                <p><strong>Git Source Code</strong>(client): <a href='https://github.com/hyunjinP31/comet-client'>https://github.com/hyunjinP31/comet-client</a></p>
                                <p><strong>Git Source Code</strong>(server): <a href='https://github.com/hyunjinP31/comet-server'><span>https://github.com/hyunjinP31/comet-server</span></a></p>
                            </li>
                            <li>
                                <strong>Site</strong>: <a href='https://comet-client.vercel.app/'>https://comet-client.vercel.app/</a>
                            </li>
                        </ul>
                        <div className='description pDetailSection'>
                            <h2 className='pDetailSectionTitle'><span>📋</span>Short Description</h2>
                            <p className='motivation'>
                                나의 프로젝트를 등록하거나 타사용자의 프로젝트를 찜하거나 후원할 수 있는 펀딩 사이트 입니다.
                                소규모 프로젝트나 개인이 상품을 런칭할 때 많이 사용되는 펀딩 사이트들의 프로세스에 흥미를 느껴 제작하게 되었습니다.
                            </p>
                            <br/>
                            <p className='develop'>
                                <strong className='emphasis'>ReactJs</strong>를 사용해 개발하였으며 서버는 <strong className='emphasis'>node.js</strong>로 만들었습니다.
                                <strong className='emphasis'>Redux, Redux-thunk</strong> 를 이용해 상태와 비동기 처리를 관리하며 비동기 처리에 대해 더 깊이 이해하고
                                상태관리 라이브러리를 더 확실히 <strong className='emphasis'>이해하고 적응</strong>하게 된 프로젝트였습니다.
                                <strong className='emphasis'>heroku</strong>로 배포하며 서버에서의 이미지 저장에는 다른 storage 사용이 필요하다는 것을 알게 되었고
                                <strong className='emphasis'> AWS의 S3 서비스</strong>를 사용하여 이미지 저장을 따로 관리해 주었습니다.
                            </p>
                        </div>
                        <ul className='mainFunction pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>💡</span>Main Function</h2></li>
                            <li><strong>회원가입</strong> <span>(<strong className='emphasis'>유효성 검사</strong>, submit 시 유효하지 않은 input이 있으면 <strong className='emphasis'>focusing</strong> 처리)</span></li>
                            <li><strong>프로젝트 등록</strong> <span>(이미지 파일 업로드 시 input자리에 <strong className='emphasis'>이미지 로드</strong>. 프로젝트 이름 <strong className='emphasis'>중복 검사</strong>)</span></li>
                            <li><strong>찜하기</strong> <span>(사용자의 동작에 따라 바로바로 표시되도록 <strong className='emphasis'>화면 렌더링</strong>에 신경씀. )</span></li>
                            <li><strong>후원하기</strong> <span>(후원을 했을 때 달성 <strong className='emphasis'>percentage에 반영</strong>이 되도록 하고 후원현황이나 판매자인지에 따라 버튼의 표시를 다르게 함)</span></li>
                        </ul>
                        <ul className='pDetailstacks pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔨</span>Stacks</h2></li>
                            <li><strong>Frontend</strong>: ReactJs, Redux, Redux-thunk, Sass</li>
                            <li><strong>Backend</strong>: node.js</li>
                            <li><strong>Database</strong>: mySQL</li>
                            <li><strong>Deployment</strong>: varcel, heroku, AWS(RDS, ED2, S3)</li>
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

export default ProjectTempus;