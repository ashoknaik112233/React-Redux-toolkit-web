import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";
//we have to tell here where exactly we wnt to render our routes---using outlet component
const RootLayout = () => {
    return (
        <>
            <Provider store={store}>

                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    )
}

export default RootLayout;