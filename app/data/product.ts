export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "cakes",
    name: "Cakes",
    products: [
      {
        id: 1,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with ganache",
        price: 35.99,
      },
      {
        id: 2,
        name: "Vanilla Bean Cake",
        description: "Light and fluffy vanilla cake",
        price: 30.99,
      },
      {
        id: 3,
        name: "Red Velvet Cake",
        description: "Classic red velvet with cream cheese frosting",
        price: 32.99,
      },
    ],
  },
  {
    id: "pastries",
    name: "Pastries",
    products: [
      {
        id: 4,
        name: "Croissant",
        description: "Buttery and flaky French pastry",
        price: 3.99,
      },
      {
        id: 5,
        name: "Danish",
        description: "Sweet pastry with fruit filling",
        price: 4.5,
      },
      {
        id: 6,
        name: "Eclair",
        description: "Choux pastry filled with cream",
        price: 4.99,
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    products: [
      {
        id: 7,
        name: "Sourdough",
        description: "Artisanal sourdough bread",
        price: 6.99,
      },
      {
        id: 8,
        name: "Whole Wheat",
        description: "Hearty whole wheat loaf",
        price: 5.99,
      },
      {
        id: 9,
        name: "Baguette",
        description: "Traditional French baguette",
        price: 4.99,
      },
    ],
  },
  {
    id: "cookies",
    name: "Cookies",
    products: [
      {
        id: 10,
        name: "Chocolate Chip",
        description: "Classic chocolate chip cookies",
        price: 1.99,
      },
      {
        id: 11,
        name: "Oatmeal Raisin",
        description: "Chewy oatmeal cookies with raisins",
        price: 1.99,
      },
      {
        id: 12,
        name: "Snickerdoodle",
        description: "Soft cinnamon sugar cookies",
        price: 1.99,
      },
    ],
  },
  {
    id: "seasonal-specials",
    name: "Seasonal Specials",
    products: [
      {
        id: 13,
        name: "Pumpkin Pie",
        description: "Seasonal pumpkin pie with whipped cream",
        price: 18.99,
      },
      {
        id: 14,
        name: "Fruit Cake",
        description: "Traditional holiday fruit cake",
        price: 25.99,
      },
      {
        id: 15,
        name: "Hot Cross Buns",
        description: "Easter spiced sweet buns",
        price: 2.5,
      },
    ],
  },
  {
    id: "custom-orders",
    name: "Custom Orders",
    products: [
      {
        id: 16,
        name: "Custom Cake",
        description: "Personalized cake for special occasions",
        price: 50.0,
      },
      {
        id: 17,
        name: "Custom Cookies",
        description: "Customized cookies for events",
        price: 30.0,
      },
      {
        id: 18,
        name: "Custom Pastry Platter",
        description: "Assorted pastries for gatherings",
        price: 45.0,
      },
    ],
  },
];
