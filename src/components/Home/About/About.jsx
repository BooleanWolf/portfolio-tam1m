const About = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-2">
        <div className="">
          <img
            className="rounded-full h-[200px] m-4"
            style={{ objectFit: 'cover', width: 'auto' }}
            src="https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/426235188_1821849604901839_7820893315584463375_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEVQSWaW7Rne6o2YHFyhfm0glHsIbxTgR6CUewhvFOBHncik_JEV9kQBL_Z_P9mczzqydauOKLDZkBIYCagxjjt&_nc_ohc=W_6w9VXAZWAQ7kNvgH8fil9&_nc_ht=scontent.frjh3-1.fna&oh=00_AYD_GQXqSvv1X2DnkJVBMxlrAVn2JDxXdlxlH69TRwGeOA&oe=6671E1E0"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-4xl mb-3">MD Tamim Sarkar</h1>
          <h4 className="font-bold">Undergraduate in Mechanical Engineering</h4>
          <h4 className="mb-2 font-bold">Intelligent System, Deep Learning and Robotics Enthusiast</h4>
          <h4 className="mb-3">
            Bangladesh University of Engineering and Technology, Dhaka,
            Bangladesh
          </h4>
          
          <h4 className="mt-4 flex space-x-2">
              <a href="https://github.com/BooleanWolf" className="bg-black text-white hover:bg-gray-200 font-bold py-1 px-3 rounded">
                  Github
              </a>
              <a href="https://www.linkedin.com/in/md-tamim-sarkar-7193521aa/" className="bg-black text-white hover:bg-gray-200 font-bold py-1 px-3 rounded">
                  Linkedin
              </a>
              <a href="https://www.facebook.com/mdtamim.sarkar.58" className="bg-black text-white hover:bg-gray-200 font-bold py-1 px-3 rounded">
                  Facebook
              </a>
              <a href="https://www.instagram.com/__booleanwolf__/" className="bg-black text-white hover:bg-gray-200 font-bold py-1 px-3 rounded">
                  Instagram
              </a>
          </h4>
        </div>
      </div>
    </>
  );
};

export default About;
