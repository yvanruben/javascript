class Video {
    constructor(title, uploader, duration) {
      this.title = title;
      this.uploader = uploader;
      this.duration = duration;
    }
    
    watch() {
      console.log(`${this.uploader} watched all ${this.duration} seconds of ${this.title}!`);
    }
  }
  

  const myVideo = new Video("My Video", "John Doe", 120);
myVideo.watch();


  

const videos = [
    { title: "Video 1", uploader: "name1", duration: 60 },
    { title: "Video 2", uploader: "name2", duration: 180 },
    { title: "Video 3", uploader: "name3", duration: 240 },
    { title: "Video 4", uploader: "name4", duration: 90 },
    
  ];


  
  for (const video of videos) {
    const videoObj = new Video(video.title, video.uploader, video.duration);
    videoObj.watch();
  }
  

  