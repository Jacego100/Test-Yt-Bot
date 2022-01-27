module.exports = {
    name: 'ping',
    description: 'Ping Pong Command!',

    execute(client, message, args) {
        message.channel.send('Pong!')
    }
}