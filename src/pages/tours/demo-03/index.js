import * as React from 'react'
import { TourProvider } from '@reactour/tour'
import { steps } from './steps.js'
import Main from './Main.js'
	
export default function TourDemo03 () {
  return (
    <TourProvider steps={steps}>
      <Main />
    </TourProvider>
  )
}