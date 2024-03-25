import image243 from './img/productImage/243_Main.svg';
import image640 from './img/productImage/640_Main.jpg';
import image643 from './img/productImage/643_Main.svg';
import image540 from './img/productImage/540_Main.jpg';
import image537 from './img/productImage/537_Main.jpg';
import image620 from './img/productImage/620_Main.jpg';
import image645 from './img/productImage/645_Main.svg';

import imageStandartDisplay1 from './img/productImage/StandartDisplay1.svg';
import imageStandartDisplay2 from './img/productImage/StandartDisplay2.svg';
import imageStandartDisplay3 from './img/productImage/StandartDisplay3.svg';
export const state = {
  order: [],
  product: [
    {
      id: 640,
      name: 'Одрі',
      title: 'Прямий диван',
      sale: 22380,
      cost: 38500,
      bought: 20,
      properties: {
        rigidityLevel: 1,
        transform: 'Не розкладається',
        configuration: 'Двоспальні',
        armrests: 'Тканинні',
        size: {
          width: 700,
          length: 2000,
        },
      },
      type: ['sale', 'new'],
      photo: {
        main: image640,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 641,
      name: 'Одрі 2',
      title: 'Прямий диван',
      sale: 24080,
      bought: 10,
      properties: {
        rigidityLevel: 2,
        transform: 'Не розкладається',
        configuration: 'Багатомісні',
        armrests: 'Без підлокітників',
        size: {
          width: 800,
          length: 1900,
        },
      },
      type: ['popular'],
      photo: {
        main: image640,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 540,
      name: 'Лаунж',
      title: 'Модульний кутовий диван',
      sale: 32156,
      cost: 37830,
      bought: 12,
      properties: {
        rigidityLevel: 2,
        transform: 'Розкладачка',
        configuration: 'Багатомісні',
        armrests: 'Модульні МДФ',
        size: {
          width: 1700,
          length: 2000,
        },
      },
      type: ['sale', 'new'],
      photo: {
        main: image540,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 543,
      name: 'Лаунж 2',
      title: 'Модульний кутовий диван',
      sale: 25800,
      bought: 8,
      properties: {
        rigidityLevel: 2,
        transform: 'Алеко',
        configuration: 'Односпальні',
        armrests: "Дерев'яні",
        size: {
          width: 1600,
          length: 2100,
        },
      },
      type: [],
      photo: {
        main: image540,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 537,
      name: 'Юваль',
      title: 'Прямий диван',
      sale: 15995,
      cost: 22859,
      bought: 22,
      properties: {
        rigidityLevel: 2,
        transform: 'Акордеон',
        configuration: 'Багатомісні',
        armrests: 'Модульні МДФ',
        size: {
          width: 2000,
          length: 1300,
        },
      },
      type: ['sale', 'new'],
      photo: {
        main: image537,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 538,
      name: 'Юваль 2',
      title: 'Прямий диван',
      sale: 28999,
      bought: 17,
      properties: {
        rigidityLevel: 4,
        transform: 'Французька розкладачка',
        configuration: 'Двоспальні',
        armrests: 'Модульні МДФ',
        size: {
          width: 2000,
          length: 1300,
        },
      },
      type: [],
      photo: {
        main: image537,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 643,
      name: 'Бали 1.4',
      title: 'Диван з розкладкою вперед',
      sale: 16200,
      cost: 18000,
      bought: 1,
      properties: {
        rigidityLevel: 2,
        transform: 'Акордеон',
        configuration: 'Багатомісні',
        armrests: 'Модульні МДФ',
        size: {
          width: 1000,
          length: 2300,
        },
      },
      type: ['sale', 'popular'],
      photo: {
        main: image643,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 645,
      name: 'Флавіо 2',
      title: 'Прямий диван',
      sale: 18999,
      bought: 11,
      properties: {
        rigidityLevel: 2,
        transform: 'Єврокнижка',
        configuration: 'Тримісні',
        armrests: 'Модульні МДФ',
        size: {
          width: 1200,
          length: 1200,
        },
      },
      type: [],
      photo: {
        main: image645,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 243,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 20,
      properties: {
        rigidityLevel: 2,
        transform: 'Седафлекс',
        configuration: 'Тримісні',
        armrests: "Дерев'яні",
        size: {
          width: 800,
          length: 2000,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 620,
      name: 'Рут',
      title: 'Прямий диван',
      sale: 32156,
      cost: 38500,
      bought: 8,
      properties: {
        rigidityLevel: 2,
        transform: 'Алеко',
        configuration: 'Двухмісні',
        armrests: 'Без підлокітників',
        size: {
          width: 1500,
          length: 2500,
        },
      },
      type: ['sale', 'new'],
      photo: {
        main: image620,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 244,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 7,
      properties: {
        rigidityLevel: 2,
        transform: 'Алеко',
        configuration: 'Одномісні',
        armrests: 'Без підлокітників',
        size: {
          width: 1300,
          length: 1800,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 245,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 10,
      properties: {
        rigidityLevel: 1,
        transform: 'Крокуюча єврокнижка',
        configuration: 'Двоспальні',
        armrests: 'Модульні ДСП',
        size: {
          width: 1000,
          length: 1200,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 290,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 11,
      properties: {
        rigidityLevel: 4,
        transform: 'Французька розкладачка',
        configuration: 'Полуторні',
        armrests: 'Модульні ДСП',
        size: {
          width: 1900,
          length: 1000,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 672,
      name: 'Санді-2',
      title: 'Прямий диван',
      sale: 15090,
      bought: 17,
      properties: {
        rigidityLevel: 3,
        transform: 'Дельфін',
        configuration: 'Односпальні',
        armrests: 'Тканинні',
        size: {
          width: 2300,
          length: 800,
        },
      },
      type: ['new'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 660,
      name: 'Бали 1.4',
      title: 'Диван з розкладкою вперед',
      sale: 16200,
      cost: 18000,
      bought: 1,
      properties: {
        rigidityLevel: 2,
        transform: 'Акордеон',
        configuration: 'Багатомісні',
        armrests: 'Модульні МДФ',
        size: {
          width: 1000,
          length: 2300,
        },
      },
      type: ['sale', 'popular'],
      photo: {
        main: image643,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 649,
      name: 'Флавіо',
      title: 'Прямий диван',
      sale: 26390,
      bought: 42,
      properties: {
        rigidityLevel: 3,
        transform: 'Седафлекс',
        configuration: 'Тримісні',
        armrests: 'MDF',
        size: {
          width: 1200,
          length: 1200,
        },
      },
      type: ['popular'],
      photo: {
        main: image645,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 251,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 20,
      properties: {
        rigidityLevel: 2,
        transform: 'Седафлекс',
        configuration: 'Тримісні',
        armrests: "Дерев'яні",
        size: {
          width: 800,
          length: 2000,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
    {
      id: 622,
      name: 'Рут',
      title: 'Прямий диван',
      sale: 32156,
      cost: 38500,
      bought: 8,
      properties: {
        rigidityLevel: 2,
        transform: 'Алеко',
        configuration: 'Двухмісні',
        armrests: 'Без підлокітників',
        size: {
          width: 1500,
          length: 2500,
        },
      },
      type: ['sale', 'new'],
      photo: {
        main: image620,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 249,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 7,
      properties: {
        rigidityLevel: 2,
        transform: 'Алеко',
        configuration: 'Одномісні',
        armrests: 'Без підлокітників',
        size: {
          width: 1300,
          length: 1800,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 248,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 10,
      properties: {
        rigidityLevel: 1,
        transform: 'Крокуюча єврокнижка',
        configuration: 'Двоспальні',
        armrests: 'Модульні ДСП',
        size: {
          width: 1000,
          length: 1200,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 247,
      name: 'Балі',
      title: 'Диван з розкладкою вперед',
      sale: 21760,
      bought: 11,
      properties: {
        rigidityLevel: 4,
        transform: 'Французька розкладачка',
        configuration: 'Полуторні',
        armrests: 'Модульні ДСП',
        size: {
          width: 1900,
          length: 1000,
        },
      },
      type: ['popular'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },

    {
      id: 647,
      name: 'Санді-2',
      title: 'Прямий диван',
      sale: 15090,
      bought: 17,
      properties: {
        rigidityLevel: 3,
        transform: 'Дельфін',
        configuration: 'Односпальні',
        armrests: 'Тканинні',
        size: {
          width: 2300,
          length: 800,
        },
      },
      type: ['new'],
      photo: {
        main: image243,
        display1: imageStandartDisplay1,
        display2: imageStandartDisplay2,
        display3: imageStandartDisplay3,
      },
    },
  ],
};
