import outlet from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const MainLayout = () => {

    
  return (
    <>
      <Header />
      <outlet/>
      <Footer />
    </>
  )
}

export default MainLayout
