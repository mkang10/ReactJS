import React, { Component } from 'react';
import './HomeHeader.scss'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language;
        console.log("check user Info", this.props.userInfo)

        return (
            <>

                <div className='home-header-container'>
                    <div className='Home-header-content'>
                        <div className='left-content'>
                            <i className="menu-header fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality"></FormattedMessage></b></div>
                                <div className='sub-titles'><FormattedMessage id="homeheader.Health-facility"></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.select-room"></FormattedMessage></b></div>
                                <div className='sub-titles'><FormattedMessage id="homeheader.Search-doctor"></FormattedMessage></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor"></FormattedMessage></b></div>
                                <div className='sub-titles'><FormattedMessage id="homeheader.select-doctor"></FormattedMessage></div>
                            </div> <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee"></FormattedMessage></b></div>
                                <div className='sub-titles'><FormattedMessage id="homeheader.check-health"></FormattedMessage></div>
                            </div>



                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i><FormattedMessage id="homeheader.support"></FormattedMessage></div>

                            <div className={language === LANGUAGES.VI ? 'language-vi action' : 'language-vi '}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en action' : 'language-en '}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>

                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='banner-title'><FormattedMessage id="banner.medical"></FormattedMessage></div>
                        <div className='banner-sub-title'><FormattedMessage id="banner.comprehensive-health"></FormattedMessage></div>
                        <div className='search-banner'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='tìm chuyên khoa khám bệnh'></input>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i className="far fa-hospital"></i></div>
                                <div className='text-child'><FormattedMessage id="option.specialized"></FormattedMessage></div>

                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-mobile"></i></div>
                                <div className='text-child'><FormattedMessage id="option.telehealth"></FormattedMessage></div>

                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-hospital-alt"></i></div>
                                <div className='text-child'><FormattedMessage id="option.generald-examination"></FormattedMessage></div>

                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-flask"></i></div>
                                <div className='text-child'><FormattedMessage id="option.medicine-test"></FormattedMessage></div>

                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                <div className='text-child'><FormattedMessage id="option.mind-health"></FormattedMessage></div>

                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="far fa-hospital"></i></div>
                                <div className='text-child'><FormattedMessage id="option.dental"></FormattedMessage></div>
                            </div>

                        </div>
                    </div>
                </div>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    // return {
    //     changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    // };
    return {
        changeLanguageAppRedux: (language) => {
            dispatch(changeLanguageApp(language))


        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
