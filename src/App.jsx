import * as React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import "./App.css"
import ManageTable from "./components/Managetable";
import HistoryTable from "./components/Historytable";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import Order from "./Order";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="manage" element={<ManageTable />} />
        <Route path="history" element={<HistoryTable />} />
        <Route path="add" element={<AddMenu />} />
        <Route path="edit" element={<EditMenu />} />
        <Route path="order/:id" element={<Order/>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "3rem",
  });

  return (
    <div style={{}}>
      <nav
        style={{
          paddingBottom: "1rem",
          paddingLeft: "2rem",
        }}
      >
        <div className="nav-bar-bg" >
          <div style={{ textAlign: "right"}}>
            <NavLink to="/history" style={style} className="nav-bar-text">
              History
            </NavLink>
            <NavLink to="/manage" style={style} className="nav-bar-text">
              Manage Restaurant
            </NavLink>
          </div>
        </div>
      </nav>
      {/* <div style={{ textAlign: "left", color: "#002F15" }}>
        <h1>Korean BBQ</h1>
        <h2>Manage Restaurant</h2>
      </div> */}
        <Outlet />
        <main style={{ padding: "1rem 0" }}>
      {/* <NavLink to="/add">
        <div style={{textAlign: "right"}}>
          <button className="add-button"> + Add Menu</button>
        </div>
      </NavLink> */}
        {/* <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav> */}
      </main>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h2>Manage</h2>
    </>
  );
};

export default App;