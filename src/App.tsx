import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '2rem' }}>
        <h1>RPP Application</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
