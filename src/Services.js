import React from 'react';
import  {service_1_banner_image, service_2_banner_image,staff_1_image,staff_2_image,staff_3_image,service_1_11,
    service_1_12,service_1_13,service_2_21,service_2_22,service_2_23

} 
from './images';

function Services() {
    return (
        <div>
            
            <div id="service">
  <div className="section-heading" id="service1" >
    <h6 >Our Services & Offerings </h6>
  <div className="jumbotron jumbotron-fluid"id="service-01" style={{backgroundImage:`url(${ service_1_banner_image})`}} >
    <h6 >Service 1</h6>
    <div className="container">
      <div className="row">
      <div className="col-sm" >
      <div className="card" style={{height: "70%"}}>
        <div className="avatar">
          <img src={staff_1_image} alt="" />
      </div>
      <div className="card-heading">
          <h4>Heading</h4>
      </div>
        <img src={service_1_11} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">View Profile <i className="fa fa-instagram"></i></a>
          </div>

        </div>
        </div>
        <div className="col-sm" >
          <div className="card"style={{height: "70%"}}>
            <div className="avatar">
              <img src={staff_2_image} alt="" />
          </div>
          <div className="card-heading">
            <h4>Heading</h4>
        </div>
              <img src={service_1_12} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary"><i className="fa fa-instagram"></i> View Profile</a>
              </div>
  
            </div>
            </div>
            <div className="col-sm" >
              <div className="card" style={{height: "70%"}}>
                <div className="avatar">
                  <img src={staff_3_image} alt="" />
              </div>
              <div className="card-heading">
                <h4>Heading</h4>
            </div>
                  <img src={service_1_13} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View Profile <i className="fa fa-instagram"></i></a>
                  </div>
      
                </div>
                </div>
                </div>
     
    </div>
  </div>
  </div>

  <div className="section-heading" id="service2">
  
     
      <div className="jumbotron jumbotron-fluid" id="service-02" style={{backgroundImage:`url(${service_2_banner_image})`}} >
        <h6 >Service 2</h6>

        <hr/>
        <div className="container">
          <div className="row">
            <div className="col">
             <p className="service-blog"> We believe that food is an integral part of every community. Being a Syrian kitchen in New Glasgow, we bring our understanding of diversity and love for food to the people in the city.  We treat all our customers like family. We promise that you won’t have to wait too long to get your order on the table. We are proud to be a part of the dynamic culture of Pictou County and look forward to seeing you soon!</p>
            </div>
            <div className="col order-12">
              <div className="card-rev" style={{float: "right",marginRight: "2px"}} >
       
                <img src={service_2_21}  className="card-img-top" alt="..."/>
                <div className="overlay"></div>
                <div className="card-rev-body">
                  <h5 className="card-rev-title">Card title</h5>
                  <p className="card-rev-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-rev-body-a">
                  <a href="#" className="btn btn-primary">View </a>
                  <a href="#" className="btn btn-primary">Order</a>
                  </div>
                </div>
    
              </div>
            </div>
            </div>
            </div>

            <hr/>
            <div className="container">
              <div className="row">
            <div className="col">
            

              <div className="card-rev"  >
       
                <img src={service_2_22}  className="card-img-top" alt="..."/>
                <div className="overlay"></div>
                <div className="card-rev-body">
                  <h5 className="card-rev-title">Card title</h5>
                  <p className="card-rev-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-rev-body-a">
                  <a href="#" className="btn btn-primary">View </a>
                  <a href="#" className="btn btn-primary">Order </a>
                  </div>
                </div>
    
              </div>
            </div>
            <div className="col order-12">
              <p className="service-blog">  We believe that food is an integral part of every community.  We treat all our customers like family. We promise that you won’t have to wait too long to get your order on the table.
                 We are proud to be a part of the dynamic culture of Pictou County and look forward to seeing you soon!</p>
            </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
            <div className="col">
              <p className="service-blog"> We believe that food is an integral part of every community. We treat all our customers like family. We promise that you won’t have to wait too long to get your order on the table.
                 We are proud to be a part of the dynamic culture of Pictou County and look forward to seeing you soon!</p>
            </div>
            <div className="col order-12">
              <div className="card-rev" style={{float: "right",marginRight: "2px"}} >
       
                <img src={service_2_23} className="card-img-top" alt="..."/>
                <div className="overlay"></div>
                <div className="card-rev-body">
                  <h5 className="card-rev-title">Card title</h5>
                  <p className="card-rev-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="card-rev-body-a">
                  <a href="#" className="btn btn-primary">View </a>
                  <a href="#" className="btn btn-primary">Order </a>
                  </div>
                </div>
    
              </div>
            </div>
            </div>
            </div>
            <hr/>

            
            
          </div>
        </div>
        
        </div>


        </div>
    )
}

export default Services
