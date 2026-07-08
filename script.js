const videos = [
  { id: 1, title: "I created a MASSIVE duo 100 player showdown in Roblox.", thumbnail: "https://picsum.photos/id/1015/640/360", channel: "Nature Vibes", views: "134K views", likes: "17K", time: "3 days ago" },
  { id: 2, title: "How to Build a Website from Scratch", thumbnail: "https://picsum.photos/id/201/640/360", channel: "Code with Me", views: "134K views", likes: "17K", time: "12 hours ago" },
  { id: 3, title: "Funny Cat Videos 😂", thumbnail: "https://picsum.photos/id/237/640/360", channel: "Cat World", views: "134K views", likes: "17K", time: "1 week ago" },
  { id: 4, title: "Epic Gaming Moments - Win or Fail?", thumbnail: "https://picsum.photos/id/180/640/360", channel: "Gamer Pro", views: "134K views", likes: "17K", time: "2 days ago" },
  { id: 5, title: "Lo-Fi Beats to Code/Relax To", thumbnail: "https://picsum.photos/id/146/640/360", channel: "Chill Tracks", views: "134K views", likes: "17K", time: "5 hours ago" }
];

let activeVideo = null;

// Updates the active player viewport completely
function loadActiveVideo(video) {
  activeVideo = video;
  
  document.getElementById("playerVideo").src = video.thumbnail;
  document.getElementById("videoTitle").innerText = video.title;
  document.getElementById("videoChannel").innerText = video.channel;
  document.getElementById("videoTime").innerText = video.time;
  document.getElementById("videoViews").innerText = video.views;
  document.getElementById("videoLikes").innerText = video.likes;

  // Refresh recommendation sidebar pool
  renderRecommendations(videos);
}

// Renders list and handles outward external web navigation on selection click action
function renderRecommendations(videoPool) {
  const grid = document.getElementById("recommendationsGrid");
  grid.innerHTML = "";
  
  const recommendations = videoPool.filter(v => v.id !== activeVideo.id);
  
  recommendations.forEach(video => {
    const card = document.createElement("div");
    card.className = "compact-card";
    
    // Clicking any alternative video card redirects out to YouTube.com
    card.onclick = () => window.location.href = 'https://youtube.com';
    
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <div class="compact-info">
        <h4>${video.title}</h4>
        <p>${video.channel}</p>
        <p>${video.views} • ${video.time}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filters results dynamically inside the side panel
function searchVideos() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(query));
  renderRecommendations(filtered);
}

// Initial initialization load
loadActiveVideo(videos[0]);