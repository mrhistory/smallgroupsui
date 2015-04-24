import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = 'SmallGroups';
			config.addPipelineStep('authorize', AuthorizeStep);
			config.map([
				{route: ['admin'], moduleId: 'admin', nav: true, title: 'Admin', auth: true},
				{route: ['signup'], moduleId: 'sign-up', nav: true, title: 'Sign Up'},
				{route: ['', 'login'], moduleId: 'login', nav: true, title: 'Login'}
			]);
		});
		window.activeUser = undefined; // Global as the rest of the app needs to access this.
		window.loggedIn = false; // Global as the rest of the app needs to access this.
		window.access_token = ''; // Global as the rest of the app needs to access this.
	}
}

class AuthorizeStep {
	run(routingContext, next) {
		if (routingContext.nextInstructions.some(i => i.config.auth)) {
			if (!window.loggedIn) {
				return next.cancel(new Redirect('login'));
			}
		}
		return next();
	}
}