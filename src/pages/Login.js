import loginImg from '../login.svg';
import {Container, Header, Content, Image, Form, FormGroup, Input, Footer,Button} from './styles/auth.styled';


export const LoginPage = () => {
    return  (
        <Container> 
        <Header>Login</Header>  
        <Content>   
          <Image className="image">  
            <img src={loginImg} alt='login'/>
          </Image>
          <Form className="form">
            <FormGroup className="form-group">
              <label htmlFor="username">Username</label>
              <Input type="text" name="username" placeholder="username" />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="password">Password</label>
              <Input type="password" name="password" placeholder="password" />
            </FormGroup>
          </Form>
        </Content>
        <Footer className="footer">
          <Button type="button" className="btn">
            Login
          </Button>
        </Footer>
      </Container>
    )
}

