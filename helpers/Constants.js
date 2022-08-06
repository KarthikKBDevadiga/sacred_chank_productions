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
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#000000",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
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
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
  ],
};

export default Constants;
