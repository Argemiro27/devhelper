
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import DiffChecker from './pages/diffchecker';
import "bootstrap/dist/css/bootstrap.min.css"
import EditorCodigo from './pages/editorcodigo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/diffchecker" element={<DiffChecker/>}/>
        <Route path="/editorcodigo" element={<EditorCodigo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
