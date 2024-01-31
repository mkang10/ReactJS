import React, { Component } from 'react';
import './Specialty.scss'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import specialtyImg from "../../../assets/specialtyImage/chuyenkhoa.jpg"
class Specialty extends Component {


    render() {
        let settings = {
            dots: false,
            Infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }

        return (
            <div className='section-specialty'>

                <div className='specialty-container'>
                    <div className='specialty-container'>
                        <div className='specialty-header'>
                            <span className='title-section'>Chuyên khoa phổ biến</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='specialty-body'>
                            <Slider {...settings}>
                                <div className='specialty-customize'>
                                    <div className='bone-img'></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bone-img'></div>
                                    <div>Cơ xương khớp 2</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bone-img'></div>
                                    <div>Cơ xương khớp 3</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bone-img'></div>
                                    <div>Cơ xương khớp 4</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bone-img'></div>
                                    <div>Cơ xương khớp 5</div>
                                </div>
                                <div className='specialty-customize'>
                                    <div className='bone-img'></div>
                                    <div>Cơ xương khớp 6</div>
                                </div>

                            </Slider>
                        </div>
                    </div>

                </div>
            </div>


        );
    }


}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    // return {
    //     changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    // };
    return {



    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
