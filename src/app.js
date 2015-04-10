import {Router} from 'aurelia-router';

export class App {
	static inject() { return [Router]; }
	constructor(router) {
		this.router = router;
		this.router.configure(config => {
			config.title = 'SmallGroups';
			config.map([
				{route: ['admin'], moduleId: 'admin', nav: true, title: 'Admin'},
				{route: ['', 'signup'], moduleId: 'sign-up', nav: true, title: 'Sign Up'}
			]);
		});
		this.userId = 0;
	}
}
