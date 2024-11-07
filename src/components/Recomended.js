import rc1 from "../assets/images/c1.jpg"
import rc2 from "../assets/images/c2.jpg"
import rc3 from "../assets/images/c3.jpg"
import rc4 from "../assets/images/c4.jpg"


function Recommended(){
    return(<div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best dit</p>
      <div className="recommended__container">
          <div className="course-card">
              <img src={rc1} class="course-card__img" alt="one"></img>
              <h3>2024 Python Data Visaulisation Masterclass</h3>
              <p>Col Steele</p>
              <p>4.9 ⭐⭐⭐⭐</p>
              <p>449 <del>1999</del></p>
          </div>
  
          <div class="course-card">
              <img src={rc2} class="course-card__img" alt="two"></img>
              <h3>Web Development Boot canp 2024</h3>
              <p>Col Steele</p>
              <p>4.9 ⭐⭐⭐⭐</p>
              <p>449 <del>1999</del></p>
          </div>
  
          <div class="course-card">
              <img src={rc3} class="course-card__img" alt="three"></img>
              <h3>Basic to Advance Programming with EMC</h3>
              <p>Col Steele</p>
              <p>4.9 ⭐⭐⭐⭐</p>
              <p>449 <del>1999</del></p>
          </div>
  
          <div class="course-card">
              <img src={rc4} class="course-card__img" alt="four"></img>
              <h3>Master UI/UX Designing with Figma</h3>
              <p>Col Steele</p>
              <p>3.9 ⭐⭐⭐</p>
              <p>449 <del>1999</del></p>
          </div>
  
      </div>
  </div>
  )
  }

  
  export default Recommended