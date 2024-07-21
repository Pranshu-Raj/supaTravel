import { GoogleGenerativeAI } from "@google/generative-ai";

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

export const apiKey = import.meta.env.VITE_API_KEY;
export const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});


const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with Hotel Name, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing rating, Time travel each of the loaction for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50 - $100 per night",\n      "imageUrl": "https://www.theDlasvegas.com/media/images/hero-images/hero-2.jpg",\n      "geoCoordinates": "36.1695, -115.1439",\n      "rating": 4,\n      "description": "A budget-friendly casino hotel in downtown Las Vegas, featuring a vibrant atmosphere, live entertainment, and a variety of dining options."\n    },\n    {\n      "name": "The Golden Nugget Las Vegas",\n      "address": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$70 - $150 per night",\n      "imageUrl": "https://www.goldennugget.com/las-vegas/media/images/hero-images/hero-3.jpg",\n      "geoCoordinates": "36.1676, -115.1425",\n      "rating": 4.5,\n      "description": "A historic casino hotel known for its luxurious amenities, including a world-class aquarium and a thrilling waterslide."\n    },\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40 - $80 per night",\n      "imageUrl": "https://www.circuscircus.com/media/images/hero-images/hero-1.jpg",\n      "geoCoordinates": "36.1134, -115.1715",\n      "rating": 3.5,\n      "description": "A family-friendly hotel with a circus theme, offering affordable rooms, a large casino, and amusement park attractions."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "schedule": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian-friendly street filled with live music, street performers, and a dazzling light show.",\n          "imageUrl": "https://www.fremontstreetexperience.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1695, -115.1439",\n          "ticketPricing": "Free",\n          "rating": 4.5\n        },\n        {\n          "time": "12:00 PM",\n          "placeName": "Heart Attack Grill",\n          "placeDetails": "A unique restaurant known for its outrageous burgers and "triple bypass" fries.",\n          "imageUrl": "https://www.heartattackgrill.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1676, -115.1425",\n          "ticketPricing": "$10 - $20",\n          "rating": 4\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "Neon Museum",\n          "placeDetails": "A museum showcasing a collection of iconic neon signs from Las Vegas\' history.",\n          "imageUrl": "https://www.neonmuseum.org/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1721, -115.1464",\n          "ticketPricing": "$20",\n          "rating": 4.5\n        },\n        {\n          "time": "5:00 PM",\n          "placeName": "Downtown Container Park",\n          "placeDetails": "A unique shopping and entertainment complex built from shipping containers.",\n          "imageUrl": "https://www.downtowncontainerpark.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1676, -115.1425",\n          "ticketPricing": "Free",\n          "rating": 4\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "A stunning floral display featuring elaborate themes and seasonal changes.",\n          "imageUrl": "https://www.bellagio.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1146, -115.1721",\n          "ticketPricing": "Free",\n          "rating": 5\n        },\n        {\n          "time": "12:00 PM",\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "An outdoor shopping, dining, and entertainment district with a giant observation wheel.",\n          "imageUrl": "https://www.linq.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1078, -115.1711",\n          "ticketPricing": "Free",\n          "rating": 4\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "High Roller Observation Wheel",\n          "placeDetails": "A massive Ferris wheel offering breathtaking views of the Las Vegas Strip.",\n          "imageUrl": "https://www.caesars.com/linq/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1078, -115.1711",\n          "ticketPricing": "$30",\n          "rating": 4.5\n        },\n        {\n          "time": "5:00 PM",\n          "placeName": "Fountains of Bellagio",\n          "placeDetails": "A mesmerizing water and light show synchronized to music.",\n          "imageUrl": "https://www.bellagio.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.1146, -115.1721",\n          "ticketPricing": "Free",\n          "rating": 5\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Hoover Dam",\n          "placeDetails": "A historic dam and engineering marvel located just a short drive from Las Vegas.",\n          "imageUrl": "https://www.usbr.gov/lc/hooverdam/images/hoover-dam-aerial-view-lg.jpg",\n          "geoCoordinates": "36.0044, -114.9305",\n          "ticketPricing": "$30",\n          "rating": 5\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "Seven Magic Mountains",\n          "placeDetails": "An art installation featuring colorful, stacked boulders in the Nevada desert.",\n          "imageUrl": "https://www.visitlasvegas.com/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.0708, -115.0657",\n          "ticketPricing": "Free",\n          "rating": 4.5\n        },\n        {\n          "time": "4:00 PM",\n          "placeName": "Valley of Fire State Park",\n          "placeDetails": "A scenic state park with red rock formations, hiking trails, and petroglyphs.",\n          "imageUrl": "https://www.parks.nv.gov/media/images/hero-images/hero-1.jpg",\n          "geoCoordinates": "36.3200, -114.7928",\n          "ticketPricing": "$10",\n          "rating": 4\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please Note:**\n\n* **Prices are approximate and subject to change.**\n* **Ticket prices may vary depending on the time of year and availability.**\n* **This itinerary is just a suggestion and can be customized to your preferences.**\n* **Consider booking your hotel and attractions in advance, especially if traveling during peak season.**\n* **Be sure to check for any COVID-19 related restrictions or guidelines before your trip.**\n\nThis itinerary focuses on free and low-cost attractions, allowing you to experience Las Vegas without breaking the bank.  It includes a mix of iconic landmarks, unique experiences, and scenic escapes. Have a great time! \n',
        },
      ],
    },
  ],
});
