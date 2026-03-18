import {
  AbuDhaabiImg,
  AustraliyaImage,
  DubaiDestinationImage,
  GreeceImage,
  GreenLAndImage,
  HowItWorkImg1,
  HowItWorkImg2,
  HowItWorkImg3,
  ItalyImage,
  LasVegasImage,
  LondonImg,
  NewYorkImg,
  RecomandationImage1,
  RecomandationImage2,
  RecomandationImage3,
  RecomandationImage4,
  RecomandationImage5,
  RecomandationImage6,
  SydneyImg,
  ThailandImage,
  TokyoImage,
  WashingtonDCImage,
} from "./images";
import { FormValues } from "./types";

export const languageItems = [
  { label: "Russian", link: "#" },
  { label: "French", link: "#" },
];

export const currencyItems = [
  { label: "USD", link: "#" },
  { label: "EUR", link: "#" },
];

export const userItems = [
  { label: "Sign in", link: "#" },
  { label: "Register", link: "#" },
];

export const initialValues = (isSearch: boolean): FormValues => ({
  selectedTab: "One Way",
  departFrom: "",
  arrivalTo: "",
  arrivalDate: "",
  travelers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  stop_mode: false,
  class_mode: false,
  sectors: [{ id: 1, departFrom: "", arrivalTo: "", departureDate: "" }],
  name: "",
  email: "",
  phone: "",
  departureDate: "",
  returnDate: ""
});

export const searchOption = [
  "San Francisco",
  "New York",
  "Seattle",
  "Los Angeles",
  "Chicago",
];

export const contactInitialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const landingcontactInitialValues = {
  name: "",
  email: "",
  phone: "",
};

export const reviewsData = [
  {
    name: "Vicente Wolf",
    rating: 4.5,
    review:
      "It was really easy to book my flight with reservationkart Flight Services! The website was easy to use, and I quickly located some excellent discounts. Customer service was nice and responsive the entire time.",
  },
  {
    name: "Patricia Ferris",
    rating: 4.5,
    review:
      "The reservationkart provides outstanding services at the best possible rates. Excellent experiences without the high cost, ensuring that your travels are both economical and pleasurable. Highly recommended.",
  },
  {
    name: "Steven Wills",
    rating: 5,
    review:
      "I highly recommend reservationkart for their outstanding service at unbeatable prices. They offer exceptional value with their efficient and friendly customer support. Great choice for budget-conscious travelers seeking the best service.",
  },
];

export const faqData = [
  {
    question: "Can I change my flight after booking?",
    answer:
      "Yes, our agents can help you with flight changes, subject to airline policies and availability.",
  },
  {
    question:
      "Are there any additional fees for booking through the call center?",
    answer:
      "No, we do not charge any additional fees for booking through our call center.",
  },
  {
    question: "What if I need help outside of regular business hours?",
    answer:
      "Our call center operates 24/7, so you can get assistance anytime, day or night.",
  },
];

export const bestflightData = [
  {
    destination: "Berlin, BER",
    arriving: "Japan, TYO",
    date: "Sun, 31/08 - Thu, 30/09",
    price: 940,
  },
  {
    destination: "Abu Dhabi, UAE",
    arriving: "London City Airport",
    date: "Sun, 31/08 - Thu, 30/09",
    price: 830,
  },
  {
    destination: "Denmark, Copenhagen",
    arriving: "Norway, Oslo",
    date: "Sat, 31/08 - Mon, 30/09",
    price: 1198,
  },
  {
    destination: "Glasgow, UK",
    arriving: "Australia, Sydney",
    date: "Sun, 10/09 - Thu, 31/10",
    price: 1300,
  },
  {
    destination: "Egypt, Cairo",
    arriving: "Greece, Athens",
    date: "Sun, 10/09 - Thu, 31/10",
    price: 425,
  },
  {
    destination: "Bahamas, Freeport",
    arriving: "Spain, Barcelona",
    date: "Sun, 10/09 - Thu, 31/10",
    price: 2130,
  },
  {
    destination: "Las Vegas, USA",
    arriving: "New York, USA",
    date: "Sun, 10/09 - Thu, 31/10",
    price: 475,
  },
  {
    destination: "San Francisco, SFO",
    arriving: "London, LHR",
    date: "Sun, 10/09 - Thu, 31/10",
    price: 1140,
  },
  {
    destination: "Paris, ORY",
    arriving: "New York, JFK",
    date: "Sun, 10/09 - Thu, 31/10",
    price: 595,
  },
];

