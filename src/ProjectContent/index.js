import React from "react";
import styles from "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectContent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="prject_content_continer" id="project_amenities">
      <section className="project_content_section">
        <div className="section_one_header">
          <h1>Project Artistic Impressions</h1>
          <p>
            Each property in our portfolio is a testament to luxury and
            sophistication. Our exclusive properties offer unparalleled elegance
            and the finest amenities.
          </p>
        </div>
        <div className="section_one_body">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={"mobile"}
            itemClass="carousel-item-padding-40-px"
          >
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_001.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_002.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_003.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_004.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_004.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_005.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_008.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_009.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_010.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_011.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_012.jpg"
              />
            </div>
            <div className="prject_image_list">
              <img
                className="image_item"
                alt="image"
                src="antalyas_gallery_013.jpg"
              />
            </div>
          </Carousel>
        </div>
      </section>
      <section className="project_content_section">
        <div className="section_one_header section_two_header">
          <h1>Curated Collection of Exquisite Sports Amenities</h1>
          <p>
            Our exquisite sports amenities offer luxury and functionality, with
            state-of-the-art facilities for fitness, swimming, tennis, golf, and
            more, providing a refined sporting experience.
          </p>
        </div>
        <div className="section_one_body">
          <Carousel
            draggable={false}
            arrows={true}
            responsive={responsive}
            ssr={true} 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1800}
            keyBoardControl={true}
            transitionDuration={800}
            containerClass="carousel-container"
            deviceType={"mobile"}
            itemClass="carousel-item-padding-40-px"
            slidesToSlide={1}
            swipeable={true}
            centerMode={false}
          >
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_badminton_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_basket_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_bowling_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_cricket_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_cycling_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_kids_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_skate_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_squash_navraj.jpg"
              />
            </div>
            <div className="prject_image_list second_list">
              <img
                className="image_item seond_img_item"
                alt="image"
                src="sports_tennis_navraj.jpg"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default ProjectContent;
