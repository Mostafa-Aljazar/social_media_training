import React from 'react';

export default function Home() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum harum labore, aliquid atque, ducimus placeat consequuntur aperiam porro ipsa tenetur ipsum possimus aspernatur tempore reprehenderit quibusdam. Delectus, optio totam!';

  return (
    <div className='flex flex-col justify-center items-center gap-10 space-y-4!!bg-amber-400 p-4 w-full h-full'>
      {Array(50)
        .fill('')
        .map((_, index) => (
          <p key={index}>
            Item {index + 1}: {lorem}
          </p>
        ))}
    </div>
  );
}
