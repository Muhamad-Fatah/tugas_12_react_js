import React from "react";
import { Button, Checkbox, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

function App() {
  return (
    <>
      <Grid verticalAlign="middle" style={{ height: "100vh" }} columns={3}>
        <Grid.Row centered>
          <Grid.Column>
            <Header textAlign="center" as="h2" color="teal">
              <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" /> Member Login
            </Header>
            <Segment>
              <Form>
                <Form.Input type="email"
                  placeholder="Email address"
                  icon="user" iconPosition="left"
                />
                <Form.Input type="password"
                  placeholder="Password"
                  icon="lock" iconPosition="left"
                />
                <Checkbox label="I agree to the Terms and Conditions" />
                <br /><br />
                <Button fluid color="teal">Login</Button>
              </Form>
            </Segment>
            <Message>Tidak Punya Akun? Silahkan <a href="/">Register</a></Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default App;
