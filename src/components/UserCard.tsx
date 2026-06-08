import React from 'react';

type UserCardProps = {
  name: string;
};

const UserCard = ({ name }: UserCardProps) => {
  console.log('UserCard rendered');
  return (
    <div
      style={{
        border: '1px solid #211f1f',
        padding: '12px',
        marginTop: '12px',
      }}
    >
      <h3>User Card</h3>
      <p>Name: {name}</p>
    </div>
  );
};

export default React.memo(UserCard);
