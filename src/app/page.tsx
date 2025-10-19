import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OngoingWorkSection } from "@/components/sections/ongoing-work-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WhyUsSection } from "@/components/sections/why-us-section";

// import { Header } from "@/components/layout/header";
// import { HeroHorizontal } from "@/components/layout/hero_horizontal";
// import { RevealInit } from "@/components/layout/reveil-ts.";

 
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <OngoingWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}  

// export default function Page() {
//   return (
//     <div className="flex flex-col min-h-screen">
//     <main>
//       <Header />
//       <RevealInit />
//       <HeroHorizontal />
//         <HeroSection />
//         <AboutSection />
//         <ProductsSection />
//         <WhyUsSection />
//         <OngoingWorkSection />
//         <ContactSection />
     
//     </main>
//      <Footer />
//      </div>
//   )
// }
