import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '/img/video.mp4';
import video1 from '/img/video1.mp4';
import video2 from '/img/video2.mp4';
import banner from '/img/banner.png';
import banner1 from '/img/banner1.png';
import banner2 from '/img/banner2.png';
import PostCard from "../../components/postCard/postCard.jsx";



function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [recentPosts, setRecentPosts] = useState(null);
  useEffect(() => {
    const fetchRecentPosts = async () => {
        try {
            const res = await fetch(`/api/post/getpost?limit=3`);
            const data = await res.json();
            if (res.ok) {
                setRecentPosts(data.post);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    fetchRecentPosts();
}, []);

  return (
    <div className=" w-full">
      {/* Slider de videos */}
      <Slider {...settings}>
        <div className="slide">
          <video className="w-full" src={video} autoPlay loop muted />
        </div>
        <div className="slide">
          <video className="w-full" src={video1} autoPlay loop muted />
        </div>
        <div className="slide">
          <video className="w-full" src={video2} autoPlay loop muted />
        </div>
      </Slider>

      {/* Galería de imágenes estilo Pinterest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="gallery-item">
          <img src={banner} alt="Gallery Image 1" className="w-full" />
        </div>
        <div className="gallery-item">
          <img src={banner1} alt="Gallery Image 2" className="w-full" />
        </div>
        <div className="gallery-item">
          <img src={banner2} alt="Gallery Image 3" className="w-full" />
        </div>
        {/* Agrega más imágenes según sea necesario */}
      </div>

      {/* Call to Action */}
      <div className="cta text-center ">
        <h2 className="text-3xl font-bold">¡Descubre nuestro delicioso café!</h2>
        <p className="text-lg mt-2">Explora nuestra selección de cafés premium y disfruta de una experiencia única.</p>
        <div className="flex flex-col justify-center items-center mb-5">
            <h1 className='text-xl mt-5'>Recent Articles</h1>
            <div className="flex flex-col md:flex-row md:w-[1000px] md:gap-4 mt-4">
  {recentPosts && recentPosts.map((post) => (
    <PostCard key={post._id} post={post} />
  ))}
</div>

        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4">Explorar Café</button>
      </div>
    </div>
  );
}

export default Home;



