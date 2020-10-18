import { MenuModel } from "./models/Menu";

export const rerenderItems = (items: MenuModel[]) => {
  return items.map((item, index) => {
    if (index === 0) return item.toggleStatus();
    return item;
  });
};
