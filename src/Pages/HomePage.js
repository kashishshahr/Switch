
import './HomePage.css'
import undrawMint from '../assets/images/undraw_mint_tea_7su01.png';
import undrawArtificial from '../assets/images/undraw_Artificial_intelligence_re_enpp.png';
import undrawBreakFast from '../assets/images/undraw_breakfast_psiw.png';
import undrawGoals from '../assets/images/undraw_Personal_goals_re_iow7.png';
import SignUpButton from '../MyComponents/SignUpButton/SignUpButton';
const HomePage = () => {
    return ( 
    <div>
    <section class="u-clearfix u-section-1" id="sec-728f">
      <div class="u-align-left u-clearfix u-sheet u-sheet-1">
        <img class="u-image u-image-default u-image-1" src={undrawMint} alt="" data-image-width="1346" data-image-height="909"/>
        <h1 class="u-text u-text-default u-title u-text-1">
            Switch helps you
            <br/>
            to transform your unhealthy lifestyle
            <br/>
            into a&nbsp;
            <br/>
            Healthy Lifestyle.
        </h1>
        <SignUpButton/>
      </div>
      </section>
    <section class="u-align-center u-clearfix u-grey-5 u-section-2" id="sec-1704">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h4 class="u-text u-text-default u-text-1"> Why is it so great?</h4>
        <p class="u-text u-text-2">The purpose of this project is to maintain the healthy lifestyle of the people. The main purpose is to create a healthy diet chart using the information entered by the user. Users can also get detailed information about the particular dish by uploading its image or searching by its name. Moreover, Users are also feasible to make some changes in diet charts according to their needs.&nbsp;</p>
        <a href="#" class="u-btn u-btn-rectangle u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-palette-2-base u-radius-0 u-btn-1">Learn more</a>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-section-3" id="sec-5448">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1">
          <div class="u-gallery-inner u-gallery-inner-1">
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="1088" data-image-height="546">
                <img class="u-back-image u-expanded" src={undrawArtificial} alt=""/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-1">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="1128" data-image-height="645">
                <img class="u-back-image u-expanded" src={undrawBreakFast}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-2">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
            <div class="u-effect-fade u-gallery-item">
              <div class="u-back-slide" data-image-width="965" data-image-height="748">
                <img class="u-back-image u-expanded" src={undrawGoals}/>
              </div>
              <div class="u-over-slide u-shading u-over-slide-3">
                <h3 class="u-gallery-heading"></h3>
                <p class="u-gallery-text"></p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="u-text u-text-1">Food Info Analyzer</h2>
        <h2 class="u-text u-text-default u-text-2"> Food Image recognizer</h2>
        <h2 class="u-text u-text-3">Diet Genrator</h2>
        <div class="u-effect-fade u-gallery-item u-gallery-item-4">
          <div class="u-back-slide" data-image-width="1128" data-image-height="645">
            <img class="u-back-image u-expanded" src="images/undraw_breakfast_psiw.png" alt=""/>
          </div>
          <div class="u-over-slide u-shading u-over-slide-4">
            <h3 class="u-gallery-heading">

            </h3>
            <p class="u-gallery-text"></p>
          </div>
        </div>
      </div>
    </section>
    
    </div> 
    );
}
 
export default HomePage;