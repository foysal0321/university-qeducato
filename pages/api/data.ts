import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  info: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({info: [
    {
        "id": "1",
        "name" : "Basic UI & UX Design for new development",
        "image": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-1.jpg",
        "date": "10 March 2023",
        "address":"10/A, NewYork Sydney City",
        "info_title": "Art & 3D Model Contest 2023",
        "title_image": "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/03/ux-researcher-interview.jpg",
        "info": "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo."
    },
    {
        "id": "2",
        "name" : "Digital Education Market Briefing: Minnesota 2023",
        "image": "https://schoolscompass.com.ng/blog/wp-content/uploads/2023/01/student-interest.jpeg",
        "date": "12 March 2023",
        "address":" Ave.Winnipeg, Canada",
        "info_title": "Digital Education Market Briefing Contest 2023",
        "title_image": "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/03/ux-researcher-interview.jpg",
        "info": "Digital education is the innovative incorporation of modern technology and digital tools to assist the progress of teaching and learning. It is also known as technology enhanced learning (TEL), digital learning, or e-learning. Digital education is the way forward to seeking education through the means of technology and digital devices.Digital education provides various benefits to students, which include low cost of education and specialized course learning. In addition, digital education has become an integral part of most organizations as it enhances the performance of employees. For instance, according to IBM statistics, e-learning can increase productivity by 50%, by utilizing online learning software, to provide employees with an incredible opportunity to engage in their training courses at any convenient time."
    },
    {
        "id": "3",
        "name" : "Learning Network Webinars for Music Teachers",
        "image": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-3.jpg",
        "date": "18 March 2023",
        "address":"10/A, NewYork Sydney City",
        "info_title": "Learning Network Webinars Contest 2023",
        "title_image": "ttps://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/03/ux-researcher-interview.jpg",
        "info": "The Learning Network provides a reliable place to connect current events to reading and writing skills-building. The topics are so wide-ranging that classrooms from social studies to science might find something relevant to provide real-world context to curricular content. Even if there's not something relevant on a particular day or week, students and teachers can search the huge database of content according to content area or type as well as by keyword. In many ways, The Learning Network could be a valuable place to begin class each day, either by projecting it on an interactive board for class discussions or by providing links to individual students."
    },
    {
        "id": "4",
        "name" : "Next-Gen Higher Education Students Have Arrived?",
        "image": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
        "date": "20 March 2023",
        "address":"Portage Ave.Winnipeg,",
        "info_title": "Next-Gen Higher Education Students Contest 2023",
        "title_image": "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/03/ux-researcher-interview.jpg",
        "info": "Higher education is evolving at a very rapid pace around the world. The number of students in universities and higher education institutions has more than doubled globally in the last two decades to 235 million. And it’s expected to double again in the next decade, along with international student mobility. Are universities ready? With our planet’s growing sustainability challenges, large scale digitization and increasing inequalities, it’s clear that new knowledge and skills are needed today."
    },
    {
        "id": "5",
        "name" : "Digital Art & 3D Model – a future for film company",
        "image": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-5.jpg",
        "date": "25 March 2023",
        "address":"NewYork Sydney City",
        "info_title": "Art & 3D Model Contest 2023",
        "title_image": "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/03/ux-researcher-interview.jpg",
        "info": "A new generative AI system generates 3D models from a text description. The models can be used directly in common graphics engines.     Generative AI models such as OpenAI’s DALL-E 2, Midjourney or Stable Diffusion produce impressive images of almost any style. The only input required is a text prompt that describes the desired result. The AI graphics tools speed up existing work processes, but can also create almost complete works of art.           The technology could therefore be an early example of AI’s impact on the job market, says OpenAI founder Sam Altman. As the case of Jason Allen shows, whose AI artwork won an art competition, it is already causing trouble among artists and designers."
    },
    {
        "id": "6",
        "name" : "Conscious Discipline Summer Institute",
        "image": "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-6.jpg",
        "date": "30 March 2023",
        "address":"10/A, NewYork Sydney City",
        "info_title": "UI/UX Design Contest 2023",
        "title_image": "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/03/ux-researcher-interview.jpg",
        "info": "The article gives the brief definition of UX writing, describes the features of effective interface copy and shares useful tips on its improvement for the positive user experience. UX writing is a professional activity of writing texts for user interfaces both web and mobile. It includes creating texts from small labels of buttons and icons to taglines, error messages, notifications, navigation prompts and instructions, guidelines, and so on. Basically, no, they define different types of activities. Copywriters’ main goal is creating texts that sell something, be it products, services, tools, intellectual and creative stuff, etc. UX writers’ task is creating texts that support and enhance users’ "
    }
]  })
}