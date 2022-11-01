import { WishListProvider } from "./hooks/context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <WishListProvider>
      <AppRoutes />
    </WishListProvider>
  );
}

export default App;
