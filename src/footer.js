import react from 'react';

const Footer=()=>{

    return(
        <div>


<footer>
  <div className="container">
      <div className="row">
          <div className="col-lg-4 col-xs-12">
              <div className="right-text-content">
                      <ul className="social-icons">
                          <li ><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li ><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li ><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          <li ><a href="#"><i className="fa fa-instagram"></i></a></li>
                      </ul>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="logo">
                  <a href=""><img src="assets/images/white-logo.png" alt=""/></a>
                  <h6 className="logo">ABC Restaurant</h6>
                 <p style={{color:"#fff", fontFamily: "sans-serif"}}> Shaln Restaurant -The Syrian Kitchen</p>
                  
              </div>
          </div>
          <div className="col-lg-4 col-xs-12">
              <div className="left-text-content">
                  <p>© Copyright Shaln Restaurant.</p>
                  
                 
              </div>
          </div>
      </div>
  </div>
</footer>





        </div>
    )

}
export default Footer;