
//Navbar Component
function Navbar() {
    return (<div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>
  
      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for anything here. Tech, Buisness, Art..."></input>
      </div>
  
      <div className="navbar__s3">
        <p>Courses</p>
        <p>My Learning</p>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
  
      </div>
  
  
    </div>
    )
  }

  export default Navbar