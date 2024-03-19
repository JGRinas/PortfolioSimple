import { I18nextProvider } from "react-i18next";
import i18 from "./config/i18";
const App = () => {
  return <I18nextProvider i18n={i18}></I18nextProvider>;
};

export default App;
