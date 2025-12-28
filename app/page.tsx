import HeroLanding from "@/components/home/page";
import AboutPage from "@/components/about/page";
import ServicesSection from "@/components/service/page";
import ContactPage from "@/components/contact/page";
import ProductsGallery from "@/components/products/page";
import ClientLayout from "@/components/Clientshell";
import TeamTestimonialSlider from "@/components/team/page";
export default function Page() {
  return (
    <ClientLayout>
      <section id="home" className="scroll-mt-24">
        <HeroLanding />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutPage />
      </section>

      <section id="services" className="scroll-mt-24">
        <ServicesSection />
      </section>

      <section id="products" className="scroll-mt-24">
        <ProductsGallery />
      </section>

      <section id="team" className="scroll-mt-24">
        <TeamTestimonialSlider />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactPage />
      </section>
    </ClientLayout>
  );
}
