export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  year: string;
  category: string;
}

export const projects = [
  {
    id: '1',
    title: 'Упаковка для крафтового пива ALBUS',
    year: '2023',
    category: 'Брендинг',
    contentBlocks: [
      {
        type: 'text',
        content: 'Проект вдохновлён весной и побелкой деревьев. Текстура дерева помогает передать натуральность продукта.',
        position: 'left',
        textAlignment: 'left',
      },
      {
        type: 'image',
        content: './assets/albus/a1.jpg',
        position: 'right',
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
        content: '/images/albus2.jpg',
        position: 'full',
        size: 'large',
      },
    ],
  },
   {
      id: '2',
      title: 'MUSIC OF DATA',
      description: 'Выставка о сонификации данных.',
      imageUrl: '/images/projects/music.jpg',
      content: 'Полное описание проекта Music of Data...',
      year: '2022',
      category: 'Интерактив',
    },
    {
      id: '3',
      title: 'На разогрев. Готовые блинчики',
      description: 'Упаковка для студентов с музыкальной темой.',
      imageUrl: '/images/projects/panky.jpg',
      content: 'Полное описание проекта Panky...',
      year: '2023',
      category: 'Упаковка',
    },

];
