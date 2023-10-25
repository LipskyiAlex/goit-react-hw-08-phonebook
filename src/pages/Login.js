import loginImg from '../login.svg';
import {Container, Header, Content, Image, Form, FormGroup, Input,Button} from './styles/auth.styled';
import { logIn } from 'redux/auth';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const handleSubmit = (e) => {

    e.preventDefault();

    const {email, password} = e.target;

      const userLogin = {
        email: email.value,
        password: password.value,
      }
      console.log(userLogin);
     
      dispatch(logIn(userLogin));
      
  }
    return  (
        <Container> 
        <Header>Login</Header>  
        <Content>   
          <Image >  
            <img src={loginImg} alt='login'/>
          </Image>
          <Form onSubmit={handleSubmit}>
            <FormGroup >
              <label htmlFor="email">Email</label>
              <Input type="text" name="email" placeholder="email" />
            </FormGroup>
            <FormGroup >
              <label htmlFor="password">Password</label>
              <Input type="password" name="password" placeholder="password" />
            </FormGroup>
            <Button type="submit">
            Login
          </Button>
          </Form>
        </Content>
      
        
      </Container>
    )
}

