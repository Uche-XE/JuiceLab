import styledComponents from 'styled-components'



const Container = styledComponents.div`
width: 100%;
height: 100%;
background-image: url("https://images.unsplash.com/photo-1597061209308-3393bb1c6b75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDQwfHxmcnVpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
background-repeat: no-repeat;
background-size: cover;
position: absolute;
background-position: bottom;
display: flex;
align-items: center;
justify-content: center;

`

const Wrapper = styledComponents.div`
width: 25%;
padding: 20px;
background-color: white;

`

const Title = styledComponents.h1`
font-size: 24px;
font-weight: 300;

`

const Form = styledComponents.form`
display: flex;
flex-direction: column;
`

const Input = styledComponents.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;

`

const Button = styledComponents.button`
width: 40%;
border: none;
padding: 15px 20px; 
background-color: teal;
color: white;
cursor: pointer;
`

const Link = styledComponents.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
margin-bottom: 10px;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
            
                <Button>LOGIN</Button>
                <Link>Forgot password?</Link>
                <Link>Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login