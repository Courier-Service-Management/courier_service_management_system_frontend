function Contact() 
{
    return (<>  

	<center>
		<div >
				<h5 className="f">Contact Info</h5>
		<div id="contact">
				<div >
					<h6 className="font">  Contact us</h6>
					<p>14 Tottenham Road,<br></br> London, England.</p>
					<p><a href="mailto:info@example.com"  >mail@example.com</a></p>
					<h6 >Opening Hours</h6>
					<p>Monday-Saturday</p>
					<span>7.00AM-10.00PM</span>
						<a  href="" data-toggle="modal" data-hover="LOGIN">Send Message</a>
				</div>
		</div>
			<iframe className="w" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.2508055091607!2d-0.07901828417095903!3d51.54529987964132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c91f36ba6cb%3A0xa3353c086b61a5e4!2s14+Tottenham+Rd%2C+London+N1+4EP%2C+UK!5e0!3m2!1sen!2sin!4v1484802856551" ></iframe>
		</div>
		</center>
	
	<div clas id="myModal1" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
				</div> 
				<div class="modal-body login-page ">   
									<div class="login-top sign-top">
										<div class="agileits-login">
										<h5>Send A Message</h5>
										<form action="#" method="post">
											<input type="text" name="name" placeholder="Name" required=""/>
											<input type="text" name="Email" placeholder="Email" required=""/>
											<input type="text" name="Subject" placeholder="Subject" required=""/>
											<textarea  name="your message" placeholder="Your message" required="" ></textarea>
											<div class="w3ls-submit"> 
												<input type="submit" value="Send Message"/>  	
											</div>	
										</form>

										</div>  
									</div>
						</div>  
				</div> 
			</div>
		</div>

            </>);
}

export default Contact;