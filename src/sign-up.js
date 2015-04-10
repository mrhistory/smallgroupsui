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
        this.member = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.confirmPassword = '';
    }

    checkPasswordsMatch() {
        this.passwordsMatch = this.member.password == this.confirmPassword;
    }

    signUp() {
        this.errors = [];
        this.successMessage = '';
        this.memberApi.addMember(this.member).then(function(response) {
            this.successMessage = 'New member saved.'; // This should redirect to login screen, or a message to check email for activation link.
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
        this.member.firstName = '';
        this.member.lastName = '';
        this.member.email = '';
        this.member.password = '';
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
