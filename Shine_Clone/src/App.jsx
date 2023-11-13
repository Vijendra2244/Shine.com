import AdityaBirla from "./Components/AdityaBirlaComponents/AdityaBirla";
import Applicants from "./Components/Applicants/Applicants";
import Comapny from "./Components/CompanyCool/Comapny";
import Conduct from "./Components/ConductHackathon/Conduct";
import CopyRight from "./Components/Copyright/CopyRight";
import Domain from "./Components/DomainJobs/AllRoutes/Domain";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import InfosysComponents from "./Components/Infosys_Components/InfosysComponents";
import LatestBlog from "./Components/LatestBlog/LatestBlog";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import PopularCourses from "./Components/PopularCourses/PopularCourses";
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
      <PopularCourses/>
      <LatestBlog/>
      <Footer />
      <CopyRight />
    </>
  )
}

export default App;