export const featuredDeals = [
  {
    destination: "London, UK",
    tripType: "Oneway Trip",
    class: "Economy",
    price: 330,
    imageSrc: LondonImg,
    imageAlt: "Deals One",
    imageTitle: "Deals One",
  },
  {
    destination: "Abu Dhabi, UAE",
    tripType: "Oneway Trip",
    class: "Economy",
    price: 180,
    imageSrc: AbuDhaabiImg,
    imageAlt: "Deals Two",
    imageTitle: "Deals Two",
  },
  {
    destination: "New York, London",
    tripType: "Oneway Trip",
    class: "Economy",
    price: 220,
    imageSrc: NewYorkImg,
    imageAlt: "Deals Three",
    imageTitle: "Deals Three",
  },
  {
    destination: "Sydney, Australia",
    tripType: "Oneway Trip",
    class: "Economy",
    price: 340,
    imageSrc: SydneyImg,
    imageAlt: "Deals Four",
    imageTitle: "Deals Four",
  },
];

export const flightDestinations = [
  {
    title: "Emirates flight to Greenland",
    description: "Book your favorite itinerary at the best price",
    imageSrc: GreenLAndImage,
    imageAlt: "flight-destination-one",
    imageTitle: "flight-destination-one",
  },
  {
    title: "Qatar Airways Flights to Dubai",
    description: "Book your favorite itinerary at the best price",
    imageSrc: DubaiDestinationImage,
    imageAlt: "flight-destination-two",
    imageTitle: "flight-destination-two",
  },
  {
    title: "Singapore Airlines to Thailand",
    description: "Book your favorite itinerary at the best price",
    imageSrc: ThailandImage,
    imageAlt: "flight-destination-three",
    imageTitle: "flight-destination-three",
  },
  {
    title: "Cathay Pacific Airways to Tokyo",
    description: "Book your favorite itinerary at the best price",
    imageSrc: TokyoImage,
    imageAlt: "flight-destination-four",
    imageTitle: "flight-destination-four",
  },
  {
    title: "Qantas Airways to Australia",
    description: "Book your favorite itinerary at the best price",
    imageSrc: AustraliyaImage,
    imageAlt: "flight-destination-five",
    imageTitle: "flight-destination-five",
  },
  {
    title: "EVA Air to Washington DC",
    description: "Book your favorite itinerary at the best price",
    imageSrc: WashingtonDCImage,
    imageAlt: "flight-destination-six",
    imageTitle: "flight-destination-six",
  },
  {
    title: "Egypt Air to Las Vegas",
    description: "Book your favorite itinerary at the best price",
    imageSrc: LasVegasImage,
    imageAlt: "flight-destination-seven",
    imageTitle: "flight-destination-seven",
  },
  {
    title: "Night in Vernazza Italy Vacation",
    description: "Book your favorite itinerary at the best price",
    imageSrc: ItalyImage,
    imageAlt: "flight-destination-eight",
    imageTitle: "flight-destination-eight",
  },
  {
    title: "Egypt to Greece",
    description: "Book your favorite itinerary at the best price",
    imageSrc: GreeceImage,
    imageAlt: "flight-destination-nine",
    imageTitle: "flight-destination-nine",
  },
];

export const steps = [
  {
    id: 1,
    imageSrc: HowItWorkImg1,
    imageAlt: "Select your flight",
    stepTitle: "Select your flight",
    stepDescription: "& tell us your preferences",
  },
  {
    id: 2,
    imageSrc: HowItWorkImg2,
    imageAlt: "Get multiple fare deals",
    stepTitle: "Get multiple fare deals",
    stepDescription: "from verified travel experts",
  },
  {
    id: 3,
    imageSrc: HowItWorkImg3,
    imageAlt: "Customize & book",
    stepTitle: "Customize & book",
    stepDescription: "a perfect travel experience",
  },
];


export const recommendations = [
  {
    image: RecomandationImage1,
    title: "New York, United States",
    alt: "Unique Experience One",
    link: "#",
  },
  {
    image: RecomandationImage2,
    title: "Cusco, Peru",
    alt: "Unique Experience Two",
    link: "#",
  },
  {
    image: RecomandationImage3,
    title: "Kyoto, Japan",
    alt: "Unique Experience Three",
    link: "#",
  },
  {
    image: RecomandationImage4,
    title: "Paris, France",
    alt: "Unique Experience Four",
    link: "#",
  },
  {
    image: RecomandationImage5,
    title: "Sydney, Australia",
    alt: "Unique Experience Five",
    link: "#",
  },
  {
    image: RecomandationImage6,
    title: "Cape Town, South Africa",
    alt: "Unique Experience Six",
    link: "#",
  },
];
