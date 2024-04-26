import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleCategorySelect = (category) => {
    onSelectCategory(category);
  };

  return (
    <div>
      <h2>Category Filter</h2>
      <button
        className={selectedCategory === 'All' ? 'selected' : ''}
        onClick={() => handleCategorySelect('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;