import { Heart, Award, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Alpha Woman Elevates
          </h1>
          <p className="text-xl text-purple-100">
            Transforming Lives Through Empowerment and Excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Alpha Woman Elevates was founded with a simple yet powerful mission: to create a space where women can grow, 
            thrive, and reach their fullest potential. We understand the unique challenges that women face in both 
            personal and professional spheres, and we're here to provide the support, resources, and community needed 
            to overcome them.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through our programs, workshops, and community initiatives, we've helped thousands of women transform their 
            lives, build confidence, and achieve their goals. We're more than just a platform—we're a movement dedicated 
            to elevating women everywhere.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We lead with empathy and understanding, creating a safe space where every woman feels valued and heard.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We're committed to providing the highest quality resources and support to help women achieve excellence in all areas of life.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
              <p className="text-gray-600">
                We believe in continuous improvement and lifelong learning as the pathway to personal and professional success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            The Alpha Woman Journey
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The journey of Alpha Woman Elevates began with a vision to create meaningful change in the lives of women 
              around the world. What started as a small gathering of ambitious women has grown into a thriving global 
              community of leaders, entrepreneurs, and change-makers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we continue to expand our reach and impact, offering innovative programs and resources designed to 
              meet the evolving needs of modern women. Our community is built on the foundation of mutual support, shared 
              wisdom, and collective growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As we look to the future, we remain committed to our core mission: empowering every woman to embrace her 
              strength, pursue her passions, and create the life she deserves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
