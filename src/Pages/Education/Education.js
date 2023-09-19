import React from "react";
import './Education.css';
const Education=()=>{
    return (
        <div className="education">
            <div className="education-container">
                {/* <div className="topanim"></div>
                <div className="leftanim"></div>
                <div className="rightanim"></div>
                <div className="bottomanim"></div> */}
                <div className="small-cont">


                <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="education-item">
        <h3>SAIVA BHANU KSHATRIYA COLLEGE, ARUPPUKOTTAI</h3>
        <p>June 2022</p>
        <p>B.Sc. in Maths with Computer Application</p>
        <p>GPA: 80.6%</p>
      </div>
    </div>
    <div class="carousel-item">
    <div className="education-item">
        <h3>GOVERNMENT HIGHER SECONDARY SCHOOL, SHENCOTTAI</h3>
        <p>April 2019</p>
        <p>Higher Secondary Education</p>
        <p>GPA: 70.6%</p>
      </div>
    </div>
    <div class="carousel-item">
    <div className="education-item">
        <h3>GOVERNMENT HIGHER SECONDARY SCHOOL, SHENCOTTAI</h3>
        <p>April 2017</p>
        <p>Secondary Education</p>
        <p>GPA: 88%</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
</div>


            </div>

        </div>
    )
}

export default Education;