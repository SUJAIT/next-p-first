import React from 'react'


  

const page = ({params}) => {

  console.log(params.slug)

    const {title,description} = documents.find((document) => document.slug == params.slug)

  return (
    <div className='h-screen'>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}

const documents = [
  {
    "slug": "building-effective-habits",
    "title": "Building Effective Habits for Success",
    "description": "Discover the science behind habit formation and how to create lasting habits that lead to personal and professional success."
  },
  {
    "slug": "the-future-of-ai",
    "title": "The Future of AI: What to Expect in the Next Decade",
    "description": "Explore the advancements in artificial intelligence and what the future holds for AI in various industries."
  },
  {
    "slug": "healthy-living-on-a-budget",
    "title": "Healthy Living on a Budget: Tips and Tricks",
    "description": "Learn how to maintain a healthy lifestyle without breaking the bank with practical tips and budget-friendly meal ideas."
  },
  {
    "slug": "remote-work-productivity-tips",
    "title": "Top Productivity Tips for Remote Workers",
    "description": "Maximize your productivity while working from home with these proven tips and strategies for remote workers."
  },
  {
    "slug": "sustainable-fashion-trends",
    "title": "Sustainable Fashion: Trends and Tips for Eco-Friendly Style",
    "description": "Stay stylish while making eco-conscious choices with the latest trends and tips in sustainable fashion."
  }
]

export default page
