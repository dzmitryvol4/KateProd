import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../interfaces/projects';

export const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем id из URL

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Проект не найден</h2>
        <p>Попробуйте вернуться на главную.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: '900px',
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
      </button>

      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{project.title}</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        <strong>{project.year}</strong> · {project.category}
      </p>

      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '30px',
        }}
      />

      <p style={{ fontSize: '16px', lineHeight: '1.8' }}>{project.content}</p>
    </div>
  );
};