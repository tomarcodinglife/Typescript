import type userInfoTypes from "./type";
import { Auth } from "./userAuth";

var userInfo:userInfoTypes = {
    name: "Sujit Tomar",
    age: 26,
    email: "sujittomar@example.com",
    password: "sujit123"
}

class user extends Auth {

}

var user1 = new user();
user1.login(userInfo.name, userInfo.email, userInfo.password);
