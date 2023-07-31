import {
  HeroDemo,
  HeroGraphicFour,
  HeroGraphicOne,
  HeroGraphicThree,
  HeroGraphicTwo,
  HeroRating,
  HeroTitle,
  Reviews,
} from '@/components/landing-sections'

export default function RootPage() {
  return (
    <div>
      <HeroTitle />
      <HeroDemo />
      <HeroRating />
      <HeroGraphicOne />
      <HeroGraphicTwo />
      <HeroGraphicThree />
      <HeroGraphicFour />
      <Reviews />
    </div>
  )
}
