import React from 'react';

function main(){
    return(
<section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>About Us</h2>
      </div>

      <div class="row content">
        <div class="col-lg-6">
          <p>
            Our website is designed to be compatible with popular screen readers, making it easier for individuals with visual impairments to navigate and access content.          </p>
          <ul>
            <li>
              <i class="ri-check-double-line"></i> We strive to include descriptive text and alternative text (alt text) for all images on our site. Alt text provides a textual description of images, allowing users with visual impairments to understand the content and context.
            </li>
            <li>
              <i class="ri-check-double-line"></i> We have implemented keyboard navigation features to facilitate easy browsing for individuals who rely on keyboard input instead of a mouse. 
            </li>
            <li>
              <i class="ri-check-double-line"></i> To enhance readability, our website allows users to adjust text size and contrast settings. You can find these options in the settings menu, providing a personalized viewing experience.
            </li>
          </ul>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
          <p>
            Forms on our website are designed to be accessible and user-friendly. Clear instructions and proper form labels are provided to assist users in filling out information accurately. Your feedback is valuable to us. If you encounter any accessibility issues or have suggestions for improvement, please contact us at [your contact email]. We are continually working to enhance the accessibility of our website. Our website complies with established web accessibility standards, including WCAG 2.1 (Web Content Accessibility Guidelines). These guidelines are set forth by the World Wide Web Consortium (W3C) to ensure a universally accessible online environment.
          </p>
          <a href="#" class="btn-learn-more">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>
          We understand the diverse needs of our visitors, including those with visual impairments. Our commitment to accessibility is woven into every aspect of the site, ensuring a seamless and enjoyable experience for everyone.

With compatibility for screen readers, keyboard navigation features, and adjustable text size and contrast settings, we strive to make our content accessible to a wide range of users. Alt text accompanies images, enhancing comprehension for those who rely on it.
        </p>
      </div>

      <ul
        id="portfolio-flters"
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-app">App</li>
        <li data-filter=".filter-card">Card</li>
        <li data-filter=".filter-web">Web</li>
      </ul>

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img">
            <img
              src="images/placeholder2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
            <a
              href="images/placeholder2.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="App 1"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="Test.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-img">
            <img
              src="images/placeholder2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <a
              href="images/placeholder2.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="Web 3"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="images/placeholder2.jpg"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img">
            <img
              src="images/placeholder2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>App 2</h4>
            <p>App</p>
            <a
              href="images/placeholder2.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="App 2"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="test.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-img">
            <img
              src="images/placeholder2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>Card 2</h4>
            <p>Card</p>
            <a
              href="images/placeholder2.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="Card 2"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="portfolio-details.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/portfolio-5.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>Web 2</h4>
            <p>Web</p>
            <a
              href="assets/img/portfolio/portfolio-5.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="Web 2"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="portfolio-details.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/portfolio-6.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>App 3</h4>
            <p>App</p>
            <a
              href="assets/img/portfolio/portfolio-6.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="App 3"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="portfolio-details.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/portfolio-7.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>Card 1</h4>
            <p>Card</p>
            <a
              href="assets/img/portfolio/portfolio-7.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="Card 1"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="portfolio-details.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/portfolio-8.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>Card 3</h4>
            <p>Card</p>
            <a
              href="assets/img/portfolio/portfolio-8.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="Card 3"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="portfolio-details.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-img">
            <img
              src="assets/img/portfolio/portfolio-9.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <a
              href="assets/img/portfolio/portfolio-9.jpg"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              title="Web 3"
              ><i class="bx bx-plus"></i
            ></a>
            <a
              href="portfolio-details.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-link"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default profile;
