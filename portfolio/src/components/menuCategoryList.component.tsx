import React, { useState } from 'react';
import '../styles/menuCategoryList.css';

const categories = [
    { id: 1, name: 'УПАКОВКА', image: '/assets/panky/p1.jpg' },
    { id: 2, name: 'ШРИФТЫ', image: '/assets/fonts/f1.jpg' },
    { id: 3, name: 'БРЕНДИНГ', image: '/assets/albus/a1.jpg' },
];

const MenuCategoryListComponent = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <div className="menu-category-list-container">
            <div className="menu-category-list">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="menu-category-item"
                        onMouseEnter={() => setHoveredCategory(category.image)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        style={
                            hoveredCategory === category.image
                                ? { '--preview-image': `url(${category.image})` } as React.CSSProperties
                                : {}
                        }
                    >
                        <h1>{category.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuCategoryListComponent;