export interface ContentBlock {
  type: 'text' | 'image';
  content: string;
  position: 'left' | 'right' | 'full' | 'half-left' | 'half-right'; // Добавлены новые позиции
  size?: 'small' | 'medium' | 'large';
  textAlignment?: 'left' | 'center' | 'right';
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  content?: string;
  year: string;
  category: string;
  contentBlocks?: ContentBlock[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Упаковка для крафтового пива ALBUS',
    year: '2025',
    category: 'Брендинг',
    contentBlocks: [
      {
        type: 'text',
        content: 'Проект вдохновлён весной и побелкой деревьев. Текстура дерева помогает передать натуральность продукта.',
        position: 'half-left',
        textAlignment: 'left',
      },
      {
        type: 'image',
        content: '/assets/albus/a1.jpg',
        position: 'half-right',
        size: 'medium',
      },
      {
        type: 'text',
        content: 'Дизайн упаковки отражает сезонность и природные мотивы.',
        position: 'full',
        textAlignment: 'center',
      },
      {
        type: 'image',
        content: '/assets/albus/a2.jpg',
        position: 'full',
        size: 'large',
      },
    ],
  },
  {
    id: '2',
    title: 'MUSIC OF DATA',
    year: '2025',
    category: 'Интерактив',
    contentBlocks: [
      {
        type: 'text',
        content: 'Выставка «Music of data» посвящена методу представления данных через звук — сонификации. Посетители смогут познакомиться в чем заключается её метод, как она упрощает работу с данными и в каких сферах применяется. Экспозицию выставки составляют звуковые инсталляции и различные приборы, которые основаны на методе сонификации.',
        position: 'half-left',
        textAlignment: 'left',
      },
      {
        type: 'image',
        content: '/assets/fonts/f1.jpg',
        position: 'half-right',
        size: 'medium',
      },
      {
        type: 'text',
        content: 'В основе концепции для айдентики лежит основное свойство сонификации — работа с массивом данных и выявление определенных структур в нем.',
        position: 'full',
        textAlignment: 'center',
      },
      {
        type: 'image',
        content: '/assets/fonts/f2.jpg',
        position: 'full',
        size: 'large',
      },
      {
        type: 'image',
        content: '/assets/fonts/f3.jpg',
        position: 'full',
        size: 'large',
      },
      {
        type: 'image',
        content: '/assets/fonts/f4.jpg',
        position: 'full',
        size: 'large',
      },
      {
        type: 'image',
        content: '/assets/fonts/f5.jpg',
        position: 'full',
        size: 'large',
      },
    ],
  },
  {
    id: '3',
    title: 'На разогрев. Готовые блинчики',
    year: '2025',
    category: 'Упаковка',
    contentBlocks: [
          {
            type: 'text',
            content: '«На разогрев» — готовые блины для студентов. Дизайн упаковки призван отразить близкий им мир, чтобы при покупке они испытывали эмоциональный отклик от взаимодействия с продуктом.',
            position: 'half-left',
            textAlignment: 'left',
          },
          {
            type: 'image',
            content: '/assets/panky/p1.jpg',
            position: 'half-right',
            size: 'medium',
          },
          {
            type: 'text',
            content: 'Музыка — это то, что сопровождает каждого повседневно. Благодаря своему разнообразию, она отражает безумные ритмы жизни, в которых постоянно пребывает молодежь. Концепция упаковки основана на использовании абстрактной ритмичной графики. На каждой упаковке через характерные орнаменты передаются вкусы начинки, ассоциированные с различными музыкальными жанрами.',
            position: 'full',
            textAlignment: 'center',
          },
          {
            type: 'image',
            content: '/assets/panky/p2.jpg',
            position: 'full',
            size: 'large',
          },
          {
            type: 'image',
            content: '/assets/panky/p3.jpg',
            position: 'full',
            size: 'large',
          },
          {
            type: 'image',
            content: '/assets/panky/p4.jpg',
            position: 'full',
            size: 'large',
          },
          {
            type: 'image',
            content: '/assets/panky/p5.jpg',
            position: 'full',
            size: 'large',
          },
          {
            type: 'image',
            content: '/assets/panky/p6.jpg',
            position: 'full',
            size: 'large',
          }
        ],
  },
];