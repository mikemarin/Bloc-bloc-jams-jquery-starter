class Helper {
    playPauseAndUpdate(song) {
        player.playPause(song);
        let totalTime = player.currentlyPlaying.duration;
        totalTime = player.prettyTime(totalTime);
        $('#time-control .total-time').text(totalTime);
    }
}

const helper = new Helper();
