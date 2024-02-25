import BestSeller from '~/components/home/best-seller'
import ShopByCategories from '~/components/home/category'
import Hero from '~/components/home/hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <ShopByCategories />
      <BestSeller />
    </div>
  )
}
