
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {

    
  return (
    <>
      <Header />
      <div className=' sm:mx-5 mx-2'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
