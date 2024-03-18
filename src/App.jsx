import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Activities from "./pages/Activities";
import Search from "./pages/Search";
import MySchedule from "./pages/MySchedule";
import MyScheduleDetails from "./pages/MyScheduleDetails";

import ClassDetails from "./pages/ClassDetails";
import NotFound from "./pages/NotFound";

// layouts
import RootLayout from "./layouts/RootLayout";



function App() {
    const { user } = useAuthContext()

    return <RouterProvider router={createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
    
                <Route index element={<Home />} />
                <Route path="/activities" >
                    <Route index element={<Activities />} />
                    <Route path=":classID" element={<ClassDetails />} />
                </Route>
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={user? <Navigate to="/" /> : <Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/my-sechdule" >
                    <Route index element={user?<MySchedule />: <Navigate to="/login" />} />
                    <Route path=":activityId" element={user?<MyScheduleDetails />:<Navigate to="/login" />} />
                </Route>
                <Route path="*" element={<NotFound />} />
    
            </Route>
        )
    )} />

}

export default App;