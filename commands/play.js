module.exports = {
    name: 'play',
    description: 'Play!',
    execute(message, args) {
        message.channel.send('Pong.');
    },
};