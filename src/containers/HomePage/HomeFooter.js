import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class Footer extends Component {


    render() {


        return (
            <div className='section-footer section-share'>
                <p>&copy; 2024 MaengKang web app. More information, please visit my channel.
                    <a target='_blank' href='https://www.facebook.com/cuong.ngmanh.31/'> &#8594; Click here &#8592;

                    </a>
                </p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
