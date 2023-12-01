export const metadata = {
  title: 'Home',
  description: 'Page description',
};
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturesBlocks from '@/components/FeatureBlocks';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/NewsLetter';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
