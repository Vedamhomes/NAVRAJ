import React, { useState } from "react";
import style from "./style.css";
import Navbar from "../navbar";
import Footer from "../footer";
import UserInputModal from "../UserInputModal";
import Enquire from "../components/enquire";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Legacy = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);

  return (
    <div className="legacy">
      <Navbar setIsInputModalOpen={setIsInputModalOpen} />
      <div className="image_container">
        <img
          className="main_image"
          fetchpriority="high"
          decoding="async"
          src="main_img.jpg"
          alt=""
          data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
          data-no-retina=""
          data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg"
        />
      </div>

      <div className="legacy_container">
        <section className="info_container">
          <div className="info_container_left">
            <h1 className="info_container_left_heading">
              At Navraj Infratech, we recognize the profound impact of
              thoughtfully designed living spaces on quality of life.
            </h1>
            <img
              className="legacy_info_image"
              fetchpriority="high"
              decoding="async"
              src="https://navrajindia.com/wp-content/uploads/2024/05/about-navraj-infratech-1.jpg"
              alt=""
            />
          </div>
          <div className="info_container_right">
            <div className="info_sub_heading_content">
              <span className="info_sub_heading_content_one">
                Our unwavering commitment to providing exceptional residential
                solutions has led us to create thoughtfully crafted homes in the
                vibrant cosmopolitan city of Gurugram, National Capital Region.
                We view Gurugram as a vast canvas, ripe with opportunities to
                design and develop expansive residential and commercial spaces
                that offer exceptional value.
              </span>
              <span className="info_sub_heading_content_one">
                Drawing upon our extensive experience in land acquisition and
                the construction of meticulously planned residential projects in
                Gurugram's secondary market, we are thrilled to expand our
                horizons into the dynamic primary market. Our inaugural venture
                in this exciting arena includes two premium residential projects
                that embody our belief in providing our customers with
                larger-than-life living spaces that they can truly call home.
              </span>
              <span className="info_sub_heading_content_two">
                With robust experience in land-aggregation and construction of
                judiciously-designed residential projects in the secondary
                market of Gurugram, we have now stepped into the primary market
                of Gurugram with 2 life-based premium residential projects to
                begin with. Our approach is based on the belief that our
                customers deserve bigger ideas and bigger spaces that they can
                call home.
              </span>
            </div>
          </div>
        </section>

        <section className="info_container_2">
          <div className="info_container_2_box">
            <div className="info_container_2_left">
              <div className="info_container_2_left_p1">
                <h1 className="info_container_2_left_p1_heading">
                  How it all started?
                </h1>
                <p className="info_container_2_left_p1_content">
                  “From Farms to Homes”
                </p>
              </div>

              <div className="info_container_2_left_p2">
                <p className="info_container_2_left_p2_content">
                  Navraj Infratech's roots lie in the development of
                  agricultural lands and farmhouses. Building upon this
                  foundation, we ventured into providing land parcels to
                  renowned developers and constructing residential floors in
                  prime locations. Through these early experiences, we gained
                  invaluable insights into the often-overlooked disparity
                  between the lifestyle aspirations of our end-users and the
                  available options in the market.
                </p>
                <p className="info_container_2_left_p2_content">
                  A significant challenge we identified was the direct
                  correlation between larger living spaces, superior
                  construction quality, premium aesthetics, and timely delivery
                  with higher costs. This realization ignited our determination
                  to bridge this gap and address the pressing concerns of our
                  customers.
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="info_container_2_right"
                src="antalyas_gallery_001.jpg"
                alt="building"
              />
            </div>
          </div>
          <div className="info_container_2_left_p2_2">
            <p className="info_container_2_left_p2_content p2_second_content">
              The biggest concern was that cost was directly proportional to a
              bigger space, good quality of construction, premium-looking spaces
              and delivery timelines – and that was the beginning of the
              challenging probe to bridge the gap meeting the biggest concern.
            </p>
          </div>
        </section>

        <section className="info_container_3">
          <div className="mission_approach_conatiner">
            <div className="mission_approach_left_box">
              <h1 className="mission_approach_left_box_header">Mission</h1>
              <p className="mission_approach_left_box_content">
                We strive to redefine the concept of luxury living and working
                spaces, offering our customers premium experiences that are
                built on a foundation of quality and reliability.{" "}
              </p>
            </div>
            <div className="mission_approach_right_box">
              <h1 className="mission_approach_right_box_header">Approach</h1>
              <p className="mission_approach_right_box_content">
                We believe that quality, space, and affordability should not be
                mutually exclusive. Our approach involves innovative strategies
                to deliver premium living spaces at competitive prices, ensuring
                exceptional value for our customers.
              </p>
            </div>
          </div>
        </section>

        <section className="info_container_4">
          <div className="info_container_4_header_box">
            <h1 className="info_container_4_header_">
              How we make it big – brand values
            </h1>
          </div>
          <div>
            <Collapse bordered={false}>
              <Panel header="Uncompromising Excellence:" key="1">
                <p className="panel_p">
                  <b>Quality First: </b> We prioritize delivering exceptional
                  quality in every aspect of our work.
                </p>
                <p className="panel_p">
                  <b>Commitment to Perfection: </b> We strive for excellence in
                  all our endeavors.
                </p>
              </Panel>
              <Panel header="Collaborative Synergy:" key="2">
                <p className="panel_p">
                  <b>Teamwork Triumphs: </b> Our success is driven by the power
                  of collaboration and teamwork.
                </p>
                <p className="panel_p">
                  <b>Synchronized Efforts: </b> We work together seamlessly to
                  achieve our goals.
                </p>
              </Panel>
              <Panel header="Strategic Precision:" key="3">
                <p className="panel_p">
                  <b>Data-Driven Decisions: </b> We make informed decisions
                  based on thorough analysis and research.
                </p>
                <p className="panel_p">
                  <b>Meticulous Planning: </b> We meticulously plan and execute
                  our projects to ensure success.
                </p>
              </Panel>
              <Panel header="Continuous Innovation:" key="4">
                <p className="panel_p">
                  <b>Embracing Change: </b> We stay ahead of the curve by
                  embracing innovation and adapting to new trends.
                </p>
                <p className="panel_p">
                  <b>Pioneering Solutions: </b> We are committed to developing
                  innovative solutions that redefine the industry.
                </p>
              </Panel>
            </Collapse>
            ;
          </div>
        </section>
      </div>
      <Enquire setIsInputModalOpen={setIsInputModalOpen} />
      <Footer />

      {isInputModalOpen && (
        <UserInputModal
          isInputModalOpen={isInputModalOpen}
          setIsInputModalOpen={setIsInputModalOpen}
        />
      )}
    </div>
  );
};

export default Legacy;
