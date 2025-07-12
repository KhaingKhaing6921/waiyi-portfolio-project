import pic1 from '../../assets/about/profile.jpg'

function about() {
    return (
      <div id='about' className="flex flex-col md:flex-row px-4 md:px-12 lg:px-20 py-10 gap-8 mt-10">
        <div className="w-full md:w-1/2 md:text-left">
          <h1 className="text-2xl mb-10">BIO</h1>
          <img
            src={pic1}
            alt="Waiyi"
            className="w-82 max-w-sm mx-auto md:mx-0 grayscale"
          />
        </div>

        <div className="w-full md:w-1/2 md:text-left">
          <h2 className="text-5xl md:text-7xl font-medium font-bogart mb-10">About</h2>
          <p className="text-xxl mb-10 md:text-lg font-body">
            As a product design consultant, founder, educator, and mentor, I cultivate a skillful and thoughtful approach to both product design and professional development.
          </p>
          <p className="text-xxl mb-10 md:text-lg font-body">
            Specializes in transforming digital products into intuitive, engaging, and successful solutions. My work is characterized by a deep understanding of user needs and a commitment to delivering exceptional designs that drive business success.
          </p>
          <p className="text-xxl md:text-lg font-body">
            My expertise spans diverse industries, and I'm dedicated to staying up-to-date with industry trends and emerging technologies.
          </p>
        </div>
      </div>

    
    
  )
}

export default about