import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import { WishListProvider } from "../../hooks/context";

const Home = () => {
  return (
    <WishListProvider>
      <NavBar />
      <Card />
    </WishListProvider>
  );
};

export default Home;
