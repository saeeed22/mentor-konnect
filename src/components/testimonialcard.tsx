
import React from 'react';
import Image from 'next/image';
import { Briefcase, MessageSquare } from 'lucide-react'; 
import { Typography } from '@/components/ui/typography';

interface TestimonialCardProps {
  testimonial: {
    mentorImage: string;
    mentorName: string;
    mentorCountryCode: string;
    mentorJobTitle: string;
    mentorCompany: string;
    mentorSessions: number;
    mentorReviews: number;
    reviewText: string;
    reviewerImage: string;
    reviewerName: string;
    reviewerRole: string;
    reviewerCompany: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col">
  <div className="flex items-center p-5 rounded-t-xl bg-gray-100 h-32">
    <Image
      src={testimonial.mentorImage}
      alt={testimonial.mentorName}
      width={48}
      height={48}
      className="rounded-full object-cover mr-3"
    />
    <div className="flex-grow">
      <div className="flex items-baseline mb-1">
        <Typography variant="h6" className="text-gray-900 mr-2">
          {testimonial.mentorName}
        </Typography>
        <span className="text-sm text-gray-900 font-semibold">{testimonial.mentorCountryCode}</span>
      </div>
      <div className="flex items-center text-sm text-gray-700 mb-1">
        <Briefcase size={14} className="mr-1 flex-shrink-0" />
        <Typography variant="caption" as="p" className="leading-tight text-gray-700">
          {testimonial.mentorJobTitle} at {testimonial.mentorCompany}
        </Typography>
      </div>
      <div className="flex items-center text-sm text-gray-700">
        <MessageSquare size={14} className="mr-1 flex-shrink-0" />
        <Typography variant="caption" as="p" className="leading-tight text-gray-700">
          {testimonial.mentorSessions} sessions ({testimonial.mentorReviews} reviews)
        </Typography>
      </div>
    </div>
  </div>

  {/* Review Text */}
  <div className="p-5">
    <Typography variant="body"  className="text-gray-900 flex-grow mb-4 leading-relaxed">
      {testimonial.reviewText}
    </Typography>
  </div>

  {/* Reviewer Bottom */}
  <div className="flex items-center mt-auto p-5 pt-4 border-t border-gray-100">
    <Image
      src={testimonial.reviewerImage}
      alt={testimonial.reviewerName}
      width={32}
      height={32}
      className="rounded-full object-cover mr-4"
    />
    <div>
      <Typography variant="body-lg"  className="font-semibold text-gray-800">
        {testimonial.reviewerName}
      </Typography>
      <Typography variant="caption" className="text-gray-500 leading-tight">
        {testimonial.reviewerRole}, {testimonial.reviewerCompany}
      </Typography>
    </div>
  </div>
</div>
  );
};

export default TestimonialCard;