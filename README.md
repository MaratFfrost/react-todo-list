# Todo List Application

This is a simple Todo List application built with React. It allows users to manage tasks by adding, deleting, and marking them as completed. The application also includes a filtering system for viewing tasks based on their status and priority.

## Features

- Add new tasks with a name, description, and priority level (Low, Medium, High).
- Mark tasks as completed or uncompleted.
- Delete tasks.
- Filter tasks based on their status (completed or not) and priority (low or high).
- Search tasks by name.

## Installation

To get started with this project, clone the repository and install the required dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todolist.git


todolist/
├── src/                        # Исходный код приложения
│   ├── components/              # Компоненты React
│   │   ├── AddTaskForm.js       # Компонент формы для добавления задач
│   │   ├── FiltersPanel.js      # Компонент панели фильтров
│   │   ├── Header.js            # Компонент для строки поиска
│   │   ├── TaskItem.js          # Компонент для отображения отдельных задач
│   │   ├── TaskList.js          # Компонент для отображения списка задач
│   ├── App.js                   # Главный компонент, управляющий состоянием
│   ├── index.js                 # Точка входа в приложение, рендерит App
│   └── styles.css               # Стили для приложения
├── .gitignore                   # Файл игнорирования для Git
├── package.json                 # Файл с зависимостями и настройками проекта
├── package-lock.json            # Файл с точными версиями зависимостей
├── README.md                    # Документация проекта (этот файл)
└── node_modules/                # Папка с установленными зависимостями
