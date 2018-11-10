export class dataService {

    listBook: any[] = [
        {
            name: "book1",
            isPreter: true,
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        },
        {
            name: "book2",
            isPreter: false,
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        }
    ]
    listCD: any[] = [
        {
            name: "cd1",
            isPreter: true,
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        },
        {
            name: "cd2",
            isPreter: false,
            description: "tivés ou désactivés selon l'état actuel de l'élément. Par exemple : si le livre choisi est prêté, seul le bou"
        }
    ]

    preter(index, type) {
        if (type == 'cd') {
            this.listCD[index].isPreter = !this.listCD[index].isPreter;
        } else if(type == 'book'){
            this.listBook[index].isPreter = !this.listBook[index].isPreter;
        }
    }

}