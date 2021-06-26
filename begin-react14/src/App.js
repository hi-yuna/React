import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

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

  const onCreate = useCallback( () => {
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
  }, [username, email, users]);

  const onRemove = useCallback( id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback( id => {
    setUsers(users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  }, [users]);

  const count = useMemo( () => countActiveUsers(users), [users]);

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate} 
    />
    <UserList 
      users={users} 
      onRemove={onRemove} 
      onToggle={onToggle} 
    />
    <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;