import React, { Component } from 'react';
import '../styles/dynamicCardWithCustom.css';

// Импортируем изображение
import albusHead from '../assets/allHeads/albusHead.jpg';
import fontHead from '../assets/allHeads/fontHead.jpg';
import pankyHead from '../assets/allHeads/pankyHead.jpg';

interface CardItem {
  title?: string;
  image?: string;
  description?: string;
  custom?: false;
  imageWrapperStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

interface CustomItem {
  custom: true;
  position?: 'left' | 'center' | 'right' | 'full';
  title?: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

type LayoutItem = CardItem | CustomItem;

interface RowConfig {
  cols: number;
  items: LayoutItem[];
}

export class DynamicCardWithCustom extends Component {
  private layout: RowConfig[] = [
//       {
//         cols: 1,
//         items: [
//           {
//             custom: true,
//             position: 'full',
//             title: 'Проекты и история',
//             style: { textAlign: 'center', fontSize: '22px', lineHeight: '1.6' },
//          },
//         ],
//       },
        {
          cols: 2,
          items: [
            {
              image: albusHead,
              imageWrapperStyle: { boxShadow: '0 4px 8px rgba(0,0,0,0.2)'},
              imageStyle: { minWidth: '450px' },
            },
            {
              custom: true,
              position: 'left',
              title: 'Упаковка для крафтового пива ALBUS',
              description: 'Упаковка для крафтового пива ALBUS вдохновлена весной и одним из её характерных ритуалов — побелкой деревьев. С наступлением тепла нижнюю часть стволов деревьев покрывают белой краской, защищая их от солнечных ожогов, перепадов температур и вредителей. Текстура дерева помогает передать натуральность и чистоту продукта.',
              style: { padding: '20px', margin: 'auto' },
            },
          ],
        },
        {
          cols: 2,
          items: [
            {
              custom: true,
              position: 'left',
              title: 'MUSIC OF DATA',
              description: 'Выставка «Music of data» посвящена методу представления данных через звук — сонификации. Посетители смогут познакомиться в чем заключается её метод, как она упрощает работу с данными и в каких сферах применяется. Экспозицию выставки составляют звуковые инсталляции и различные приборы, которые основаны на методе сонификации.',
              style: { padding: '20px' , margin: 'auto' },
            },
            {
              image: fontHead,
              imageWrapperStyle: { boxShadow: '0 4px 8px rgba(0,0,0,0.2)'},
              imageStyle: { minWidth: '450px' },
            },
          ],
        },
        {
          cols: 2,
          items: [
            {
              image: pankyHead,
              imageWrapperStyle: { boxShadow: '0 4px 8px rgba(0,0,0,0.2)'},
              imageStyle: { minWidth: '450px' },
            },
            {
              custom: true,
              position: 'left',
              title: 'На разогрев. Готовые блинчики',
              description: '«На разогрев» — готовые блины для студентов. Дизайн упаковки призван отразить близкий им мир, чтобы при покупке они испытывали эмоциональный отклик от взаимодействия с продуктом. Музыка — это то, что сопровождает каждого повседневно. Благодаря своему разнообразию, она отражает безумные ритмы жизни, в которых постоянно пребывает молодежь. Концепция упаковки основана на использовании абстрактной ритмичной графики. На каждой упаковке через характерные орнаменты передаются вкусы начинки, ассоциированные с различными музыкальными жанрами.',
              style: { padding: '20px' , margin: 'auto' },
            },
          ],
        }
  ];

  render(): React.ReactNode {
    return (
        <div>
          <div className="header_projects">
            <h2>Мои проекты и история</h2>
          </div>

        {this.layout.map((row, rowIndex) => (
            <div key={rowIndex}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(auto-fit, minmax(450px, 1fr))`,
    //               gap: '20px',
                  width: 'auto',
                }}
              >
                {row.items.map((item, itemIndex) => {
                  if ('custom' in item && item.custom) {
                    const pos = item.position || 'center';
                    return (
                      <div
                        key={itemIndex}
                        className={`CustomBlock ${item.className || ''}`}
                        style={{
                          gridColumn: pos === 'full' ? '1 / -1' : 'auto',
                          justifySelf: pos === 'left' ? 'start' : pos === 'right' ? 'end' : 'center',
                          width: pos === 'full' ? '100%' : pos === 'left' || pos === 'right' ? '80%' : '90%',
                          marginLeft: pos === 'right' ? 'auto' : pos === 'left' ? 0 : 'auto',
                          marginRight: pos === 'left' ? 'auto' : pos === 'right' ? 0 : 'auto',
                          padding: '16px',
                          borderRadius: '12px',
                          ...item.style,
                        }}
                      >
                        {item.title && <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>{item.title}</h3>}
                        {item.description && <p style={{ margin: 0, lineHeight: '1.5' }}>{item.description}</p>}
                        {item.content && <div style={{ marginTop: '10px' }}>{item.content}</div>}
                      </div>
                    );
                  }

                  // === Стандартная карточка с контролируемой высотой изображения ===
                  return (
                    <div
                      key={itemIndex}
                      className="CardItem"
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      {item.image && (
                        <div
                          style={{
                            overflow: 'hidden',
                            ...item.imageWrapperStyle
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title || 'Изображение'}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover', // Обрезаем, чтобы заполнить
                              display: 'block',
                              ...item.imageStyle
                            }}
                          />
                        </div>
                      )}
                      {item.title && (
                        <h3 style={{ margin: '8px 0', fontSize: '16px', fontWeight: 500 }}>{item.title}</h3>
                      )}
                      {item.description && (
                        <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
            </div>
        ))}
      </div>
    );
  }
}