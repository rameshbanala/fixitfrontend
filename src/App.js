import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import UserServices from "./components/UserServices";
import UserWorkerOptions from "./components/UserWorkerOptions";
import UserWorkerProfile from "./components/UserWorkerProfile";
import UserBookings from "./components/UserBookings";
import UserProfile from "./components/UserProfile";
import UserHelp from "./components/UserHelp";
import UserFeedBack from "./components/UserFeedBack";
import WorkerPage from "./components/WorkerPage";
import WorkerBookings from "./components/WorkerBookings";
import WorkerPrfile from "./components/WorkerProfile";
import WorkerHelp from "./components/WorkerHelp";
import WorkerFeedback from "./components/WorkerFeedback";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  state = {
    showSuccessMessage: false,
  };

  onChangeSuccessMessage = () => {
    this.setState({ showSuccessMessage: true }, () => {
      setTimeout(() => {
        this.setState({ showSuccessMessage: false });
      }, 8000);
    });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              <Login showSuccessMessage={this.state.showSuccessMessage} />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup onChangeSuccessMessage={this.onChangeSuccessMessage} />
            }
          />
          <Route path="/user" element={<ProtectedRoute element={UserPage} reqUser="USER" />} />
          <Route path="/user/services" element={<ProtectedRoute element={UserServices} reqUser="USER" />} />
          <Route path="/user/services/:type" element={<ProtectedRoute element={UserWorkerOptions} reqUser="USER" />} />
          <Route path="/user/services/:type/:id" element={<ProtectedRoute element={UserWorkerProfile} reqUser="USER" />} />
          <Route path="/user/bookings" element={<ProtectedRoute element={UserBookings} reqUser="USER" />} />
          <Route path="/user/profile" element={<ProtectedRoute element={UserProfile} reqUser="USER" />} />
          <Route path="/user/help" element={<ProtectedRoute element={UserHelp} reqUser="USER" />} />
          <Route path="/user/feedback" element={<ProtectedRoute element={UserFeedBack} reqUser="USER" />} />
          <Route
            path="/admin"
            element={<ProtectedRoute element={AdminPage} reqUser="ADMIN" />}
          />
          <Route
            path="/worker"
            element={<ProtectedRoute element={WorkerPage} reqUser="WORKER" />}
          />
          <Route
            path="/worker/bookings"
            element={<ProtectedRoute element={WorkerBookings} reqUser="WORKER" />}
          />
          <Route
            path="/worker/profile"
            element={<ProtectedRoute element={WorkerPrfile} reqUser="WORKER" />}
          />
          <Route
            path="/worker/feedback"
            element={<ProtectedRoute element={WorkerFeedback} reqUser="WORKER" />}
          />
          <Route
            path="/worker/help"
            element={<ProtectedRoute element={WorkerHelp} reqUser="WORKER" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
