import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class PopularDoctor extends Component {

    render() {

        return (
            <div className='section-share section-popular-doctor'>

                <div className='section-container'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Bác Sĩ Nổi Bật Tuần Qua</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>

                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bone-img section-popular-doctor  '>
                                            </div>

                                        </div>
                                        <div className='position text-center'>
                                            <div className='role-doctor'>Giáo sư, Tiến Sĩ Mkang</div>
                                            <div className='speciialty-doctor'>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bone-img section-popular-doctor  '>
                                            </div>

                                        </div>
                                        <div className='position text-center'>
                                            <div className='role-doctor'>Giáo sư, Tiến Sĩ Mkang</div>
                                            <div className='speciialty-doctor'>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bone-img section-popular-doctor  '>
                                            </div>

                                        </div>
                                        <div className='position text-center'>
                                            <div className='role-doctor'>Giáo sư, Tiến Sĩ Mkang</div>
                                            <div className='speciialty-doctor'>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bone-img section-popular-doctor  '>
                                            </div>

                                        </div>
                                        <div className='position text-center'>
                                            <div className='role-doctor'>Giáo sư, Tiến Sĩ Mkang</div>
                                            <div className='speciialty-doctor'>Cơ xương khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className='bone-img section-popular-doctor  '>
                                            </div>

                                        </div>
                                        <div className='position text-center'>
                                            <div className='role-doctor'>Giáo sư, Tiến Sĩ Mkang</div>
                                            <div className='speciialty-doctor'>Cơ xương khớp</div>
                                        </div>
                                    </div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularDoctor);
