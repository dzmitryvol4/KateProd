import { Box, Card, CardContent, Typography } from '@mui/material';
import { Component } from 'react';

export class ProjectsComponent extends Component {
  public cardArray = [
    {
      name: "Project Alpha",
      description: "Пространственный анализ ландшафта и проектирование экологически устойчивых зон.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Beta",
      description: "Оптимизация процессов производства и снижение углеродного следа предприятий.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Gamma",
      description: "Анализ спроса и предложение на рынке недвижимости в регионе.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Delta",
      description: "Создание цифровых продуктов для дистанционного образования и тренингов.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Epsilon",
      description: "Развитие программного обеспечения для автоматизации маркетинга и продаж.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Zeta",
      description: "Разработка мобильного приложения для оценки психоэмоционального состояния.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Eta",
      description: "Повышение эффективности цепочек поставок и логистических маршрутов.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Theta",
      description: "Исследование новых перспективных рынков сбыта продукции.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Iota",
      description: "Продвижение инновационных методов анализа данных и машинного обучения.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Kappa",
      description: "Организация мероприятий и конференций международного масштаба.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Lambda",
      description: "Комплексная оценка экологического воздействия промышленных производств.",
      image: "https://via.placeholder.com/400.svg"
    },
    {
      name: "Project Mu",
      description: "Внедрение эффективных методик управления качеством и рисками.",
      image: "https://via.placeholder.com/400.svg"
    }
  ];

  render(): any {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          gap: '20px', // Равномерное расстояние между карточками
        }}
      >
        {this.cardArray.map((project, idx) => (
          <Card
            key={`card-${idx}`}
            sx={{
              maxWidth: 'calc(33.33% - 20px)', // Третья часть ширины родителя минус отступ
              width: '400px',
              height: '400px',
              p: 4, // Внутренний отступ
              boxShadow: 4,
              borderRadius: 4,
              mb: 2, // Отступ снизу
            }}
          >
            <CardContent>
              <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto'}}/>
              <Typography variant="h4" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }
}