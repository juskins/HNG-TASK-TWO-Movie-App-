


const Footer = ()=>{


     return (
          <footer style={{
               textAlign:'center',
               margin:'90px auto 0px',
               width:'40%'
          }}>
               <div className="socials">
               <i className="fab fa-instagram"></i>
               <i className="fab fa-facebook"></i>
               <i className="fab fa-youtube"></i>
               <i className="fab fa-twitter"></i>

               </div>

               <div className="tac socials" style={{margin:'20px 0px'}}>
                    <h3>Conditions of use</h3>
                    <h3>Privacy & Policy</h3>
                    <h3>Press Room </h3>
               </div>

               <div className="info socials">
                    <p> &copy;2021 MovieBox by Adriana Eka Prayudha</p>
               </div>
          </footer>
     )
}


export default Footer;