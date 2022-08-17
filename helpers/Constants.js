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

  MOVIES: [
    {
      id: "Gaalipata2",
      title: "Gaalipata 2",
      status: "UPCOMING_MOVIE",
      description:
        "Three college friends meet teacher Kishore Kumar who offers them a room to stay because of personal reasons. Years later, they reunite to help their teacher with his illness and in turn find a chance to fix their love lives.",
      releaseDate: "12 August 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster: {
        landscape:
          "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/landscape.png",
        portrait:
          "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/portrait.png",
      },
      trailer: "https://www.youtube.com/watch?v=fnsWt4H619o",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Pawan Kumar",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/PawanKumar.png",
          link: {
            wikipedia: "",
          },
        },
      ],
      tickets: [
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Saturday at 20:15",
          theater: "Odeon Limerick",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Saturday at 11:00",
          theater: "Odeon Cork",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Friday at 19:10",
          theater: "Odeon Dublin",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Saturday at 19:10",
          theater: "Odeon Dublin",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Sunday at 19:10",
          theater: "Odeon Dublin",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Monday at 12:45",
          theater: "Odeon Dublin",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
        {
          name: "Gaalipata 2",
          rating: "12A",
          timing: "Tuesday at 12:45",
          theater: "Odeon Dublin",
          url: "https://www.odeoncinemas.ie/cinemas/limerick/",
        },
      ],
      promotions: [
        {
          title: "Yograj Bhat",
          url: "https://www.youtube.com/watch?v=7CKlL-hOiMY",
        },
        {
          title: "Ganesh",
          url: "https://www.youtube.com/watch?v=6KwKmKhOQ7Y",
        },
        {
          title: "Pawan",
          url: "https://www.youtube.com/watch?v=hTLgpCrJTjI",
        },
      ],
    },
    {
      id: "777Charlie",
      title: "777 Charlie",
      status: "IN_THEATER_MOVIES",
      description:
        "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.",
      releaseDate: "10 June 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "DRAMA", "ADVENTURE"],
      poster: {
        landscape:
          "https://rskg.in/wp-content/uploads/2022/07/IMG_20220619_132832-2.jpg",
        portrait:
          "https://www.paramvah.com/images/films/777-charlie/777-CharliePoster2.jpg",
      },
      trailer: "https://www.youtube.com/watch?v=REqFOV2A7sI",
      casts: [
        {
          name: "Rakshit Shetty",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/RakshitShetty.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Sangeetha Sringeri",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/SangeethaSringeri.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Raj B Shetty",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/RajBShetty.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Danish Sait",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/DanishSait.png",
          link: {
            wikipedia: "",
          },
        },
      ],
      promotions: [
        {
          title: "Kiranraj",
          url: "https://www.youtube.com/watch?v=k3U2ARvVh0o",
        },
      ],
      reviews: [
        {
          title: "Kevin",
          url: "https://www.youtube.com/watch?v=SfloHTQle70",
        },
      ],
    },
    {
      id: "HarikatheAllaGirikathe",
      title: "Harikathe Alla Girikathe",
      status: "IN_THEATER_MOVIES",
      description:
        "The hurdles that has to be overcome by three people who came together to pursue a common goal of making it big in the movie business",
      releaseDate: "23 June 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster: {
        landscape: "https://i.ytimg.com/vi/NDf58vl6FhA/maxresdefault.jpg",
        portrait:
          "https://www.deccanherald.com/sites/dh/files/articleimages/2022/06/23/harikathe-alla-girikathe-1120689-1655987339.jpg",
      },
      trailer: "https://www.youtube.com/watch?v=NDf58vl6FhA",
      casts: [
        {
          name: "Rishab Shetty",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/RishabShetty.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Rachana Inder",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/RachanaInder.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Thapaswini Poonacha",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/ThapaswiniPoonacha.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Pramod Shetty",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/PramodShetty.png",
          link: {
            wikipedia: "",
          },
        },
      ],
    },
    {
      id: "AvataraPurusha",
      title: "Avatara Purusha",
      status: "IN_THEATER_MOVIES",
      description:
        "Siri hires an unsuccessful actor to play her missing brother in front of her parents to bring the family back together. Black magic also plays a role",
      releaseDate: "6 May 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "MYSTERY"],
      poster: {
        landscape:
          "https://m.media-amazon.com/images/M/MV5BOWE3OTVmZjgtZTFhNC00ZDNjLWJkNjctYTU2M2JmOTA3NTQwXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg",
        portrait:
          "https://www.letsfindmovie.com/wp-content/uploads/2021/12/gQ29E9Qy6z5ExsxnpgUTHfpZFO3.jpg",
      },
      trailer: "https://www.youtube.com/watch?v=LqvbogH-Ivc",
      casts: [
        {
          name: "Sharan",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/Sharan.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Ashika Ranganath",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/AshikaRanganath.png",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Sai Kumar",
          image:
            "https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/headshots/SaiKumar.png",
          link: {
            wikipedia: "",
          },
        },
      ],
      promotions: [
        {
          title: "Sai Kumar",
          url: "https://www.youtube.com/watch?v=VfN9k--ocZk",
        },
        {
          title: "Sharan",
          url: "https://www.youtube.com/watch?v=P-vcQi5ODAk",
        },
        {
          title: "Ashika Ranganath",
          url: "https://www.youtube.com/watch?v=ZVcsvXs4SpY",
        },
      ],
    },
  ],

  UPCOMING_MOVIE: [
    {
      id: "gaalipata2",
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
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
          link: {
            wikipedia: "",
          },
        },
      ],
    },
  ],

  IN_THEATER_MOVIES: [
    {
      id: "777Charlie",
      title: "777 Charlie",
      description:
        "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.",
      releaseDate: "10 June 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster: {
        landscape:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ9NGT0im0YunMDisqpoZmzmjx0UF6-fMaGPU0SKbhvOkT11RS-BY4eA2HAWGcuz11Dk-NBKBYYdhKxoBZVry1oBf09tfndpDVZIacZL_jA6gfoswkppb_HK4nqcIj21rZI1ZE-eJM3rNYFE_-dEisJgUh_B2ZECtLUl_SAy95Qe4i63UhnF38XQ/w0/images%20(30).jpeg",
        portrait:
          "https://www.paramvah.com/images/films/777-charlie/777-CharliePoster2.jpg",
      },
      trailer: "https://www.youtube.com/watch?v=REqFOV2A7sI",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
          link: {
            wikipedia: "",
          },
        },
      ],
    },
    {
      id: "HarikatheAllaGirikathe",
      title: "Harikathe Alla Girikathe",
      description:
        "The hurdles that has to be overcome by three people who came together to pursue a common goal of making it big in the movie business",
      releaseDate: "23 June 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster: {
        landscape: "https://i.ytimg.com/vi/NDf58vl6FhA/maxresdefault.jpg",
        portrait:
          "https://www.deccanherald.com/sites/dh/files/articleimages/2022/06/23/harikathe-alla-girikathe-1120689-1655987339.jpg",
      },
      trailer: "https://www.youtube.com/watch?v=NDf58vl6FhA",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
          link: {
            wikipedia: "",
          },
        },
      ],
    },
    {
      id: "AvataraPurusha",
      title: "Avatara Purusha",
      description:
        "Siri hires an unsuccessful actor to play her missing brother in front of her parents to bring the family back together. Black magic also plays a role",
      releaseDate: "6 May 2022",
      languages: ["KANNADA"],
      genre: ["COMEDY", "ROMANTIC"],
      poster: {
        landscape:
          "https://m.media-amazon.com/images/M/MV5BOWE3OTVmZjgtZTFhNC00ZDNjLWJkNjctYTU2M2JmOTA3NTQwXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg",
        portrait:
          "https://www.letsfindmovie.com/wp-content/uploads/2021/12/gQ29E9Qy6z5ExsxnpgUTHfpZFO3.jpg",
      },
      trailer: "https://www.youtube.com/watch?v=LqvbogH-Ivc",
      casts: [
        {
          name: "Ganesh",
          image:
            "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
          link: {
            wikipedia: "",
          },
        },
        {
          name: "Diganth",
          image:
            "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
          link: {
            wikipedia: "",
          },
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
        link: {
          wikipedia: "",
        },
      },
      {
        name: "Diganth",
        image:
          "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
        link: {
          wikipedia: "",
        },
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
