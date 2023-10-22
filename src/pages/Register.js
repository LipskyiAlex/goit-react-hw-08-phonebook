import loginImg from '../login.svg';
import { Container, Header, Content, Image, Input, Button, Form, FormGroup, Footer } from 'pages/styles/auth.styled';

export const RegisterPage =() => {


    return (
<Container>
        <Header >Register</Header>
        <Content>
          <Image>
            <img src={loginImg} alt='register' />
          </Image>
          <Form>
            <FormGroup>
              <label htmlFor="username">Username</label>
              <Input type="text" name="username" placeholder="username" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <Input type="text" name="email" placeholder="email" />
            </FormGroup>
            <FormGroup >
              <label htmlFor="password">Password</label>
              <Input type="text" name="password" placeholder="password" />
            </FormGroup>
          </Form>
        </Content>
        <Footer>
          <Button type="button">
            Register
          </Button>
        </Footer>
      </Container>
   
    )
}
