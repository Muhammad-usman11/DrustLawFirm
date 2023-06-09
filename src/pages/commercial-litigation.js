
// import Clients from '@/components/Clients'
import Brands from '@/components/brands/Brands'
import Clients from '@/components/clients/Clients'
import Commercial from '@/components/commercial/Commercial'
import Divider from '@/components/divider/Divider'
import OurLawyer from '@/components/ourLawyer/OurLawyer'
import TwoCard from '@/components/twoCard/TwoCard'
import WeWin from '@/components/weWin/WeWin'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      

      <Commercial/>
      <Clients/>
      <Divider/>
      <WeWin/>
      <OurLawyer/>
      <Divider/>
      <Brands/>
      <Divider/>
      <TwoCard/>
      


    </>
  )
}
