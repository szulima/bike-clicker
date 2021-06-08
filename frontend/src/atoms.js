import { atom, selector } from "recoil";
import screwdriver from "./assets/screwdriver.png";
import bike from "./assets/bike.png";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const cumulativeCountState = atom({
  key: "cumulativeCountState",
  default: 0,
});

export const passiveIncomeState = atom({
  key: "passiveIncomeState",
  default: 0,
});

export const notificationsState = atom({
  key: "notificationsState",
  default: [],
});

export const achievementsState = selector({
  key: "achievementsState",
  get: ({ get }) => {
    const cumulativeCount = get(cumulativeCountState);

    return [
      {
        id: 1,
        name: "Start a game",
        condition: cumulativeCount === 0,
        achievementCondition: cumulativeCount >= 0,
        image: bike,
        what: "You decided to go into bike business, congrats!",
      },
      {
        id: 2,
        name: "Wake and bike!",
        condition: cumulativeCount === 1,
        achievementCondition: cumulativeCount >= 1,
        image: screwdriver,
        what: "Build 1 bike",
      },
    ];
  },
});

export const isSaveOnServerState = atom({
  key: "isSaveOnServerState",
  default: false,
});
