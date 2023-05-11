import React from 'react';
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import default_img from '../img/default_image.jpg';
import poster1 from '../img/take1.png';
import poster2 from '../img/take2.png';
import poster3 from '../img/take3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import flower from "../img/main_notice.svg";
import ticket from "../img/main_timetable.svg";
import popcorn from "../img/main_review.svg";
import letter from "../img/main_event.svg";

import '../css/Main.css';

const SliderImg = styled.img`
    width: 310px;
    height: 310px;
    background-color: grey;
    align-self: center;
`;


const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;

function Main() {
    const navigate = useNavigate();

    const handleClick = (el) => {
        if(el === 1){
            navigate('/notice');
        }
        else if(el === 2){
            navigate('/schedule');
        }
        else if(el === 3){
            navigate('/review');
        }
        else if(el === 4){
            navigate('/event');
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-out',
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <NextTo></NextTo>
        ),
        prevArrow: (
        <Pre></Pre>
        ),
    };

    return (
        <div className="mainBody">
            <div className="slider-wrap">
                <Slider {...settings}>
                    <SliderImg src={default_img} />
                    <SliderImg src={poster1} />
                    <SliderImg src={poster2} />
                    <SliderImg src={poster3} />
                </Slider>
            </div>
            <div className='main-btn-wrap'>
                <div className="main-notice" onClick={() => handleClick(1)}>
                    <div className="main-title">
                        공지사항
                    </div>
                    <div className="main-content">
                        #총학생회_챕갈피
                    </div>
                    <img className="main-notice-img" src={flower} alt="사진"/>
                </div>
                <div className='main-timetable' onClick={() => handleClick(2)}>
                    <div className="main-title">
                        상영 시간표
                    </div>
                    <div className="main-content">
                        상영 일정 확인
                    </div>
                    <img className="main-timetable-img" src={ticket} alt="사진"/>
                </div>
                <div className="main-review" onClick={() => handleClick(3)}>
                    <div className="main-title">
                        상영작 후기
                    </div>
                    <div className="main-content">
                        {`<`}TACKE:{`>`} 리뷰 작성
                    </div>
                    <img className="main-review-img" src={popcorn} alt="사진"/>
                </div>
                <div className="main-event" onClick={() => handleClick(4)}>
                    <div className="main-title">
                        낭만에 대하여
                    </div>
                    <div className="main-content">
                        5월 19일 개봉
                    </div>
                    <img className="main-event-img" src={letter} alt="사진"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
