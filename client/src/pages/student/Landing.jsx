import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function getRandomCourse(courses) {
  if (!courses || courses.length === 0) return null;
  return courses[Math.floor(Math.random() * courses.length)];
}

const Landing = () => {
  const { allCourses } = useContext(AppContext);
  const randomCourse = getRandomCourse(allCourses);

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center py-20 px-4 text-center'>
        <img
          src={assets.vibedemy_logo_small}
          alt='Vibedemy Logo'
          className='w-40 mb-6'
        />
        <h1 className='text-4xl md:text-6xl font-extrabold text-blue-700 mb-4'>
          Unlock Your Learning Potential
        </h1>
        <p className='text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl'>
          Discover, enroll, and master new skills with Vibedemy. Curated
          courses, expert educators, and a vibrant community—all in one place.
        </p>
        <Link
          to='/courses'
          className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition'
        >
          Browse Courses
        </Link>
      </section>

      {/* Product Showcase */}
      <section className='py-16 px-4 bg-white flex flex-col items-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Why Vibedemy?</h2>
        <div className='grid md:grid-cols-3 gap-8 w-full max-w-5xl'>
          <div className='bg-blue-50 rounded-xl p-6 shadow text-center'>
            <img
              src={assets.ai_icon || assets.search_icon}
              alt='AI'
              className='mx-auto w-12 mb-4'
            />
            <h3 className='font-semibold text-xl mb-2'>
              AI-Powered Recommendations
            </h3>
            <p className='text-gray-600'>
              Our AI finds the best courses for you, tailored to your interests
              and goals.
            </p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 shadow text-center'>
            <img
              src={assets.lesson_icon}
              alt='Lessons'
              className='mx-auto w-12 mb-4'
            />
            <h3 className='font-semibold text-xl mb-2'>Expert Educators</h3>
            <p className='text-gray-600'>
              Learn from industry leaders and passionate teachers with
              real-world experience.
            </p>
          </div>
          <div className='bg-blue-50 rounded-xl p-6 shadow text-center'>
            <img
              src={assets.time_clock_icon}
              alt='Flexible'
              className='mx-auto w-12 mb-4'
            />
            <h3 className='font-semibold text-xl mb-2'>
              Flexible & Accessible
            </h3>
            <p className='text-gray-600'>
              Study at your own pace, anytime, anywhere, on any device.
            </p>
          </div>
        </div>
      </section>

      {/* AI Best Course Section */}
      <section className='py-16 px-4 flex flex-col items-center bg-gradient-to-b from-white to-blue-50'>
        <h2 className='text-2xl md:text-3xl font-bold text-blue-700 mb-6'>
          Our AI finds the best courses for you
        </h2>
        {randomCourse ? (
          <div className='bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full'>
            <img
              src={randomCourse.courseThumbnail}
              alt={randomCourse.courseTitle}
              className='w-40 h-28 object-cover rounded-lg mb-4 md:mb-0 md:mr-8'
            />
            <div className='flex-1 text-left'>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                {randomCourse.courseTitle}
              </h3>
              <p className='text-gray-600 mb-4 line-clamp-2'>
                {randomCourse.courseDescription?.slice(0, 120)}...
              </p>
              <Link
                to={`/courses/${randomCourse._id}`}
                className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition'
              >
                View Course
              </Link>
            </div>
          </div>
        ) : (
          <p className='text-gray-500'>
            No courses available yet. Check back soon!
          </p>
        )}
      </section>
    </div>
  );
};

export default Landing;
