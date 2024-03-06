/****************************************************************/
/**********            pages/Home      index.jsx          *******/
/****************************************************************/
import Gallery from '../../components/Cards';
import Layout from '../../layout';
  
function Home(){
    return (
        <div>
            <Layout>
                <Gallery/>
            </Layout>
        </div>
    )
}

export default Home