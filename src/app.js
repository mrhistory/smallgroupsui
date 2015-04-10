import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = 'SmallGroups';
			config.map([
				{route: ['admin'], moduleId: 'admin', nav: this.loggedIn, title: 'Admin'},
				{route: ['', 'signup'], moduleId: 'sign-up', nav: !this.loggedIn, title: 'Sign Up'}
			]);
		});
		this.activeUser = undefined; // Global as the rest of the app needs to access this.
		this.loggedIn = false; // Global as the rest of the app needs to access this.
	}
}
