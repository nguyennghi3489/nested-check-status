import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useState } from "react";
import { MenuModel, Status } from "../models/Menu";
import styles from "./menu.module.css";

export const SubMenu = () => {};

interface MenuProps {
  items: MenuModel[];
  update: Function;
}

const renderCheckStatus = (status: Status) => {
  switch (status) {
    case Status.checked:
      return <FontAwesomeIcon icon={faCheck} />;
    case Status.partial_checked:
      return <FontAwesomeIcon icon={faMinus} />;
    default:
      return null;
  }
};

const MenuItem = memo(({ status, name }: any) => {
  console.log("menu Item rerender");
  return (
    <>
      <div className={styles.checkbox}>{renderCheckStatus(status)}</div>
      <p>{name}</p>
    </>
  );
});

const Menu = ({ items, update }: MenuProps) => {
  const activeItem = items[0];
  console.log("rerender Menu");
  return (
    <>
      <div className={styles.menu}>
        {items.map((item) => (
          <div
            key={item.name}
            className={styles.menuItem}
            onClick={() => {
              update(item.toggleStatus());
            }}
          >
            <MenuItem status={item.status} name={item.name} />
          </div>
        ))}
      </div>
      {activeItem.items && activeItem.items.length > 0 && (
        <Menu items={activeItem.items} update={update} />
      )}
    </>
  );
};

export const MenuContainer = ({ rootMenu }: any) => {
  const [data, setData] = useState(rootMenu);
  const [refresh, setRefresh] = useState(false);
  const update = (value: any) => {
    setData(value);
    setRefresh(!refresh);
  };

  return (
    <div className={styles.menuContainer}>
      <Menu items={data.items} update={update} />
    </div>
  );
};
