import { Subject } from "rxjs/Subject";
import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { resolveDefinition } from "@angular/core/src/view/util";
@Injectable()
export class dataService {

    listBook$ = new Subject<any[]>();
    listCD$ = new Subject<any[]>();

    listBook: any[] = [
        {
            name: "book1",
            isPreter: true,
            person: '',
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        },
        {
            name: "book2",
            isPreter: false,
            person: '',
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        }
    ]
    listCD: any[] = [
        {
            name: "cd1",
            isPreter: true,
            person: '',
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        },
        {
            name: "cd2",
            isPreter: false,
            person: '',
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        }
    ]


    constructor(private storage: Storage) {
        this.storage.get('book').then(
            (data) => {
                this.listBook = data
            }
        )
        this.storage.get('cd').then(
            (data) => {
                this.listCD = data
            }
        )
    }
    preter(index, type) {
        if (type == 'cd') {
            if (this.listCD[index].isPreter) {
                this.listCD[index].person = ""
            }
            this.listCD[index].isPreter = !this.listCD[index].isPreter;
            this.emitCD();
        } else if (type == 'book') {
            if (this.listBook[index].isPreter) {
                this.listBook[index].person = ""
            }
            this.listBook[index].isPreter = !this.listBook[index].isPreter;
            this.emitBook();
        }
    }

    emitBook() {
        this.listBook$.next(this.listBook);
        this.storage.set('book', this.listBook);

    }

    emitCD() {
        this.listCD$.next(this.listCD)
        this.storage.set('cd', this.listCD);
    }


    sauvgardeBookToBE() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('book').set(this.listBook).then(
                (data) => {
                    resolve(data);
                }
            ).catch((error) => {
                reject(error)
            })
        })
    }

    sauvgardeCDToBE() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cd').set(this.listCD).then(
                (data) => {
                    resolve(data);
                }
            ).catch((error) => {
                reject(error)
            })
        })
    }


    fetchBookBE() {

        return new Promise((resolve, reject) => {
            firebase.database().ref('book').once('value').then(
                (data) => {
                    this.listBook = data.val();
                    this.emitBook();
                    resolve(data);
                }
            ).catch((error) => {
                reject(error)
            })
        })

    }


    fetchCdBE() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cd').once('value').then(
                (data) => {
                    this.listCD = data.val();
                    this.emitCD();
                    resolve(data);
                }
            ).catch((error) => {
                reject(error)
            })
        })

    }

}