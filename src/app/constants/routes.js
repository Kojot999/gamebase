import { Home } from "../views/Home/Home";
import { Favorites } from "../views/Favorite/Favorite";
import { Stores } from "../views/Stores/Stores";
import { GameView } from "../views/Game/Game";

export const ROUTES = [
  {
    isNavigation: true,
    name: "HOME",
    path: "/",
    component: Home,
  },
  {
    isNavigation: true,
    name: "FAVORITES",
    path: "/favorites",
    component: Favorites,
  },
  {
    isNavigation: true,
    name: "STORES",
    path: "/stores",
    component: Stores,
  },
  {
    isNavigation: false,
    name: "GAMEVIEWS",
    path: "/game/:id",
    component: GameView,
  },
];
