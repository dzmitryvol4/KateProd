import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dynamicCardWithCustom.css';

// Импортируем изображения
import albusHead from '../assets/allHeads/albusHead.jpg';
import fontHead from '../assets/allHeads/fontHead.jpg';
import pankyHead from '../assets/allHeads/pankyHead.jpg';

// Интерфейсы
interface CardItem {
  id?: string;
  title?: string;
  image?: string;
  description?: string;
  custom?: false;
  imageWrapperStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  order?: number;
  mobileOrder?: number; // ✅ Новое: порядок на мобильных
  position?: string;
}

interface CustomItem {
  custom: true;
  position?: 'left' | 'center' | 'right' | 'full';
  title?: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  order?: number;
  mobileOrder?: number; // ✅ Порядок на мобильных
}

type LayoutItem = CardItem | CustomItem;

interface RowConfig {
  cols: number;
  items: LayoutItem[];
}

const DynamicCardWithCustom: React.FC = () => {
  const navigate = useNavigate();

  const layout: RowConfig[] = [
    {
      cols: 2,
      items: [
        {
          id: '1',
          image: albusHead,
          imageWrapperStyle: { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' },
          imageStyle: { minWidth: '450px' },
          order: 1,
          mobileOrder: 3, // 📱 На мобильных — третий
        },
        {
          custom: true,
          position: 'left',
          title: 'Упаковка для крафтового пива ALBUS',
          description:
            'Упаковка для крафтового пива ALBUS вдохновлена весной и одним из её характерных ритуалов — побелкой деревьев. С наступлением тепла нижнюю часть стволов деревьев покрывают белой краской, защищая их от солнечных ожогов, перепадов температур и вредителей. Текстура дерева помогает передать натуральность и чистоту продукта.',
          style: { padding: '20px', margin: 'auto' },
          order: 2,
          mobileOrder: 1, // 📱 Первый на мобильных
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
          description:
            'Выставка «Music of data» посвящена методу представления данных через звук — сонификации. Посетители смогут познакомиться в чем заключается её метод, как она упрощает работу с данными и в каких сферах применяется. Экспозицию выставки составляют звуковые инсталляции и различные приборы, которые основаны на методе сонификации.',
          style: { padding: '20px', margin: 'auto' },
          order: 3,
          mobileOrder: 2, // 📱 Второй на мобильных
        },
        {
          id: '2',
          image: fontHead,
          imageWrapperStyle: { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' },
          imageStyle: { minWidth: '450px' },
          order: 4,
          mobileOrder: 4, // 📱 Четвёртый на мобильных
        },
      ],
    },
    {
      cols: 2,
      items: [
        {
          id: '3',
          image: pankyHead,
          imageWrapperStyle: { boxShadow: '0 4px 8px rgba(0,0,0,0.2)' },
          imageStyle: { minWidth: '450px' },
          order: 5,
          mobileOrder: 5,
        },
        {
          custom: true,
          position: 'left',
          title: 'На разогрев. Готовые блинчики',
          description:
            '«На разогрев» — готовые блины для студентов. Дизайн упаковки призван отразить близкий им мир, чтобы при покупке они испытывали эмоциональный отклик от взаимодействия с продуктом. Музыка — это то, что сопровождает каждого повседневно. Благодаря своему разнообразию, она отражает безумные ритмы жизни, в которых постоянно пребывает молодежь. Концепция упаковки основана на использовании абстрактной ритмичной графики. На каждой упаковке через характерные орнаменты передаются вкусы начинки, ассоциированные с различными музыкальными жанрами.',
          style: { padding: '20px', margin: 'auto' },
          order: 6,
          mobileOrder: 6,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="header_projects">
        <h2>Мои проекты и история</h2>
      </div>
      <button
                          onClick={() => navigate('/')}
                          style={{
                            marginBottom: '20px',
                            padding: '8px 16px',
                            background: '#000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          ← Назад
                    </button>

      {layout.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(450px, 1fr))`,
            width: 'auto',
          }}
          className="card-row"
        >
          {row.items
            .slice()
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((item, itemIndex) => {
              const pos = item.position || 'center';

              // ✅ Применяем mobileOrder в стиле
              const style: React.CSSProperties = {
                gridColumn: pos === 'full' ? '1 / -1' : 'auto',
                justifySelf: pos === 'left' ? 'start' : pos === 'right' ? 'end' : 'center',
                width:
                  pos === 'full'
                    ? '100%'
                    : pos === 'left' || pos === 'right'
                    ? '80%'
                    : '90%',
                marginLeft: pos === 'right' ? 'auto' : pos === 'left' ? 0 : 'auto',
                marginRight: pos === 'left' ? 'auto' : pos === 'right' ? 0 : 'auto',
                padding: '16px',
                borderRadius: '12px',
                ...('style' in item ? item.style : {}),
                order: item.order,
              };

              // 🔁 Если мобильное устройство — используем mobileOrder
              // Но так как мы не можем менять order в CSS из JS напрямую под медиазапрос — нужно в CSS
              // Поэтому добавим data-атрибут и переключимся на CSS
              const dataAttrs = {
                'data-order': item.order,
                'data-mobile-order': item.mobileOrder ?? item.order,
              };

              if ('custom' in item && item.custom) {
                return (
                  <div
                    key={itemIndex}
                    className={`CustomBlock ${item.className || ''}`}
                    style={style}
                    {...dataAttrs}
                  >
                    {item.title && <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>{item.title}</h3>}
                    {item.description && <p style={{ margin: 0, lineHeight: '1.5' }}>{item.description}</p>}
                    {item.content && <div style={{ marginTop: '10px' }}>{item.content}</div>}
                  </div>
                );
              }

              return (
                <div
                  key={itemIndex}
                  className="CardItem"
                  style={{
                    ...style,
                    textAlign: 'center',
                    cursor: item.id ? 'pointer' : 'default',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Клик сработал! ID:', item.id);
                    item.id && navigate(`/projects/${item.id}`);
                  }}
                  {...dataAttrs}
                >
                  {item.image && (
                    <div style={{ overflow: 'hidden', ...item.imageWrapperStyle }}>
                      <img
                        src={item.image}
                        alt={item.title || 'Изображение'}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          ...item.imageStyle,
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
};

export default DynamicCardWithCustom;