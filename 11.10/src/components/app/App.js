import Hom_page from "../hom_page/hom_page";
import Header from "../header/header";
import Map_page from "../map_page/map_page";
import How_it_works from "../how_It_works_page/how_It_works_page";
import Use_cases from "../use_cases/use_cases";
import Developers from "../developers_page/developers";
import Maps from "../map/map";
import Partner from "../partner_page/partner";
import Agitation from "../agitation_page/agitation";
import Blog from "../blog_page/blog";
import Foot from "../foot/foot";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hom_page />
      <Map_page />
      <How_it_works />
      <Maps />
      <Developers />
      <Partner />
      <Agitation />
      <Blog />
      <Foot/>
    </div>
  )
}

export default App;
