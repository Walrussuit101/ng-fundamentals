import { Component } from '@angular/core';

@Component({
    templateUrl: './login.template.html'
})
export class LoginComponent{
    userName: string;
    password: string;

    login(formValues: any){
        console.log(formValues);
    }
}