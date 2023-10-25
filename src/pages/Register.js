import loginImg from '../login.svg';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth';
import {
  Container,
  Header,
  Content,
  Image,
  Input,
  Button,
  Form,
  FormGroup,
} from 'pages/styles/auth.styled';



export const RegisterPage = () => {

  const dispatch = useDispatch();
  const handleSubmit = e => {
     
    const {name,email,password} = e.target;

    const newUser = {

      name: name.value,
      email: email.value,
      password: password.value,
    }
    e.preventDefault();
       
      dispatch(createUser(newUser));
   

  };

  return (
    <Container>
      <Header>Register</Header>
      <Content>
        <Image>
          <img src={loginImg} alt="register" />
        </Image>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              placeholder="name"
              id="name"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
             type="text"
              name="email"
               placeholder="email" id="email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="text"
              name="password"
              placeholder="password"
              id="password"
            />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </Container>
  );
};
