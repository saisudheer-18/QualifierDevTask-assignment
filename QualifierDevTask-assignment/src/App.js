import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount"
import Login from "./components/Login"
import Profile from "./components/Profile";
import BottomPagination from "./components/BottomPagination";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center pb-[60px] bg-[#fafafa]">
        
        <div className="relative mt-8 w-[375px] h-[890px] border border-[#e1e1e1] flex flex-col shadow-sm">
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<CreateAccount />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
      <BottomPagination />
    </BrowserRouter>
  );
}

export default App;
