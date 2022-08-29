import styledComponents from 'styled-components'


const Container = styledComponents.div`
width: 100%;
height: 100%;
background-image: url("https://images.unsplash.com/photo-1611096265583-5d745206f2a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxmcnVpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
background-repeat: no-repeat;
background-size: cover;
position: absolute;
background-position: bottom;
display: flex;
align-items: center;
justify-content: center;

`

const Wrapper = styledComponents.div`
width: 40%;
padding: 20px;
background-color: white;

`

const Title = styledComponents.h1`
font-size: 24px;
font-weight: 300;

`

const Form = styledComponents.form`
display: flex;
flex-wrap: wrap;
`

const Input = styledComponents.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agreement = styledComponents.span`
font-size: 12px;
margin: 20px 0px;
`

const Button = styledComponents.button`
width: 40%;
border: none;
padding: 15px 20px; 
background-color: teal;
color: white;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the use and processing of my personal data in accordance to <b>PRIVACY POLICY</b>  
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register