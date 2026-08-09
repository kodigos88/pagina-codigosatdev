'use client'

import { useState } from 'react'
import HeroCard from './HeroCard'
import WelcomeModal from './WelcomeModal'

export default function HeroWithModal() {
  const [userName, setUserName] = useState<string>('')

  return (
    <>
      <WelcomeModal onSetUserName={setUserName} />
      <HeroCard userName={userName} />
    </>
  )
}
