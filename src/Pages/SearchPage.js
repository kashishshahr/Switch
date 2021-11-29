import "./SearchPage.css";
import undraw_searching_p5ux from "../assets/images/undraw_searching_p5ux.png";
const SearchPage = () => {
  return (
    <section className="u-clearfix u-section-1" id="sec-ee0d">
      <div className="u-clearfix u-sheet u-sheet-1">
        <blockquote className="u-border-custom-color-1 u-text u-text-default u-text-1">
          <span style={{ fontSize: "1.5rem" }}> Switch Search</span>
          <br />
        </blockquote>
        <div className="u-form u-form-1">
          <form
            action="#"
            method="POST"
            className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
            source="custom"
            name="form"
            style={{ padding: 10 }}
          >
            <div className="u-form-group u-form-name">
              <label
                for="name-b31d"
                className="u-form-control-hidden u-label"
              ></label>
              <input
                type="text"
                id="name-b31d"
                name="name"
                className="u-border-1 u-border-custom-color-1 u-input u-input-rectangle u-radius-10 u-white"
                required=""
                placeholder="Search Food Item"
              />
            </div>
            <div className="u-align-right u-form-group u-form-submit">
              <a
                href="#"
                className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-1 u-radius-6 u-btn-1"
              >
                Search
                <br />
              </a>
              <input
                type="submit"
                value="submit"
                className="u-form-control-hidden"
              />
            </div>
            <div className="u-form-send-message u-form-send-success">
              {" "}
              Thank you! Your message has been sent.{" "}
            </div>
            <div className="u-form-send-error u-form-send-message">
              {" "}
              Unable to send your message. Please fix errors then try again.{" "}
            </div>
            <input type="hidden" value="" name="recaptchaResponse" />
          </form>
        </div>
        {/* <span className="u-icon u-icon-circle u-text-custom-color-1 u-icon-1">
          <svg
            className="u-svg-link"
            preserveAspectRatio="xMidYMin slice"
            viewBox="0 0 56.966 56.966"
          >
            <use
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="#svg-5818"
            ></use>
          </svg>
          <svg
            className="u-svg-content"
            viewBox="0 0 56.966 56.966"
            x="0px"
            y="0px"
            id="svg-5818"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
  s-17-7.626-17-17S14.61,6,23.984,6z"
            ></path>
          </svg>
        </span> */}
        <h4 className="u-text u-text-2">OR</h4>
        <a
          href="https://nicepage.dev"
          className="u-border-2 u-border-custom-color-1 u-btn u-btn-round u-button-style u-hover-custom-color-1 u-none u-radius-6 u-text-custom-color-1 u-text-hover-white u-btn-2"
        >
          
          <span style={{ fontWeight: 400 }}>
            <span style={{ fontWeight: 700 }}> Upload Image</span>
          </span>
        </a>
        <a
          href="https://nicepage.com/c/text-on-image-html-templates"
          className="u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-8 u-btn-3"
        >
          search
        </a>
        <img
          className="u-image u-image-default u-image-1"
          src={undraw_searching_p5ux}
          alt=""
          
          data-image-width="1344"
          data-image-height="958"
        />
      </div>
    </section>
  );
};

export default SearchPage;
