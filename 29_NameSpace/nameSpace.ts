namespace users {
    export class Auth {
        login() {
            console.log("Login successful");
        }

        logout() {
            console.log("Logout successful");
        }

        register() {
            console.log("Registration successful");
        }
    }

    class Profile {
        updateProfile() {
            console.log("Profile updated successfully");
        }
        viewProfile() {
            console.log("Profile details displayed successfully");
        }
    }   

    var myProfile = new Profile();
    myProfile.updateProfile();
    myProfile.viewProfile();
}

namespace Admin {
    export class Auth {
        login() {
            console.log("Admin login successful");
        }
        logout() {
            console.log("Admin logout successful");
        }
        register() {
            console.log("Admin registration successful");
        }
    }

    class Dashboard {
        viewDashboard() {
            console.log("Admin dashboard displayed successfully");
        }

        manageUsers() {
            console.log("Admin managing users successfully");
        }
    }

    var adminDashboard = new Dashboard();
    adminDashboard.viewDashboard();
    adminDashboard.manageUsers();
}

var user00121   = new users.Auth();
var admin00121  = new Admin.Auth();

user00121.login();
admin00121.login();