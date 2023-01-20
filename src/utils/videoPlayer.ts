import hls from 'hls.js';

export default class VideoPlayer{
    private video: HTMLVideoElement;
    private videoContainer: HTMLElement;

    constructor(video: HTMLVideoElement){
        this.video = video;
        this.videoContainer
    }
}