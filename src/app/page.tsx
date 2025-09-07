"use client"


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Section, Container } from '@/components/ui/container';
import { Search, ChevronRight, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import MentorCard from '@/components/mentorcard';
import TestimonialCard from '@/components/testimonialcard';


const categories = ["Product", "Engineering", "Design", "Marketing", "Data Science", "Product Research"];


const dummyMentors = [
  {
    image: "/images/mentor1.jpg", // Replace with actual paths
    name: "Annette Hartman",
    countryCode: "US",
    jobTitle: "Art Director and UI/UX & Visual Design Specialist",
    company: "Omaha Victor...",
    sessions: 76,
    reviews: 9,
    attendance: 98,
    experience: 19,
  },
  {
    image: "/images/mentor2.jpg",
    name: "Tara Daly",
    countryCode: "US",
    jobTitle: "Sr. Director of Product Marketing",
    company: "Loop Returns",
    sessions: 84,
    reviews: 0,
    attendance: 99,
    experience: 24,
  },
  {
    image: "/images/mentor3.jpg",
    name: "Cate Silva",
    countryCode: "CA",
    jobTitle: "Sr. Product Designer",
    company: "Thomson Reuters",
    sessions: 271,
    reviews: 29,
    attendance: 98,
    experience: 15,
  },
  {
    image: "/images/mentor4.jpg",
    name: "Marc Gallo",
    countryCode: "SG",
    jobTitle: "Creative Director",
    company: "Self-Employed",
    sessions: 151,
    reviews: 0,
    attendance: 99,
    experience: 15,
  },
  {
    image: "/images/mentor4.jpg",
    name: "Marc Gallo",
    countryCode: "SG",
    jobTitle: "Creative Director",
    company: "Self-Employed",
    sessions: 151,
    reviews: 0,
    attendance: 99,
    experience: 15,
  },
  {
    image: "/images/mentor4.jpg",
    name: "Marc Gallo",
    countryCode: "SG",
    jobTitle: "Creative Director",
    company: "Self-Employed",
    sessions: 151,
    reviews: 0,
    attendance: 99,
    experience: 15,
  },
  {
    image: "/images/mentor4.jpg",
    name: "Marc Gallo",
    countryCode: "SG",
    jobTitle: "Creative Director",
    company: "Self-Employed",
    sessions: 151,
    reviews: 0,
    attendance: 99,
    experience: 15,
  },
  {
    image: "/images/mentor4.jpg",
    name: "Marc Gallo",
    countryCode: "SG",
    jobTitle: "Creative Director",
    company: "Self-Employed",
    sessions: 151,
    reviews: 0,
    attendance: 99,
    experience: 15,
  },
];

const dummyTestimonials = [
  {
    mentorImage: "/images/mentor3.jpg",
    mentorName: "Jocelyn Esquivel",
    mentorCountryCode: "MX",
    mentorJobTitle: "UX Lead",
    mentorCompany: "Coppel",
    mentorSessions: 278,
    mentorReviews: 67,
    reviewText: "Great chat with Jocelyn! She helped me rethink about metrics (product, UX/UI business) when working on a project. I liked that she had articles & resources ready to share. The fact that she showed openness for future conversations is also amazing.",
    reviewerImage: "/images/reviewer1.jpg",
    reviewerName: "Delcio Pechico",
    reviewerRole: "UX/UI Designer",
    reviewerCompany: "MoBerries",
  },
  {
    mentorImage: "/images/mentor2.jpg",
    mentorName: "Kieran Yi Moon",
    mentorCountryCode: "SG",
    mentorJobTitle: "Product Manager",
    mentorCompany: "Meta",
    mentorSessions: 189,
    mentorReviews: 10,
    reviewText: "Kieran is very knowledgeable, informative and super helpful Product Manager who has great ideas! Thank you Kieran for your advice, dedication to mentoring aspiring PMs and willingness to share your knowledge & experiences!!",
    reviewerImage: "/images/reviewer2.jpg",
    reviewerName: "Hnin Azali",
    reviewerRole: "STAR Intern",
    reviewerCompany: "SAP",
  },
  {
    mentorImage: "/images/mentor5.jpg",
    mentorName: "Josh S",
    mentorCountryCode: "US",
    mentorJobTitle: "Head of Product",
    mentorCompany: "Amazon, HBS, Harvard",
    mentorSessions: 118,
    mentorReviews: 23,
    reviewText: "The conversation with Josh completely blew me out of the water. Josh is an amazing mentor and even offered to do some resume and portfolio reviews with me. I can’t wait to book another session with him. You rock, Josh!",
    reviewerImage: "/images/reviewer3.jpg",
    reviewerName: "Sarah George-Ashiru",
    reviewerRole: "Product Manager",
    reviewerCompany: "Watch...",
  },

];

const logos = [
  'google.png','slack.png','grammarly.png','microsoft.png','paypal.png'

];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('mentee');
  const [activeCategory, setActiveCategory] = React.useState("Product");


  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute"></div>

      <Section spacing="lg" className="relativec pb-0">
        <Container size="screen" className="relative">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative z-10 text-center lg:text-center">

              <div className="mb-8">
                <nav className="nav nav-tabs inline-flexrounded-lg p-1" role="tablist">
                  <button
                    onClick={() => setActiveTab('mentee')}
                    className={`relative px-6 py-2 text-md font-medium transition-all duration-200 
    ${activeTab === 'mentee'
                        ? 'text-teal-600 after:w-full'
                        : 'text-gray-900 hover:text-teal-600 after:w-0'
                      }
    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-teal-600 after:transition-all after:duration-200 after:content-['']`}
                    role="tab"
                    aria-selected={activeTab === 'mentee'}
                  >
                    Mentee
                  </button>

                  <button
                    onClick={() => setActiveTab('mentor')}
                    className={`relative px-6 py-2 text-md font-medium transition-all duration-200 
    ${activeTab === 'mentor'
                        ? 'text-teal-600 after:w-full'
                        : 'text-gray-900 hover:text-teal-600 after:w-0'
                      }
    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-teal-600 after:transition-all after:duration-200 after:content-['']`}
                    role="tab"
                    aria-selected={activeTab === 'mentor'}
                  >
                    Mentor
                  </button>
                </nav>

              </div>

              <div className="tab-content">
                {/* Mentee Tab */}
                {activeTab === 'mentee' && (
                  <div className="fade-in">
                    <Typography
                      variant="display-1"
                      className="mb-6 text-gray-900 font-bold leading-tight max-w-2xl mx-auto text-balance"
                    >
                      Reach your goals faster with expert mentors
                    </Typography>
                    <Typography
                      variant="body-lg"
                      className="px-6 mx-auto mb-8 text-gray-600 max-w-lg md:text-[1.375rem] md:leading-7 lg:max-w-xl lg:leading-[1.75rem]"
                    >
                      Accelerate your professional growth with 1:1 expert guidance of{' '}
                      <strong className="text-gray-900">5,013+</strong> mentors in our community.
                    </Typography>

                    <div className="max-w-md mx-auto">
                      <div className="relative">
                        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
                          <Search className="h-6 w-6 text-teal-600 mr-3" />
                          <span className="text-sm text-gray-500 flex-1 text-left truncate">
                            What do you want to get better at?
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-auto p-2 h-auto hover:bg-gray-50"
                          >
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'mentor' && (
                  <div className="fade-in">
                    <Typography
                      variant="display-1"
                      className="mb-6 text-gray-900 font-bold leading-tight max-w-2xl mx-auto text-balance"
                    >
                      Your next chapter, made possible by mentoring
                    </Typography>
                    <Typography
                      variant="body-lg"
                      className="px-6 mx-auto mb-8 text-gray-600 max-w-[32.75rem] md:text-[1.375rem] md:leading-7 lg:leading-[1.75rem]"
                    >
                      Build confidence as a leader, grow your network, and define your legacy.
                    </Typography>

                    {/* CTA Button */}
                    <div className="max-w-sm mx-auto">
                      <Button variant='rainbow'
                        className="w-[80%]  py-8 px-4 text-lg font-medium"
                        size="lg"
                      >
                        Become a Mentor
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center text-center p-4 pt-7">
            <Typography
              variant="body"
              className="px-6 mx-auto mb-8 text-gray-900 max-w-lg md:text-[1.375rem] md:leading-7 lg:max-w-xl lg:leading-[1.75rem]">
              Proven success with 3,200+ top organizations
            </Typography>
          </div>
        </Container>
      </Section>


      <div className="relative w-full overflow-hidden py-12">
  <div className="flex marquee-direct whitespace-nowrap">
    {[...Array(8)].map((_, repeatIndex) =>
      logos.map((logo, index) => (
        <img
          key={`${repeatIndex}-${index}`}
          src={logo}
          alt="Logo"
          className="h-22 mx-12 w-auto inline-block"
        />
      ))
    )}
  </div>
</div>



      <Section spacing='sm'>
        <div className="flex flex-col items-center text-center">
          <Typography
            variant="display-1"
            className="max-w-4xl"
          >
            Transforming your potential
          </Typography>
          <Typography
            variant="body"
            className="mt-4 max-w-2xl text-gray-700"
          >
            Become the best version of yourself by accessing to the perspectives and life experiences of others who've been there, done that.
          </Typography>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-10xl overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl">
            <video
              className="w-full h-auto"
              src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"
              controls
              preload="none"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Section>

      <Section spacing='lg'>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-8 md:space-y-0 text-center md:text-left">
          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-20 rounded-full bg-red-100">
                <span className="font-bold text-lg text-red-500">1</span>
              </div>
              <div>
                <Typography variant="h3" className="mb-2 text-gray-700 font-bold">
                  An open access to the world's best.
                </Typography>
                <Typography variant="small" className="text-gray-400 font-bold">
                  From Design to AI, there are thousands of top experts, you can get access for free.
                </Typography>
              </div>
            </div>
          </div>


          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-20 rounded-full bg-purple-100">
                <span className="font-bold text-lg text-purple-500">2</span>
              </div>

              <div>
                <Typography variant="h3" className="mb-2 text-gray-700 font-bold">
                  Personalized advice to accelerate your success.
                </Typography>
                <Typography variant="small" className="text-gray-400 font-bold">
                  Book 1:1 mentorship session &amp; get advice, insights to move faster with your work.
                </Typography>
              </div>
            </div>
          </div>


          <div className="flex-1">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-20 rounded-full bg-blue-100">
                <span className="font-bold text-lg text-blue-500">3</span>
              </div>

              <div>
                <Typography variant="h3" className="mb-2  text-gray-700 font-bold">
                  Achieve your long term goals, easily.
                </Typography>
                <Typography variant="small" className="text-gray-400 font-bold">
                  Connect with mentors for recurring sessions and work towards a long-term goal.
                </Typography>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/*Mentor Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-16 pt-12 pb-8">
        <Typography variant="display-2" className="mb-4 md:mb-0">
          Discover the world's top mentors
        </Typography>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-auto">
          <Button
            variant="outline"
            className="px-4 border-[#05051B] hover:text-white hover:bg-[#05051B] w-full md:w-auto"
          >
            Explore all
          </Button>
          <div className="flex space-x-2 hidden md:flex">
            <Button variant="outline" size="icon" aria-label="Previous">
              <ArrowLeft size={20} />
            </Button>
            <Button variant="outline" size="icon" aria-label="Next">
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      <Container padding='lg' size='full'>
        <div className="overflow-x-auto mb-30 scrollbar-hide">
          <div className="flex space-x-8 pb-4">
            {dummyMentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} />
            ))}
          </div>
        </div>
      </Container>


      <Section spacing='xl' className="bg-gradient-to-r from-red-50 via-pink-200 to-blue-300 my-18">
        <div className="flex flex-col items-center text-center">
          <Typography
            variant="display-2"
            className="mb-12 font-bold text-gray-900"
          >
            A platform that delivers results
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          {/* Card 1 */}
          <div className=" bg-white/40 p-6 py-18 rounded-2xl shadow-md backdrop-blur-lg">
            <Typography variant="body-sm" className="text-gray-800 mb-3 text-center">
              Career enhanced for
            </Typography>
            <Typography variant="display-1" className="text-violet-900 font-extrabold text-center mb-3">
              89%
            </Typography>
            <Typography variant="lead" className="mt-2 text-gray-700 text-center">
              Happy Members
            </Typography>
          </div>

          {/* Card 2 */}
          <div className=" bg-white/40 p-6 py-18 rounded-2xl shadow-md backdrop-blur-lg">
            <Typography variant="body-sm" className="text-gray-800 mb-3 text-center">
              Empowered by
            </Typography>
            <Typography variant="display-1" className="text-violet-900 font-extrabold text-center mb-3">
              50+
            </Typography>
            <Typography variant="lead" className="mt-2 text-gray-700 text-center">
              Expert Mentors
            </Typography>
          </div>

          {/* Card 3 */}
          <div className=" bg-white/40 p-6 py-18 rounded-2xl shadow-md backdrop-blur-lg ">
            <Typography variant="body-sm" className="text-gray-800 mb-3 text-center">
              Global community from
            </Typography>
            <Typography variant="display-1" className="text-violet-900 font-extrabold text-center mb-3">
              3
            </Typography>
            <Typography variant="lead" className="mt-2 text-gray-700 text-center">
              Countries
            </Typography>
          </div>

          {/* Card 4 */}
          <div className=" bg-white/40 p-6 py-18 rounded-2xl shadow-md backdrop-blur-lg">
            <Typography variant="body-sm" className="text-gray-800 mb-3 text-center">
              We have built over
            </Typography>
            <Typography variant="display-1" className="text-violet-900 font-extrabold text-center mb-3">
              200+
            </Typography>
            <Typography variant="lead" className="mt-2 text-gray-700 text-center">
              Connections
            </Typography>
          </div>
        </div>
      </Section>


      {/*Testimonial Section */}

      <Section spacing="lg">

        {/*  Heading */}
        <div className="text-center mb-12">
          <Typography variant="display-1" className="text-gray-900">
            Loved by our community
          </Typography>
        </div>


        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-gray-900 text-white" : "border-gray-300 text-gray-700 hover:text-white hover:bg-[#05051B] "}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Testimonial Cards */}
        <Container padding='none' size='full'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {dummyTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </Section>


      <Section spacing='lg' className="text-center py-42">
        <div className="flex flex-col items-center">
          <Typography
            variant="display-1"
            className="max-w-3xl mb-8"
          >
            Get started for free in 1 minute or less
          </Typography>
          <Typography
            variant="large"
            className="max-w-2xl mb-8 text-gray-400 leading-8"
          >
            Become the best version of yourself by accessing to the perspectives and life experiences of others who've been there, done that.
          </Typography>
        </div>

        <div className="relative flex flex-col items-center pb-10">
          <div className="relative max-w-lg w-full">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-18 pl-12 pr-40 rounded-lg border border-gray-100  transition-colors duration-300"
            />
            <Button
              variant="rainbow"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg py-7 px-7"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Section>









      <style jsx>{`
        .fade-in {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrolling animation for mentor images */
        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;