
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

    constructor() {

    }


    signin(email, password) {
        return new Promise((resolve, reject) =>
            firebase.auth().signInWithEmailAndPassword(email, password).then(
                (user) => {
                    if (user) {
                        resolve(user)
                    }
                }
            ).catch((error) => {
                reject(error)
            })
        )
    }


    signup(email, password) {
        return new Promise((resolve, reject) =>
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                (user) => {
                    if (user) {
                        resolve(user)
                    }
                }
            ).catch((error) => {
                reject(error)
            })
        )
    }


    logout() {
        firebase.auth().signOut();
    }



}