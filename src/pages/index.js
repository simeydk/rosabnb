import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonials from "../components/testimonials"
import Amenities from "../components/amenities"
import Gallery from "../components/gallery"
import Activities from "../components/activities"
import Awards from "../components/awards"
import BookNow from "./Booknow";
import Kids from "../components/kids"
import Contact from "../components/contact"
import Map from '../components/map'

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-center">
        <img src="/images/gallery/IMG_0612.jpg" alt=""/>
        <p className="italic mb-3">
          {"Situated in central Oudtshoorn, Rosa B&B offers unmatched comfort and tranquility. We have something for everyone here. Relax next to the swimming pool after enjoying a hearty South African breakfast. In the winter get cosy in front of the fireplace with one of our hundreds of books."}
        </p>
        <p className="italic mb-3">
          {"Every room boasts free WiFi, television, aircon and/or a heater."}
        </p>
        <Testimonials />
        <BookNow />
        <Amenities />
        <Gallery />
        <Awards />
        <Activities />
        <Kids />
        <Contact />
        <Map />
        

        {/* <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-gray-900"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p> */}
      </section>
    </Layout>
  );
}

export default IndexPage;
