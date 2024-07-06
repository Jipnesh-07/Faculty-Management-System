import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Faculty from "scenes/Faculty";
import Students from "scenes/Students";
import CoursesEnrolled from "scenes/CoursesEnrolled";
// import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Weekly from "scenes/Weekly";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import Signup from "components/SignUp";
import SignIn from "components/Signin";
// import CoursesEnrolled from "scenes/CoursesEnrolled";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Faculty" element={<Faculty />} />
              <Route path="/Students" element={<Students />} />
              {/* <Route path="/customers" element={<Customers />} /> */}
              <Route path="/CoursesEnrolled" element={<CoursesEnrolled />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/overview" element={<Overview />} />
              <Route path="/Weekly" element={<Weekly />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<SignIn />} />
             </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
