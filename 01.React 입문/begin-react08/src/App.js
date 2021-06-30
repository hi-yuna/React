import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  
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

  const nextId = useRef(4);  // id가 3까지 넣었으니깐 4부터!

  const onCreate = () => {
    console.log(nextId.current);  // 4
    nextId.current += 1; // 기존값에 + 1
  }
  return (
    <UserList users={users} />
  )
}

export default App;