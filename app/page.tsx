import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neura Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard 
          id="456"
          name="Luna the Cosmic Voyager"
          topic="Lunar Exploration"
          subject="Space"
          duration={30}
          color="#6e9eff"
        />
        <CompanionCard
          id="789"
          name="Aqua the Oceanic Guardian"
          topic="Ocean Conservation"
          subject="Environment"
          duration={60}
          color="#6effb2"
        />
      </section>
      <section className='home-section'>
        <CompanionList />
        <CTA />
      </section>
    </main>
  )
}

export default Page