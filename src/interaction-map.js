//----------------------- Defined Variables -------------------------------//
let interactiveMapData = (window.dataInteractiveMap = {
  mapStyle: [
    // {
    //   featureType: "all",
    //   elementType: "geometry.fill",
    //   stylers: [
    //     {
    //       color: "#FBFBFB",
    //     },
    //   ],
    // },
    { elementType: "geometry", stylers: [{ color: "#7887A0" }] },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#D99562" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#f5f1e6" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#fdfcf8" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#f8c967" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#e9bc62" }],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [{ color: "#e98d58" }],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [{ color: "#db8555" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#806b63" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [{ color: "#7EAE72" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ae9e90" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#7887A0" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#a5b076" }],
    },
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#AEE8EF",
        },
      ],
    },
  ],
  mapDefaultStyle: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "##ABDBE2",
        },
      ],
    },
  ],
  mapStyleSecondLayer: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#f3f3f3",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#f3f3f3",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#2e2e2e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#828282",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
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
    "Singapore"
  ],
  mapData: [
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
      propertiesNum: 23,
    },{
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
      propertiesNum: 23,
    },
  ],
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
    total: 867,
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
    data: [
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
    properties: [
      {
        name: "",
      },
    ],
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
  ".interactive-map-chart-wrapper .interactiveMapChartTitleLabel"
);
const propertiesListingWrapper = document.querySelector(
  ".interactive-map-properties-content-wrapper"
);
const propertiesPaginationItem = document.getElementsByClassName(
  "interactive-map-properties-pagination-item"
);
const propertiesPaginationLeft = document.querySelector(
  ".interactive-map-properties-pagination .pagination-left"
);
const propertiesPaginationRight = document.querySelector(
  ".interactive-map-properties-pagination .pagination-right"
);
const BREAKPOINTS = {
  MD: 600,
  LG: 992,
  XL: 1366,
};
const minZoom = 2.5;
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
let map;
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
//----------------------- Defined Variables -------------------------------//
//*************************************************************************//
//----------------------- Functions ---------------------------------------//
function getMediaQuery(property, value) {
  return `(${property}: ${value}px)`;
}
function isDesktop() {
  return window.matchMedia(getMediaQuery("min-width", BREAKPOINTS.LG)).matches;
}
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
function bindMouseover(
  dataLayer,
  countryPropertiesNum,
  countryPropertiesNumInfo,
  map,
  countryName
) {
  dataLayer.addListener("mouseover", (event) => {
    dataLayer.revertStyle();
    dataLayer.overrideStyle(event.feature, {
      strokeColor: "#F8721E",
      fillColor: "#F8721E",
    });
  });

  countryPropertiesNum.addListener("mouseover", () => {
    countryPropertiesNum.labelClass = "country-circle country-circle-highlight";
    dataLayer.forEach((layer) => {
      if (layer.j.name == countryName) {
        dataLayer.overrideStyle(layer, {
          strokeColor: "#F8721E",
          fillColor: "#F8721E",
        });
      }
    });
    countryPropertiesNumInfo.open(map, countryPropertiesNum);
  });
}
function bindMouseout(
  dataLayer,
  countryPropertiesNum,
  countryPropertiesNumInfo,
  map
) {
  dataLayer.addListener("mouseout", () => {
    dataLayer.revertStyle();
  });

  countryPropertiesNum.addListener("mouseout", () => {
    dataLayer.revertStyle();
    countryPropertiesNum.labelClass = "country-circle";
    countryPropertiesNumInfo.close(map, countryPropertiesNum);
  });
}
function bindClickEvent(dataLayer, countryPropertiesNum, map, bounds) {
  let offsetLng = 5;
  dataLayer.addListener("click", function (event) {
    map.setCenter({lat: bounds.getCenter().lat() - offsetLng, lng: bounds.getCenter().lng() - offsetLng});
    map.setZoom(zoomLevel.LEVEL1);
  });

  countryPropertiesNum.addListener("click", function (event) {
    map.setCenter({lat: bounds.getCenter().lat() - offsetLng, lng: bounds.getCenter().lng() - offsetLng});
    map.setZoom(zoomLevel.LEVEL1);
  });
}
function getZoomByBounds(map, bounds) {
  var MAX_ZOOM = map.mapTypes.get(map.getMapTypeId()).maxZoom || 21;
  var MIN_ZOOM = map.mapTypes.get(map.getMapTypeId()).minZoom || 0;

  var ne = map.getProjection().fromLatLngToPoint(bounds.getNorthEast());
  var sw = map.getProjection().fromLatLngToPoint(bounds.getSouthWest());

  var worldCoordWidth = Math.abs(ne.x - sw.x);
  var worldCoordHeight = Math.abs(ne.y - sw.y);

  //Fit padding in pixels
  var FIT_PAD = 40;

  for (var zoom = MAX_ZOOM; zoom >= MIN_ZOOM; --zoom) {
    if (
      worldCoordWidth * (1 << zoom) + 2 * FIT_PAD < $(map.getDiv()).width() &&
      worldCoordHeight * (1 << zoom) + 2 * FIT_PAD < $(map.getDiv()).height()
    )
      return zoom;
  }
  return 0;
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
        let mapData = interactiveMapData.mapData.filter((data) => {
          return data.name == countryName;
        });
        let bounds = new google.maps.LatLngBounds();
        let countryLabelStyle = {
          text: geoData.properties.name,
          fontSize: "16px",
          fontWeight: "bold",
          color: "#222",
          textStrokeColor: "#000",
          textStrokeWeight: 2,
          textTransform: "uppercase",
        };
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
        let dataLayer = new google.maps.Data();
        dataLayer.addGeoJson(geoData, { oWrap: true });
        dataLayer.setStyle(function (feature) {
          var color = "#707070";
          var fillColor = "#FBFBFB";
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
            strokeColor: color,
            strokeWeight: 0.5,
            cursor: cursor,
            zIndex: 2,
          };
        });
        dataLayer.setMap(map);

        if(mapData[0]) {
          countryPropertiesNum = new markerWithLabel.MarkerWithLabel({
            position: bounds.getCenter(),
            map: map,
            icon: " ",
            labelContent: mapData[0].propertiesNum.toString(),
            labelClass: "country-circle",
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
            content: `<div class="country-circle-tooltip-wrapper">
                            <span></span>
                            <div class="country-circle-tooltip">
                                <h2>${mapData[0].name}</h2>
                                <div class="country-circle-tooltip-popup">
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
          markersZoomLevel0.push(countryLabel);
          markersZoomLevel0.push(countryPropertiesNum);
          InfoWindowsLevel0.push(countryPropertiesNumInfo);
        
          geoLayersLevel0.push(dataLayer);
        
          bindMouseover(
            dataLayer,
            countryPropertiesNum,
            countryPropertiesNumInfo,
            map,
            countryName
          );
          bindMouseout(
            dataLayer,
            countryPropertiesNum,
            countryPropertiesNumInfo,
            map
          );
          bindClickEvent(dataLayer, countryPropertiesNum, map, bounds, countryName);
        }
      } else {
        dataLayer = new google.maps.Data();
        dataLayer.addGeoJson(geoData, { noWrap: true });
        dataLayer.setStyle(function (feature) {
          var color = "#707070";
          var fillColor = "#FBFBFB";
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
            strokeColor: color,
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
  geoLayersLevel0.forEach(function(geoLayerLevel0) {
    geoLayerLevel0.setMap(map);
    geoLayerLevel0.revertStyle();
  });
  markersZoomLevel0.forEach(function(markerZoomLevel0) {
    markerZoomLevel0.setMap(map);
  });
  InfoWindowsLevel0.forEach(function(InfoWindowLevel0) {
    InfoWindowLevel0.open();
  });
}
function removeCountriesInfo() {
  geoLayersLevel0.forEach(function(geoLayerLevel0) {
    geoLayerLevel0.setMap(null)
  });
  markersZoomLevel0.forEach(function(markerZoomLevel0) {
    markerZoomLevel0.setMap(null);
  });
  InfoWindowsLevel0.forEach(function(InfoWindowLevel0) {
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
          zIndex: 2,
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
      // let stateLabel = new markerWithLabel.MarkerWithLabel({
      //   position: bounds.getCenter(),
      //   icon: " ",
      //   labelContent: feature.properties.name,
      //   labelClass: "state-label",
      // });
      // markersZoomLevel1.push(stateLabel);
      geoLayersLevel1.push(dataLayer);
    });
  });
}
function removeStateInfo() {
  geoLayersLevel1.forEach((geoLayerLevel1) => {
    geoLayerLevel1.setMap(null);
  });
  // markersZoomLevel1.forEach((markerZoomLevel1) => {
  //   markerZoomLevel1.setMap(null);
  // });
}
function displayZoomLevel() {
  map.addListener('zoom_changed', function(event) {
    let getZoomLevel = map.getZoom();

    if(getZoomLevel >= zoomLevel.LEVEL1 && getZoomLevel <= zoomLevel.LEVEL2) {
      console.log("ZoomLevel1")
      removeCountriesInfo();
      geoLayersLevel1.forEach((geoLayerLevel1) => {
        geoLayerLevel1.setMap(map);
      });
      markersZoomLevel1.forEach((markerZoomLevel1) => {
        markerZoomLevel1.setMap(map);
      });
    } else if(getZoomLevel >= zoomLevel.LEVEL2) {
      console.log("ZoomLevel2")
      removeCountriesInfo();
      removeStateInfo();
      // console.log(map);
      geoLayersDefault.forEach(function(geoLayerDefault) {
        geoLayerDefault.setMap(null);
      });
      map.setStyle(interactiveMapData.mapDefaultStyle);
    } else if(getZoomLevel >= zoomLevel.LEVEL3) {
      console.log("ZoomLevel3")
    } else {
      console.log("ZoomLevel0")
      removeStateInfo();
      showCountriesInfo();
    }
  });
}
function centerChanged() {

  if (map.getCenter().lat() < -85) {

      google.maps.event.addListenerOnce(map, 'center_changed', function () {

          map.setZoom(3);

      });

      map.setCenter(new google.maps.LatLng(-75, 0));

  } else if (map.getCenter().lat() > 85) {

      google.maps.event.addListenerOnce(map, 'center_changed', function () {

          map.setZoom(3);

      });

      map.setCenter(new google.maps.LatLng(75, 0));

  }

}
function initMap() {
  //----------------------- Init Map ---------------------------------------//
  map = new google.maps.Map(interactiveMap, {
    zoom: zoomLevel.LEVEL1,
    minZoom: minZoom,
    maxZoom: maxZoom,
    center: { lat: 1.290270, lng: 103.851959 },
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    zoomControl: false,
    // scrollwheel: false,
    disableDoubleClickZoom: true,
    styles: interactiveMapData.mapStyle,
    // restriction: {
    //   latLngBounds: {north: 85, south: -85, west: -70, east:280},
    //   strictBounds: true
    // }
  });

  // fetchStateGeoJson();
  // setCountriesInfo();
}
//----------------------- Functions ---------------------------------------//
//*************************************************************************//
//----------------------- Decare Functions -------------------------------//
if (interactiveMap) {
  initMap();
  displayZoomLevel();
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
  const interactiveMapChartDetails = document.querySelector(
    ".interactiveMapChartDetails ul"
  );
  const filterBtns = document.querySelectorAll(".interactive-map-chart-filter-header-plus");
  const filterOverlay = document.querySelector(".interactive-map-chart-filter-overlay");
  const filterOverlayClose = document.querySelector(".interactive-map-chart-filter-close");
  
  google.charts.load("current", { packages: ["corechart"] });
  google.setOnLoadCallback(interactiveChart);

  function interactiveChart() {
    var sectorColor = interactiveMapData.chartData.sectorColor;
    var chartData = google.visualization.arrayToDataTable(
      interactiveMapData.chartData.data
    );
    var interactiveMapChartOption = {
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

    var chart = new google.visualization.PieChart(interactiveMapChart);
    chart.draw(chartData, interactiveMapChartOption);
    interactiveMapChartLabel.innerText = interactiveMapData.chartData.total;
  }

  function interactiveChartDetails() {
    interactiveMapData.chartData.data.forEach((data, index) => {
      if (index > 0) {
        interactiveMapChartDetails.innerHTML += `<li><span style="color: ${
          interactiveMapData.chartData.sectorColor[index - 1]
        };">•</span><span>${data[0]}</span> | <span>${data[1]}</span></li>`;
      }
    });
  }
  interactiveChartDetails();

  filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener("click", () => {
      if(filterOverlay.classList.contains("hide")) {
        filterOverlay.classList.remove('hide');
      }
    });
  });
  filterOverlayClose.addEventListener("click", () => {
    filterOverlay.classList.add('hide');
  });
}
//----------------------- Decare Functions -------------------------------//