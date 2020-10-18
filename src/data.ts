import { MenuModelRepsonse } from "./models/Menu";

const zoneArray = [
  {
    name: "Zone A",
    type: "ward",
    items: [],
  },
  {
    name: "Zone B",
    type: "ward",
    items: [],
  },
  {
    name: "Zone C",
    type: "ward",
    items: [],
  },
  {
    name: "Zone D",
    type: "ward",
    items: [],
  },
  {
    name: "Zone E",
    type: "ward",
    items: [],
  },
];

export const dataResponse: MenuModelRepsonse[] = [
  {
    name: "US",
    type: "country",
    items: [
      {
        name: "US A",
        type: "province",
        items: [
          {
            name: "US A 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "US A 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "US A 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "US A 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
      {
        name: "US B",
        type: "province",
        items: [
          {
            name: "US B 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "US B 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "US B 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "US B 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
    ],
  },
  {
    name: "UK",
    type: "country",
    items: [
      {
        name: "UK A",
        type: "province",
        items: [
          {
            name: "UK A 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "UK A 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "UK A 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "UK A 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
      {
        name: "UK B",
        type: "province",
        items: [
          {
            name: "UK B 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "UK B 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "UK B 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "UK B 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
    ],
  },
  {
    name: "CA",
    type: "country",
    items: [
      {
        name: "CA A",
        type: "province",
        items: [
          {
            name: "CA A 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "CA A 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "CA A 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "CA A 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
      {
        name: "CA B",
        type: "province",
        items: [
          {
            name: "CA B 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "CA B 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "CA B 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "CA B 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
    ],
  },
  {
    name: "JA",
    type: "country",
    items: [
      {
        name: "JA A",
        type: "province",
        items: [
          {
            name: "JA A 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "JA A 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "JA A 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "JA A 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
      {
        name: "JA B",
        type: "province",
        items: [
          {
            name: "JA B 1",
            type: "city",
            items: zoneArray,
          },
          {
            name: "JA B 2",
            type: "city",
            items: zoneArray,
          },
          {
            name: "JA B 3",
            type: "city",
            items: zoneArray,
          },
          {
            name: "JA B 4",
            type: "city",
            items: zoneArray,
          },
        ],
      },
    ],
  },
];
