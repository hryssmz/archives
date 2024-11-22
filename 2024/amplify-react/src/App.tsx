// App.tsx
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./router";
import store from "./store";
import Fallback from "./pages/root/Fallback";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </Provider>
  );
}
