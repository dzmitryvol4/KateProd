import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../interfaces/projects';

interface ContentBlock {
  type: 'text' | 'image';
  content: string;
  position: 'left' | 'right' | 'full' | 'half-left' | 'half-right';
  size?: 'small' | 'medium' | 'large';
  textAlignment?: 'left' | 'center' | 'right';
}

interface ProjectWithBlocks {
  id: string;
  title: string;
  year: string;
  category: string;
  content: string;
  contentBlocks?: ContentBlock[];
}

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p.id === id) as ProjectWithBlocks | undefined;

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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
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

      {/* Контейнер для группировки блоков */}
      <div>
        {project.contentBlocks?.map((block, index) => {
          // Обработка пары "half-left" и "half-right" — оборачиваем в строку
          if (block.position === 'half-left') {
            const nextBlock = project.contentBlocks?.[index + 1];

            if (nextBlock?.position === 'half-right') {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '30px',
                    width: '100%',
                  }}
                >
                  {/* Левый блок */}
                  <div style={{ flex: '1', textAlign: block.textAlignment || 'left' }}>
                    {block.type === 'text' && <p>{block.content}</p>}
                    {block.type === 'image' && (
                      <img
                        src={block.content}
                        alt="left"
                        style={{
                          width: '100%',
                          maxHeight: '500px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                        }}
                      />
                    )}
                  </div>

                  {/* Правый блок */}
                  <div style={{ flex: '1', textAlign: nextBlock.textAlignment || 'left' }}>
                    {nextBlock.type === 'text' && <p>{nextBlock.content}</p>}
                    {nextBlock.type === 'image' && (
                      <img
                        src={nextBlock.content}
                        alt="right"
                        style={{
                          width: '100%',
                          maxHeight: '500px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            }
          }

          // Пропускаем "half-right" — он уже обработан выше
          if (block.position === 'half-right') {
            return null;
          }

          // Обычные блоки
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
                  alt={`Изображение ${index}`}
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
                  onError={(e) => {
                    console.error('Изображение не загружено:', block.content);
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
                  margin: '0 auto',
                }}
              >
                <p>{block.content}</p>
              </div>
            );
          }

          return null;
        })}
      </div>

      {!project.contentBlocks && project.content && (
        <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
          <p>{project.content}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;