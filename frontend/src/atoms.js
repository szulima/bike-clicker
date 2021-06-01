import { atom, selector } from "recoil";
import screwdriver from "./assets/screwdriver.png";
import bike from "./assets/bike.png";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const isSaveOnServerState = atom({
  key: "isSaveOnServerState",
  default: false,
});

export const notificationsState = atom({
  key: "notificationsState",
  default: [],
});

export const achievementsState = selector({
  key: "achievementsState",
  get: ({ get }) => {
    const count = get(countState);

    return [
      {
        id: 1,
        condition: count === 0,
        achievementCondition: count >= 0,
        name: "Start a game",
        image: bike,
        what: "You decided to play the game, congrats!",
      },
      {
        id: 2,
        condition: count === 1,
        achievementCondition: count >= 1,
        name: "Wake and bike!",
        image: screwdriver,
        what: "Build 1 bike",
      },
    ];
  },
});
