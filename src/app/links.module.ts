export class Links {

     public static BASE = 'https://highlightreel.herokuapp.com';
    // public static BASE = 'http://localhost:8080/onebrush-api';
    // public static BASE = 'http://localhost:8080';

    public static LOGIN = Links.BASE + '/admin/login';
    public static DASHBOARD_COUNT = Links.BASE + '/admin/dashborad-count';
    public static CHANGE_PASSWORD = Links.BASE + '/admin/change-password';
    public static FORGOT_PASSWORD = Links.BASE + '/admin/forgot-password';
    public static RESET_PASSWORD = Links.BASE + '/admin/reset-password';
    public static VERIFY_RESET_PASSWORD_REQUEST = Links.BASE + '/admin/verify-reset-password-request';

    //USERS
    public static USER_LIST = Links.BASE + '/web/api/admin/get_all_users';
    public static UPDATE_USER_STATUS = Links.BASE + '/user/update-status';
    public static USER_RESET_PASSWORD = Links.BASE + '/user/reset-password';
    public static USER_VERIFY_REQUEST = Links.BASE + '/user/verify-request';
    public static GET_USER_DETAIL = Links.BASE +'/user/get-user';
    // public static USER_VERIFY_ACCOUNT_REQUEST = Links.BASE + '/user/verify-user-account';
}
