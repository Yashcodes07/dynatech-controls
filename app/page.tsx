import HeroLanding from "@/components/home/page";
import AboutPage from "@/components/about/page";
import ServicesSection from "@/components/service/page";
import ClientLayout from "@/components/Clientshell";
import dynamic from 'next/dynamic';

// 1. Dynamic Imports (Only one declaration per component)
const ProductsGallery = dynamic(() => import('@/components/products/page'), {
  ssr: true
});

const TeamTestimonialSlider = dynamic(() => import('@/components/team/page'), {
  ssr: true
});

const ContactPage = dynamic(() => import('@/components/contact/page'), {
  loading: () => <div className="h-[400px] bg-gray-50 animate-pulse rounded-3xl m-10" />,
  ssr: true 
});

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