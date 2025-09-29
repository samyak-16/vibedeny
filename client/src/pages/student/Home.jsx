import React from 'react';
import {
  Search,
  Bot,
  Rocket,
  Star,
  Lightbulb,
  GraduationCap,
} from '../../components/LucideIcons';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import Footer from '../../components/student/Footer';
import Logger from '../../components/Logger';

const Home = () => {
  return (
    <div className='flex flex-col items-center w-full bg-gradient-to-b from-blue-50 to-white'>
      <Hero />
      <div className='block sm:hidden '>
        <Logger />
      </div>
      <Companies />

      {/* How It Works Section */}
      <section className='w-full max-w-5xl py-16 px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 tracking-tight'>
          How It Works
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-xl shadow p-8 flex flex-col items-center'>
            <Search size={40} className='text-blue-500 mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Discover</h3>
            <p className='text-gray-600'>
              Browse a wide range of courses curated for every learner and every
              goal.
            </p>
          </div>
          <div className='bg-white rounded-xl shadow p-8 flex flex-col items-center'>
            <Bot size={40} className='text-blue-500 mb-3' />
            <h3 className='font-semibold text-xl mb-2'>AI Recommends</h3>
            <p className='text-gray-600'>
              Our AI suggests the best courses for you based on your interests
              and progress.
            </p>
          </div>
          <div className='bg-white rounded-xl shadow p-8 flex flex-col items-center'>
            <Rocket size={40} className='text-blue-500 mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Start Learning</h3>
            <p className='text-gray-600'>
              Enroll instantly and start learning at your own pace, anytime,
              anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='w-full max-w-5xl py-16 px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 tracking-tight'>
          Why Choose Vibedemy?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center'>
            <Star size={36} className='text-blue-500 mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Top Instructors</h3>
            <p className='text-gray-600'>
              Learn from industry experts and passionate educators.
            </p>
          </div>
          <div className='bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center'>
            <Lightbulb size={36} className='text-blue-500 mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Cutting-Edge Content</h3>
            <p className='text-gray-600'>
              Stay ahead with up-to-date courses and practical projects.
            </p>
          </div>
          <div className='bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center'>
            <GraduationCap size={36} className='text-blue-500 mb-3' />
            <h3 className='font-semibold text-xl mb-2'>Certifications</h3>
            <p className='text-gray-600'>
              Earn certificates to showcase your skills and boost your career.
            </p>
          </div>
        </div>
      </section>

      <CoursesSection />
      <TestimonialsSection />

      {/* Modern CTA Section */}
      <section className='w-full py-12 px-4 flex flex-col items-center bg-gradient-to-r from-blue-600 to-blue-400 text-white mt-8 mb-4 rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold mb-4'>Ready to start learning?</h2>
        <p className='mb-6 text-lg max-w-xl'>
          Join Vibedemy today and unlock a world of knowledge, community, and
          opportunity. Your next skill is just a click away!
        </p>
        <a
          href='/course-list'
          className='bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-50 transition'
        >
          Browse All Courses
        </a>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
