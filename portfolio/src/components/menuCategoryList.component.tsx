import React, {useState} from 'react';
import '../styles/menuCategoryList.css'

const categories = [
    {id: 1, name: 'Упаковка', image: '/assets/panky/p1.jpg'},
    {id: 2, name: 'Шрифты', image: '/assets/fonts/f1.jpg'},
    {id: 3, name: 'Брендинг', image: '/assets/albus/a1.jpg'},

    ]

const MenuCategoryListComponent = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null) ;
       return (
        <div className="menu-category-list-container">
        <div className="menu-category-list">
            {categories.map((category) => (
                <div
                 key={category.id}
                 className="menu-category-item"
                 onMouseEnter={() => setHoveredCategory(category.image)}
                 onMouseLeave={() => setHoveredCategory(null)}><h1>{category.name}</h1></div>
                ))}
        </div>


        <div className="menu-category-preview">
            {hoveredCategory &&
            <img
            src={hoveredCategory}
            alt="Preview"
            loading="lazy"
            style={{
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            />
            }
        </div>
       </div>
    );
    }

export default MenuCategoryListComponent;