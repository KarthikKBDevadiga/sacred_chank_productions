const Constants = {
  COUPON_TYPES: [
    { id: "ALL", title: "All", disabled: false },
    { id: "GENERAL_COUPON", title: "General Coupon", disabled: false },
    { id: "COURSE_COUPON", title: "Course Coupon", disabled: true },
    { id: "OFFER", title: "Offer", disabled: false },
  ],
  DISCOUNT_TYPES: [
    { id: "ALL", title: "All", disabled: false },
    { id: "AMOUNT", title: "Amount", disabled: false },
    { id: "PERCENTAGE", title: "Percentage", disabled: false },
    { id: "FREE", title: "Free", disabled: true },
  ],
  WEEK_DAYS: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  UPCOMING_MOVIE: [
    {
      title: "Gaalipata 2",
      description:
        "Three college friends meet teacher Kishore Kumar who offers them a room to stay because of personal reasons. Years later, they reunite to help their teacher with his illness and in turn find a chance to fix their love lives.",
      releaseDate: "12 August 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster:
        "https://www.filmibeat.com/fanimg/movie/17945/gaalipata-2-photos-images-64053.jpg",
      trailer: "https://www.youtube.com/watch?v=fnsWt4H619o",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
        },
      ],
    },
  ],
  IN_THEATER_MOVIES: [
    {
      title: "777 Charlie",
      description:
        "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.",
      releaseDate: "10 June 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster:
        "https://www.paramvah.com/images/films/777-charlie/777-CharliePoster2.jpg",
      trailer: "https://www.youtube.com/watch?v=REqFOV2A7sI",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
        },
      ],
    },
    {
      title: "Harikathe Alla Girikathe",
      description:
        "The hurdles that has to be overcome by three people who came together to pursue a common goal of making it big in the movie business",
      releaseDate: "23 June 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2022/06/23/harikathe-alla-girikathe-1120689-1655987339.jpg",
      trailer: "https://www.youtube.com/watch?v=NDf58vl6FhA",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
        },
      ],
    },
    {
      title: "Avatara Purusha",
      description:
        "Siri hires an unsuccessful actor to play her missing brother in front of her parents to bring the family back together. Black magic also plays a role",
      releaseDate: "6 May 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster:
        "https://www.letsfindmovie.com/wp-content/uploads/2021/12/gQ29E9Qy6z5ExsxnpgUTHfpZFO3.jpg",
      trailer: "https://www.youtube.com/watch?v=LqvbogH-Ivc",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
        },
      ],
    },
  ],
  MOVIE: {
    title: "Gaalipata 2",
    description:
      "Three college friends meet teacher Kishore Kumar who offers them a room to stay because of personal reasons. Years later, they reunite to help their teacher with his illness and in turn find a chance to fix their love lives.",
    releaseDate: "12 August 2022",
    languages: ["KANNADA"],
    genre: ["COMEDY", "ROMANTIC"],
    poster: {
      landscape:
        "https://m.media-amazon.com/images/M/MV5BNjI0ZTY4MzYtMDA5MS00YThhLTgxMGQtZWM2YmUwNTIzNGNhXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg",
      portrait:
        "https://www.filmibeat.com/fanimg/movie/17945/gaalipata-2-photos-images-64053.jpg",
    },
    trailer: "https://www.youtube.com/watch?v=fnsWt4H619o",
    casts: [
      {
        name: "Ganesh",
        image:
          "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
        link: {},
      },
      {
        name: "Diganth",
        image:
          "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
        link: {},
      },
    ],
  },

  NEWS: [
    {
      image:
        "https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg",
      title:
        "ಜೇನಿನ ಧ್ವನಿಯ ಗಾಯಕ ಶ್ರೀ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರಿಗೆ ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು..",
    },
    {
      image:
        "https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg",
      title:
        "ಜೇನಿನ ಧ್ವನಿಯ ಗಾಯಕ ಶ್ರೀ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರಿಗೆ ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು..",
    },
    {
      image:
        "https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg",
      title:
        "ಜೇನಿನ ಧ್ವನಿಯ ಗಾಯಕ ಶ್ರೀ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರಿಗೆ ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು..",
    },
    {
      image:
        "https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg",
      title:
        "ಜೇನಿನ ಧ್ವನಿಯ ಗಾಯಕ ಶ್ರೀ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರಿಗೆ ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು..",
    },
  ],

  GOOGLE_MAP_STYLE: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [
        {
          color: "#202c3e",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          gamma: 0.01,
        },
        {
          lightness: 20,
        },
        {
          weight: "1.39",
        },
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          weight: "0.96",
        },
        {
          saturation: "9",
        },
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          lightness: 30,
        },
        {
          saturation: "9",
        },
        {
          color: "#29446b",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          saturation: 20,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          lightness: 20,
        },
        {
          saturation: -20,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          lightness: 10,
        },
        {
          saturation: -30,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#193a55",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          saturation: 25,
        },
        {
          lightness: 25,
        },
        {
          weight: "0.01",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          lightness: -20,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#0f172a",
        },
      ],
    },
  ],
};

export default Constants;
