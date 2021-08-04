import styled from 'styled-components';

const App = () => {
  return (
    <StyledApp>
      <SectionHeader>
      </SectionHeader>
      <Footer>
        <ContactUs>
          <li>聯絡我們</li>
          <li>Discord</li>
          <li>wonderfood@gmail.com</li>
        </ContactUs>
      </Footer>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`;
const SectionContainer = styled.section`
  width: 100%;
  height: auto;
`;

const SectionHeader = styled(SectionContainer)`

`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 55px 0;
  background-color: #383838;
`;

const ContactUs = styled.ul`
  list-style-type: none; 
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  li {

  }
`;
export default App;
