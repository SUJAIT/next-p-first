"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

const Heading = () => {

const pathName = usePathname();
console.log(pathName)
const router = useRouter(); // next navigation theka imoprt korta hoba na hoi kaj korba na

const session = useSession()
 
console.log(session)

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
    router.push('/api/auth/signin')
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
<div>
{session.status !== "authenticated" ? (<button onClick={handler} className='bg-white text-cyan-400 p-4'>Login</button>):(<button onClick={()=>signOut()} className='bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-slat'>Logout</button> )}
</div>
   

<div>
  <h6>
   
    {session?.data?.user?.name}
    <br />
    {session?.data?.user?.type}
  </h6>
</div>
{session?.data && <div className='rounded-full mr-3 overflow-hidden size-12'>
<Image height={50} width={50} alt={session?.data?.user?.image} src={session?.data?.user?.image}/>
</div>}

    </nav>
  </div>
  )
}

export default Heading
