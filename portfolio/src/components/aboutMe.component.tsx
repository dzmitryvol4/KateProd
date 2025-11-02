import React, { Component } from 'react';
import '../styles/aboutMe.css';
import { Grid, Cell } from './dynamicGrid.component';

export class AboutMeComponent extends Component {
  // Массив данных: можно указать кол-во колонок/строк, заголовок, изображение
  // null означает пустую ячейку
  private data = [
    { title: 'Большая ячейка слева', image: '/path/to/image1.jpg', colSpan: 2, rowSpan: 1 },
    { title: 'Средняя справа', image: '/path/to/image2.jpg', colSpan: 1, rowSpan: 1 },
    null, // Пустой слот (например, для отступа или дизайна)
    { title: 'Высокая по центру', image: '/path/to/image3.jpg', colSpan: 1, rowSpan: 2 },
    { title: 'Маленькая внизу', image: '/path/to/image4.jpg', colSpan: 1, rowSpan: 1 },
    null,
    null,
    { title: 'Большая ячейка слева', image: '/path/to/image1.jpg', colSpan: 2, rowSpan: 1 },
    { title: 'Средняя справа', image: '/path/to/image2.jpg', colSpan: 1, rowSpan: 1 },
     null, // Пустой слот (например, для отступа или дизайна)
     { title: 'Высокая по центру', image: '/path/to/image3.jpg', colSpan: 1, rowSpan: 2 },
     { title: 'Маленькая внизу', image: '/path/to/image4.jpg', colSpan: 1, rowSpan: 1 },
    // Добавь ещё — сетка автоматически отрендерит
  ];

  render(): React.ReactNode {
    return (
      <div>
        <h1>about me</h1>
        <div className="app">
          <Grid cols={4} rows={3} gutter={20}>
            {this.data.map((item, index) => {
              // Пропускаем null (пустые ячейки)
              if (item === null) {
                return null;
              }

              return (
                <Cell
                  key={index}
                  colSpan={item.colSpan}
                  rowSpan={item.rowSpan}
                >
                  <div className="Cell">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    )}
                    <h3 style={{ margin: '10px 0 0', fontSize: '16px' }}>{item.title}</h3>
                  </div>
                </Cell>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}