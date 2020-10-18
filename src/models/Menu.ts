export interface MenuModelRepsonse {
  name: string;
  type: string;
  items: MenuModelRepsonse[];
}

export enum Status {
  checked,
  unchecked,
  partial_checked,
}

const toggleStatus = (status: Status) => {
  return status === Status.unchecked ? Status.checked : Status.unchecked;
};

export class MenuModel {
  name: string;
  type: string;
  items: MenuModel[];
  status: Status;
  parent: MenuModel | null;
  constructor(item: MenuModelRepsonse, parent: MenuModel | null = null) {
    this.name = item.name;
    this.type = item.type;
    this.items = item.items.map((subItem) => new MenuModel(subItem, this));
    this.parent = parent;
    this.status = Status.unchecked;
  }

  toggleStatus(status: Status | null = null) {
    const newStatus = toggleStatus(this.status);
    this.status = status || newStatus;
    this.toggleDown(newStatus);
    this.toggleUp();
    return this.findRoot();
  }

  toggleDown(status: Status) {
    if (this.items.length > 0) {
      this.items.forEach((element) => {
        element.status = status;
        if (element.items.length > 0) {
          element.toggleDown(status);
        }
      });
    }
  }

  toggleUp() {
    if (!this.parent) return;
    const uncheckedItem = this.countUnChecked(this.parent);
    if (uncheckedItem === 0) {
      this.parent.status = Status.checked;
    } else if (uncheckedItem < this.parent.items.length) {
      this.parent.status = Status.partial_checked;
    } else {
      this.parent.status = Status.unchecked;
    }
    if (this.parent.parent) {
      this.parent.toggleUp();
    }
  }

  countUnChecked(item: MenuModel): number {
    const unCheckItem = item.items.filter(
      (item) => item.status === Status.unchecked
    );
    return unCheckItem.length;
  }

  findRoot(): MenuModel {
    while (this.parent !== null) {
      return this.parent.findRoot();
    }
    return this;
  }
}
