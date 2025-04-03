import React from "react";
import RegisterForm from "./RegisterForm";
import UserList from "./UserList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const HeadingText = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;

  h2 {
    font-size: 28px;
    color: #007bff;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  return (
    <Container>
      <HeadingText>
        <h2>Sudhanshu Developer</h2>
        <h3>How to Connect a React App with MySQL Database?</h3>
      </HeadingText>
      <Content>
        <Section>
          <RegisterForm />
        </Section>
        <Section>
          <UserList />
        </Section>
      </Content>
    </Container>
  );
}

export default App;
