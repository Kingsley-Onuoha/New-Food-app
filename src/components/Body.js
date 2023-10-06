import React from "react"
import ReactDOM from "react-dom/client"
// import RestaurantCard from "./RestaurantCard"
// import { API_CDN } from "../utils/config"

const RestaurantCard = (props) =>{
    const {resData}= props
    const {cloudinaryImageId, name, avgRating, cuisines} = resData.info

    return(
        <div className="restaurant-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="logo" />
            <div className="details"> 
                <h2>{name}</h2>
                <div className="rating">
                    <div className="star"><i class="fa fa-star" aria-hidden="true"></i></div>
                    <h2>{avgRating}</h2>
                </div>
                <h3>
                    {cuisines?.join(" , ")}
                </h3>
            </div>
        </div>
    )
}


const API_CDN = [
  {
  "info": {
    "id": "43836",
    "name": "McDonald's",
    "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
    "locality": "MG Road",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      "restaurantId": "43836",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3100
    },
    "parentId": "630",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-07 02:45:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV3": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "5938",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Tasker Town",
    "areaName": "Shivaji Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Burgers",
      "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
      "restaurantId": "5938",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3100
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "slaString": "32 mins",
      "lastMileTravelString": "2.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-07 02:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "EVERY ITEM",
      "subHeader": "@ ₹129"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "347868",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "Cunnigham road",
    "areaName": "Vasanth Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 3.8,
    "feeDetails": {
      "restaurantId": "347868",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 4400
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 4400
    },
    "parentId": "547",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "27 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-07 03:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "23847",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
    "locality": "Rest House Road",
    "areaName": "Brigade Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      "restaurantId": "23847",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3100
    },
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 25,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 22:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "281469",
    "name": "Lavonne",
    "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
    "locality": "St. Marks Road",
    "areaName": "St. Marks Road",
    "costForTwo": "₹750 for two",
    "cuisines": [
      "Bakery",
      "Desserts"
    ],
    "avgRating": 4.6,
    "feeDetails": {
      "restaurantId": "281469",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3800
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3800
    },
    "parentId": "10530",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 0.6,
      "serviceability": "SERVICEABLE",
      "slaString": "21 mins",
      "lastMileTravelString": "0.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 22:40:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "69876",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "UB City",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Salads",
      "Snacks",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4,
    "feeDetails": {
      "restaurantId": "69876",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3100
    },
    "parentId": "2",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 0.6,
      "serviceability": "SERVICEABLE",
      "slaString": "30 mins",
      "lastMileTravelString": "0.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 23:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-ub-city-ashok-nagar-bangalore-69876",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "444178",
    "name": "Magnolia Bakery",
    "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
    "locality": "JK Plaza",
    "areaName": "Indiranagar",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Bakery",
      "Desserts",
      "Ice Cream"
    ],
    "avgRating": 4.6,
    "feeDetails": {
      "restaurantId": "444178",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 6900
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 6900
    },
    "parentId": "267303",
    "avgRatingString": "4.6",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 6.6,
      "serviceability": "SERVICEABLE",
      "slaString": "35 mins",
      "lastMileTravelString": "6.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-07 00:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/magnolia-bakery-jk-plaza-indiranagar-bangalore-444178",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "48230",
    "name": "Kanti Sweets",
    "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
    "locality": "Brigade Road",
    "areaName": "Brigade Road",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Sweets"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
      "restaurantId": "48230",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3800
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3800
    },
    "parentId": "4700",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 2,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "2.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kanti-sweets-brigade-road-bangalore-48230",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "312660",
    "name": "Samosa Party",
    "cloudinaryImageId": "ixgxvfu6ggvw1w1awgr1",
    "locality": "Brigade Road",
    "areaName": "Brigade Road",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Fast Food",
      "Snacks",
      "Beverages",
      "Chaat",
      "North Indian",
      "Street Food",
      "Sweets",
      "Desserts",
      "Punjabi",
      "Bakery"
    ],
    "avgRating": 4.6,
    "feeDetails": {
      "restaurantId": "312660",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3600
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3600
    },
    "parentId": "6364",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 2.4,
      "serviceability": "SERVICEABLE",
      "slaString": "29 mins",
      "lastMileTravelString": "2.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 22:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/samosa-party-brigade-road-bangalore-312660",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "51835",
    "name": "Aubree",
    "cloudinaryImageId": "6a7973d432c533933de71326a0a3dde9",
    "locality": "Timmaiah Road",
    "areaName": "Shivajinagar",
    "costForTwo": "₹700 for two",
    "cuisines": [
      "Desserts",
      "Bakery"
    ],
    "avgRating": 4.4,
    "veg": true,
    "feeDetails": {
      "restaurantId": "51835",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3800
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3800
    },
    "parentId": "3807",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "slaString": "27 mins",
      "lastMileTravelString": "2.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 21:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "D",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹999",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/aubree-timmaiah-road-shivajinagar-bangalore-51835",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "354531",
    "name": "Burger Seigneur",
    "cloudinaryImageId": "t8qo8yuimdpduzbozybj",
    "locality": "St. Marks Road",
    "areaName": "St. Marks Road",
    "costForTwo": "₹1200 for two",
    "cuisines": [
      "American",
      "Continental",
      "Beverages"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      "restaurantId": "354531",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3800
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3800
    },
    "parentId": "12095",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 1.6,
      "serviceability": "SERVICEABLE",
      "slaString": "33 mins",
      "lastMileTravelString": "1.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-07 01:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹899",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-seigneur-st-marks-road-bangalore-354531",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "342643",
    "name": "The Pizza Bakery",
    "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
    "locality": "Church Street",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹700 for two",
    "cuisines": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Continental"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      "restaurantId": "342643",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3800
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3800
    },
    "parentId": "11108",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 1.5,
      "serviceability": "SERVICEABLE",
      "slaString": "27 mins",
      "lastMileTravelString": "1.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 23:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/the-pizza-bakery-church-street-ashok-nagar-bangalore-342643",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "53503",
    "name": "Brik Oven",
    "cloudinaryImageId": "49352a71022a5b08a8361306ba253892",
    "locality": "Church Street",
    "areaName": "Church Street",
    "costForTwo": "₹700 for two",
    "cuisines": [
      "Italian",
      "Pizzas",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      "restaurantId": "53503",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3800
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3800
    },
    "parentId": "7389",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 1.6,
      "serviceability": "SERVICEABLE",
      "slaString": "33 mins",
      "lastMileTravelString": "1.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 23:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/brik-oven-church-street-bangalore-53503",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "105167",
    "name": "Bhartiya Jalpan",
    "cloudinaryImageId": "lpikismf7ulkpknsbw2h",
    "locality": "Tasker Town",
    "areaName": "Commercial Street",
    "costForTwo": "₹270 for two",
    "cuisines": [
      "North Indian",
      "Sweets",
      "Desserts",
      "Chaat"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
      "restaurantId": "105167",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3700
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3700
    },
    "parentId": "7518",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 33,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "33 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 21:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/bhartiya-jalpan-tasker-town-commercial-street-bangalore-105167",
    "type": "WEBLINK"
  },
},
{
  "info": {
    "id": "322507",
    "name": "Faasos - Wraps & Rolls",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Lamington Road",
    "areaName": "Byculla",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.1,
    "feeDetails": {
      "restaurantId": "322507",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 3200
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 3200
    },
    "parentId": "21809",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "21 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-06 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-lamington-road-byculla-mumbai-322507",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "352502",
    "name": "Nino Burgers",
    "cloudinaryImageId": "9e9bd2c9ca7be7c08e88ccf1eeccfb1e",
    "locality": "Chowpatty",
    "areaName": "Chowpatty",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Burgers",
      "Fast Food",
      "American"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      "restaurantId": "352502",
      "fees": [
        {
          "name": "BASE_DISTANCE",
          "fee": 4100
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      "totalFee": 4100
    },
    "parentId": "12333",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-10-07 04:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/nino-burgers-chowpatty-mumbai-352502",
    "type": "WEBLINK"
  }
}
]


const Body = () =>{
    return(
        <div className="body">
                <h1>Restaurants with online food delivery in Lagos</h1>
                <div className="body-restaurant">{API_CDN.map((restaurant)=>(<RestaurantCard resData={restaurant}/>))}</div>
                
        </div>
    )
}
export default Body