export class RestUrl {
    public static get login(): string { return `/users/login`; }
    public static get signUp(): string { return `/users/register`; }
    public static get verifyOTP(): string { return `/users/verifyotp`; }
    public static get forgetPassword(): string { return `/users/forgetPwd`; }
    public static get resetUser(): string { return '/users/resetPwd'; }


}
