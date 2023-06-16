// modalboxes
const modalBox = document.querySelector(".modalBox");
const modalBox2 = document.querySelector(".modalBox2");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".closeBtn");
const closeModalBtn2 = document.querySelector(".secBtn");
const contentmodal = document.querySelector(".contentmodal");

const openModal = () => {
    modalBox.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const openModal2 = () => {
  modalBox2.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modalBox.classList.add("hidden");
  overlay.classList.add("hidden");
});

closeModalBtn2.addEventListener('click', () => {
  modalBox2.classList.add("hidden");
  overlay.classList.add("hidden");
})

//modal data
const titleTextModal = document.querySelector(".titleTextModal");
const typeTv = document.querySelector(".type");
const timeTv = document.querySelector(".time");
const runTv = document.querySelector(".run");
const description = document.querySelector(".description");
const score = document.querySelector(".score");
const poster = document.querySelector(".leftsidetb img");
const watchTrailer = document.querySelector(".trailer");

//tvs objects
const tvs = {
	first: {
	name: "Dark",
	genre: "Mystery",
	duration: "1h",
	run: "2017-2020",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    score: "8.7",
    poster: "./images/DarkNetflixPosterEnglish.jpg",
    trailer: "https://www.youtube.com/watch?v=rrwycJ08PSA"},
	
	second:{
	name: "Breaking Bad",
	genre: "Crime",
	duration: "49m",
	run: "2008-2013",
    description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    score: "9.5",
    poster: "./images/breakingbad.jpg",
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY"},

	third:{
	name: "Mr.Robot",
	genre: "Thriller",
	duration: "49m",
	run: "2015-2019",
    description: "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    score: "8.5",
    poster: "./images/mrrobot.jpg",
    trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA"},
	
	fourth:{
	name: "Lost",
	genre: "Fantasy",
	duration: "44m",
	run: "2004-2010",
    description: "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
    score: "8.3",
    poster: "./images/lost.jpg",
    trailer: "https://www.youtube.com/watch?v=KTu8iDynwNc"},
	
	fifth:{
	name: "Game of Thrones",
	genre: "Action",
	duration: "57m",
	run: "2011-2019",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    score: "9.2",
    poster: "./images/got.jpg",
    trailer: "https://www.youtube.com/watch?v=bjqEWgDVPe0"},
  
  sixth:{
    name:"Attack on Titan",
    genre: "Action",
    duration: "24m",
    run: "2013-2023",
    description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    score: "9.1",
    poster: "./images/aotposter.jpg",
    trailer: "https://www.youtube.com/watch?v=MGRm4IzK1SQ"},
  
  seventh:{
    name:"Hannibal",
    genre:"Crime",
    duration:"44m",
    run: "2013-2015",
    description: "Explores the early relationship between renowned psychiatrist Hannibal Lecter and a young FBI criminal profiler who is haunted by his ability to empathize with serial killers.",
    score:"8.5",
    poster:"./images/hannibalposter.jpg",
    trailer: "https://www.youtube.com/watch?v=Es3B24z8fdA"},
  
  eighth:{
    name:"Narcos",
    genre: "Crime",
    duration: "49m",
    run: "2015-2017",
    description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    score:"8.8",
    poster:"./images/narcosposter.jpg",
    trailer: "https://www.youtube.com/watch?v=xl8zdCY-abw"},

  ninenth:{
    name:"Succession",
    genre: "Drama",
    duration: "1h",
    run:"2018-2023",
    description: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
    score:"8.8",
    poster:"./images/successionposter.jpg",
    trailer: "https://www.youtube.com/watch?v=OzYxJV_rmE8"},
  
  tenth:{
    name:"Peaky Blinders",
    genre: "Crime",
    duration:"1h",
    run:"2013-2022",
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    score:"8.8",
    poster: "./images/pbposter.jpg",
    trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U"}
  };

const images = document.querySelectorAll('.imagetb img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const tvShow = tvs[image.dataset.tvshow];
        titleTextModal.textContent = tvShow.name;
        typeTv.textContent = tvShow.genre.toUpperCase();
        timeTv.textContent = tvShow.duration;
        runTv.textContent = tvShow.run;
        description.textContent = tvShow.description;
        score.textContent = tvShow.score;
        poster.src = tvShow.poster;
        watchTrailer.setAttribute('data-trailer',tvShow.trailer);
        openModal();
    });
});

