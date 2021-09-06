import React from 'react';
import {
    product_banner_image,menu_item_image_1,menu_item_image_2,
    menu_item_image_3,menu_item_image_4,
    menu_item_image_5,menu_item_image_6,
    menu_item_image_7,menu_item_image_8,menu_item_image_9
} 
    from"./images";

function Products() {
    return (
        <div>
            
            <section style={{marginTop: "100px"}}>
    <div className="jumbotron jumbotron-fluid" id="products" style={{ backgroundImage: `url(${product_banner_image})`}}>
      <br/>
  <div className="main" id="product">
   

      <div className="section-heading" style={{marginTop: "50px"}}>
      <h6>Our Products</h6>
      </div>
  
  <div className="row">
    <div className="col-sm">
        <div className="card" style={{height:"500px"}}>
            <img src={menu_item_image_1} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View </a>
              <a href="#" className="btn btn-primary">Order</a>
              </div>
            </div>


          </div>


    </div>
    <div className="col-sm">
        <div className="card" style={{height:"500px"}}>
            <img src={menu_item_image_2}className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View </a>
              <a href="#" className="btn btn-primary">Order </a>
              </div>
            </div>


          </div>


    </div>
    <div className="col-sm">
        <div className="card" style={{height:"500px"}}>
            <img src={menu_item_image_3} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View</a>
              <a href="#" className="btn btn-primary">Order </a>
              </div>
            </div>

          </div>


    </div>
  </div>
  </div>


 
  <div className="main">
  <div className="row">
    <div className="col-sm">
        <div className="card"  style={{height:"500px"}}>
            <img src={menu_item_image_4} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View </a>
              <a href="#" className="btn btn-primary">Order </a>
              </div>
            </div>


          </div>


    </div>
    <div className="col-sm">
      <div className="card"  style={{height:"500px"}}>
          <img src={menu_item_image_5} className="card-img-top" alt="..."/>
          <div className="overlay"></div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="card-body-a">
            <a href="#" className="btn btn-primary">View </a>
            <a href="#" className="btn btn-primary">Order </a>
            </div>
          </div>

        </div>


  </div>
  
    <div className="col-sm">
        <div className="card"  style={{height:"500px"}}>
            <img src={menu_item_image_6} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View</a>
              <a href="#" className="btn btn-primary">Order</a>
              </div>
            </div>

          </div>


    </div>
  </div>
  </div>

  <div className="main">

    
  <div className="row">
    <div className="col-sm">
        <div className="card"  style={{height:"500px"}}>
            <img src={menu_item_image_7} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View </a>
              <a href="#" className="btn btn-primary">Order </a>
              </div>
            </div>


          </div>


    </div>
    <div className="col-sm">
        <div className="card"  style={{height:"500px"}}>
            <img src={menu_item_image_8} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View</a>
              <a href="#" className="btn btn-primary">Order</a>
              </div>
            </div>


          </div>


    </div>
    <div className="col-sm">
        <div className="card"  style={{height:"500px"}}>
            <img src={menu_item_image_9} className="card-img-top" alt="..."/>
            <div className="overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="card-body-a">
              <a href="#" className="btn btn-primary">View </a>
              <a href="#" className="btn btn-primary">Order </a>
              </div>
            </div>

          </div>


    </div>
  </div>
  </div>
  </div>
  

  </section>
  </div>



        
    )
}

export default Products
