
import MyImage from './images/w1.jpg';
import MyImage2 from './images/w2.jpg';
function About() 
{

    return (<>  
            
            {/* <div class="features" id="features"> */}
		<div className="container">
			<h1 >Amazing features</h1>
		  
				<div>
					<table>
						<tr>
						<td>
							<img src={MyImage} alt=""/>	
							</td>
							<td>
							<h3 className="red-text">WE OFFER QUICK & POWERFUL SOLUTION FOR TRANSPORT</h3>
					<p>  Ut fringilla euismod sagittis. Cras semper ante sapien, in ornare nisi euismod eu.. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In pellentesque, lectus at auctor luctus, lacus nibh dignissim ante. <span>Phasellus vestibulum velit sed nisi ultricies scelerisque. Vivamus ligula mauris, euismod in dictum id.</span></p>
							</td>
							
						</tr>
				
                    <tr>
                      <td>
					  <h3 className="red-text">CARGO SHIPPING AVAILABLE AT GOOD DISCOUNTS</h3>
					  <p>Ut fringilla euismod sagittis. Cras semper ante sapien, in ornare nisi euismod eu.. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In pellentesque, lectus at auctor luctus, lacus nibh dignissim ante. <span>Phasellus vestibulum velit sed nisi ultricies scelerisque. Vivamus ligula mauris, euismod in dictum id.</span></p>

					  </td>
					  <td>
					  <img src={MyImage2} alt=""/>

					  </td>
					</tr>
					</table> 
					 </div>
					 </div>
{/* </div> */}
                
                {/* <br/><br/><br/><br/><br/><br/>
                <h1>
                    This is about us!
                </h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            </>);
}

export default About;