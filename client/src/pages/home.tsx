import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { announcements } from "@/data/announcements";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/product-card";
import FeatureCard from "@/components/ui/feature-card";
import { features } from "@/data/features";
import { testimonials } from "@/data/testimonials";
import ContactPopup from "@/components/ui/contact-popup";
import React, { useState } from 'react';

const filters = ["World leaders talk on stemcell", "Company Founders", "Scientist behind it","Our team", "Members", "Well wishers", "All"];
const images = [
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134798/WhatsApp_Image_2025-06-05_at_15.02.39_2e09b0ca_pp2kmh.jpg",
    alt: "Gallery Image",
    category: "World leaders talk on stemcell",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749209437/WhatsApp_Image_2025-06-06_at_16.59.43_21e16510_wnnzti.jpg",
    alt: "Gallery Image",
    category: "World leaders talk on stemcell",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134747/WhatsApp_Image_2025-06-05_at_15.02.38_8a02bf30_h1v6ny.jpg",
    alt: "Gallery Image",
    category: "World leaders talk on stemcell",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749209622/WhatsApp_Image_2025-06-06_at_17.02.14_571087a9_luoomh.jpg",
    alt: "Gallery Image",
    category: "World leaders talk on stemcell",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134826/WhatsApp_Image_2025-06-05_at_15.03.40_4c9d45c3_qrhg8y.jpg",
    alt: "Gallery Image",
    category: "Company Founders",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134858/WhatsApp_Image_2025-06-05_at_15.03.40_6e392c76_wywvbn.jpg",
    alt: "Gallery Image",
    category: "Company Founders",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134886/WhatsApp_Image_2025-06-05_at_15.03.41_5b199c3b_jekhzw.jpg",
    alt: "Gallery Image",
    category: "Company Founders",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134880/WhatsApp_Image_2025-06-05_at_15.03.41_27aca256_zslzqk.jpg",
    alt: "Gallery Image",
    category: "Company Founders",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749134817/WhatsApp_Image_2025-06-05_at_15.03.36_d4793fdc_j86r59.jpg",
    alt: "Gallery Image",
    category: "Company Founders",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135305/WhatsApp_Image_2025-06-05_at_15.05.03_a7ad8d03_rdjptx.jpg",
    alt: "Gallery Image",
    category: "Scientist behind it",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135316/WhatsApp_Image_2025-06-05_at_15.05.03_025f0438_bmhole.jpg",
    alt: "Gallery Image",
    category: "Scientist behind it",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749210197/WhatsApp_Image_2025-06-06_at_17.12.24_839f0133_krlme2.jpg",
    alt: "Gallery Image",
    category: "Scientist behind it",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749210190/WhatsApp_Image_2025-06-06_at_17.12.24_5e1397e7_ynbiyv.jpg",
    alt: "Gallery Image",
    category: "Scientist behind it",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135348/WhatsApp_Image_2025-06-05_at_15.05.49_f1e2f3b2_wva7kp.jpg",
    alt: "Gallery Image",
    category: "Our team",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135376/WhatsApp_Image_2025-06-05_at_15.05.49_cde7bdaf_kqgh9o.jpg",
    alt: "Gallery Image",
    category: "Our team",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135359/WhatsApp_Image_2025-06-05_at_15.05.49_cc3ad970_xk3bai.jpg",
    alt: "Gallery Image",
    category: "Our team",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135427/WhatsApp_Image_2025-06-05_at_15.05.50_40a745e4_csae0j.jpg",
    alt: "Gallery Image",
    category: "Our team",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135432/WhatsApp_Image_2025-06-05_at_15.06.41_40dbc06f_ihatfu.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135459/WhatsApp_Image_2025-06-05_at_15.06.42_6075d591_vvwgni.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135462/WhatsApp_Image_2025-06-05_at_15.06.42_f4801a63_bne5es.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135465/WhatsApp_Image_2025-06-05_at_15.06.43_d5663d58_ihvobp.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135513/WhatsApp_Image_2025-06-05_at_15.06.43_8e848c56_vnirri.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135518/WhatsApp_Image_2025-06-05_at_15.06.46_242a33df_q4umeu.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135533/WhatsApp_Image_2025-06-05_at_15.06.46_922fd77d_mdtl1w.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135545/WhatsApp_Image_2025-06-05_at_15.06.47_8fce3cec_btouu1.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135564/WhatsApp_Image_2025-06-05_at_15.06.48_9bdf7ead_buyrgy.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135574/WhatsApp_Image_2025-06-05_at_15.06.48_11d419df_iwhvba.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135586/WhatsApp_Image_2025-06-05_at_15.06.50_c4221bb2_stzhj2.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135596/WhatsApp_Image_2025-06-05_at_15.06.49_15fca2d6_xv34aw.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135622/WhatsApp_Image_2025-06-05_at_15.06.51_fa6c5c1f_tnywm5.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135636/WhatsApp_Image_2025-06-05_at_15.06.50_215c725c_osni3k.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135648/WhatsApp_Image_2025-06-05_at_15.06.52_467e1e16_hotv71.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135652/WhatsApp_Image_2025-06-05_at_15.06.50_ba74a085_qz3mn2.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135654/WhatsApp_Image_2025-06-05_at_15.06.52_8e17f2a0_rolz8l.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135709/WhatsApp_Image_2025-06-05_at_15.06.53_b5522f6f_iwfsne.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135773/WhatsApp_Image_2025-06-05_at_15.06.53_d840832f_vrbsww.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135797/WhatsApp_Image_2025-06-05_at_15.06.54_9591cab6_wskviq.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135848/WhatsApp_Image_2025-06-05_at_15.06.54_f710aac4_uoqiou.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135865/WhatsApp_Image_2025-06-05_at_15.06.55_121e24d3_ge062x.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135892/WhatsApp_Image_2025-06-05_at_15.07.29_ec791c5f_tryzvt.jpg",
    alt: "Gallery Image",
    category: "Members",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135899/WhatsApp_Image_2025-06-05_at_15.07.27_4b9464fb_xapvun.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135922/WhatsApp_Image_2025-06-05_at_15.07.29_02a2a64f_kxgfc0.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135946/WhatsApp_Image_2025-06-05_at_15.07.29_fe2fa7a1_wptwwf.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135961/WhatsApp_Image_2025-06-05_at_15.07.31_15cecc45_nwqrj9.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749135973/WhatsApp_Image_2025-06-05_at_15.07.30_dfc2a1c3_lobrkx.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749136053/WhatsApp_Image_2025-06-05_at_15.07.31_c451b814_sh7ocr.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749136066/WhatsApp_Image_2025-06-05_at_18.25.17_90ad716d_ricmsy.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749211537/WhatsApp_Image_2025-06-06_at_02.18.52_f3208485_lrk9vg.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749136789/WhatsApp_Image_2025-06-05_at_15.07.31_1305a1a7_vedgam.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749212479/WhatsApp_Image_2025-06-05_at_15.07.32_ba0c99a7_uucrus.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749212471/WhatsApp_Image_2025-06-05_at_15.07.32_da381394_nu6mwu.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749212380/WhatsApp_Image_2025-06-05_at_15.07.27_d5124eed_oatruu.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
  {
    src: "https://res.cloudinary.com/dnqukw6fb/image/upload/v1749212368/WhatsApp_Image_2025-06-05_at_15.07.26_7aef7747_ht2ihx.jpg",
    alt: "Gallery Image",
    category: "Well wishers",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const [selected, setSelected] = useState("World leaders talk on stemcell");

  const filteredImages =
    selected === "All"
      ? images
      : images.filter((img) => img.category === selected);


  return (
    <div>
      <ContactPopup />
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <picture> 
            <source 
              media="(max-width: 768px)" 
              srcSet="https://res.cloudinary.com/dnqukw6fb/image/upload/v1749212830/WhatsApp_Image_2025-06-06_at_17.56.11_9f100045_jkipyz.jpg"
            />
            <img 
              src="https://res.cloudinary.com/dnqukw6fb/image/upload/v1748790685/WhatsApp_Image_2025-06-01_at_20.40.31_92999ba3_osyhvw.jpg"
              alt="Healthcare background" 
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
{/*             <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6" style={{ animationDelay: '1s' }}>
              <span className="text-green-300">Phyto</span> <span className="text-red-400">Science</span><br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 block">Presents</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Advanced Healthcare Solutions
            </p> */}
            <div className="flex button-container">
              <Link href="/products">
                <Button className="text-lg px-8 py-4 shadow-md hover:shadow-lg bg-primary-light hover:bg-primary text-white transition-transform hover:scale-105 duration-300">
                  Explore Products <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

       <section className="w-full px-4 py-10 bg-[#0b0b0b] text-white min-h-screen">
      {/* <h2 className="text-3xl sm:text-4xl text-center text-blue-400 font-bold mb-8">
        Gallery Showcase
      </h2> */}

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`px-5 py-2 rounded-full border-2 transition-all duration-300 font-semibold text-sm ${
              selected === filter
                ? "bg-blue-500 text-white border-blue-500 shadow-blue-500/50 shadow-md"
                : "border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-[#222] hover:scale-105 transition-transform duration-300 shadow hover:shadow-blue-500/20"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>
    </section>

      {/* Announcements Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary dark:text-primary-light uppercase tracking-wider">Latest Update</span>
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mt-2">
              Announcement
            </h2>
          </div>
          <div className="max-w-4xl mx-auto h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-4"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-semibold text-xl text-slate-800 dark:text-white">
                    {announcement.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(announcement.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">
              Why Choose My Health Book?
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              We are committed to providing the high quality food supliment with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="transform transition-all duration-500 hover:scale-105"
              >
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Products */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white">
              Our Products
            </h2>
            <Link href="/products" className="text-primary dark:text-primary-light font-medium flex items-center hover:underline">
              View All <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary dark:bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Ready to experience premium healthcare?
              </h2>
              <p className="text-white/80 mb-0">
                Discover our full range of products and special offers today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products">
                <Button className="bg-white hover:bg-slate-100 text-primary shadow-md hover:shadow-lg">
                  Browse Products
                </Button>
              </Link>
              <Link href="/offers">
                <Button variant="outline" className="bg-transparent hover:bg-primary-light/10 text-white border-white">
                  View Offers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
