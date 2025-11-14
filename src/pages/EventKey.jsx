import React from 'react';

const ListRenderingExample = () => {
  const fruits = [
    { id: 1, name: " Apple" },
    { id: 2, name: " Banana" },
    { id: 3, name: " Grapes" },
    { id: 4, name: " Pineapple" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Fruit List</h2>
      <ul className="list-disc pl-6">
        {fruits.map((fruit) => (
          <li key={fruit.id} className="text-lg">
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRenderingExample;
