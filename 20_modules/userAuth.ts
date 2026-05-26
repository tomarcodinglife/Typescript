
export class Auth {
    login(name: string, email: string, password: string): void {
        if (name && email && password) {
            console.log(`User ${name} logged in with email ${email}`);
        } else {
            console.log("Please provide all the required information.");
        }
    }




}