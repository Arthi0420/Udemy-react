
import image from "../assets/images/sale-image.jpeg"

function Categories() {

    return (
      <div>
        <div className="Categories">
          <p>Development</p>
          <p>Buisness</p>
          <p>IT & Software</p>
          <p>Personal Development</p>
          <p>Design</p>
          <p>Marketing</p>
        </div>
  
        <div className="sale-image">
          <img src={image} alt="Sale Image"></img>
          <div class="sale-image__offer">
              <h2>
                  Udemy Flash Sale! 24 hours to save.
              </h2>
              <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn.</p>
          </div>
  
        </div>
      </div>
    )
  }
  

  export default Categories