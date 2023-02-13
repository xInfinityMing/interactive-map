//-------------- Defined Variables -----------------------------/ 
let interactiveMapData = (window.dataInteractiveMap = {
  mapStyle: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#FBFBFB",
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
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#F3FBFC",
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
const paginationLimit = 6;
const pagination = {
  limit: paginationLimit,
  start: 0,
  end: paginationLimit,
};
let currentPageNumber = 1;

const geojsonUrl = "/assets/countries.geojson";
let windowWidth = window.outerWidth;
const minZoom = 2.2;
const maxZoom = 20;
const mapZoom = {
  MD: 2,
  LG: 2,
  XL:
    windowWidth / 800 > maxZoom
      ? maxZoom
      : windowWidth / 800 < minZoom
      ? minZoom
      : windowWidth / 800,
  DEFAULT: minZoom,
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
//-------------- Defined Variables -----------------------------/ 

//-------------- Functions -----------------------------/ 
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

function initMap() {
  let dataLayer;

  map = new google.maps.Map(interactiveMap, {
    zoom: minZoom,
    center: { lat: 1.3521, lng: 103.8198 },
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    zoomControl: false,
    // scrollwheel: false,
    disableDoubleClickZoom: true,
    styles: interactiveMapData.mapStyle,
    // restriction: {
    //   latLngBounds: {north: 85, south: -85, west: -100, east:305},
    //   strictBounds: true
    // }
  });
  dataLayer = new google.maps.Data();
  dataLayer.loadGeoJson(geojsonUrl);
  dataLayer.setStyle(function (feature) {
    var color = "#707070";
    var fillColor = "#FBFBFB";
    let cursor = "default";
    let fillOpacity = 0.6;

    if (
      interactiveMapData.countryLayer.includes(feature.getProperty("name"))
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
  dataLayer.forEach((layer) => {
      console.log(layer)
      // if (layer.j.name == countryName) {
      //   dataLayer.overrideStyle(layer, {
      //     strokeColor: "#F8721E",
      //     fillColor: "#F8721E",
      //   });
      // }
  });
  // console.log(dataLayer);
  // dataLayer.addListener('mouseover', function(event) {
  //   if (interactiveMapData.countryLayer.includes(event.feature.getProperty('name'))) {
  //     dataLayer.revertStyle();
  //     dataLayer.overrideStyle(event.feature, {
  //       strokeColor: '#F8721E', fillColor: '#F8721E'
  //     });
  //   }
  // });

  // dataLayer.addListener('mouseout', function(event) {
  //   dataLayer.revertStyle();
  // });

  dataLayer.setMap(map);

  fetch(geojsonUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      data.features.forEach((geoData) => {
        let countryName = geoData.properties.name;

        if (interactiveMapData.countryLayer.includes(countryName)) {
          let countryLabel, countryPropertiesNum, countryPropertiesNumInfo;

          interactiveMapData.mapData.forEach((mapData) => {
            if (mapData.name == countryName) {
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
                    bounds.extend(
                      new google.maps.LatLng(latlng[1], latlng[0])
                    );
                  });
                });
              }

              countryPropertiesNum = new markerWithLabel.MarkerWithLabel({
                position: bounds.getCenter(),
                map: map,
                icon: " ",
                labelContent: mapData.propertiesNum.toString(),
                labelClass: "country-circle",
                labelAnchor: new google.maps.Point(
                  mapData.circleAnchor[0],
                  mapData.circleAnchor[1]
                ),
              });
              countryLabel = new markerWithLabel.MarkerWithLabel({
                position: bounds.getCenter(),
                map: map,
                icon: " ",
                labelContent: geoData.properties.name,
                labelClass: "country-label",
                labelAnchor: new google.maps.Point(
                  mapData.labelAnchor[0],
                  mapData.labelAnchor[1]
                ),
              });

              countryPropertiesNumInfo = new google.maps.InfoWindow({
                position: bounds.getCenter(),
                content: `<div class="country-circle-tooltip-wrapper">
                          <span></span>
                          <div class="country-circle-tooltip">
                              <h2>${mapData.name}</h2>
                              <div class="country-circle-tooltip-popup">
                              <div>
                                  <span>${mapData.popupContent.title[0]}</span>
                                  <span>${mapData.popupContent.unit[0]}${mapData.popupContent.aum}${mapData.popupContent.unit[1]}</span>
                              </div>
                              <div>
                                  <span>${mapData.popupContent.title[1]}</span>
                                  <span>${mapData.propertiesNum} ${mapData.popupContent.unit[2]}</span>
                              </div>
                              </div>
                          </div>
                          </div>`,
                pixelOffset: new google.maps.Size(
                  mapData.tooltipOffset[0],
                  mapData.tooltipOffset[1]
                ),
                disableAutoPan: true,
              });

              countryPropertiesNum.addListener("click", function (event) {
                console.log("click");
              });

              countryPropertiesNum.addListener("mouseover", function (event) {
                countryPropertiesNum.labelClass =
                  "country-circle country-circle-highlight";
                dataLayer.forEach((layer) => {
                  console.log(layer)
                  if (layer.j.name == countryName) {
                    dataLayer.overrideStyle(layer, {
                      strokeColor: "#F8721E",
                      fillColor: "#F8721E",
                    });
                  }
                });
                countryPropertiesNumInfo.open(map, countryPropertiesNum);
              });

              countryPropertiesNum.addListener("mouseout", function (event) {
                countryPropertiesNum.labelClass = "country-circle";
                dataLayer.revertStyle();

                countryPropertiesNumInfo.close(map, countryPropertiesNum);
              });
            }
          });
        }
      });
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
//-------------- Functions -----------------------------/ 

if (interactiveMap) {
  let zoom = mapZoom.DEFAULT;
  let view = mapView.DEFAULT;

  if (windowWidth > BREAKPOINTS.XL) {
    zoom = mapZoom.XL;
    view = mapView.XL;
  } else {
    zoom = mapZoom.DEFAULT;
    view = mapView.DEFAULT;
  }

  initMap();
  // let highlight;
  // let clearHighlight = function() {
  //   if (highlight) {
  //     highlight.setStyle(selectedStyle);
  //   }
  //   highlight = null;
  // };

  // let countryLayer360 = [
  //   'United States',
  //   'Canada',
  //   'Mexico',
  //   'Colombia',
  //   'Peru',
  //   'Brazil',
  //   'Bolivia',
  //   'Chile',
  //   'Paraguay',
  //   'Argentina',
  //   'Solomon Islands',
  //   'Uruguay',
  //   'Iceland',
  //   'Greenland',
  //   'Colombia',
  //   'Venezuela',
  //   'Ecuador',
  //   'Bermuda',
  //   'Guyana',
  //   'Trinidad and Tobago',
  //   'Suriname',
  //   'French Guiana',
  //   'Panama',
  //   'Costa Rica',
  //   'Nicaragua',
  //   'El Salvador',
  //   'Honduras',
  //   'Guatemala',
  //   'Belize',
  //   'Cuba',
  //   'Jamaica',
  //   'Haiti',
  //   'Dominican Republic',
  //   'Puerto Rico',
  //   'The Bahamas',
  //   'Russia',
  //   'Falkland Islands'
  // ];

  // }
  // console.log(zoom)
  // console.log(view)

  // L.rectangle([[-90, -360], [90, 360]], {
  //     color: '#F3FBFC',
  //     fillColor: '#F3FBFC',
  //     opacity: 1,
  //     fillOpacity: 1
  // }).addTo(map);

  // window.addEventListener('resize', function(event){
  //   windowWidth = window.outerWidth;
  //   mapZoom = {
  //     MD: 2,
  //     LG: 2,
  //     XL: windowWidth / 800 > maxZoom ? maxZoom : windowWidth / 800 < minZoom ? minZoom : windowWidth / 800,
  //     DEFAULT: 2
  //   };
  //   mapView = {
  //     MD: 2,
  //     LG: 2,
  //     XL: [35, 70],
  //     DEFAULT: [50, 90]
  //   };

  //   if(windowWidth > BREAKPOINTS.XL) {
  //     zoom =  mapZoom.XL
  //     view = mapView.XL
  //     map.setZoom(zoom);
  //     map.setView(view);
  //   } else {
  //     zoom =  mapZoom.DEFAULT
  //     view = mapView.DEFAULT
  //     map.setZoom(zoom);
  //     map.setView(view);
  //   }
  //   console.log(zoom)
  //   console.log(view)
  // });
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
}
