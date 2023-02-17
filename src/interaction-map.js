//----------------------- Define Variables -------------------------------//
let interactiveMapData = (window.dataInteractiveMap = {
  mapStyleLayers: [
    {
      stylers: [
        {
          saturation: -5,
        },
      ],
    },
    {
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: 5,
        },
        {
          weight: 1.5,
        },
      ],
    },
    {
      featureType: "landscape",
      stylers: [
        {
          color: "#7285a1",
        },
        {
          saturation: 5,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#454545",
        },
        {
          weight: 1,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      stylers: [
        {
          color: "#dff6f8",
        },
        {
          saturation: 25,
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    }, {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    }, {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    }, {
      featureType: "transit",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    }
  ],
  countryLayer: [
    "United States",
    "Canada",
    "China",
    "India",
    "Malaysia",
    "Japan",
    "Vietnam",
    "Australia",
    "Ireland",
    "Italy",
    "South Korea",
    "Spain",
    "Netherlands",
    "United Kingdom",
    "Germany",
    "France",
    "Poland",
    "Singapore",
  ],
  mapData: {
    market: [
      {
        name: "United States",
        labelAnchor: [0, 10],
        circleAnchor: [20, 30],
        tooltipOffset: [35, 25],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "bottom",
        },
        propertiesNum: 463,
      },
      {
        name: "Canada",
        labelAnchor: [-50, 0],
        circleAnchor: [-45, 15],
        tooltipOffset: [-30, 10],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: 2,
      },
      {
        name: "China",
        labelAnchor: [-20, -10],
        circleAnchor: [-15, -50],
        tooltipOffset: [3, -50],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: 106,
      },
      {
        name: "India",
        labelAnchor: [-25, -10],
        circleAnchor: [-20, 8],
        tooltipOffset: [4, 5],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: 7,
      },
      {
        name: "Malaysia",
        labelAnchor: [-20, -10],
        circleAnchor: [-15, 8],
        tooltipOffset: [2, 7],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: 17,
      },
      {
        name: "Japan",
        labelAnchor: [-10, 0],
        circleAnchor: [-5, -38],
        tooltipOffset: [12, -40],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: 33,
      },
      {
        name: "Vietnam",
        labelAnchor: [-10, -10],
        circleAnchor: [50, -20],
        tooltipOffset: [68, -21],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "right",
        },
        propertiesNum: 24,
      },
      {
        name: "Australia",
        labelAnchor: [-20, -10],
        circleAnchor: [-15, 5],
        tooltipOffset: [3, 3],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "right",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      },
      {
        name: "Germany",
        labelAnchor: [-20, -10],
        circleAnchor: [-10, -50],
        tooltipOffset: [5, -50],
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "right",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      },
    ],
    state: [
      {
        name: "Thanh Hoa",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Quang Nam",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Nagasaki Ken",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Hokkai Do",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Ehime Ken",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Tokyo To",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "HongKong",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Chongqing",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Guizhou",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Liaoning",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Dien Bien",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Shanghai",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Texas",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "West Virginia",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Maryland",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "New Jersey",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "New York",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Alberta",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Ontario",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Nouvelle-Écosse",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "Victoria",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }, {
        name: "South Australia",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 300),
      }
    ],
    sector: [
      {
        name: "Office",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 50),
      }, {
        name: "Mixed-Use",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 50),
      }, {
        name: "Corporate Housing / Service Apartment",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 50),
      }, {
        name: "Student Accommodation",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 50),
      }, {
        name: "Retail",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 50),
      }, {
        name: "Logistics",
        popupContent: {
          title: ["AUM", "NUMBER OF PROPERTIES"],
          unit: ["$", "m", "Properties"],
          aum: "10,997.69",
          direction: "top",
        },
        propertiesNum: Math.ceil(Math.random() * 50),
      }
    ],
    platform: []
  },
  properties: [
    {
      name: "Harbourfront Centre",
      imgSrc: "/assets/harbourfront.jpg",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
    {
      name: "Placeholder",
      imgSrc: "https://via.placeholder.com/350",
      url: "#",
    },
  ],
  chartData: {
    sectorColor: [
      "#6546CE",
      "#DD6262",
      "#14B6F2",
      "#D05E00",
      "#4349E2",
      "#9C33EA",
      "#A0DB18",
      "#2491FD",
    ],
    properties: [
      ["Properties", "Assets"],
      ["Mixed-Use", 160],
      ["Office", 120],
      ["Industrial", 150],
      ["Residential", 204],
      ["Logistics", 75],
      ["Retail", 17],
      ["Corporate Housing / Serviced Apartment", 80],
      ["Student Accommodation", 204],
    ],
    filter: [
      {
        name: "united-states",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", 1],
          ["Office", Math.ceil(Math.random() * 100)],
          ["Industrial", Math.ceil(Math.random() * 100)],
          ["Retail", Math.ceil(Math.random() * 100)],
        ]
      }, {
        name: "canada",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", 2],
          ["Residential", Math.ceil(Math.random() * 100)],
          ["Retail", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "china",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Office", Math.ceil(Math.random() * 100)],
          ["Industrial", Math.ceil(Math.random() * 100)],
          ["Residential", Math.ceil(Math.random() * 100)],
          ["Logistics", Math.ceil(Math.random() * 100)],
          ["Retail", Math.ceil(Math.random() * 100)]
        ],
      }, {
        name: "india",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", 3],
          ["Industrial", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "malaysia",
        properties: [
          ["Properties", "Assets"],
          ["Retail", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "japan",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Office", Math.ceil(Math.random() * 100)],
          ["Retail", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "vietnam",
        properties: [
          ["Properties", "Assets"],
          ["Office", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "australia",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Logistics", Math.ceil(Math.random() * 100)],
          ["Retail", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "ireland",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "italy",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Office", Math.ceil(Math.random() * 100)],
          ["Industrial", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "south-korean",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Industrial", Math.ceil(Math.random() * 100)],
          ["Residential", Math.ceil(Math.random() * 100)],
          ["Logistics", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "spain",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Industrial", Math.ceil(Math.random() * 100)],
          ["Retail", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "netherlands",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Office", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "united-kingdom",
        properties: [
          ["Properties", "Assets"],
          ["Logistics", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "germany",
        properties: [
          ["Properties", "Assets"],
          ["Retail", Math.ceil(Math.random() * 100)],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "france",
        properties: [
          ["Properties", "Assets"],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "poland",
        properties: [
          ["Properties", "Assets"],
          ["Mixed-Use", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      }, {
        name: "singapore",
        properties: [
          ["Properties", "Assets"],
          ["Corporate Housing / Serviced Apartment", Math.ceil(Math.random() * 100)],
          ["Student Accommodation", Math.ceil(Math.random() * 100)],
        ],
      },
    ],
  },
  filterData: {
    all: {
      name: "Select All",
      id: "all",
    },
    filter: {
      market: [
        {
          name: "United States",
          id: "united-states",
        },
        {
          name: "Canada",
          id: "canada",
        },
        {
          name: "China",
          id: "china",
        },
        {
          name: "India",
          id: "india",
        },
        {
          name: "Malaysia",
          id: "malaysia",
        },
        {
          name: "Japan",
          id: "japan",
        },
        {
          name: "Vietnam",
          id: "vietnam",
        },
        {
          name: "Australia",
          id: "australia",
        },
        {
          name: "Ireland",
          id: "ireland",
        },
        {
          name: "Italy",
          id: "italy",
        },
        {
          name: "South Korean",
          id: "south-korean",
        },
        {
          name: "Spain",
          id: "spain",
        },
        {
          name: "Netherlands",
          id: "netherlands",
        },
        {
          name: "United Kingdom",
          id: "united-kingdom",
        },
        {
          name: "Germany",
          id: "germany",
        },
        {
          name: "France",
          id: "france",
        },
        {
          name: "Poland",
          id: "poland",
        },
        {
          name: "Singapore",
          id: "singapore",
        },
      ],
      sector: [
        {
          name: "Office",
          id: "office",
        },
        {
          name: "Mixed-Use",
          id: "mixed-use",
        },
        {
          name: "Corporate Housing / Service Apartment",
          id: "housing",
        },
        {
          name: "Student Accommodation",
          id: "student-accommodation",
        },
        {
          name: "Retail",
          id: "retail",
        },
        {
          name: "Logistics",
          id: "logistics",
        },
      ],
      platform: [
        {
          name: "Platform 1",
          id: "platform-1",
        },
        {
          name: "Platform 2",
          id: "platform-2",
        },
        {
          name: "Platform 3",
          id: "platform-3",
        },
        {
          name: "Platform 4",
          id: "platform-4",
        },
        {
          name: "Platform 5",
          id: "platform-5",
        },
      ],
    },
  },
});
const propertiesMenu = document.querySelector(
  ".interactive-map-properties-menu"
);
const propertiesMenuButton = document.querySelector(
  ".interactive-map-properties-menu-button"
);
const interactiveMap = document.getElementById("interactiveMap");
const interactiveMapChart = document.getElementById("interactiveMapChart");
const interactiveMapChartWrapper = document.querySelector(
  ".interactive-map-chart-wrapper"
);
const interactiveMapChartLabel = document.querySelector(
  ".interactive-map-chart-wrapper .interactiveMapChartTotalLabel"
);
const propertiesListingWrapper = document.querySelector(
  ".interactive-map-properties-content-wrapper"
);
const propertiesPaginationItem = document.getElementsByClassName(
  "interactive-map-properties-pagination-item"
);
const filterHeader = document.querySelector(
  ".interactive-map-chart-filter-header span"
);
const filterListWrapper = document.querySelector(
  ".interactive-map-filter-list"
);
const filterChartListInner = document.querySelectorAll(
  '.interactive-map-chart-filter-inner'
);
const filterCheckboxItem = document.getElementsByClassName(
  "interactive-map-filter-checkbox"
);
const filterClearAll = document.querySelectorAll(
  ".clear-all-filter"
);
const filterBtns = document.querySelectorAll(
  ".interactive-map-chart-filter-header-plus"
);
const filterOverlay = document.querySelector(
  ".interactive-map-chart-filter-overlay"
);
const filterOverlayClose = document.querySelector(
  ".interactive-map-chart-filter-close"
);
const propertiesPaginationLeft = document.querySelector(
  ".interactive-map-properties-pagination .pagination-left"
);
const propertiesPaginationRight = document.querySelector(
  ".interactive-map-properties-pagination .pagination-right"
);
const interactiveMapChartDetails = document.querySelector(
  ".interactiveMapChartDetails ul"
);
const BREAKPOINTS = {
  MD: 600,
  LG: 992,
  XL: 1366,
};
const minZoom = 3;
const maxZoom = 20;
const paginationLimit = 6;
const pagination = {
  limit: paginationLimit,
  start: 0,
  end: paginationLimit,
};
const countriesGeoJso = "assets/countries.geojson";
const stateGeoJson = "assets/state.geojson";
let windowWidth = window.outerWidth;
const zoomLevel = {
  LEVEL0: minZoom,
  LEVEL1: 5,
  LEVEL2: 10,
  LEVEL3: 15,
};
const mapView = {
  MD: 2,
  LG: 2,
  XL: [35, 100],
  DEFAULT: [50, 120],
};
const chartSize = {
  MD: 140,
  LG: 140,
  XL: 150,
};
let currentPageNumber = 1;
let map,
  defaultCenter = { lat: 1.29027, lng: 103.851959 }, 
  // chart, 
  chartData,
  interactiveMapChartOption,
  chartPropertiesArr = [],
  totalChartProperties = 0;
let interactionState = ["default", "hover", "selected"];
let markersZoomLevel0 = [],
  markersZoomLevel1 = [],
  markersZoomLevel2 = [],
  markersZoomLevel3 = [],
  geoLayersDefault = [],
  geoLayersLevel0 = [],
  geoLayersLevel1 = [],
  geoLayersLevel2 = [],
  geoLayersLevel3 = [],
  InfoWindowsLevel0 = [],
  InfoWindowsLevel1 = [],
  InfoWindowsLevel2 = [],
  InfoWindowsLevel3 = [];
let countriesGeoData = [],
  stateGeoData = [],
  citiesGeoData = [];
let colorCode = {
  vividOrangeDark: "#dd6b0a",
  vividOrangeLight: "#f3901d",
  lightGray: "#fbfbfb",
  darkGray: "#707070",
  darkBlue: "#7285a1"

  
}
//----------------------- Define Variables -------------------------------//

//----------------------- Define Functions ---------------------------------------//
// Utils //
function getMediaQuery(property, value) {
  return `(${property}: ${value}px)`;
}
function isDesktop() {
  return window.matchMedia(getMediaQuery("min-width", BREAKPOINTS.LG)).matches;
}
// Utils //
// Properties Menu //
function calculateRequiredPages(data, paginationLimit) {
  let pagesRequired = Math.ceil(data.length / paginationLimit);
  return pagesRequired;
}
function renderPropertiesList(data, pagination) {
  const template = document.querySelector(
    "#interactive-map-properties-template"
  );
  const slicedPropertiesData = data.slice(pagination.start, pagination.end);

  propertiesListingWrapper.innerHTML = "";

  slicedPropertiesData.forEach((propertiesListing) => {
    const propertiesListingItem = propertiesListingTemplate(
      template,
      propertiesListing
    );

    if (propertiesListingItem) {
      const itemWrapper = propertiesListingItem.querySelector(
        ".interactive-map-properties-item"
      );
      propertiesListingWrapper.append(itemWrapper);
    }
  });
}
function propertiesListingTemplate(template, propertiesListing) {
  const templateClone = template.content.cloneNode(true);
  const propertiseListingImage = templateClone.querySelector(
    ".interactive-map-properties-item img"
  );
  const propertiseListingLink = templateClone.querySelector(
    ".interactive-map-properties-item a"
  );
  const propertiseListingName = templateClone.querySelector(
    ".interactive-map-properties-item span"
  );

  propertiseListingImage.src = propertiesListing.imgSrc;
  propertiseListingImage.alt = propertiesListing.name;
  propertiseListingLink.setAttribute("href", propertiesListing.url);
  propertiseListingName.innerHTML = propertiesListing.name;

  return templateClone || null;
}
function displayPropertiesPagination(
  propertiesPaginationItem,
  currentPageNumber,
  pagesRequired
) {
  const paginationWrapper = document.querySelector(
    ".interactive-map-properties-pagination"
  );
  const paginationContainer = document.querySelector(
    ".interactive-map-properties-pagination-container"
  );

  if (paginationWrapper) {
    paginationContainer.innerHTML = "";
  }

  for (let i = 0; i < pagesRequired; i++) {
    paginationContainer.innerHTML +=
      '<li class="interactive-map-properties-pagination-item"><a class="interactive-map-properties-pagination-link" href="#">' +
      (i + 1) +
      "</a></li>";
  }

  propertiesPaginationItem[currentPageNumber - 1].classList.add("active");
}
function paginationProperties(start, end, data) {
  const template = document.querySelector(
    "#interactive-map-properties-template"
  );
  propertiesListingWrapper.innerHTML = "";
  const slicedData = data.slice(start, end);

  slicedData.forEach((propertiesListing) => {
    const propertiesListingItem = propertiesListingTemplate(
      template,
      propertiesListing
    );

    if (propertiesListingItem) {
      const itemWrapper = propertiesListingItem.querySelector(
        ".interactive-map-properties-item"
      );
      propertiesListingWrapper.append(itemWrapper);
    }
  });
}
function paginationPropertiesFunc(e) {
  e.preventDefault();
  let start, end;
  let paginationData = interactiveMapData.properties;

  for (var i = 0; i < propertiesPaginationItem.length; i++) {
    propertiesPaginationItem[i].className =
      "interactive-map-properties-pagination-item";
  }

  this.className = "interactive-map-properties-pagination-item active";

  // Show the paginationLimit that correspond with the clicked
  // pagination link (click event not in this function)
  start = this.children[0].innerHTML * paginationLimit - paginationLimit;
  end = this.children[0].innerHTML * paginationLimit;
  pagination.start = start;
  pagination.end = end;

  currentPageNumber = this.children[0].innerHTML;

  paginationProperties(start, end, interactiveMapData.properties);
  paginationPropertiesDisableBtn(
    calculateRequiredPages(interactiveMapData.properties, paginationLimit)
  );
}
function paginationPropertiesDisableBtn(pagesRequired) {
  let paginationLeft = document.querySelector(
    ".interactive-map-properties-pagination .pagination-left"
  );
  let paginationRight = document.querySelector(
    ".interactive-map-properties-pagination .pagination-right"
  );
  let currentPageNumber = document.querySelector(
    ".interactive-map-properties-pagination-item.active a"
  ).innerHTML;

  if (paginationLeft && paginationRight) {
    if (currentPageNumber == 1) {
      paginationLeft.classList.add("disable");
    } else {
      paginationLeft.classList.remove("disable");
    }
    if (currentPageNumber == pagesRequired) {
      paginationRight.classList.add("disable");
    } else {
      paginationRight.classList.remove("disable");
    }
  }
}
function PropertiesPropertiesPreviousNext(e, action) {
  e.preventDefault();
  let start, end;
  let currentActivePage = document.querySelector(
    ".interactive-map-properties-pagination-item.active"
  );
  const pagesRequired = calculateRequiredPages(
    interactiveMapData.properties,
    paginationLimit
  );
  currentPageNumber = document.querySelector(
    ".interactive-map-properties-pagination-item.active a"
  ).innerHTML;

  if (action === "previous" && currentPageNumber > 1) {
    currentPageNumber--;
    currentActivePage.classList.remove("active");
    currentActivePage.previousElementSibling.classList.add("active");
    pagination.start = pagination.start - pagination.limit;
    pagination.end = pagination.end - pagination.limit;
  }
  if (action === "next" && currentPageNumber < pagesRequired) {
    currentPageNumber++;
    currentActivePage.classList.remove("active");
    currentActivePage.nextElementSibling.classList.add("active");
    pagination.start = pagination.start + pagination.limit;
    pagination.end = pagination.end + pagination.limit;
  }
  paginationPropertiesDisableBtn(
    calculateRequiredPages(interactiveMapData.properties, paginationLimit)
  );

  renderPropertiesList(interactiveMapData.properties, pagination);
}
// Properties Menu //
// Google Map - Interactive Map //
function bindMouseoverZoom(
  dataLayer,
  num,
  numInfo,
  map,
  name
) {
  if(dataLayer) {
    dataLayer.addListener("mouseover", (event) => {
      dataLayer.revertStyle();
      dataLayer.overrideStyle(event.feature, {
        strokeColor: colorCode.vividOrangeLight,
        fillColor: colorCode.vividOrangeDark,
        fillOpacity: 0.6,
        cursor: "pointer"
      });
    });
  }

  if(num) {
    num.addListener("mouseover", () => {
      num.labelClass = "map-label-circle map-label-circle-highlight";
      if(dataLayer) {
        dataLayer.forEach((layer) => {
          if (layer.j.name == name) {
            dataLayer.overrideStyle(layer, {
              strokeColor: colorCode.vividOrangeLight,
              fillColor: colorCode.vividOrangeDark,
              cursor: "pointer"
            });
          }
        });
      }
      if(numInfo) {
        numInfo.open(map, num);
      }
    });
  }
}
function bindMouseoutZoom(
  dataLayer,
  num,
  numInfo,
  map
) {
  if(dataLayer) {
    dataLayer.addListener("mouseout", () => {
      dataLayer.revertStyle();
    });
  }

  if(num) {
    num.addListener("mouseout", () => {
      // dataLayer.revertStyle();
      num.labelClass = "map-label-circle";

      if(numInfo) {
        numInfo.close(map, num);
      }
    });
  }
}
function bindClickEvent(dataLayer, countryPropertiesNum, map, bounds) {
  let offsetLng = 5;
  dataLayer.addListener("click", function (event) {
    map.setCenter({
      lat: bounds.getCenter().lat() - offsetLng,
      lng: bounds.getCenter().lng() - offsetLng,
    });
    map.setZoom(zoomLevel.LEVEL1);
  });

  countryPropertiesNum.addListener("click", function (event) {
    map.setCenter({
      lat: bounds.getCenter().lat() - offsetLng,
      lng: bounds.getCenter().lng() - offsetLng,
    });
    map.setZoom(zoomLevel.LEVEL1);
  });
}
function fetchStateGeoJson() {
  //----------- Fetch State Geo Json ---------------->
  fetch(stateGeoJson)
    .then((response) => response.json())
    .then((data) => {
      stateGeoData = data;
      setStateInfo();
    });
}
function fetchCitiesGeoJson() {

}
function setCountriesInfo() {
  //----------------------- countriesGeoJson ---------------------------------------//
  fetch(countriesGeoJso)
    .then((response) => response.json())
    .then((data) => {
      data.features.forEach((geoData) => {
        let countryName = geoData.properties.name;
        if (interactiveMapData.countryLayer.includes(countryName)) {
          let mapData = interactiveMapData.mapData.market.filter((data) => {
            return data.name == countryName;
          });
          let dataLayer = new google.maps.Data();
          let bounds = new google.maps.LatLngBounds();
          if (geoData.geometry.type == "Polygon") {
            geoData.geometry.coordinates[0].forEach((latlng) => {
              bounds.extend(new google.maps.LatLng(latlng[1], latlng[0]));
            });
          } else {
            geoData.geometry.coordinates.forEach((coordinate) => {
              coordinate[0].forEach((latlng) => {
                bounds.extend(new google.maps.LatLng(latlng[1], latlng[0]));
              });
            });
          }
          dataLayer.addGeoJson(geoData, { oWrap: true });
          dataLayer.setStyle(function (feature) {
            var strokeColor = colorCode.darkGray;
            var fillColor = colorCode.lightGray;
            let cursor = "default";
            let fillOpacity = 0.6;

            if (
              interactiveMapData.countryLayer.includes(
                feature.getProperty("name")
              )
            ) {
              fillColor = colorCode.darkBlue;
              cursor = "pointer";
            }
            return {
              fillColor: fillColor,
              fillOpacity: fillOpacity,
              strokeColor: strokeColor,
              strokeWeight: 0.5,
              cursor: cursor,
              zIndex: 2,
            };
          });
          dataLayer.setMap(map);

          if (mapData[0]) {
            countryPropertiesNum = new markerWithLabel.MarkerWithLabel({
              position: bounds.getCenter(),
              map: map,
              icon: " ",
              labelContent: mapData[0].propertiesNum.toString(),
              labelClass: "map-label-circle",
              labelAnchor: new google.maps.Point(
                mapData[0].circleAnchor[0],
                mapData[0].circleAnchor[1]
              ),
            });
            countryLabel = new markerWithLabel.MarkerWithLabel({
              position: bounds.getCenter(),
              map: map,
              icon: " ",
              labelContent: geoData.properties.name,
              labelClass: "country-label",
              labelAnchor: new google.maps.Point(
                mapData[0].labelAnchor[0],
                mapData[0].labelAnchor[1]
              ),
            });
            countryPropertiesNumInfo = new google.maps.InfoWindow({
              position: bounds.getCenter(),
              content: `<div class="map-label-circle-tooltip-wrapper">
                            <span></span>
                            <div class="map-label-circle-tooltip">
                                <h2>${mapData[0].name}</h2>
                                <div class="map-label-circle-tooltip-popup">
                                <div>
                                    <span>${mapData[0].popupContent.title[0]}</span>
                                    <span>${mapData[0].popupContent.unit[0]}${mapData[0].popupContent.aum}${mapData[0].popupContent.unit[1]}</span>
                                </div>
                                <div>
                                    <span>${mapData[0].popupContent.title[1]}</span>
                                    <span>${mapData[0].propertiesNum} ${mapData[0].popupContent.unit[2]}</span>
                                </div>
                                </div>
                            </div>
                            </div>`,
              pixelOffset: new google.maps.Size(
                mapData[0].tooltipOffset[0],
                mapData[0].tooltipOffset[1]
              ),
              disableAutoPan: true,
            });
            markersZoomLevel0.push(countryPropertiesNum);
            InfoWindowsLevel0.push(countryPropertiesNumInfo);
            geoLayersLevel0.push([
              {
                name: geoData.properties.name,
                layer: dataLayer
              }
            ]);

            bindMouseoverZoom(
              dataLayer,
              countryPropertiesNum,
              countryPropertiesNumInfo,
              map,
              countryName
            );
            bindMouseoutZoom(
              dataLayer,
              countryPropertiesNum,
              countryPropertiesNumInfo,
              map
            );
            bindClickEvent(
              dataLayer,
              countryPropertiesNum,
              map,
              bounds,
              countryName
            );
          }
        } else {
          let dataLayer = new google.maps.Data();
          dataLayer.addGeoJson(geoData, { noWrap: true });
          dataLayer.setStyle(function (feature) {
            var strokeColor =colorCode.darkGray;
            var fillColor = colorCode.lightGray;
            let cursor = "default";
            let fillOpacity = 0.6;

            if (
              interactiveMapData.countryLayer.includes(
                feature.getProperty("name")
              )
            ) {
              color = "#5F728B";
              fillColor = "#7285A1";
              cursor = "pointer";
            }
            return {
              fillColor: fillColor,
              fillOpacity: fillOpacity,
              strokeColor: strokeColor,
              strokeWeight: 0.5,
              cursor: cursor,
            };
          });
          dataLayer.setMap(map);
          geoLayersDefault.push(dataLayer);
        }
      });
    });
}
function showCountriesInfo() {
  geoLayersLevel0.forEach(function (geoLayerLevel0) {
    geoLayerLevel0[0].layer.setMap(map);
    geoLayerLevel0[0].layer.revertStyle();
  });
  markersZoomLevel0.forEach(function (markerZoomLevel0) {
    markerZoomLevel0.setMap(map);
  });
  InfoWindowsLevel0.forEach(function (InfoWindowLevel0) {
    InfoWindowLevel0.open();
  });
}
function removeCountriesInfo() {
  geoLayersLevel0.forEach(function (geoLayerLevel0) {
    geoLayerLevel0[0].layer.setMap(null);
  });
  markersZoomLevel0.forEach(function (markerZoomLevel0) {
    markerZoomLevel0.setMap(null);
  });
  InfoWindowsLevel0.forEach(function (InfoWindowLevel0) {
    InfoWindowLevel0.close();
  });
}
function setStateInfo() {
  stateGeoData.forEach((geoState) => {
    geoState.features.forEach((feature) => {
      let dataLayer = new google.maps.Data();
      let bounds = new google.maps.LatLngBounds();
      dataLayer.addGeoJson(feature, { noWrap: true });
      dataLayer.setStyle(function (feature) {
        var color = "#5F728B";
        var fillColor = "#7285A1";
        let cursor = "default";
        let fillOpacity = 0.6;

        return {
          fillColor: fillColor,
          fillOpacity: fillOpacity,
          strokeColor: color,
          strokeWeight: 0.5,
          cursor: cursor,
          zIndex: 5,
        };
      });
      if (feature.geometry.type == "Polygon") {
        feature.geometry.coordinates[0].forEach((latlng) => {
          bounds.extend(new google.maps.LatLng(latlng[1], latlng[0]));
        });
      } else {
        feature.geometry.coordinates.forEach((coordinate) => {
          coordinate[0].forEach((latlng) => {
            bounds.extend(new google.maps.LatLng(latlng[1], latlng[0]));
          });
        });
      }
      interactiveMapData.mapData.state.filter((res) => {
        if(res.name == feature.properties.name) {
          let stateMarker = new markerWithLabel.MarkerWithLabel({
            position: bounds.getCenter(),
            icon: " ",
            labelContent: res.propertiesNum.toString(),
            labelClass: "map-label-circle",
            // labelAnchor: new google.maps.Point(
            //   mapData[0].circleAnchor[0],
            //   mapData[0].circleAnchor[1]
            // ),
          });

          markersZoomLevel1.push(stateMarker);

          bindMouseoverZoom(
            false,
            stateMarker,
            false,
            map,
            res.name
          );
          bindMouseoutZoom(
            false,
            stateMarker,
            false,
            map
          );

          return true;
        }

        return false;
      });

      geoLayersLevel1.push([{
        name: geoState.name,
        layer: dataLayer
      }]);
    });
  });
}
function removeStateInfo() {
  geoLayersLevel1.forEach((geoLayerLevel1) => {
    geoLayerLevel1[0].layer.setMap(null);
  });
  markersZoomLevel1.forEach((markerZoomLevel1) => {
    markerZoomLevel1.setMap(null);
  });
}
function checkMapIdle() {
  let checkZoomLevel1 = true,
      checkZoomLevel2 = true,
      checkZoomLevel3 = true;

  map.addListener("idle", () => {
    let getZoomLevel = map.getZoom();
    let viewportBounds = map.getBounds();
    let isAnyLayerInsideBounds = false;

    
    
    ("Get ZoomLevel", getZoomLevel);
    var checkLayerBounds = function(layer) {
      let isLayerInsideBounds = true;
      layer.forEach(function(feature) {
        let featureBounds = new google.maps.LatLngBounds();

        // feature.layer.getGeometry().forEachLatLng(function(latlng) {
        //   featureBounds.extend(latlng);
        // });
        // if (!viewportBounds.contains(featureBounds.getCenter())) {
        //   isLayerInsideBounds = false;
        // }
        return isLayerInsideBounds;
      });
    }

    if (getZoomLevel >= zoomLevel.LEVEL1 && getZoomLevel <= zoomLevel.LEVEL2 && checkZoomLevel1) {
      checkZoomLevel1 = false;
      console.log("ZoomLevel1");
      removeCountriesInfo();
      geoLayersLevel1.forEach((geoLayerLevel1) => {
        geoLayerLevel1[0].layer.setMap(map);
      });
      markersZoomLevel1.forEach((markerZoomLevel1) => {
        markerZoomLevel1.setMap(map);
      });
      geoLayersDefault.forEach(function (geoLayerDefault) {
        geoLayerDefault.setMap(map);
      });
    } else if (getZoomLevel >= zoomLevel.LEVEL2) {
      console.log("ZoomLevel2");
      removeCountriesInfo();
      removeStateInfo();
      geoLayersDefault.forEach(function (geoLayerDefault) {
        geoLayerDefault.setMap(null);
      });
    } else if (getZoomLevel >= zoomLevel.LEVEL3) {
      console.log("ZoomLevel3");
    } else if(getZoomLevel == zoomLevel.LEVEL0 && getZoomLevel <= zoomLevel.LEVEL1) {
      checkZoomLevel1 = true;
      console.log("ZoomLevel0");
      removeStateInfo();
      showCountriesInfo();
      geoLayersDefault.forEach(function (geoLayerDefault) {
        geoLayerDefault.setMap(map);
      });
    }
  });
}
function centerChanged() {
  if (map.getCenter().lat() < -85) {
    google.maps.event.addListenerOnce(map, "center_changed", function () {
      map.setZoom(3);
    });

    map.setCenter(new google.maps.LatLng(-75, 0));
  } else if (map.getCenter().lat() > 85) {
    google.maps.event.addListenerOnce(map, "center_changed", function () {
      map.setZoom(3);
    });

    map.setCenter(new google.maps.LatLng(75, 0));
  }
}
function initMap() {
  //----------------------- Init Map ---------------------------------------//
  map = new google.maps.Map(interactiveMap, {
    zoom: minZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    center: defaultCenter,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    zoomControl: false,
    // scrollwheel: false,
    disableDoubleClickZoom: true,
    styles: interactiveMapData.mapStyleLayers,
    // restriction: {
    //   latLngBounds: {north: 85, south: -85, west: -70, east:280},
    //   strictBounds: true
    // }
  });

  fetchStateGeoJson();
  setCountriesInfo();
}
// Google Map - Interactive Map //
// Filter Functions //
function getZoomByBounds(map, bounds) {
  var MAX_ZOOM = map.mapTypes.get(map.getMapTypeId()).maxZoom || maxZoom;
  var MIN_ZOOM = map.mapTypes.get(map.getMapTypeId()).minZoom || minZoom;

  var ne = map.getProjection().fromLatLngToPoint(bounds.getNorthEast());
  var sw = map.getProjection().fromLatLngToPoint(bounds.getSouthWest());

  var worldCoordWidth = Math.abs(ne.x - sw.x);
  var worldCoordHeight = Math.abs(ne.y - sw.y);

  //Fit padding in pixels
  var FIT_PAD = 40;
  
  for (var zoom = MAX_ZOOM; zoom >= MIN_ZOOM; --zoom) {
      if (worldCoordWidth * (1 << zoom) + 2 * FIT_PAD < map.getDiv().offsetWidth &&
          worldCoordHeight * (1 << zoom) + 2 * FIT_PAD < map.getDiv().offsetHeight)
          return zoom;
  }
  return 0;
}
function filterCheckboxTemplate(template, filterCheckbox, filterCategory) {
  const templateClone = template.content.cloneNode(true);
  const filterCheckboxEl = templateClone.querySelector(
    ".interactive-map-filter-checkbox"
  );
  const filterCheckboxInput = templateClone.querySelector(
    ".interactive-map-filter-checkbox input"
  );
  const filterCheckboxLabel = templateClone.querySelector(
    ".interactive-map-filter-checkbox label"
  );
  filterCheckboxEl.style.display = "none";
  filterCheckboxEl.setAttribute("data-filter", filterCheckbox.id);
  filterCheckboxEl.setAttribute("data-category", filterCategory ? filterCategory : "all");
  filterCheckboxInput.setAttribute("id", filterCheckbox.id);
  filterCheckboxInput.setAttribute("name", filterCheckbox.id);
  filterCheckboxLabel.setAttribute("for", filterCheckbox.id);
  filterCheckboxLabel.innerHTML = filterCheckbox.name;

  return templateClone || null;
}
function displayfilterCheckbox(data, category) {
  const template = document.querySelector("#interactive-map-filter-template");

  data.forEach((filterCheckbox) => {
    const filterCheckboxItem = filterCheckboxTemplate(template, filterCheckbox, category);

    if (filterCheckboxItem) {
      const itemWrapper = filterCheckboxItem.querySelector(
        ".interactive-map-filter-checkbox"
      );
      filterListWrapper.append(itemWrapper);
    }
  });
}
function filterRemoveSelection(countryId) {
  map.setCenter(defaultCenter);
  map.setZoom(minZoom);

  geoLayersLevel0.forEach((geoLayerLevel0) => {
    if(geoLayerLevel0[0].name.toLowerCase().replace(' ', '-') == countryId) {
      geoLayerLevel0[0].layer.setStyle(() => {
        let fillColor = colorCode.darkBlue;;
        let strokeColor = colorCode.darkGray;
        let fillOpacity = 0.6;
  
        return {
          fillColor: fillColor,
          fillOpacity: fillOpacity,
          strokeColor: strokeColor,
          strokeWeight: 0.5,
          zIndex: 2,
        };
      });
    }
  });

  geoLayersLevel1.forEach((geoLayerLevel1) => {
    if(geoLayerLevel1[0].name.toLowerCase().replace(' ', '-') == countryId) {
      geoLayerLevel1[0].layer.setStyle(() => {
        let fillColor = colorCode.darkBlue;;
        let strokeColor = colorCode.darkGray;
        let fillOpacity = 0.6;
  
        return {
          fillColor: fillColor,
          fillOpacity: fillOpacity,
          strokeColor: strokeColor,
          strokeWeight: 0.5,
          zIndex: 2,
        };
      });
    }
  });
}
function filterSelectionAll() {
  geoLayersLevel0.forEach((geoLayerLevel0) => {
    geoLayerLevel0[0].layer.setStyle(() => {
      let fillColor = colorCode.vividOrangeLight;
      let strokeColor = colorCode.darkGray;
      let fillOpacity = 0.3;

      return {
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        strokeColor: strokeColor,
        strokeWeight: 0.5,
        zIndex: 2,
      };
    });
  });

  geoLayersLevel1.forEach((geoLayerLevel1) => {
    geoLayerLevel1[0].layer.setStyle(() => {
      let fillColor = colorCode.vividOrangeLight;
      let strokeColor = colorCode.darkGray;
      let fillOpacity = 0.3;

      return {
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        strokeColor: strokeColor,
        strokeWeight: 0.5,
        zIndex: 2,
      };
    });
  });
}
function filterRemoveAllSelection() {
  geoLayersLevel0.forEach((geoLayerLevel0) => {
    geoLayerLevel0[0].layer.setStyle(() => {
      let fillColor = colorCode.darkBlue;;
      let strokeColor = colorCode.darkGray;
      let fillOpacity = 0.6;

      return {
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        strokeColor: strokeColor,
        strokeWeight: 0.5,
        zIndex: 2,
      };
    });
  });

  geoLayersLevel1.forEach((geoLayerLevel1) => {
    geoLayerLevel1[0].layer.setStyle(() => {
      let fillColor = colorCode.darkBlue;;
      let strokeColor = colorCode.darkGray;
      let fillOpacity = 0.6;

      return {
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        strokeColor: strokeColor,
        strokeWeight: 0.5,
        zIndex: 2,
      };
    });
  });
}
function filterCountrySelection(countryId) {
  const geocoder = new google.maps.Geocoder();

  geoLayersLevel0.forEach((geoLayerLevel0) => {
    if(geoLayerLevel0[0].name.toLowerCase().replace(' ', '-') == countryId) {
      geocoder.geocode({ 'address': geoLayerLevel0[0].name }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          let bounds = results[0].geometry.bounds;
          let zoom = getZoomByBounds(map, bounds) + (zoomLevel.LEVEL1 - getZoomByBounds(map, bounds));

          geoLayersLevel1.filter((geoLayerLevel1) => {
            if(geoLayerLevel1[0].name.toLowerCase() == geoLayerLevel0[0].name.toLowerCase()) {
              geoLayerLevel1[0].layer.setStyle(() => {
                let fillColor = colorCode.vividOrangeLight;
                let strokeColor = colorCode.darkGray;
                let fillOpacity = 0.3;
        
                return {
                  fillColor: fillColor,
                  fillOpacity: fillOpacity,
                  strokeColor: strokeColor,
                  strokeWeight: 0.5,
                  zIndex: 2,
                };
              });
            }
          });

          geoLayerLevel0[0].layer.setStyle(() => {
            let fillColor = colorCode.vividOrangeLight;
            let strokeColor = colorCode.darkGray;
            let fillOpacity = 0.3;
    
            return {
              fillColor: fillColor,
              fillOpacity: fillOpacity,
              strokeColor: strokeColor,
              strokeWeight: 0.5,
              zIndex: 2,
            };
          });

          map.setCenter(results[0].geometry.location);
          map.setZoom(zoom);
        }
      });
    }
  });
}
function filterChartListTemplate(template, filterEl) { // Template for Chart List Label Selection
  const templateClone = template.content.cloneNode(true);
  const filterItemEl = templateClone.querySelector(
    ".interactive-map-chart-filter-list-item"
  );
  const filterItemLabel = templateClone.querySelector(
    ".interactive-map-chart-filter-list-label"
  );

  filterItemEl.setAttribute("data-category", filterEl.dataset.category);
  filterItemEl.setAttribute("data-filter", filterEl.dataset.filter);
  filterItemLabel.innerHTML = filterEl.innerText;

  return templateClone || null;
}
function addFilterChartList(filterEl) { // Append Chart List Label 
  const template = document.querySelector("#interactive-map-chart-filter-template");

  if(filterChartListInner) { 
    const filterItem = filterChartListTemplate(template, filterEl);

    if (filterItem) {
      const itemWrapper = filterItem.querySelector(
        ".interactive-map-chart-filter-list-item"
      );

      filterChartListInner.forEach((inner) => {
        const filterNextItem = inner.querySelector(".interactive-map-chart-filter-list-item-next");

        if(inner.dataset.category == itemWrapper.dataset.category) {
          itemWrapper.querySelector('.interactive-map-chart-filter-list-item-close').addEventListener('click', (e) => {
            for(let i = 0; i < filterCheckboxItem.length; i++) {
              if(filterCheckboxItem[i].dataset.category == e.target.parentElement.parentElement.dataset.category && 
                  filterCheckboxItem[i].dataset.filter == e.target.parentElement.parentElement.dataset.filter) {      
                fliterFunc(e, filterCheckboxItem[i]);
               }
            }
          });
          inner.querySelector(".interactive-map-chart-filter-list").append(itemWrapper);

          if(inner.querySelector(".interactive-map-chart-filter-list").scrollWidth > inner.offsetWidth && !filterNextItem) {
            let arrowList = document.createElement("div");
            arrowList.classList.add('interactive-map-chart-filter-list-item-next');
            arrowList.setAttribute('data-filter', inner.querySelector(".interactive-map-chart-filter-header-plus").dataset.filter);
            arrowList.addEventListener('click', (e) => {
              let dataFilter = e.target.dataset.filter;

              filterHeader.innerText = dataFilter.charAt(0).toUpperCase() + dataFilter.slice(1);
      
              if (filterOverlay.classList.contains("hide")) {
                filterOverlay.classList.remove("hide");
              }
        
              if(dataFilter) {
                for (let i = 0; i < filterCheckboxItem.length; i++) {
                  if(filterCheckboxItem[i].dataset.category == "all") {
                    filterCheckboxItem[i].style.display = "block";
                  } else {
                    if(filterCheckboxItem[i].dataset.category == dataFilter) {
                      filterCheckboxItem[i].style.display = "block";
                    } else {
                      filterCheckboxItem[i].style.display = "none";
                    }
                  }
                }
              }
            });
            inner.querySelector(".interactive-map-chart-filter-list").append(arrowList);
          }
        }
      })
    }
  }
}
function removeFilterChartList(filterEl) { // Remove Chart List Label 
  filterChartListInner.forEach(inner => {
    if(inner.dataset.category == filterEl.dataset.category) {
      let filterListItems = inner.querySelectorAll('.interactive-map-chart-filter-list-item');
      
      filterListItems.forEach(item => {
        if(item.dataset.filter == filterEl.dataset.filter) {
          item.remove();        
        }
      });
    }
  });
}
function clearAllFilter(e) { // Clear all filter and reset chart and map
  e.preventDefault;
  let chart = new google.visualization.PieChart(interactiveMapChart);
  resetChartDetails(chart);
}
function resetChartDetails(chart) { // Reset Chart details
  interactiveMapChartDetails.querySelectorAll('li').forEach(el => {
    el.classList.remove('deactivate');
    el.querySelector("span:nth-child(3)").innerText = el.dataset.all;
  });
  chart.draw(chartData, interactiveMapChartOption);
  chartPropertiesArr = [];
  interactiveMapChartLabel.innerText = totalChartProperties;
}
function updateChartDetails() {
  let tempTotalChartProperties = 0;

  chartPropertiesArr.forEach((properties, index) => {
    if(index > 0) {
      tempTotalChartProperties += properties[1];
      interactiveMapChartLabel.innerText = tempTotalChartProperties;
    }
  });

  interactiveMapChartDetails.querySelectorAll('li').forEach((el) => {
    let existProperties = chartPropertiesArr.filter(arr => arr[0].replace(" ", "-").toLowerCase() == el.dataset.filter);

    if(existProperties.length > 0) {
      el.classList.remove('deactivate');
      el.querySelector("span:nth-child(3)").innerText = existProperties[0][1];
    } else {
      el.classList.add('deactivate');
    }
  });
}
function filterChartDetails(filterEl, data, inputEl) { //Filter chart details & chart based on user interaction on checkbox
  let chart = new google.visualization.PieChart(interactiveMapChart);
  interactiveMapChartLabel.innerText = "";

  if(filterEl.dataset.filter == "all") {
    resetChartDetails(chart);
  } else {
    let filterData = data.filter((res) => filterEl.dataset.filter == res.name);

    // If input checked then check chart properties array total
    if(inputEl.checked) {
      console.log(filterData[0])
      // Check chart properties array total
      if(chartPropertiesArr.length > 0) {
        for(let i = 1;i < filterData[0].properties.length; i++) {
          let propertiesName = filterData[0].properties[i][0], 
              propertiesNum = filterData[0].properties[i][1];

          let existingIndex = chartPropertiesArr.slice(1).findIndex(element => element[0] === propertiesName);
          
          if (existingIndex !== -1) {
            // add the propertiesNum to the existing element
            chartPropertiesArr[existingIndex + 1][1] += propertiesNum;
          } else {
            // add a new element to the new array
            chartPropertiesArr.push([propertiesName, propertiesNum]);
          }
        }
      } else {
        chartPropertiesArr = filterData[0].properties;
      }

      updateChartDetails();
    } else {
      let filterCheckbox = filterListWrapper.querySelectorAll('input[type="checkbox"]');
      
      if(Array.from(filterCheckbox).every(checkbox => !checkbox.checked)) {
        resetChartDetails(chart);
      } else {
        for(let i = 1;i < filterData[0].properties.length; i++) {
          let propertiesName = filterData[0].properties[i][0], 
              propertiesNum = filterData[0].properties[i][1];

          let existingIndex = chartPropertiesArr.slice(1).findIndex(element => element[0] === propertiesName);

          if (existingIndex !== -1) {
            // add the propertiesNum to the existing element
            chartPropertiesArr[existingIndex + 1][1] -= propertiesNum;

            if(chartPropertiesArr[existingIndex + 1][1] <= 0) {
              chartPropertiesArr.splice(existingIndex + 1, 1);
            }
          }
        }

        updateChartDetails();
      }
    }

    chartData = google.visualization.arrayToDataTable(
      chartPropertiesArr.length > 0 ? chartPropertiesArr : interactiveMapData.chartData.properties
    );
    chart.draw(chartData, interactiveMapChartOption);
  }
}
function fliterFunc(e, el) { // Event Action for filter checkbox
  e.preventDefault();
  const filterEl = el ? el : e.target.parentElement;
  const inputEl = filterEl.querySelector("input");

  if (inputEl.checked) {
    inputEl.checked = false;

    if (filterEl.dataset.filter == "all") {
      for (let i = 0; i < filterCheckboxItem.length; i++) {
        filterCheckboxItem[i].querySelector("input").checked = false;
      }

      map.setZoom(minZoom);
      map.setCenter(defaultCenter);
      filterRemoveAllSelection();
    } else {
      removeFilterChartList(filterEl);
      filterRemoveSelection(filterEl.dataset.filter);
    }
  } else {
    inputEl.checked = true;

    if (filterEl.dataset.filter == "all") {
      for (let i = 0; i < filterCheckboxItem.length; i++) {
        filterCheckboxItem[i].querySelector("input").checked = true;
      }
      filterSelectionAll();
      map.setZoom(minZoom);
      map.setCenter(defaultCenter);  
    } else {
      addFilterChartList(filterEl);
      filterCountrySelection(filterEl.dataset.filter);
    }

    filterClearAll.forEach(el => {
      el.style.display = "block";
    });
  }

  filterChartDetails(filterEl, interactiveMapData.chartData.filter, inputEl);
}
// Filter Functions //
// Chart Function //
function interactiveChart() {
  let sectorColor = interactiveMapData.chartData.sectorColor;
  chartData = google.visualization.arrayToDataTable(
    interactiveMapData.chartData.properties
  );
  interactiveMapChartOption = {
    pieHole: 0.7,
    legend: "none",
    pieSliceText: "none",
    chartArea: {
      left: 16,
      top: 60,
      width: chartSize.XL,
      height: chartSize.XL,
    },
    height: chartSize.XL + 80,
    width: chartSize.XL + 80,
    backgroundColor: "#F8F8F8",
    tooltip: { isHtml: true },
    colors: sectorColor,
  };

  let chart = new google.visualization.PieChart(interactiveMapChart);
  google.visualization.events.addListener(chart, 'ready', () => {
    interactiveMapData.chartData.properties.forEach((properties, index) => {
      if(index > 0) {
        totalChartProperties += properties[1];
        interactiveMapChartLabel.innerText = totalChartProperties;
      }
    });

    interactiveMapData.chartData.properties.forEach((data, index) => {
      if (index > 0) {
        interactiveMapChartDetails.innerHTML += `<li data-filter="${data[0].replace(" ", "-").toLowerCase()}" data-all="${data[1]}"><span style="color: ${
          interactiveMapData.chartData.sectorColor[index - 1]
        };">•</span><span>${data[0]}</span> | <span>${data[1]}</span></li>`;
      }
    });
  });
  chart.draw(chartData, interactiveMapChartOption);
}

function interactiveChartDetails(chartData) {
  interactiveMapChartDetails.innerHTML = "";
  chartData.properties.forEach((data, index) => {
    if (index > 0) {
      interactiveMapChartDetails.innerHTML += `<li><span style="color: ${
        chartData.sectorColor[index - 1]
      };">•</span><span>${data[0]}</span> | <span>${data[1]}</span></li>`;
    }
  });
}
// Chart Function //
//----------------------- Functions ---------------------------------------//

//----------------------- Decare Functions -------------------------------//
if (interactiveMap) {
  initMap();
  checkMapIdle();
}

if (propertiesMenu) {
  if (
    calculateRequiredPages(interactiveMapData.properties, paginationLimit) > 1
  ) {
    displayPropertiesPagination(
      propertiesPaginationItem,
      currentPageNumber,
      calculateRequiredPages(interactiveMapData.properties, paginationLimit)
    );
    for (let i = 0; i < propertiesPaginationItem.length; i++) {
      propertiesPaginationItem[i].addEventListener(
        "click",
        paginationPropertiesFunc
      );
    }
  }
  renderPropertiesList(interactiveMapData.properties, pagination);

  propertiesMenuButton.addEventListener("mouseenter", function () {
    let isdesktop = isDesktop();

    if (isdesktop) {
      propertiesMenu.classList.add("interactive-map-properties-menu-open");
    }
  });

  propertiesMenu.addEventListener("mouseleave", function () {
    let isdesktop = isDesktop();

    if (isdesktop) {
      propertiesMenu.classList.remove("interactive-map-properties-menu-open");
    }
  });

  propertiesPaginationLeft.addEventListener("click", (event) =>
    PropertiesPropertiesPreviousNext(event, "previous")
  );
  propertiesPaginationRight.addEventListener("click", (event) =>
    PropertiesPropertiesPreviousNext(event, "next")
  );
}

if (interactiveMapChart) {
  google.charts.load("current", { packages: ["corechart"] });
  google.setOnLoadCallback(interactiveChart);

  const filterCheckboxAll = filterCheckboxTemplate(
    document.querySelector("#interactive-map-filter-template"),
    interactiveMapData.filterData.all
  );

  const itemAll = filterCheckboxAll.querySelector(
    ".interactive-map-filter-checkbox"
  );
  filterListWrapper.append(itemAll);

  filterBtns.forEach((filterBtn) => {
    const dataFilter = filterBtn.getAttribute("data-filter");
    
    if (dataFilter) {
      displayfilterCheckbox(interactiveMapData.filterData.filter[dataFilter], dataFilter);
      for (let i = 0; i < filterCheckboxItem.length; i++) {
        filterCheckboxItem[i]
          .querySelector("label")
          .addEventListener("click", fliterFunc);
      }
    }
    
    filterBtn.addEventListener("click", (event) => {
      filterHeader.innerText =
        dataFilter.charAt(0).toUpperCase() + dataFilter.slice(1);

      if (filterOverlay.classList.contains("hide")) {
        filterOverlay.classList.remove("hide");
      }

      if(dataFilter) {
        for (let i = 0; i < filterCheckboxItem.length; i++) {
          if(filterCheckboxItem[i].dataset.category == "all") {
            filterCheckboxItem[i].style.display = "block";
          } else {
            if(filterCheckboxItem[i].dataset.category == dataFilter) {
              filterCheckboxItem[i].style.display = "block";
            } else {
              filterCheckboxItem[i].style.display = "none";
            }
          }
        }
      }
    });
  });

  filterOverlayClose.addEventListener("click", () => {
    filterOverlay.classList.add("hide");
  });

  filterClearAll.forEach((el) => {
    el.addEventListener('click', clearAllFilter)
  });
}
//----------------------- Decare Functions -------------------------------//
