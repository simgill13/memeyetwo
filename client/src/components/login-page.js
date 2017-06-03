import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class LoginPage extends React.Component {
    componentDidMount() {
		$(function(){
			cycle();	
			$('body :not(.nav), i:not(.ion-navicon)').click(function(){
			});

			function cycle(){
				var x = 0;
				setInterval(language, 3000);
				function language(){
					$('.hello').fadeOut(1000, function(){
						$(this).text(hello[x + 1]);
						$(this).fadeIn(1000);
						x++;				
						if (x > hello.length - 2) {
							x = -1;
						}
					}
				)};
			}
			var hello = [
				'Hola.',
				'Buenos días.',
				'¿Cómo está?.',
				'Buenas tardes.',
				'¿Cómo estás?.',
				'casa.',
				'Si.',
				'Gracías.',
				'Salud.',
				'Por favor.',
				'Adiós.',
				'bien.',
				'Mucho gusto.',
				'Hola.',
				'casa.'
			]
		});
	}

    render() {
        return (
        	<div className="loginComponent">
        		<div className="greeting"> 
        			<h1 className="hello"> Hello</h1>
					<p className="tagline">Space Repetition for learning Spanish</p>
        		</div>
	        	<div className="LoginPage">
	            	<a className="loginBtn loginBtn--google aaa" href={'/api/auth/google'}>Login with Google</a>
	            </div>
        	</div>
        );
    }
}

export default connect()(LoginPage);
