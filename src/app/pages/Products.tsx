import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { BookOpen, Users, Video, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Products() {
  const products = [
    {
      id: 1,
      title: "Leadership Masterclass",
      description: "Comprehensive program designed to develop your leadership skills and executive presence.",
      icon: Star,
      features: ["12-week intensive program", "One-on-one coaching", "Certificate of completion"],
      color: "purple"
    },
    {
      id: 2,
      title: "Community Membership",
      description: "Join our exclusive community of empowered women and access ongoing support and resources.",
      icon: Users,
      features: ["Monthly networking events", "Private community forum", "Resource library access"],
      color: "red"
    },
    {
      id: 3,
      title: "Online Courses",
      description: "Self-paced courses covering personal development, career advancement, and life balance.",
      icon: BookOpen,
      features: ["Lifetime access", "Expert-led content", "Interactive exercises"],
      color: "purple"
    },
    {
      id: 4,
      title: "Coaching Sessions",
      description: "Personalized one-on-one coaching to help you achieve your specific goals and overcome challenges.",
      icon: Video,
      features: ["Flexible scheduling", "Customized action plans", "Ongoing email support"],
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products & Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover our comprehensive range of programs and services designed to support your journey to excellence.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              const bgColor = product.color === 'purple' ? 'bg-purple-100' : 'bg-red-100';
              const textColor = product.color === 'purple' ? 'text-purple-600' : 'text-red-600';
              const buttonColor = product.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-red-600 hover:bg-red-700';
              
              return (
                <Card key={product.id} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 ${textColor}`} />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`${textColor} mr-2`}>✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className={`w-full ${buttonColor}`}>
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scalable Design Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            More Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're constantly developing new programs and services to meet the evolving needs of our community. 
            Stay tuned for exciting new offerings designed to help you reach your full potential.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700">
              Get Notified About New Offerings
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
