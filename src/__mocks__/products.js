import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2021',
    description: 'Some 300,000 farmers cultivate avocadoes in the Sidama and SNNPR regions of Ethiopia.',
    media: '/static/images/products/product_1.png',
    title: 'Avocado',
    totalDownloads: '14'
  },
  {
    id: uuid(),
    createdAt: '31/03/2021',
    description: 'Ethiopian coffees are a wet-processed (washed) coffee varietal grown in the western part of Ethiopia.',
    media: '/static/images/products/product_2.jpg',
    title: 'Coffee',
    totalDownloads: '5'
  },
  {
    id: uuid(),
    createdAt: '03/04/2021',
    description: 'Exports In 2020, Ethiopia exported $194M in Gold, making it the 82nd largest exporter of Gold in the world. At the same year, Gold was the 5th most exported product in Ethiopia.',
    media: '/static/images/products/product_3.jpg',
    title: 'Gold',
    totalDownloads: '7'
  },
  {
    id: uuid(),
    createdAt: '04/04/2021',
    description: 'Exports In 2020, Ethiopia exported $191M in Cut Flowers, making it the 5th largest exporter of Cut Flowers in the world. At the same year, Cut Flowers was the 6th most exported product in Ethiopia.',
    media: '/static/images/products/product_4.jpg',
    title: 'Flowers',
    totalDownloads: '46'
  },
  {
    id: uuid(),
    createdAt: '04/04/2021',
    description: 'In market year 2016-17, exports of major oilseeds, soybeans, sesame and Niger sees, generated nearly $360 million in export earnings.',
    media: '/static/images/products/product_5.jpg',
    title: 'Beans',
    totalDownloads: '28'
  },
  {
    id: uuid(),
    createdAt: '04/04/2021',
    description: 'Ethiopia has the largest livestock population in Africa, measured at around 53 million cattle by the Ethiopian Investment Commission. ',
    media: '/static/images/products/product_6.jpg',
    title: 'Squarespace',
    totalDownloads: '15'
  }
];
