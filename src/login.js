import {MemberApi} from './api/member-api';
import {Router} from 'aurelia-router';

export class Login {
	static inject() { return [MemberApi, Router]; }
	constructor(memberApi, router) {
		this.heading = 'Login';
		this.memberApi = memberApi;
		this.theRouter = router;
		this.email = '';
		this.password = '';
		this.errors = [];
		this.successMessage = '';
	}

	login() {
		this.clearErrors();
		this.memberApi.login(this.email, this.password).then(function(response) {
			this.successMessage = "Logged In!";
			window.loggedIn = true;
			this.theRouter.navigate('admin'); // This should set the active user to the returned user, and set logged in to true. Should redirect to whatever page was requested.
		}.bind(this)).catch(function(err) {
			if (err.content) {
				if (err.content.error.details != null) {
	                for (var key in err.content.error.details.messages) {
	                    this.errors.push(err.content.error.details.messages[key]);
	                }
	            } else {
	                this.errors.push(err.content.error.message);
	            }
			} else {
				console.log(err);
			}
		}.bind(this));
	}

	clearAll() {
		this.email = '';
		this.password = '';
		this.clearErrors();
	}

	clearErrors() {
		this.errors = [];
		this.successMessage = '';
	}
}