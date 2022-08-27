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
type ProjectGreenBooksProps = {
    greenBooksToggle: () => void;
}

const ProjectGreenBooks = ({greenBooksToggle}: ProjectGreenBooksProps) => {
    return (
        <div className='pDetailWrap'>
            <BlackBg onClick={greenBooksToggle}/>
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
                        <img src='' alt='GreenBooks 메인 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='GreenBooks 상품 디테일 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='GreenBooks 회원가입 화면' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='' alt='GreenBooks 내정보 화면' />
                    </SwiperSlide>
                </Swiper>
                <div className='pDetailRight'>
                    <div className='pDetailClose'><FaRegWindowClose onClick={greenBooksToggle} /></div>
                    <div className='pDetailTitleWrap'>
                        <h1 className='projectTitle'>GreenBooks</h1>
                        <p>개발일자 : 2022.06</p>
                    </div>
                    <div className='tempusMoreExplain'>
                        <ul className='projectsUrls pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔗</span>Url</h2></li>
                            <li>
                                <p><strong>Git Source Code</strong>: <a href='https://github.com/hyunjinP31/mall-php-project'>https://github.com/hyunjinP31/mall-php-project</a></p>
                            </li>
                            <li>
                                <strong>Site</strong>: <a href='https://comet-client.vercel.app/'>https://comet-client.vercel.app/</a>
                            </li>
                        </ul>
                        <div className='description pDetailSection'>
                            <h2 className='pDetailSectionTitle'><span>📋</span>Short Description</h2>
                            <p className='motivation'>
                                처음으로 사이트 전체를 제작했던 프로젝트 였습니다. 도서가 취미인지라 평소 다른 쇼핑 사이트 보다도 도서 판매 사이트를 많이 보아서
                                주제를 선정할 때 의견을 내었고 체택되어 제작한 사이트입니다.
                            </p>
                            <br/><strong className='emphasis'>ReactJs</strong>
                            <p className='develop'>
                                php, jsvascript로 개발한 사이트 입니다. 개발 당시에는 데이터 베이스를 로컬로 사용하였지만 AWS 클라우드의 사용을 익히고 바꾸어 주었습니다.
                                처음으로 사이트를 제작하면서 database 연동에 익숙해져 갔던 프로젝트 였습니다. 페이지에 따라 다른 쿼리문을 작성하여 데이터를 불러오고 Table Inner Join을 사용해
                                장바구니에 넣은 상품을 조회하는 메커니즘을 가지고 있습니다. 또 처음 로그인 처리를 해주면서 세션 객체에 대한 이해를 쌓았습니다.
                            </p>
                        </div>
                        <ul className='mainFunction pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>💡</span>Main Function</h2></li>
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

export default ProjectGreenBooks;