export class RestUrl {
    public static get login(): string { return `/users/login`; }
    public static get signUp(): string { return `/users/register`; }
    public static get verifyOTP(): string { return `/users/verifyotp`; }
    public static get forgetPassword(): string { return `/users/forgetPwd`; }
    public static get resetUser(): string { return '/users/resetPwd'; }
    public static get astroCreateProfile(): string { return '/users/updateprofile'; }
    public static get getAstroListingApi(): string { return '/users/getastrologerslist'; }
    // public static get getAstroListingApi(): string { return '/users/listOfAstrologers'; }
    public static get loginFirebase(): string { return '/users/firebaseId'; }

    public static get getAstro(): string { return '/users/listOfAstrologers'; }
    public static get makeCall(): string { return '/users/call'; }

    public static get submitReport(): string { return '/users/sendreport'; }
    public static get submitQAReport(): string { return '/users/askquestion'; }

    //Admin Dashboard

    public static get getReportByAstroId(): string { return '/users/getreports'; }
    public static get getQuestionByAstroId(): string { return '/users/getquestions'; }
    public static get replyReports(): string { return '/users/respondReport'; }



    // payment
    public static get placeOrder(): string { return '/place/order'; }
    public static get walletDetail(): string { return '/get/wallet'; }
    public static get verifySignature(): string { return '/rayzorpay/verify/signature'; }
    public static get updateWalletInfo(): string { return '/update/wallet'; }
    public static get deductBalance(): string { return '/users/deductbalance'; }





}
