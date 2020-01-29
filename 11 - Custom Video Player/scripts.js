class customVideoPlayer{
    
    constructor(){
        this.$player = document.querySelector('.player');
        this.$video = document.querySelector("body > div > video");
        this.$playButton = document.querySelector('.player__button');
        this.$volumeSlider = this.$player.querySelector('.progress');
        this.isPlaying = false;
        console.log(this.$volumeSlider);
        this.bindEvents();
    }

    bindEvents() {
        this.$playButton.addEventListener('click', () => { this.playPause()})
        this.$volumeSlider.addEventListener('change', (event) => { this.adjustVolume(event)})
    }
    
    playPause() {
        this.isPlaying ? this.pause() : this.play();
    }

    play() {
        this.$video.play();
        this.isPlaying = true;
        this.$playButton.innerHTML = '||';
    }

    pause() {
        this.$video.pause();
        this.isPlaying = false;
        this.$playButton.innerHTML = '>';
    }

    adjustVolume(event) {
        console.log(event);
    }
}

new customVideoPlayer();