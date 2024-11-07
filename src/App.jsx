import { ColorModeContext, useMode } from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes,Route } from 'react-router-dom'
import Topbar from './scence/glolbal/Topbar'
import Sidebar from './scence/glolbal/Sidebar'
import Dashboard from './scence/dashboard'
import Team from "./scence/team/Team";
import Invoices from './scence/invoices/Invoices'
import Contacts from './scence/contacts/Contacts'
import FormComponent from "./scence/form/FormComponent";
// import Bar from './scence/bar'
// import Line from './scence/line'
// import Pie from './scence/pie'
// import FAQ from './scence/faq'
// import Geography from './scence/geography'
// import Calendar from './scence/calendar'



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme }>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<FormComponent/>} />
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/line" element={<Line/>} /> */}
              {/* <Route path="/faq" element={<FAQ/>} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}
              {/* <Route path="/calendar" element={<Calendar/>} /> */}
              <Route />

            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
