import './EditProfile.css'
import undraw_profile_detail from '../assets/images//undraw_profile_details_f8b7.png'
const EditProfilePage = () => {
    return ( <section className="u-clearfix u-grey-5 u-section-1" id="sec-72eb">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout" >
          <div className="u-layout-row" >
            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1" src="">
              <div className="u-container-layout u-container-layout-1">
                <div className="u-form u-form-1">
                  <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                    <div className="u-form-email u-form-group">
                      <label for="email-2f83" className="u-form-control-hidden u-label"></label>
                      <input type="email" placeholder="Enter a valid email address" id="email-2f83" name="email" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required=""/>
                    </div>
                    <div className="u-form-group u-form-name">
                      <label for="name-2f83" className="u-form-control-hidden u-label"></label>
                      <input type="text" placeholder="Enter your Name" id="name-2f83" name="name" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required=""/>
                    </div>
                    <div className="u-form-date u-form-group u-form-group-3">
                      <label for="date-fbdf" className="u-form-control-hidden u-label"></label>
                      <input type="date" placeholder="MM/DD/YYYY" id="date-fbdf" name="DOB" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required=""/>
                    </div>
                    <div className="u-form-group u-form-select u-form-group-4">
                      <label for="select-e71b" className="u-form-control-hidden u-label"></label>
                      <div className="u-form-select-wrapper">
                        <select id="select-e71b" name="gender" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required="required">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z"></path></svg>
                      </div>
                    </div>
                    <div className="u-form-group u-form-select u-form-group-5">
                      <label for="select-18b5" className="u-form-control-hidden u-label"></label>
                      <div className="u-form-select-wrapper">
                        <select id="select-18b5" name="country" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required="required">
                          <option value="India">India</option>
                          <option value="America">America</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z"></path></svg>
                      </div>
                    </div>
                    <div className="u-form-group u-form-select u-form-group-6">
                      <label for="select-be44" className="u-form-control-hidden u-label"></label>
                      <div className="u-form-select-wrapper">
                        <select id="select-be44" name="FoodPreferences" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white">
                          <option value="Indian">Indian</option>
                          <option value="South Indian">South Indian</option>
                          <option value="Bengali">Bengali</option>
                          <option value="Gujarati">Gujarati</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z"></path></svg>
                      </div>
                    </div>
                    <div className="u-form-group u-form-partition-factor-2 u-form-group-7">
                      <label for="text-1841" className="u-form-control-hidden u-label"></label>
                      <input type="text" id="text-1841" name="weight" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required="required" placeholder="Weight"/>
                    </div>
                    <div className="u-form-group u-form-partition-factor-2 u-form-group-8">
                      <label for="text-7ea7" className="u-form-control-hidden u-label"></label>
                      <input type="text" placeholder="Height" id="text-7ea7" name="Height" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required="required"/>
                    </div>
                    <div className="u-form-group u-form-group-9">
                      <label for="text-2299" className="u-form-control-hidden u-label"></label>
                      <input type="text" id="text-2299" name="Password" className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-white" required="required" placeholder="Password"/>
                    </div>
                    <div className="u-align-center u-form-group u-form-submit">
                      <a href="#" className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-radius-4 u-btn-1">Update<br/>
                      </a>
                      <input type="submit" value="submit" className="u-form-control-hidden"/>
                    </div>
                    <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                    <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                    <input type="hidden" value="" name="recaptchaResponse"/>
                  </form>
                </div>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-layout-cell-2" src="">
              <div className="u-container-layout u-container-layout-2">
                <img className="u-image u-image-round u-radius-2 u-image-1" src={undraw_profile_detail} data-image-width="1070" data-image-height="709" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> );
}
 
export default EditProfilePage;