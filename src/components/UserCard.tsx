import React from 'react';

type UserCardProps = {
  name: string;
};

const UserCard = ({ name }: UserCardProps) => {
  console.log('UserCard rendered');
  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-bold text-slate-950">Memoized User Card</h3>
      <p className="mt-2 text-sm text-slate-600">Name: {name}</p>
    </div>
  );
};

export default React.memo(UserCard);
