"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

const Heading = () => {

const pathName = usePathname();
console.log(pathName)
const router = useRouter(); // next navigation theka imoprt korta hoba na hoi kaj korba na

  const links = [
    {
      title : 'About',
      path : '/About'
    },
    {
      title : 'Service',
      path : '/service'
    },
    {
      title : 'Contact',
      path : '/Contact'
    },
    {
      title : 'Blogs',
      path : '/blogs'
    },
    {
      title : 'Document',
      path : '/Document'
    },
  ];

if(pathName.includes('dashboard'))
  return(
<div className='bg-green-400'>
dashboard Layout

</div>



)



  const handler = () =>{
    router.push('/login')
  }

  return (
    <div>
    <nav className='bg-red-500 px-6 py-4 flex justify-between items-center'>
<h6>Next <span className='text-cyan-0'>Hero</span></h6>
<ul className='flex justify-between items-center space-x-4'>
 {
  links?.map((link) => <Link className={`${pathName === link.path && "text-white"}`} key={link.path} href={link.path}>{link.title}</Link>)
 }

</ul>
<button onClick={handler} className='bg-white text-cyan-400 p-4'>Login</button>
    </nav>
  </div>
  )
}

export default Heading
