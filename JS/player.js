let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
        height: '405',
        width: '660',
        videoId: 'cjQQ9JYGgTM',
        events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}