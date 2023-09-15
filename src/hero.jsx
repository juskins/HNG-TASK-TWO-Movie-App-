import play from './assets/Play.svg'
import imdb from './assets/imdb.png'
import tom from './assets/tom.png'



const Hero = ()=>{


     return (
          <div className="hero" style={{color:'#ccc', margin:'40px'}}>
               <h1 style={{color:'white',margin:'10px 0px'}}>John Wick 3: Parabellum</h1>
               <div className="flex" style={{width:'50%'}}>
                    <img className='smallimg' src={imdb} alt="" />
                    <p>860/100</p>
                    <img className='smallimg' src={tom} alt="" />

               </div>

               <p style={{margin:'10px 0px'}}>John wick is on the run after killing after killing a member of the international assasins guard and
                    with a $14 million price tag on his head, he is the target of hitmen and women everywhere.
               </p>
               <button style={{
                    backgroundColor:'#BE123C',
                    padding: '10px 10px',
                    borderRadius:'5px',
               }} className='flex btn'><img src={play} alt="" /> Watch Trailer</button>
          </div>
     )
}

export default Hero;