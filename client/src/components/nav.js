import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
var FontAwesome = require('react-fontawesome');

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
    render() { 
        return (
        	<div className="Nav"> 
                <div className="imgicon">

                </div> 
                   		
        		<div className=" div1">
        			<h1 className="title"> {this.props.displayName} </h1>	 
        		</div>
                <div className="div1">
                <a className="logout" href={'/api/auth/logout'}><FontAwesome className='fa fa-sign-out' size='2x' aria-hidden='true'/></a>
                </div>
        	</div>
        );
    }
}
   
const mapStateToProps = (state) => ({
	displayName: state.displayName,
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Nav);


//example of font awsome
    // <FontAwesome
    //     className='super-crazy-colors'
    //     name='rocket'
    //     size='2x'
    //     spin
    //     style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    //   />