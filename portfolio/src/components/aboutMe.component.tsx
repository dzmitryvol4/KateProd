import React from 'react';
import '../styles/aboutMe.css';

// Интерфейс для данных ячейки
interface CellData {
  title: string;
  image: string;
  colSpan: number;
  rowSpan: number;
}

// Тип массива данных: может быть объектом CellData или null
type AboutMeData = (CellData | null)[];

const AboutMeComponent = () => {
  // Массив данных — остался тем же
  const data: AboutMeData = [
    { title: 'Большая ячейка слева', image: '/path/to/image1.jpg', colSpan: 2, rowSpan: 1 },
    { title: 'Средняя справа', image: '/path/to/image2.jpg', colSpan: 1, rowSpan: 1 },
    null,
    { title: 'Высокая по центру', image: '/path/to/image3.jpg', colSpan: 1, rowSpan: 2 },
    { title: 'Маленькая внизу', image: '/path/to/image4.jpg', colSpan: 1, rowSpan: 1 },
    null,
    null,
    { title: 'Большая ячейка слева', image: '/path/to/image1.jpg', colSpan: 2, rowSpan: 1 },
    { title: 'Средняя справа', image: '/path/to/image2.jpg', colSpan: 1, rowSpan: 1 },
    null,
    { title: 'Высокая по центру', image: '/path/to/image3.jpg', colSpan: 1, rowSpan: 2 },
    { title: 'Маленькая внизу', image: '/path/to/image4.jpg', colSpan: 1, rowSpan: 1 },
  ];

  return (
    <div>
      <h1>about me</h1>
      <div className="app">
          {data.map((item, index) => {
            if (item === null) {
              return null;
            }

            return (
                <div className="Cell">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '120px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  )}
                  <h3 style={{ margin: '10px 0 0', fontSize: '16px' }}>{item.title}</h3>
                </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutMeComponent;