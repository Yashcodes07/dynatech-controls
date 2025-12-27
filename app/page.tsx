import LeadershipSlider from "@/components/Leadershipslider/page";
import AboutPage from "@/components/about/page";
import ServicesSection from "@/components/service/page";
import ContactPage from "@/components/contact/page";
import ProductsGallery from "@/components/products/page";

export default function Page() {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <LeadershipSlider />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutPage />
      </section>

      <section id="services" className="scroll-mt-24">
        <ServicesSection />
      </section>

      <section id="products" className="scroll-mt-24">
        < ProductsGallery />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactPage />
      </section>
    </>
  );
}
