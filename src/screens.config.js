import { Screen1 } from './components/screens/Screen1';
import { Screen2 } from './components/screens/Screen2';
import { Screen3 } from './components/screens/Screen3';
import { Screen4 } from './components/screens/Screen4';
import { Screen5 } from './components/screens/Screen5';
import { Screen6 } from './components/screens/Screen6';
import { Screen7 } from './components/screens/Screen7';
import { Screen8 } from './components/screens/Screen8';
import { Screen9 } from './components/screens/Screen9';
import { Screen10 } from './components/screens/Screen10';
import { Screen11 } from './components/screens/Screen11';
import { Screen12 } from './components/screens/Screen12';
import { Screen13 } from './components/screens/Screen13';
import { Screen14 } from './components/screens/Screen14';
import { Screen15 } from './components/screens/Screen15';
import { Screen16 } from './components/screens/Screen16';
import { Screen17 } from './components/screens/Screen17';
import { Screen18 } from './components/screens/Screen18';
import { Screen19 } from './components/screens/Screen19';
import { Screen20 } from './components/screens/Screen20';
import { Screen21 } from './components/screens/Screen21';

const background1 = process.env.PUBLIC_URL + '/static/images/background_1.png';
const background2 = process.env.PUBLIC_URL + '/static/images/background_2.png';
const background3 = process.env.PUBLIC_URL + '/static/images/background_3.png';
const background4 = process.env.PUBLIC_URL + '/static/images/background_4.png';
const background5 = process.env.PUBLIC_URL + '/static/images/background_5.png';
const background6 = process.env.PUBLIC_URL + '/static/images/background_6.png';
const background7 = process.env.PUBLIC_URL + '/static/images/background_7.png';

const person1 = process.env.PUBLIC_URL + '/static/images/person_1.png';
const person2 = process.env.PUBLIC_URL + '/static/images/person_2.png';
const handWithPhone = process.env.PUBLIC_URL + '/static/images/hand_with_phone.png';
const vkIcon = process.env.PUBLIC_URL + '/static/images/vk_icon.png';

export const screens = [
  {
    name: 'intro',
    component: Screen1,
    clock: null,
    background: '#0089C5',
    backgroundType: 'color',
    preloadImages: [background1],
  },
  {
    name: 'screen-2',
    component: Screen2,
    clock: '09:00',
    background: background1,
    backgroundType: 'image',
  },
  {
    name: 'screen-3',
    component: Screen3,
    clock: '09:05',
    background: background1,
    backgroundType: 'image',
    preloadImages: [background2, person1],
  },
  {
    name: 'screen-4',
    component: Screen4,
    clock: '09:20',
    background: background2,
    backgroundType: 'image',
  },
  {
    name: 'screen-5',
    component: Screen5,
    clock: '10:30',
    background: background2,
    backgroundType: 'image',
  },
  {
    name: 'screen-6',
    component: Screen6,
    clock: '10:55',
    background: background2,
    backgroundType: 'image',
    preloadImages: [handWithPhone],
  },
  {
    name: 'screen-7',
    component: Screen7,
    clock: '11:19',
    background: background2,
    backgroundType: 'image',
    preloadImages: [background3],
  },
  {
    name: 'screen-8',
    component: Screen8,
    clock: '12:44',
    background: background3,
    backgroundType: 'image',
  },
  {
    name: 'screen-9',
    component: Screen9,
    clock: '12:45',
    background: background3,
    backgroundType: 'image',
    preloadImages: [background4],
  },
  {
    name: 'screen-10',
    component: Screen10,
    clock: '13:10',
    background: background4,
    backgroundType: 'image',
  },
  {
    name: 'screen-11',
    component: Screen11,
    clock: '13:15',
    background: '#919191',
    backgroundType: 'color',
  },
  {
    name: 'screen-12',
    component: Screen12,
    clock: '13:30',
    background: background4,
    backgroundType: 'image',
  },
  {
    name: 'screen-13',
    component: Screen13,
    clock: '14:20',
    background: background4,
    backgroundType: 'image',
  },
  {
    name: 'screen-14',
    component: Screen14,
    clock: '15:15',
    background: background4,
    backgroundType: 'image',
    preloadImages: [background5],
  },
  {
    name: 'screen-15',
    component: Screen15,
    clock: '15:30',
    background: background5,
    backgroundType: 'image',
  },
  {
    name: 'screen-16',
    component: Screen16,
    clock: '16:30',
    background: background2,
    backgroundType: 'image',
    preloadImages: [background6],
  },
  {
    name: 'screen-17',
    component: Screen17,
    clock: '17:00',
    background: background6,
    backgroundType: 'image',
  },
  {
    name: 'screen-18',
    component: Screen18,
    clock: '17:45',
    background: background2,
    backgroundType: 'image',
    preloadImages: [background7, person2],
  },
  {
    name: 'screen-19',
    component: Screen19,
    clock: '17:50',
    background: background7,
    backgroundType: 'image',
  },
  {
    name: 'screen-20',
    component: Screen20,
    clock: '18:00',
    background: background2,
    backgroundType: 'image',
    preloadImages: [vkIcon],
  },
  {
    name: 'screen-21',
    component: Screen21,
    clock: null,
    background: '#ffffff',
    backgroundType: 'color',
  }
];