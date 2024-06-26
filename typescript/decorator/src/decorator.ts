// const logInfo = (message: any) => {
//     return(target: any) => {
//         console.log(`${message}, ${target}.`)
//     }
// }

// @logInfo("Servidor Online!")
// class Sitema {

// }

const setIP = (newIP: string) => {
    return(target: any) => {
        return class extends target {
            ip = newIP;
        }
    }
}

@setIP("192.1.1.1")
class Server {

}

const firstServer = new Server();
console.log(firstServer);
