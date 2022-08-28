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
                            <br/>
                            <p className='develop'>
                                <strong className='emphasis'>PHP, jsvascript</strong>로 개발한 사이트 입니다. 개발 당시에는 데이터 베이스를 로컬로 사용하였지만 <strong className='emphasis'>AWS 클라우드의 사용</strong>을 익히고 바꾸어 주었습니다.
                                처음으로 사이트를 제작하면서 <strong className='emphasis'>database 연동</strong>에 익숙해져 갔던 프로젝트 였습니다. 페이지에 따라 다른 쿼리문을 작성하여 데이터를 불러오고 <strong className='emphasis'>Table Inner Join</strong>을 사용해
                                장바구니에 넣은 상품을 조회하는 메커니즘을 가지고 있습니다. 또 처음 로그인 처리를 해주면서 <strong className='emphasis'>세션 객체에 대한 이해</strong>를 쌓았습니다.
                            </p>
                        </div>
                        <ul className='mainFunction pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>💡</span>Main Function</h2></li>
                            <li><strong>로그인</strong> <span>(데이터베이스의 <strong className='emphasis'>데이터들과 비교</strong>하여 로그인 <strong className='emphasis'>성공시 세션 생성</strong>.)</span></li>
                            <li><strong>장바구니</strong> <span>(상품 선택 시 오른쪽 상단에 <strong className='emphasis'>총 금액 표시</strong>, 구매{'&'}삭제 시 장바구니에서 해당 상품 지워주는 프로세스 설계.)</span></li>
                            <li><strong>메인 슬라이더</strong> <span>(슬라이더 만드는 법을 배우고 처음 사이트에 적용시켰던 프로젝트. <strong className='emphasis'>배열을 이용</strong>하여 슬라이드 <strong className='emphasis'>배경색 변경</strong>.)</span></li>
                        </ul>
                        <ul className='pDetailstacks pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>🔨</span>Stacks</h2></li>
                            <li><strong>Frontend</strong>: PHP, Javascript, Sass</li>
                            <li><strong>Database</strong>: mySQL</li>
                            <li><strong>Deployment</strong>: varcel, heroku, AWS(RDS, ED2, S3)</li>
                            <li></li>
                        </ul>
                        <ul className='member pDetailSection'>
                            <li><h2 className='pDetailSectionTitle'><span>😎</span>Member</h2></li>
                            <li><strong>3인</strong> 개발 프로젝트</li>
                            <li><strong>박현진</strong>(본인), <strong>이국현</strong>(Front-end), <strong>정순보</strong>(Front-end)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectGreenBooks;