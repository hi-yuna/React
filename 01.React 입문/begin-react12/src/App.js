import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'yuna',
      email: 'ouna0223@naver.com',
      active: true
    },
    {
      id: 2,
      username: 'tester01',
      email: 'tester01@example.com',
      active: false
    },
    {
      id: 3,
      username: 'tester02',
      email: 'tester02@example.com',
      active: false
    }
  ]);


  const nextId = useRef(4);  // id가 3까지 넣었으니깐 4부터!

  const onCreate = () => {
    console.log(nextId.current);  // 4
    const user = {
      id: nextId.current,
      username,
      email
    };
    
    //setUsers([...users, user]);
    // concat 사용
    setUsers(users.concat(user));
    
    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1; // 기존값에 + 1
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  };

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}

export default App;