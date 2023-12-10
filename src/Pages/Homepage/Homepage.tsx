import PeopleSection from './PeopleSection/PeopleSection';
import CoverSection from './CoverSection/CoverSection';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import BuySection from './BuySection/BuySection';
import HabitSection from './HabitSection/HabitSection';
import IngSection from './IngSection/IngSection';

export default function Homepage() {
  return (
    <main>
      <CoverSection />
      <BenefitsSection />
      <BuySection />
      <HabitSection />
      <IngSection />
      <PeopleSection />
    </main>
  )
}