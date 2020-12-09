const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    description: 'Play music from youtube',
    execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        voiceChannel.join().then(connection => {
            // const stream = ytdl(`${args}`, { filter: 'audioonly' });
            // const dispatcher = connection.play(stream);

            dispatcher.on('finish', () => voiceChannel.leave());
        })
    },
};
