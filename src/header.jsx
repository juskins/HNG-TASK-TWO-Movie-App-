import headerImage from './assets/Poster.svg';
import Hero from './hero';
import Navbar from './navbar';
const Headers = ()=>{
  

  return (
    <div className="header" style={{
      backgroundImage: `url(${headerImage})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      width: '100%', 
      minHeight: '550px',
    }}>
      <Navbar />
      <Hero />
    </div>
  )
}
export default Headers;