import Image from 'next/image'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next app</title>
        <meta name='' content=''/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive'/>
      <Slider slides={SliderData}/>
    </div>
    
  )
}
