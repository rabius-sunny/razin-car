import BestSeller from '~/components/home/best-seller'
import ShopByCategories from '~/components/home/category'
import Hero from '~/components/home/hero'
import SpecialDeal from '~/components/home/special-deal'

export default function Home() {
  return (
    <div>
      <Hero />
      <ShopByCategories />
      <BestSeller />
      <SpecialDeal />
    </div>
  )
}
