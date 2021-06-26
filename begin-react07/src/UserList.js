import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'yuna',
      email: 'ouna0223@naver.com'
    },
    {
      id: 2,
      username: 'tester01',
      email: 'tester01@example.com'
    },
    {
      id: 3,
      username: 'tester02',
      email: 'tester02@example.com'
    }
  ];

  return (
    <div>
        {
            users.map(
                user => (<User user={user} key={user.id} />)
            )
        }
    </div>
  );
}

export default UserList;