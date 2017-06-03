import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
    render() { 
        return (
        	<div className="Nav2"> 
                <div className="imgicon2">
                    <a target="_blank" className="logout" href="https://github.com/simgill13/EyeMem"><FontAwesome className='fa fa-github github footicncolor' size='2x' aria-hidden='true'/></a>
                    <a target="_blank" className="logout" href="https://www.linkedin.com/in/simran-gill-15687413a/"><FontAwesome className='fa fa-linkedin-square linkedin footicncolor' size='2x' aria-hidden='true'/></a>
                </div> 
                <div className='textdiv'>
                    <p className='text'>
                        <FontAwesome className='fa fa-info-circle' size='1x' aria-hidden='true'/> Sole intention of this application is to display the use of a Spaced-Repetition algorithm.
                    </p>
                </div>

        	</div>
        );
    }
}
   
const mapStateToProps = (state) => ({
	displayName: state.displayName,
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Footer);