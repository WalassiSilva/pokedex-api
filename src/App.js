
import { ThemeProvider } from './constexts/theme-context'
import { createGlobalStyle } from 'styled-components';
import { Router } from './router'
import { Container } from './components/container';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
}



const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li, ul {
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit;
}
`;
export default App;