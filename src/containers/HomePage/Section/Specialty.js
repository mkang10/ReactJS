import React, { Component } from 'react';
import './Specialty.scss'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import specialtyImg from "../../../assets/specialtyImage/chuyenkhoa.jpg"
class Specialty extends Component {


    render() {


        return (
            <div className='section-specialty section-share'>

                <div className='section-container'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Chuyên khoa phổ biến</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='bone-img section-specialty'></div>
                                    <div>Cơ xương khớp 1</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bone-img section-specialty'></div>
                                    <div>Cơ xương khớp 2</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bone-img section-specialty'></div>
                                    <div>Cơ xương khớp 3</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bone-img section-specialty'></div>
                                    <div>Cơ xương khớp 4</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bone-img section-specialty'></div>
                                    <div>Cơ xương khớp 5</div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bone-img section-specialty'></div>
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
