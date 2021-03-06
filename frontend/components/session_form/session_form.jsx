import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			description: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.redirectToJoin = this.redirectToJoin.bind(this);
		// this.redirectToLogin = this.redirectToLogin.bind(this);
		this.animeType = this.animeType.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
		if (this.props.formType === "login") {
			$(".login-form-box").attr('class', 'login-form-box login');
			$(".demo-button").attr('class', 'login-buttons demo-button demo-show');
			$(".login-description").attr('class', 'login-input login-description des-hide');
			$(".login-button").attr('class', 'login-buttons login-button login-login');
		} else {
			$(".login-form-box").attr('class', 'login-form-box join');
			$(".demo-button").attr('class', 'login-buttons demo-button demo-hide');
			$(".login-description").attr('class', 'login-input login-description des-show');
			$(".login-button").attr('class', 'login-buttons login-button login-signup');
		}
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			this.props.router.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		let newUsername = this.state.username.toLowerCase();
		this.state.username = newUsername;
		const user = this.state;
		if (this.props.formType === "login") {
			this.setState({description: ""});
		}
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/join">Join</Link>;
		} else {
			return <Link to="/login">Login</Link>;
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className='error-prompt'>
						{error}
					</li>
				))}
			</ul>
		);
	}

	animeType($el, word, callback){

		var typing = setInterval(function(){
			$el.val( $el.val() + word.slice(0,1) );
			word = word.substr(1);

			if (!word){
				clearInterval(typing);
				callback();
			}
		}, 50);
	}

	demoLogin(e, username, password) {
		e.preventDefault();
		let $username = $('.username');
		let $password = $('.password');
		let $submitButton = $('.login-button');
		let that = this;
		this.animeType($username, username, () => {
			this.animeType($password, password, ()=> {
				that.setState({username, password });
				$submitButton.click();
			});
		});
	}

	render() {
		let loginFormClass = (this.props.formType === "login") ? "login-form-box login" : "login-form-box join";
		let loginText = (this.props.formType === "login") ? "Login" : "Sign Up";
		let loginClass = (this.props.formType === "login") ? "login-buttons login-button login-login" : "login-buttons login-button login-signup";
		let demoClass = (this.props.formType === "login") ? "login-buttons demo-button demo-show" : "login-buttons demo-button demo-hide";
		let description = (this.props.formType === "login") ?
			'login-input login-description des-hide' : 'login-input login-description des-show';

		return (
			<main className="session-form">
				<section className="login-form-container">
					<form
						className={loginFormClass}>
						<h1 id='web-name'>Pinitt</h1>
						<p id='slogan'>with Shiniest Ideas</p>
						<div className="switch-button">
							{ this.navLink() }
						</div>


						<div>
						{ this.renderErrors() }
						</div>

						<div className="login-form">
							<label>
								<input
									type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input username"
									placeholder="Username"/>
							</label>

							<label>
								<input
									type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input password"
									placeholder="Password" />
							</label>
								<textarea
									value={this.state.description}
									onChange={this.update("description")}
									className={description}
									placeholder="Describe yourself!"></textarea>
							<div className="login-button-box">
								<input type="submit"
									className={loginClass}
									value={loginText}
									onClick={this.handleSubmit}/>
								<button className={demoClass}
									onClick={(e) => this.demoLogin(e, "daniel", "password")}>Daniel</button>
								<button className={demoClass}
									onClick={(e) => this.demoLogin(e, "emma", "password")}>Emma</button>
							</div>
						</div>
					</form>
				</section>

			</main>
		);
	}

}

export default withRouter(SessionForm);
