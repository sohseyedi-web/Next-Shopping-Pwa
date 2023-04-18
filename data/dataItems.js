import { v4 as uuidv4 } from "uuid";

import One from "../public/images/product1.png";
import Two from "../public/images/product2.png";
import Three from "../public/images/product3.png";
import Four from "../public/images/product4.png";
import Five from "../public/images/product5.png";
import Six from "../public/images/product6.png";
import Seven from "../public/images/product7.png";
import Eight from "../public/images/product8.png";
import Nine from "../public/images/product9.png";
import Ten from "../public/images/product10.png";
import Eleven from "../public/images/product11.png";
import Twele from "../public/images/product12.png";
import Thirteen from "../public/images/product13.png";

export const productList = [
  {
    id: uuidv4(),
    img: One,
    name: "Nike Start",
    price: 150,
    gender: "men",
    size: ["41", "42", "43", "44"],
    oneColor: "#eab308",
    twoColor: "#eab308",
  },
  {
    id: uuidv4(),
    img: Two,
    name: "Nike Air Force",
    price: 130,
    gender: "men",
    size: ["42", "43", "44"],
    oneColor: "#22c55e",
    twoColor: "#10b981",
  },
  {
    id: uuidv4(),
    img: Three,
    name: "Nike Adapt Rose",
    price: 125,
    gender: "women",
    size: ["40", "41", "42", "43", "44"],
    oneColor: "#f43f5e",
    twoColor: "#181b21",
  },
  {
    id: uuidv4(),
    img: Four,
    name: "Nike Premium",
    price: 200,
    gender: "men",
    size: ["42", "43", "44"],
    oneColor: "#f97316",
    twoColor: "#f59e0b",
  },
  {
    id: uuidv4(),
    img: Five,
    name: "Nike Adapt Pro",
    price: 100,
    gender: "men",
    size: ["42", "43", "44"],
    oneColor: "#111827",
    twoColor: "#eab308",
  },
  {
    id: uuidv4(),
    img: Six,
    name: "Nike Jordan PR-3",
    price: 140,
    gender: "men",
    size: ["41", "43", "44"],
    oneColor: "#3b82f6",
    twoColor: "#06b6d4",
  },
  {
    id: uuidv4(),
    img: Seven,
    name: "Nike Economy",
    price: 90,
    gender: "men",
    size: ["40", "41", "42", "43"],
    oneColor: "#0284c7",
    twoColor: "#4f46e5",
  },
  {
    id: uuidv4(),
    img: Eight,
    name: "Nike Zoom",
    price: 100,
    gender: "men",
    size: ["40", "41", "42", "43", "44"],
    oneColor: "#1e3a8a",
    twoColor: "#3b82f6",
  },
  {
    id: uuidv4(),
    img: Nine,
    name: "Nike Kitty",
    price: 105,
    gender: "women",
    size: ["40", "41", "42", "43", "44"],
    oneColor: "#936550",
    twoColor: "#7c2d12",
  },
  {
    id: uuidv4(),
    img: Ten,
    name: "Nike Dynamic",
    price: 120,
    gender: "women",
    size: ["40", "41", "42", "43", "44"],
    oneColor: "#4338ca",
    twoColor: "#3730a3",
  },
  {
    id: uuidv4(),
    img: Eleven,
    name: "Nike Black Max",
    price: 200,
    gender: "men",
    size: ["42"],
    oneColor: "#0f172a",
    twoColor: "#252525",
  },
  {
    id: uuidv4(),
    img: Twele,
    name: "Nike Jordan Eleven",
    price: 120,
    gender: "men",
    size: ["40", "41", "42", "43", "44"],
    oneColor: "#16a34a",
    twoColor: "#84cc16",
  },
  {
    id: uuidv4(),
    img: Thirteen,
    name: "Nike Taki",
    price: 120,
    gender: "men",
    size: ["40", "41", "42", "43", "44"],
    oneColor: "#f14350",
    twoColor: "#c40625",
  },
];
