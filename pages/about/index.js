

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg mb-4">We are a healthcare support website dedicated to helping people get the care and resources they need to live healthy and happy lives.</p>
            <p className="text-lg mb-4">Our team is made up of healthcare professionals, patient advocates, and tech experts who are passionate about making healthcare more accessible and affordable for everyone.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/team-photo.jpg" alt="Team photo" className="rounded-lg h-64 w-full object-cover object-center" />
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">Our mission is to provide easy-to-use tools and resources that help people navigate the complex healthcare system and find the care they need.</p>
          <p className="text-lg mb-4">We believe that everyone deserves access to quality healthcare, regardless of their income or background. That's why we offer a range of services and resources that are affordable and accessible to everyone.</p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc pl-8">
            <li className="text-lg mb-2">Find healthcare providers and clinics near you</li>
            <li className="text-lg mb-2">Compare prices and quality ratings for different healthcare services</li>
            <li className="text-lg mb-2">Connect with patient advocates who can help you navigate the healthcare system</li>
            <li className="text-lg mb-2">Get personalized health advice and recommendations from our team of healthcare professionals</li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="list-disc pl-8">
            <li className="text-lg mb-2">Email: support@healthcaresupport.com</li>
            <li className="text-lg mb-2">Phone: 1-800-555-1234</li>
            <li className="text-lg mb-2">Contact form: <a href="/contact" className="text-blue-500 hover:text-blue-700">Click here</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
