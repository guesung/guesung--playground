import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    userId: 0,
    age: 3,
    name: "박규성",
  },
});

export const userNameSelector = selector({
  key: "filteredUserState",
  get: ({ get }) => {
    const user = get(userState);
    return user.name;
  },
});
