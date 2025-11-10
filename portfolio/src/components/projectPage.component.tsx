import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../interfaces/projects';

// Интерфейс для блоков контента
interface ContentBlock {
  type: 'text' | 'image';
  content: string; // для text — текст, для image — URL изображения
  position: 'left' | 'right' | 'full'; // расположение
  size?: 'small' | 'medium' | 'large'; // размер изображения
  textAlignment?: 'left' | 'center' | 'right'; // выравнивание текста
}

// Тип проекта с блочной структурой
interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  contentBlocks: ContentBlock[];
}

// Функциональный компонент
const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p.id === id) as Project | undefined;

  if (!project) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Проект не найден</h2>
        <button onClick={() => window.history.back()} style={{ marginTop: '10px' }}>
          ← Назад
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <button
        onClick={() => window.history.back()}
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

      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{project.title}</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        <strong>{project.year}</strong> · {project.category}
      </p>

      {/* Рендерим блоки */}
      {project.contentBlocks.map((block, index) => {
        if (block.type === 'image') {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent:
                  block.position === 'left'
                    ? 'flex-start'
                    : block.position === 'right'
                    ? 'flex-end'
                    : 'center',
                marginBottom: '30px',
              }}
            >
              <img
                src={block.content}
                alt={`Изображение проекта ${project.title}`}
                loading="lazy"
                style={{
                  width:
                    block.size === 'small'
                      ? '300px'
                      : block.size === 'large'
                      ? '100%'
                      : '600px',
                  maxHeight: '600px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </div>
          );
        }

        if (block.type === 'text') {
          return (
            <div
              key={index}
              style={{
                textAlign: block.textAlignment || 'left',
                marginBottom: '30px',
                lineHeight: '1.8',
                fontSize: '16px',
                maxWidth: block.position === 'full' ? '100%' : '800px',
                margin: '0 auto 30px',
              }}
            >
              <p>{block.content}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ProjectPage;