watchTrailer.addEventListener('click', () => {
    const trailer = watchTrailer.dataset.trailer;
    window.open(trailer,"_blank");
})

//popular tv data

const pop = [
  {
    name: "Stranger Things",
	  genre: "Fantasy",
	  duration: "1h",
	  year: "2016-current",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    score: "8.7",
    wallpaper: "./images/stwall2.jpg",
    poster: "./images/stranger-things-seasons-i132237.jpg",
    trailer: "https://www.youtube.com/watch?v=mnd7sFt5c3A"
  },
  {
    name: "John Wick: Chapter 4",
    genre: "Action",
    duration: "2h 49m",
    year:"2023",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes",
    score: "8.2",
    wallpaper: "./images/jwwall.jpg",
    poster: "./images/jwposter.jpeg",
    trailer: "https://www.youtube.com/watch?v=qEVUtrk8_B4"
  },
  {
    name: "Arcane",
    genre: "Action",
    duration: "41m",
    year:"2021-current",
    description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart.",
    score: "9.0",
    wallpaper: "./images/arcanewall.jpg",
    poster: "./images/arcaneposter.jpg",
    trailer: "https://www.youtube.com/watch?v=fXmAurh012s"
  }
];

const posterPtv = document.querySelector(".posterst img");
const wallPtv = document.querySelector(".imagemidb img");
const watchTrailerPtv = document.querySelector(".midbt");
const watchNowF = document.querySelector(".midbwn");

const tvbtn = document.querySelector(".tvbtn");
const movbtn = document.querySelector(".movbtn");
const anime = document.querySelector(".anime");

const imagemidb = document.querySelector(".imagemidb img");
const posterst = document.querySelector(".posterst img");

const titlemidb = document.querySelector(".titlemidb");
const typemid = document.querySelector(".typemid");
const timemid = document.querySelector(".timemid");
const runmid = document.querySelector(".runmid");
const descriptionmid = document.querySelector(".descriptionmid");
const scoreptv = document.querySelector(".sptv");

tvbtn.addEventListener('click', () => {
  movbtn.classList.remove('btnv2');
  anime.classList.remove('btnv2');
  tvbtn.classList.add('btnv2');
  titlemidb.textContent = pop[0].name;
  typemid.textContent = pop[0].genre;
  timemid.textContent = pop[0].duration;
  runmid.textContent = pop[0].year;
  descriptionmid.textContent = pop[0].description;
  posterst.src = pop[0].poster;
  imagemidb.src = pop[0].wallpaper;
  scoreptv.textContent = pop[0].score;

  watchTrailerPtv.addEventListener('click', () => {
    if(tvbtn.classList.contains('btnv2')){
    const trailer = pop[0].trailer;
    window.open(trailer, "_blank");}
  });

  watchNowF.addEventListener('click', () => {
    if(tvbtn.classList.contains('btnv2')){
      const link = "index2.html";
      window.open(link, "_blank");}
  })
});

movbtn.addEventListener('click', () => {
  tvbtn.classList.remove('btnv2');
  anime.classList.remove('btnv2');
  movbtn.classList.add('btnv2');
  titlemidb.textContent = pop[1].name;
  typemid.textContent = pop[1].genre;
  timemid.textContent = pop[1].duration;
  runmid.textContent = pop[1].year;
  descriptionmid.textContent = pop[1].description;
  posterst.src = pop[1].poster;
  imagemidb.src = pop[1].wallpaper;
  scoreptv.textContent = pop[1].score;

  watchTrailerPtv.addEventListener('click', () => {
    if(movbtn.classList.contains('btnv2')){
    const trailer = pop[1].trailer;
    window.open(trailer, "_blank");}
  });
});

anime.addEventListener('click', () => {
  tvbtn.classList.remove('btnv2');
  movbtn.classList.remove('btnv2');
  anime.classList.add('btnv2');
  titlemidb.textContent = pop[2].name;
  typemid.textContent = pop[2].genre;
  timemid.textContent = pop[2].duration;
  runmid.textContent = pop[2].year;
  descriptionmid.textContent = pop[2].description;
  posterst.src = pop[2].poster;
  imagemidb.src = pop[2].wallpaper;
  scoreptv.textContent = pop[2].score;

  watchTrailerPtv.addEventListener('click', () => {
    if(anime.classList.contains('btnv2')){
    const trailer = pop[2].trailer;
    window.open(trailer, "_blank");}
  });
});

posterPtv.addEventListener('mouseenter', () => {
  if (tvbtn.classList.contains('btnv2')) {
    wallPtv.src = "./images/stwall.jpg";
  }
});

posterPtv.addEventListener('mouseleave', () => {
  if (tvbtn.classList.contains('btnv2')) {
    wallPtv.src = pop[0].wallpaper;
  }
});

posterPtv.addEventListener('mouseenter', () => {
  if(movbtn.classList.contains('btnv2')){
    wallPtv.src = "./images/jwwall2.jpg"
  }
});

posterPtv.addEventListener('mouseleave', () => {
  if (movbtn.classList.contains('btnv2')) {
    wallPtv.src = pop[1].wallpaper;
  }
});

posterPtv.addEventListener('mouseenter', () => {
  if(anime.classList.contains('btnv2')){
    wallPtv.src = "./images/arcanewall2.jpg"
  }
});

posterPtv.addEventListener('mouseleave', () => {
  if (anime.classList.contains('btnv2')) {
    wallPtv.src = pop[2].wallpaper;
  }
});


//movies data
const titleM = document.querySelector(".titleob");
const typeM = document.querySelector(".typeob");
const timeM = document.querySelector(".timeob");
const runM = document.querySelector(".runob");
const descriptionM = document.querySelector(".descriptionob");
const scoreM = document.querySelector(".sob");
const wallpaperM = document.querySelector(".backgroundimg img");
const watchTrailerM = document.querySelector(".obt");
const watchNow = document.querySelector(".obwn");
const imdb = document.querySelector(".imdbob");

