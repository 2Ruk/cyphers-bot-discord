export function routeHelper(msg) {
    let router = '';
    let [command,param] = msg.content.split(' ');
    if (command === '/전적' || command === '/정보') {
        router = 'cyphers';
    }


    return {
        router,
        param,
        command
    }
}
