import React, { useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 25px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;





const Register = () => {


  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const nav=useNavigate()
  //const {isFetching,error}=useSelector((state)=>state.user)
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   Register(dispatch, { username,email,password });
  // };

  const registeruser= async (e)=>{
    e.preventDefault()
    // //username,email,password
    // const article = { title: 'React POST Request Example' };
    // axios.post('https://reqres.in/api/articles', article)
    //     .then(response => this.setState({ articleId: response.data.id }));
    const data={username:username,
      email:email,
      password:password}

      
      
    const response= await axios.post("http://localhost:5000/api/auth/register",data)
   const result=response.data
   console.log(result)
    nav("/")
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" onChange={function(e)
           {
            setUsername(e.target.value)
          console.log(e.target.value)
          }
            } />
          
          <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          <Input placeholder="confirm password" />
          <Button onClick={registeruser}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register