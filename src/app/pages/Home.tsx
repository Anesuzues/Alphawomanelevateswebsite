import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { toast } from 'sonner';
import heroImage from "../../assets/alpha4.jpeg";
import cardsImage from "../../assets/alpha1.jpeg";
import founderImage from "../../assets/alpha2.jpeg";
import empowermentImage from "../../assets/alpha3.jpeg";

export function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    business: '',
    reason: '',
    support: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwKPZaZItUmir9Gcpd1eM_4evXTrJvY7b2L_M1m_QM-sthFCwYKO9O0-EeV_xiMNDiYmA/exec';
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      toast.success(`Success! 🎉 Thank you for submitting your information. You've been added to our waiting list! Check your email (${formData.email}) for a welcome message and next steps.`);
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        business: '',
        reason: '',
        support: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('There was a problem submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const products = [
    {
      id: 2,
      title: "Community Membership",
      description: "Join our exclusive community of empowered women and access ongoing support and resources.",
      features: ["Monthly networking events", "Private community forum", "Resource library access"],
      color: "red"
    },
    {
      id: 4,
      title: "Coaching Sessions",
      description: "Personalized one-on-one coaching to help you achieve your specific goals and overcome challenges.",
      features: ["Flexible scheduling", "Customized action plans", "Ongoing email support"],
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-purple-50 via-red-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-subtle">
                Empowering Women Worldwide
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Alpha Woman Elevates
            </h1>
            <p className="text-xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Empowering women to rise, lead, and transform their lives with confidence and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get Started Free
              </Button>
              <Button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={heroImage} 
                alt="Rise, Lead, Thrive" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={cardsImage} 
                alt="Empowerment, Strength, Community" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={founderImage} 
                alt="Alpha Women Elevates Founder" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Empowerment Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent mb-4">
              Empowerment Awaits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to transformation starts here
            </p>
          </div>
          <div className="flex justify-center">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 max-w-2xl">
              <img 
                src={empowermentImage} 
                alt="Empowerment Awaits - Alpha Women Elevates" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming Lives Through Empowerment and Excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h3>
              {/* TODO: Content to be confirmed once final messaging is agreed upon */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Alpha Woman Elevates was founded with a simple yet powerful mission: to create a space where women can grow, 
                thrive, and reach their fullest potential. We understand the unique challenges that women face in both 
                personal and professional spheres.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our programs, workshops, and community initiatives, we've helped thousands of women transform their 
                lives, build confidence, and achieve their goals. We're more than just a platform—we're a movement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur border-purple-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  </div>
                  <CardTitle className="text-xl">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Leading with empathy and understanding</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur border-red-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-gradient-to-br from-red-100 to-red-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  </div>
                  <CardTitle className="text-xl">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Highest quality resources and support</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur border-purple-200 hover:shadow-xl transition-shadow col-span-2">
                <CardHeader>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  </div>
                  <CardTitle className="text-xl">Continuous Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Lifelong learning as the pathway to success</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of programs designed to support your journey to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const bgColor = product.color === 'purple' ? 'from-purple-100 to-purple-200' : 'from-red-100 to-red-200';
              const textColor = product.color === 'purple' ? 'text-purple-600' : 'text-red-600';
              const borderColor = product.color === 'purple' ? 'border-purple-200' : 'border-red-200';
              const buttonColor = product.color === 'purple' ? 'from-purple-600 to-purple-700' : 'from-red-600 to-red-700';
              
              return (
                <Card 
                  key={product.id} 
                  className={`hover:shadow-2xl transition-all duration-300 border-2 ${borderColor} hover:-translate-y-2 group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`bg-gradient-to-br ${bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    </div>
                    <CardTitle className="text-3xl">{product.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`${textColor} mr-3 text-xl font-bold`}>•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`w-full bg-gradient-to-r ${buttonColor} hover:shadow-lg transition-all`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards transforming your life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/80 backdrop-blur shadow-xl border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name & Surname *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-purple-200 focus:border-purple-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-purple-200 focus:border-purple-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+27 XX XXX XXXX"
                      required
                      className="border-purple-200 focus:border-purple-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business">Business Information *</Label>
                    <p className="text-sm text-gray-600 mb-2">Tell us about your business or professional background</p>
                    <Textarea
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Tell us about your business..."
                      rows={4}
                      required
                      className="border-purple-200 focus:border-purple-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Interest in Joining Alpha Woman *</Label>
                    <p className="text-sm text-gray-600 mb-2">What motivates you to join our community?</p>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="What motivates you to join our community?"
                      rows={4}
                      required
                      className="border-purple-200 focus:border-purple-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="support">How Can Alpha Woman Support Your Growth? *</Label>
                    <p className="text-sm text-gray-600 mb-2">What areas would you like support in?</p>
                    <Textarea
                      id="support"
                      name="support"
                      value={formData.support}
                      onChange={handleChange}
                      placeholder="What areas would you like support in?"
                      rows={4}
                      required
                      className="border-purple-200 focus:border-purple-600"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 py-6 text-lg shadow-lg disabled:opacity-60"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit & Join the Waiting List'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur border-2 border-purple-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl shadow-lg">
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                      <p className="text-gray-600">info@alphawomenelevates.co.za</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-xl shadow-lg">
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                      <p className="text-gray-600">+27 79 481 4664</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-100 to-red-100 border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Automated Response</CardTitle>
                  <CardDescription>
                    What happens after you submit?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2 text-xl font-bold">•</span>
                    <p className="text-gray-700">You'll receive an instant confirmation email</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2 text-xl font-bold">•</span>
                    <p className="text-gray-700">Our team will review your message within 24 hours</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2 text-xl font-bold">•</span>
                    <p className="text-gray-700">We'll respond with personalized guidance and next steps</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community - Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 animate-fade-in">
            Join Our Community Today
          </h2>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
          >
            Get Started Free
          </Button>
          <p className="text-purple-100 mt-6 text-lg">Free to get started • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent mb-4">
            Alpha Woman Elevates
          </h3>
          <p className="text-gray-400 mb-6">
            Empowering women to rise, lead, and transform their lives.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Alpha Woman Elevates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}