import Image from 'next/image';
import React from 'react';
import blog_img_one from '../../public/blog_sec_img/blog_one.jpeg';
import blog_img_two from '../../public/blog_sec_img/blog_two.jpg';
import blog_img_three from '../../public/blog_sec_img/blog_three.jpg';
import blog_img_four from '../../public/blog_sec_img/blog_four.jpg';
const Blogs = () => {
  return (
    <div className='w-11/12 m-auto'>

      <div className="mainBlogs grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-zinc-500">

        <div className="card max-w-sm bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Heart</h2>
          </div>
          <figure>
            <Image src={blog_img_one} className='h-48' alt='blog'></Image>
          </figure>
          <p className='p-4 text-justify h-52'>The heart is a fist-sized organ that pumps blood throughout your body. It's the primary organ of your circulatory system. Your heart contains four main sections (chambers) made of muscle and powered by electrical impulses. Your brain and nervous system direct your heart's function.</p>
        </div>



        <div className="card max-w-sm bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Research</h2>
          </div>
          <figure>
            <Image src={blog_img_two} alt='blog' className='h-48'></Image>
          </figure>
          <p className='p-4 text-justify h-52'>TThrough continuous, rigorous, and systematic horizon scanning, the Science Division assesses and identifies emerging issues, for early identification of potential health benefits or threats. It actively prospects for scientific and technological innovations that could change the equation on advancing health.</p>
        </div>


        <div className="card max-w-sm bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Doctor's</h2>
          </div>
          <figure>
            <Image src={blog_img_three} alt='blog' className='h-48'></Image>
          </figure>
          <p className='p-4 text-justify h-52'>It requires some serious intelligence and motivation to get accepted into medical school.They develop even more qualities that equip them to be successful in the field.Their insight can help you better understand what it is that distinguishes a great physician and if you would want to be a doctor.</p>
        </div>

        <div className="card max-w-sm bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Medicine</h2>
          </div>
          <figure>
            <Image src={blog_img_four} alt='blog' className='h-48'></Image>
          </figure>
          <p className='p-4 text-justify h-52'>Substandard and falsified medical products, including vaccines, biologics, diagnostic tests and medicines, are widespread due to poor manufacture (substandard medicines) or deliberate falsification. SF medical products jeopardies national, regional and global attempts to improve access to effective health care because they lead to avoidable morbidity.</p>
        </div>
      </div>
    </div>


  );
};

export default Blogs;