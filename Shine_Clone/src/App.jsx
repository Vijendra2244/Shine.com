import Applicants from "./Components/Applicants/Applicants";
import Comapny from "./Components/CompanyCool/Comapny";
import Conduct from "./Components/ConductHackathon/Conduct";
import CopyRight from "./Components/Copyright/CopyRight";
// import AllRoutes from "./Components/DomainJobs/AllRoutes/AllRoutes";
import Domain from "./Components/DomainJobs/AllRoutes/Domain";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LatestBlog from "./Components/LatestBlog/LatestBlog";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import Premium from "./Components/PremiumService/Premium";
import Remote from "./Components/RemoteJobs/Remote";
import Swiper from "./Components/Swiper/SwiperImage";
import Trending from "./Components/Trending/Trending";
import Walkin from "./Components/WalkinJobs/Walkin";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Trending />
      <Navigation />
      <Swiper />
      <Comapny />
      <Applicants/>
      <Remote/>
      <Walkin/>
      <Domain/>
      <Conduct/>
      <Premium/>
      <LatestBlog/>
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
