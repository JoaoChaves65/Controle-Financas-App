import { createRoot } from "react-dom/client";
import App from "./component/App";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
