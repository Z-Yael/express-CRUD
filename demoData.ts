/*const num1: number = 273962;
export const num2: number = 223045;
export const string1: string = "hello";

export default num1; */

interface Base {
  id: number;
  name: string;
}
interface Menus extends Base {
  price: number;
  description: string;
}

interface MenuCategories extends Base {
  companyId: number;
}

interface Appdata {
  menus: Menus[];
  menuCategories: MenuCategories[];
}

const menus: Menus[] = [
  {
    id: 1,
    name: "Mont Hinn Ghar",
    price: 3000,
    description: "This is burmese traditional food",
  },
  {
    id: 2,
    name: "Khout Swell",
    price: 2000,
    description: "This is burmese traditional food",
  },
  {
    id: 3,
    name: "Kyar Zan",
    price: 1000,
    description: "This is burmese traditional food",
  },
];

const menuCategories: MenuCategories[] = [
  { id: 1, name: "Popular", companyId: 11 },
  { id: 2, name: "Hot Dish", companyId: 22 },
  { id: 3, name: "Family Set", companyId: 33 },
];

export const appData: Appdata = {
  menus: menus,
  menuCategories: menuCategories,
};
//to use appData in menuRouter