import React from 'react'
import Image from 'next/image';
import pfp from '../../public/pfp.jpg'
import chat from '../../public/chat.jpg'
import Link from 'next/link';

const Dashboard = () => {

  const projectsData = [
    {
      title: "Real-time Web Chat Application",
      techStack: "Socket.io, React.js, MongoDb, Node.js, Express.js",
      imageURL: chat,
      link: 'https://github.com/annkkiitt/MERN_Chat',
    },
    {
      title: "Multiple Disease Prediction",
      techStack: "Kaggle Dataset, Google Collab, Streamlit",
      imageURL: '/multi.jpg',
      link: 'https://multiplediseasepredictionsystem.streamlit.app',
    },
    {
      title: "Payment Gateway Integration",
      techStack: "Razorpay, React.js, MongoDb, Node.js, Express.js",
      imageURL: 'data:image/jpeg;base64,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',
      link: 'https://github.com/annkkiitt/Payment_Gateway_Razorpay'
    },
    {
      title: "Admin Dashboard",
      techStack: "Chart.js, Material UI, React.js",
      imageURL: '/dashboard.png',
      link: 'https://64b56ec7ddd52a22ef2b8420--kaleidoscopic-jalebi-fc9f19.netlify.app/'
    },
  ];

  const techStack = [
    {
      title: 'Frontend',
      tech: ["React.js", "HTML","CSS", "Javascript","Next.js","Tailwind","ChakraUI"]
    },
    {
      title: 'Backend',
      tech: ["Express.js", "Node.js","JWT"]
    },
    {
      title: 'Database',
      tech: ["MongoDb", "RDBMS"]
    },
    {
      title: 'AWS',
      tech: ["EC2", "S3","Cognito","LAMBDA"]
    }
  ]
  return (
    <div className='p-4 w-screen sm:w-auto'>
      <div className='h-40 flex flex-row items-center bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900'>
        <div className='m-4'>
        <Image src={pfp} alt="Profile Picture" width={100} height={100} className='border-4 rounded'/>
        </div>

        <div className='text-white text-2xl font-semibold ml-4'>
          <div>
           Ankit Rawat
          </div>
          <div className='text-neutral-200 text-sm font-normal'>
           ankit2001rawat@gmail.com
          </div>
        </div>


      </div>

      <div className="text-neutral-400 text-xl font-semibold ml-4 mt-8">
        Projects

        <div className='flex flex-col sm:flex-row mt-4 gap-6 '>
          {projectsData.map((project, index) => (
            <Link href={project.link} target='_blank'  key={index}>
            <div className='w-50 h-72 flex flex-col rounded-lg bg-slate-50 transition-transform transform hover:-translate-y-2 cursor-pointer '>
              <div className='w-50'>
              <Image src={project.imageURL} alt='loading...' width={500} height={500} className='rounded-t-lg'/>
                </div>
                <div className='p-2 text-sm text-slate-700'>
                  {project.title}
                  </div>

                <div className='p-2 text-sm text-slate-500'>
                  {project.techStack}
                </div>
              </div>
            </Link>
            ))}
          </div>


      </div>

      <div className="text-neutral-400 text-xl font-semibold ml-4 mt-14">
        Technologies I Know
        <div className='flex flex-row mt-6 gap-6 pl-8 text-md overflow-auto'>
        {techStack.map((techSt, ind) => (
            <div key={ind} className='w-44 h-72 flex flex-col rounded-lg p-4' style={{ backgroundColor: '#1C1B23' }}>
              <div className='mb-4'>{techSt.title}</div>
              <div className='flex flex-wrap gap-2 w-40'>
                {techSt.tech.map((techstack, ind) => (
                  <div key={ind} className='text-xs font-normal mb-2 rounded-md p-2 border border-sky-400'  style={{backgroundColor: '#14131A'}}>
                    {techstack}
                  </div>
                ))}
              </div>
            </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default Dashboard