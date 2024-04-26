import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';

const CATEGORY = ['Work', 'Study', 'Personal'];
const TASK = [
  { text: 'Task 1', category: 'Work' },
  { text: 'Task 2', category: 'Study' },
  { text: 'Task 3', category: 'Personal' }
];

function App() {
  const [tasks, setTasks] = useState(TASK);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={['All', ...CATEGORY]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
      <NewTaskForm categories={CATEGORY} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;