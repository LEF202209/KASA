/***************************************************************************/
/**********            pages/Home          index.jsx                 *******/
/***************************************************************************/
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Gallery from '../../components/Cards';
  
function Home(){
    return (
        <div>
            <Header/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default Home