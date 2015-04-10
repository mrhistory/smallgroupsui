import {MemberApi} from './api/member-api';

export class SignUp {
    static inject() { return [MemberApi]; }
    constructor(memberApi) {
        this.heading = "Sign Up";
        this.memberApi = memberApi;
        this.passwordsMatch = true;
        this.errors = [];
        this.successMessage = '';

        // Member fields
        this.firstName = '';
        this.lastName = '';
        this.emailAddress = '';
        this.password = '';
        this.confirmPassword = '';
    }

    checkPasswordsMatch() {
        this.passwordsMatch = this.password == this.confirmPassword;
    }

    signUp() {
        this.errors = [];
        this.successMessage = '';
        var member = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.emailAddress,
            password: this.password
        };
        this.memberApi.addMember(member).then(function(response) {
            this.successMessage = 'New member saved.'; // Could be some kind of config later.
            this.clearEntries();
        }.bind(this)).catch(function(err) {
            if (err.content.error.details != null) {
                for (var key in err.content.error.details.messages) {
                    this.errors.push(err.content.error.details.messages[key]);
                }
            } else {
                this.errors.push(err.content.error.message);
            }
            console.log(this.errors);
        }.bind(this));
    }

    clearEntries() {
        this.firstName = '';
        this.lastName = '';
        this.emailAddress = '';
        this.password = '';
        this.confirmPassword = '';
        this.checkPasswordsMatch();
    }

    clearErrors() {
        this.errors = [];
        this.successMessage = '';
    }

    clearAll() {
        this.clearEntries();
        this.clearErrors();
    }
}
