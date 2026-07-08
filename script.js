// =======================================
// EASY VIDEO CONTROL
// Change this number to choose the video
// you are currently watching.
// Example: 0 = first video, 1 = second video
// =======================================

let currentVideoIndex = 0;


const videos = [
  {
    id: "qV9VPyapGE0",
    title: "I Made 50 Duos Fight to the DEATH in Roblox!",
    channel: "Master Mind",
    views: "89K",
    likes: "18K",
    time: "2 Days Ago"
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY - Gangnam Style",
    channel: "officialpsy",
    views: "5B views",
    likes: "30M",
    time: "13 years ago"
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito",
    channel: "Luis Fonsi",
    views: "8B views",
    likes: "50M",
    time: "9 years ago"
  },
  {
    id: "M7lc1UVf-VE",
    title: "YouTube Player Demo",
    channel: "YouTube",
    views: "100M views",
    likes: "1M",
    time: "years ago"
  }
];


let activeVideo;


// Get thumbnail automatically from YouTube
function thumbnail(videoID){
  return `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
}


// Load main video
function loadActiveVideo(video){

  activeVideo = video;

  document.getElementById("playerVideo").src = thumbnail(video.id);

  document.getElementById("videoTitle").innerText = video.title;
  document.getElementById("videoChannel").innerText = video.channel;
  document.getElementById("videoViews").innerText = video.views;
  document.getElementById("videoLikes").innerText = video.likes;
  document.getElementById("videoTime").innerText = video.time;


  renderRecommendations();
}


// Side videos
function renderRecommendations(){

  const grid =
  document.getElementById("recommendationsGrid");

  grid.innerHTML = "";


  videos.forEach(video=>{


    if(video.id === activeVideo.id)
      return;


    const card =
    document.createElement("div");


    card.className="compact-card";


    card.onclick=function(){

      // Opens the REAL YouTube video
      window.location.href =
      `https://youtube.com/watch?v=${video.id}`;

    };


    card.innerHTML = `

      <img src="${thumbnail(video.id)}">

      <div class="compact-info">

        <h4>${video.title}</h4>

        <p>${video.channel}</p>

        <p>${video.views} • ${video.time}</p>

      </div>

    `;


    grid.appendChild(card);


  });

}



// Search
function searchVideos(){

const query =
document.getElementById("search")
.value.toLowerCase();


const grid =
document.getElementById("recommendationsGrid");


grid.innerHTML="";


videos
.filter(video =>
video.title.toLowerCase()
.includes(query)
)
.forEach(video=>{


const card=document.createElement("div");

card.className="compact-card";


card.onclick=()=>{
window.location.href =
`https://youtube.com/watch?v=${video.id}`;
};


card.innerHTML=`

<img src="${thumbnail(video.id)}">

<div class="compact-info">

<h4>${video.title}</h4>

<p>${video.channel}</p>

</div>

`;


grid.appendChild(card);


});

}



// Disable comments
// YouTube does this by hiding the comment area.
// Your clone currently has no comments section,
// so nothing needs to be added.


// Start page
loadActiveVideo(videos[currentVideoIndex]);