import {TreeData} from '../models';

export const PRODUCT_LIST: TreeData = [
  {
    id: 1,
    objectId: '1',
    title: 'Phones',
    data: [
      {
        id: 1,
        objectId: '1',
        title: 'Apple',
        data: [
          {
            id: 1,
            objectId: '1',
            title: 'iPhone 15',
            data: [
              {
                title: '64GB',
                count: 10,
                id: 1,
                objectId: '1',
              },
              {title: '128GB', count: 20, id: 2, objectId: '2'},
              {title: '256GB', count: 30, id: 3, objectId: '3'},
            ],
          },
          {
            id: 2,
            objectId: '2',
            title: 'iPhone 12',
            data: [
              {title: '64GB', count: 10, id: 4, objectId: '4'},
              {title: '128GB', count: 20, id: 5, objectId: '5'},
              {title: '256GB', count: 30, id: 6, objectId: '6'},
            ],
          },

          {
            id: 3,
            objectId: '3',
            title: 'iPhone 14',
            data: [
              {title: '64GB', count: 10, id: 7, objectId: '7'},
              {title: '128GB', count: 20, id: 8, objectId: '8'},
              {title: '256GB', count: 30, id: 9, objectId: '9'},
            ],
          },
        ],
      },

      {
        id: 2,
        objectId: '2',
        title: 'Samsung',
        data: [
          {
            id: 4,
            objectId: '4',
            title: 'Galaxy S24',
            data: [
              {title: '64GB', count: 10, id: 10, objectId: '10'},
              {title: '128GB', count: 20, id: 11, objectId: '11'},
              {title: '256GB', count: 30, id: 12, objectId: '12'},
            ],
          },
          {
            id: 5,
            objectId: '5',
            title: 'Galaxy S23',
            data: [
              {title: '64GB', count: 10, id: 13, objectId: '13'},
              {title: '128GB', count: 20, id: 14, objectId: '14'},
              {title: '256GB', count: 30, id: 15, objectId: '15'},
            ],
          },
        ],
      },
      {
        id: 3,
        objectId: '3',
        title: 'Xiaomi',
        data: [
          {
            id: 6,
            objectId: '6',
            title: 'Mi 11',
            data: [
              {title: '64GB', count: 10, id: 16, objectId: '16'},
              {title: '128GB', count: 20, id: 17, objectId: '17'},
              {title: '256GB', count: 30, id: 18, objectId: '18'},
            ],
          },
          {
            id: 4,
            objectId: '4',
            title: 'Mi 12',
            data: [
              {title: '64GB', count: 10, id: 19, objectId: '19'},
              {title: '128GB', count: 20, id: 20, objectId: '20'},
              {title: '256GB', count: 30, id: 21, objectId: '21'},
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    objectId: '2',
    title: 'Laptops',
    data: [
      {
        id: 4,
        objectId: '4',
        title: 'Apple',
        data: [
          {
            id: 7,
            objectId: '7',
            title: 'MacBook Pro 2022',
            data: [
              {title: '16"', count: 10, id: 22, objectId: '22'},
              {title: '14"', count: 20, id: 23, objectId: '23'},
              {title: '13"', count: 30, id: 24, objectId: '24'},
            ],
          },
          {
            id: 5,
            objectId: '5',
            title: 'MacBook Air 2022',
            data: [
              {title: '16"', count: 10, id: 25, objectId: '25'},
              {title: '14"', count: 20, id: 26, objectId: '26'},
              {title: '13"', count: 30, id: 27, objectId: '27'},
            ],
          },
        ],
      },
      {
        id: 5,
        objectId: '5',
        title: 'Dell',
        data: [
          {
            id: 8,
            objectId: '8',
            title: 'XPS 15',
            data: [
              {title: '16"', count: 10, id: 28, objectId: '28'},
              {title: '14"', count: 20, id: 29, objectId: '29'},
              {title: '13"', count: 30, id: 30, objectId: '30'},
            ],
          },
          {
            id: 6,
            objectId: '6',
            title: 'XPS 13',
            data: [
              {title: '16"', count: 10, id: 31, objectId: '31'},
              {title: '14"', count: 20, id: 32, objectId: '32'},
              {title: '13"', count: 30, id: 33, objectId: '33'},
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    objectId: '3',
    title: 'Watches',
    data: [
      {
        id: 6,
        objectId: '6',
        title: 'Apple',
        data: [
          {
            id: 9,
            objectId: '9',
            title: 'Apple Watch Series 7',
            data: [
              {title: '40mm', count: 10, id: 34, objectId: '34'},
              {title: '44mm', count: 20, id: 35, objectId: '35'},
              {title: '50mm', count: 30, id: 36, objectId: '36'},
            ],
          },
          {
            id: 7,
            objectId: '7',
            title: 'Apple Watch SE',
            data: [
              {title: '40mm', count: 10, id: 37, objectId: '37'},
              {title: '44mm', count: 20, id: 38, objectId: '38'},
              {title: '50mm', count: 30, id: 39, objectId: '39'},
            ],
          },
        ],
      },
      {
        id: 7,
        objectId: '7',
        title: 'Samsung',
        data: [
          {
            id: 10,
            objectId: '10',
            title: 'Galaxy Watch 4',
            data: [
              {title: '40mm', count: 10, id: 40, objectId: '40'},
              {title: '44mm', count: 20, id: 41, objectId: '41'},
              {title: '50mm', count: 30, id: 42, objectId: '42'},
            ],
          },
          {
            id: 8,
            objectId: '8',
            title: 'Galaxy Watch 3',
            data: [
              {title: '40mm', count: 10, id: 43, objectId: '43'},
              {title: '44mm', count: 20, id: 44, objectId: '44'},
              {title: '50mm', count: 30, id: 45, objectId: '45'},
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    objectId: '4',
    title: 'TVs',
    data: [
      {
        id: 8,
        objectId: '8',
        title: 'Samsung',
        data: [
          {
            id: 11,
            objectId: '11',
            title: 'Samsung QN900A Neo QLED 8K TV',
            data: [
              {title: '65"', count: 10, id: 46, objectId: '46'},
              {title: '75"', count: 20, id: 47, objectId: '47'},
              {title: '85"', count: 30, id: 48, objectId: '48'},
            ],
          },
          {
            id: 9,
            objectId: '9',
            title: 'Samsung QN800A Neo QLED 8K TV',
            data: [
              {title: '65"', count: 10, id: 49, objectId: '49'},
              {title: '75"', count: 20, id: 50, objectId: '50'},
              {title: '85"', count: 30, id: 51, objectId: '51'},
            ],
          },
        ],
      },
      {
        id: 9,
        objectId: '9',
        title: 'Sony',
        data: [
          {
            id: 12,
            objectId: '12',
            title: 'Sony A90J OLED TV',
            data: [
              {title: '65"', count: 10, id: 52, objectId: '52'},
              {title: '75"', count: 20, id: 53, objectId: '53'},
              {title: '85"', count: 30, id: 54, objectId: '54'},
            ],
          },
          {
            id: 10,
            objectId: '10',
            title: 'Sony A80J OLED TV',
            data: [
              {title: '65"', count: 10, id: 55, objectId: '55'},
              {title: '75"', count: 20, id: 56, objectId: '56'},
              {title: '85"', count: 30, id: 57, objectId: '57'},
            ],
          },
        ],
      },
    ],
  },

  {
    id: 5,
    objectId: '5',
    title: 'Headphones',
    data: [
      {
        id: 10,
        objectId: '10',
        title: 'Apple',
        data: [
          {
            id: 13,
            objectId: '13',
            title: 'AirPods Max',
            data: [
              {title: 'Silver', count: 10, id: 58, objectId: '58'},
              {title: 'Black', count: 20, id: 59, objectId: '59'},
              {title: 'Green', count: 30, id: 60, objectId: '60'},
            ],
          },
          {
            id: 11,
            objectId: '11',
            title: 'AirPods Pro',
            data: [
              {title: 'Silver', count: 10, id: 61, objectId: '61'},
              {title: 'Black', count: 20, id: 62, objectId: '62'},
              {title: 'Green', count: 30, id: 63, objectId: '63'},
            ],
          },
        ],
      },
      {
        id: 11,
        objectId: '11',
        title: 'Sony',
        data: [
          {
            id: 14,
            objectId: '14',
            title: 'Sony WH-1000XM4',
            data: [
              {title: 'Silver', count: 10, id: 64, objectId: '64'},
              {title: 'Black', count: 20, id: 65, objectId: '65'},
              {title: 'Green', count: 30, id: 66, objectId: '66'},
            ],
          },
          {
            id: 12,
            objectId: '12',
            title: 'Sony WH-1000XM3',
            data: [
              {title: 'Silver', count: 10, id: 67, objectId: '67'},
              {title: 'Black', count: 20, id: 68, objectId: '68'},
              {title: 'Green', count: 30, id: 69, objectId: '69'},
            ],
          },
        ],
      },
    ],
  },

  {
    id: 6,
    objectId: '6',
    title: 'Tablets',
    data: [
      {
        id: 12,
        objectId: '12',
        title: 'Apple',
        data: [
          {
            id: 15,
            objectId: '15',
            title: 'iPad Pro 2022',
            data: [
              {title: '11"', count: 10, id: 70, objectId: '70'},
              {title: '12.9"', count: 20, id: 71, objectId: '71'},
              {title: '14"', count: 30, id: 72, objectId: '72'},
            ],
          },
          {
            id: 13,
            objectId: '13',
            title: 'iPad Air 2022',
            data: [
              {title: '11"', count: 10, id: 73, objectId: '73'},
              {title: '12.9"', count: 20, id: 74, objectId: '74'},
              {title: '14"', count: 30, id: 75, objectId: '75'},
            ],
          },
        ],
      },
      {
        id: 13,
        objectId: '13',
        title: 'Samsung',
        data: [
          {
            id: 16,
            objectId: '16',
            title: 'Galaxy Tab S8',
            data: [
              {title: '11"', count: 10, id: 76, objectId: '76'},
              {title: '12.9"', count: 20, id: 77, objectId: '77'},
              {title: '14"', count: 30, id: 78, objectId: '78'},
            ],
          },
          {
            id: 14,
            objectId: '14',
            title: 'Galaxy Tab S7',
            data: [
              {title: '11"', count: 10, id: 79, objectId: '79'},
              {title: '12.9"', count: 20, id: 80, objectId: '80'},
              {title: '14"', count: 30, id: 81, objectId: '81'},
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    objectId: '7',
    title: 'Cameras',
    data: [
      {
        id: 14,
        objectId: '14',
        title: 'Canon',
        data: [
          {
            id: 17,
            objectId: '17',
            title: 'Canon EOS R5',
            data: [
              {title: 'Body', count: 10, id: 82, objectId: '82'},
              {title: 'Kit', count: 20, id: 83, objectId: '83'},
              {title: 'Bundle', count: 30, id: 84, objectId: '84'},
            ],
          },
          {
            id: 15,
            objectId: '15',
            title: 'Canon EOS R6',
            data: [
              {title: 'Body', count: 10, id: 85, objectId: '85'},
              {title: 'Kit', count: 20, id: 86, objectId: '86'},
              {title: 'Bundle', count: 30, id: 87, objectId: '87'},
            ],
          },
        ],
      },
      {
        id: 15,
        objectId: '15',
        title: 'Sony',
        data: [
          {
            id: 18,
            objectId: '18',
            title: 'Sony A7 IV',
            data: [
              {title: 'Body', count: 10, id: 88, objectId: '88'},
              {title: 'Kit', count: 20, id: 89, objectId: '89'},
              {title: 'Bundle', count: 30, id: 90, objectId: '90'},
            ],
          },
          {
            id: 16,
            objectId: '16',
            title: 'Sony A7 III',
            data: [
              {title: 'Body', count: 10, id: 91, objectId: '91'},
              {title: 'Kit', count: 20, id: 92, objectId: '92'},
              {title: 'Bundle', count: 30, id: 93, objectId: '93'},
            ],
          },
        ],
      },
    ],
  },
];
