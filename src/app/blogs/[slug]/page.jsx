import React from 'react'

const page = ({params}) => {
    console.log(params.slug)

    const {title,description} = blogs.find((blog) => blog.slug == params.slug)

  return (
    <div className='h-screen'>
      <h1>{title}</h1>
      <h5>{description}</h5>
      <p>Details</p>
    </div>
  )
}

const blogs = [
    {
      "slug": "ultimate-guide-to-remote-work",
      "title": "The Ultimate Guide to Remote Work",
      "description": "Learn the best practices, tools, and strategies for effectively working remotely and managing remote teams in today's digital age."
    },
    {
      "slug": "mastering-seo-2024",
      "title": "Mastering SEO in 2024: Trends and Tips",
      "description": "Stay ahead of the competition with the latest SEO strategies and trends for 2024. Discover actionable tips to improve your search engine rankings."
    },
    {
      "slug": "sustainable-living-habits",
      "title": "Sustainable Living: Habits for a Greener Future",
      "description": "Explore practical habits and lifestyle changes that can help reduce your environmental impact and promote a more sustainable future."
    },
    {
      "slug": "mental-health-in-the-workplace",
      "title": "Prioritizing Mental Health in the Workplace",
      "description": "Understand the importance of mental health in professional environments and learn how to foster a supportive workplace culture."
    },
    {
      "slug": "digital-marketing-essentials",
      "title": "Digital Marketing Essentials: A Beginner's Guide",
      "description": "Get started with digital marketing by understanding the core principles, tools, and tactics that drive online success."
    }
  ]

export default page
