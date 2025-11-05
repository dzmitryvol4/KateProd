export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  year: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Упаковка для крафтового пива ALBUS',
    description: 'Вдохновлена весной и побелкой деревьев.',
    imageUrl: '/images/projects/albus.jpg',
    content: 'Полное описание проекта ALBUS...',
    year: '2023',
    category: 'Брендинг',
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