//movies objects
const movies = {
	firstm: {
	  name: "Shawnshank Redeption",
	  genre: "Drama",
	  duration: "2h 22m",
	  year: "1994",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    score: "9.3",
    wallpaper: "./images/srwall.jpg",
    trailer: "https://www.youtube.com/watch?v=PLl99DlL6b4"},
	
	secondm:{
	  name: "Inception",
	  genre: "Sci-Fi",
	  duration: "2h 28m",
	  year: "2010",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    score: "8.8",
    wallpaper: "./images/inceptionwall.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"},

	thirdm:{
	  name: "The Dark Knight",
	  genre: "Action",
	  duration: "2h 32m",
	  year: "2008",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    score: "9.0",
    wallpaper: "./images/tdkwall.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"},
	
	fourthm:{
	  name: "Django Unchained",
	  genre: "Drama",
	  duration: "2h 45m",
	  year: "2012",
    description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    score: "8.4",
    wallpaper: "./images/djangowall.jpg",
    trailer: "https://www.youtube.com/watch?v=0fUCuvNlOCg"},
	
	fifthm:{
	  name: "Se7en",
	  genre: "Mystery",
	  duration: "2h 7m",
	  year: "1995",
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    score: "8.6",
    wallpaper: "./images/se7enwall.jpg",
    trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI"}};

const imagesm = document.querySelectorAll('.poster img');
const srposter = document.querySelector('.sr');

let clickedImage = null;

imagesm.forEach(imagem => {
  const movie = movies[imagem.dataset.movie];
  const titleM = document.querySelector('.titleob');
  const typeM = document.querySelector('.typeob');
  const timeM = document.querySelector('.timeob');
  const runM = document.querySelector('.runob');
  const descriptionM = document.querySelector('.descriptionob');
  const scoreM = document.querySelector('.sob');
  const wallpaperM = document.querySelector('.backgroundimg img');
  const watchTrailerM = document.querySelector('.obt');
  const watchNowM = document.querySelector('.obwn');
  const imdbM = document.querySelector('.imdbob');
  
    const showMovieInfo = () => {
      titleM.textContent = movie.name;
      typeM.textContent = movie.genre.toUpperCase();
      timeM.textContent = movie.duration;
      runM.textContent = movie.year;
      descriptionM.textContent = movie.description;
      scoreM.textContent = movie.score;
      wallpaperM.src = movie.wallpaper;
      watchTrailerM.classList.remove('notshow');
      watchNowM.classList.remove('notshow');
      watchTrailerM.setAttribute('data-trailer', movie.trailer);
      imdbM.classList.remove('notshow');

    };
  
    const hideMovieInfo = () => {
      titleM.textContent = '';
      typeM.textContent = '';
      timeM.textContent = '';
      runM.textContent = '';
      descriptionM.textContent = '';
      scoreM.textContent = '';
      watchTrailerM.classList.add('notshow');
      watchNowM.classList.add('notshow');
      imdbM.classList.add('notshow');
      watchTrailerM.removeAttribute('data-trailer');
      srposter.classList.add('unscaled');
    };
  
    imagem.addEventListener('mouseenter', () => {
      if (clickedImage && clickedImage !== imagem) {
        clickedImage.removeEventListener('mouseleave', hideMovieInfo);
        clickedImage = null;
      }
  
      showMovieInfo();
    });
  
    imagem.addEventListener('mouseleave', () => {
      if (clickedImage !== imagem) {
        hideMovieInfo();
      }
    });
  
    imagem.addEventListener('click', () => {
      if (clickedImage && clickedImage !== imagem) {
        clickedImage.removeEventListener('mouseleave', hideMovieInfo);
      }
  
      clickedImage = imagem;
    });
  });

watchTrailerM.addEventListener('click', () => {
    const trailer = watchTrailerM.dataset.trailer;
    window.open(trailer,"_blank");
})

//upcoming

const upcoming = {
  uptv:[
    {
      name: "Silo",
      genre: "Sci-Fi",
      duration: "60m",
      year:"2023-",
      description: "Men and women live in a giant silo underground with several regulations which they believe are in place to protect them from the toxic and ruined world on the surface.",
      score: "8.3"
    },
    {
      name: "The Diplomat",
      genre: "Drama",
      duration: "50m",
      year:"2023-",
      description: "In the midst of an international crisis, Kate Wyler, a career diplomat, lands in a high-profile job for which she is not suited, with tectonic implications for her marriage and her political future.",
      score: "8.1"
    },
    {
      name: "Love & Death",
      genre: "Biography",
      duration: "57m",
      year: "2023",
      description: "Two churchgoing couples enjoy small town family life in Texas - until somebody picks up an axe.",
      score: "7.6"
    }
  ],
  upmovie:[
    {
      name: "Guardians of the Galaxy Vol.3",
      genre: "Action",
      duration: "2h 30m",
      year: "2023",
      description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
      score: "8.3"
    },
    {
      name: "FAST X",
      genre: "Action",
      duration: "2h 21m",
      year: "2023",
      description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
      score: "6.4"
    },
    {
      name: "Oppenheimer",
      genre: "Biography",
      duration: "3h",
      year: "2023",
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      score: "NR"
    }
  ],
  upanime:[
    {
      name: "Blue Lock",
      genre: "Sport",
      duration: "22m",
      year: "2022-",
      description: "High school soccer players from across Japan gather for a controversial project designed to create the best and most egoistic striker in the world.",
      score: "8.3"
    },
    {
      name: "Chainsaw Man",
      genre: "Action",
      duration: "25m",
      year: "2022-",
      description: "Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.",
      score: "8.5" 
    },
    {
      name: "Revenger",
      genre: "Action",
      duration: "23m",
      year: "2023-",
      description: "A vengeful samurai works with a mysterious organization to take revenge on behalf of those who have no power.",
      score: "6.6"
    }
  ]
};

const tvbtn2 = document.querySelector(".tvbtn2");
const movbtn2 = document.querySelector(".movbtn2");
const anime2 = document.querySelector(".anime2");

const imageobb2 = document.querySelector(".imageobb2 img");
const silo = document.querySelector(".silo img");
const diplomat = document.querySelector(".diplomat img");
const lad = document.querySelector(".lad img");

tvbtn2.addEventListener('click', () => {
  movbtn2.classList.remove('btnv2');
  anime2.classList.remove('btnv2');
  tvbtn2.classList.add('btnv2');
  imageobb2.src = "./images/upcomingwall.jpg";
  silo.src = "./images/siloposter.jpg";
  diplomat.src = "./images/diplomatposter.jpg";
  lad.src = "./images/ladposter.jpg";
});

movbtn2.addEventListener('click', () => {
  tvbtn2.classList.remove('btnv2');
  anime2.classList.remove('btnv2');
  movbtn2.classList.add('btnv2');
  imageobb2.src = "./images/upcomingwall2.jpg";
  silo.src = "./images/gogposter.jpg";
  diplomat.src = "./images/fastxposter.jpg";
  lad.src = "./images/oppenheimerposter.jpg";
});

anime2.addEventListener('click', () => {
  tvbtn2.classList.remove('btnv2');
  movbtn2.classList.remove('btnv2');
  anime2.classList.add('btnv2');
  imageobb2.src = "./images/upcomingwall3.jpg";
  silo.src = "./images/blposter.jpg";
  diplomat.src = "./images/cmposter.jpg";
  lad.src = "./images/revengerposter.jpg";
});


//movie trilogy

const moviest = {
lotr:[
    {
      name: "LOTR: FELLOWSHIP OF THE RING",
      genre: "Fantasy",
      duration: "2h 58m",
      year: "2001"
    },
    {
      name: "LOTR: THE TWO TOWERS",
      genre: "Fantasy",
      duration: "2h 59m",
      year: "2002"
    },
    {
      name: "LOTR: THE RETURN OF THE KING",
      genre: "Fantasy",
      duration: "3h 21m",
      year: "2003"
    }],
godfather: [
    {
      name: "THE GODFATHER",
      genre: "Crime",
      duration: "2h 55m",
      year: "1972"
    },
    {
      name: "THE GODFATHER PART II",
      genre: "Crime",
      duration: "3h 22m",
      year: "1974"
    },
    {
      name: "THE GODFATHER PART III",
      genre: "Crime",
      duration: "2h 42m",
      year:"1990"
    }],
before:[
    {
      name: "BEFORE SUNRISE",
      genre: "Romance",
      duration: "1h 41m",
      year:"1995"
    },
    {
      name:"BEFORE SUNSET",
      genre: "Romance",
      duration: "1h 20m",
      year:"2004"
    },
    {
      name:"BEFORE MIDNIGHT",
      genre: "Romance",
      duration: "1h 49m",
      year:"2013"
    }
    ],
hangover:[
    {
      name: "THE HANGOVER",
      genre: "Comedy",
      duration: "1h 40m",
      year: "2009"
    },
    {
      name: "THE HANGOVER PART II",
      genre: "Comedy",
      duration: "1h 42m",
      year: "2009"
    },
    {
      name: "THE HANGOVER PART III",
      genre: "Comedy",
      duration: "1h 40m",
      year: "2013"
    }
]
};

const lotr = document.querySelector('.lotr');
const godfather = document.querySelector('.godfather');
const before = document.querySelector('.before');
const hangover = document.querySelector('.hangover');
const trilogywall = document.querySelector('.backgroundimg2 img');
const dupliinfo = document.querySelectorAll('.dupliinfo');
const descriptiontbb = document.querySelector('.descriptiontbb');

const titleob2fm = document.querySelector('.titleob2fm');
const titleob2sm = document.querySelector('.titleob2sm');
const titleob2tm = document.querySelector('.titleob2tm');
const typeob2fm = document.querySelector('.typeob2fm');
const typeob2sm = document.querySelector('.typeob2sm');
const typeob2tm = document.querySelector('.typeob2tm');
const timeob2fm = document.querySelector('.timeob2fm');
const timeob2sm = document.querySelector('.timeob2sm');
const timeob2tm = document.querySelector('.timeob2tm');
const runob2fm = document.querySelector('.runob2fm');
const runob2sm = document.querySelector('.runob2sm');
const runob2tm = document.querySelector('.runob2tm');

//lotr events
const lotrd = document.querySelector('.lotrd');

lotr.addEventListener('click', () => {
  lotrd.style.visibility = 'visible';
  
  titleob2fm.textContent = moviest.lotr[0].name;
  titleob2sm.textContent = moviest.lotr[1].name;
  titleob2tm.textContent = moviest.lotr[2].name;

  typeob2fm.textContent = moviest.lotr[0].genre;
  typeob2sm.textContent = moviest.lotr[1].genre;
  typeob2tm.textContent = moviest.lotr[2].genre;

  timeob2fm.textContent = moviest.lotr[0].duration;
  timeob2sm.textContent = moviest.lotr[1].duration;
  timeob2tm.textContent = moviest.lotr[2].duration;

  runob2fm.textContent = moviest.lotr[0].year;
  runob2sm.textContent = moviest.lotr[1].year;
  runob2tm.textContent = moviest.lotr[2].year;

  dupliinfo.forEach(element => {
    element.style.visibility = 'visible';
  });
  descriptiontbb.textContent = "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien.Set in the fictional world of Middle-earth, the films follow the hobbit Frodo Baggins as he and the Fellowship embark on a quest to destroy the One Ring, to ensure the destruction of its maker, the Dark Lord Sauron."
  openModal2();
});

//godfather events
const godfatherd = document.querySelector('.godfatherd');

godfather.addEventListener('click', () => {
  godfatherd.style.visibility = 'visible';
  
  titleob2fm.textContent = moviest.godfather[0].name;
  titleob2sm.textContent = moviest.godfather[1].name;
  titleob2tm.textContent = moviest.godfather[2].name;

  typeob2fm.textContent = moviest.godfather[0].genre;
  typeob2sm.textContent = moviest.godfather[1].genre;
  typeob2tm.textContent = moviest.godfather[2].genre;

  timeob2fm.textContent = moviest.godfather[0].duration;
  timeob2sm.textContent = moviest.godfather[1].duration;
  timeob2tm.textContent = moviest.godfather[2].duration;

  runob2fm.textContent = moviest.godfather[0].year;
  runob2sm.textContent = moviest.godfather[1].year;
  runob2tm.textContent = moviest.godfather[2].year;

  dupliinfo.forEach(element => {
    element.style.visibility = 'visible';
  });
  descriptiontbb.textContent = "The Godfather is a trilogy of American crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo. The films follow the trials of the fictional Italian American mafia Corleone family whose patriarch, Vito Corleone, rises to be a major figure in American organized crime. His youngest son, Michael Corleone, becomes his successor. ";
  openModal2();
});

//before events
const befored = document.querySelector('.befored');

before.addEventListener('click', () => {
  befored.style.visibility = 'visible';

  titleob2fm.textContent = moviest.before[0].name;
  titleob2sm.textContent = moviest.before[1].name;
  titleob2tm.textContent = moviest.before[2].name;

  typeob2fm.textContent = moviest.before[0].genre;
  typeob2sm.textContent = moviest.before[1].genre;
  typeob2tm.textContent = moviest.before[2].genre;

  timeob2fm.textContent = moviest.before[0].duration;
  timeob2sm.textContent = moviest.before[1].duration;
  timeob2tm.textContent = moviest.before[2].duration;

  runob2fm.textContent = moviest.before[0].year;
  runob2sm.textContent = moviest.before[1].year;
  runob2tm.textContent = moviest.before[2].year;

  dupliinfo.forEach(element => {
    element.style.visibility = 'visible';
  });
  descriptiontbb.textContent = "The Before trilogy consists of three American romance films directed by Richard Linklater. The films are considered minimal, consisting mostly of monologues and casual conversation with extended dialogue between the characters. Contrasting ideas and perspectives on life and love are detailed, with the series referencing time, self-discovery, age, loss, and parentage; it is considered an exploration of postmodern romance.";
  openModal2();
});


//hangover events
const hangoverd = document.querySelector('.hangoverd');

hangover.addEventListener('click', () => {
  hangoverd.style.visibility = 'visible';

  titleob2fm.textContent = moviest.hangover[0].name;
  titleob2sm.textContent = moviest.hangover[1].name;
  titleob2tm.textContent = moviest.hangover[2].name;

  typeob2fm.textContent = moviest.hangover[0].genre;
  typeob2sm.textContent = moviest.hangover[1].genre;
  typeob2tm.textContent = moviest.hangover[2].genre;

  timeob2fm.textContent = moviest.hangover[0].duration;
  timeob2sm.textContent = moviest.hangover[1].duration;
  timeob2tm.textContent = moviest.hangover[2].duration;

  runob2fm.textContent = moviest.hangover[0].year;
  runob2sm.textContent = moviest.hangover[1].year;
  runob2tm.textContent = moviest.hangover[2].year;

  dupliinfo.forEach(element => {
    element.style.visibility = 'visible';
  });
  descriptiontbb.textContent = "The Hangover is a trilogy of American comedy films created by Jon Lucas and Scott Moore, and directed by Todd Phillips.While all of the films finds three of the four men on a mission to find their missing friend, the first two films focus on the events, after the night of debauchery before a party in Las Vegas and Bangkok, whereas the third and final film involves a road trip and a kidnapping in lieu of a bachelor party.";
  openModal2();
});





