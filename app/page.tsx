import { Hero } from '@/components/home/hero';
import { FeaturesGrid } from '@/components/home/features-grid';
import { CustomThemes } from '@/components/home/custom-themes';
import { A11yOtb } from '@/components/home/a11y-otb';
import { DarkMode } from '@/components/home/dark-mode';
import { Customization } from '@/components/home/customization';
import { LastButNotLeast } from '@/components/home/last-but-not-least';
import { Support } from '@/components/home/support';
import { Spacer } from '@nextui-org/react';
import { InstallBanner } from '@/components/home/install-banner';
import { Community } from '@/components/home/community';

export default function Home() {
  return (
    <main className='container mx-auto max-w-7xl px-6 flex-grow'>
      <section className='flex flex-col items-center justify-center'>
        <Hero />
        <FeaturesGrid />
        <CustomThemes />
        <A11yOtb />
        <DarkMode />
        <Customization />
        <LastButNotLeast />
        <Support />
        <Spacer y={24} />
        <InstallBanner />
        <Community />
        <Spacer y={24} />
      </section>
    </main>
  );
}
