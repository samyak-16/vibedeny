// Helper to convert video URLs to embeddable iframe URLs (YouTube, Vimeo, etc.)
function getEmbedUrl(url) {
  if (!url) return '';
  // YouTube
  const ytMatch = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  // Otherwise, return the original URL (for direct mp4, pexels, etc.)
  return url;
}
import React, { useContext, useEffect, useState } from 'react';
// Helper to extract YouTube video ID from any valid YouTube URL
function extractYouTubeId(url) {
  if (!url) return '';
  // Try to match all common YouTube URL formats
  // 1. youtu.be/VIDEOID
  // 2. youtube.com/watch?v=VIDEOID
  // 3. youtube.com/embed/VIDEOID
  // 4. youtube.com/v/VIDEOID
  // 5. youtube.com/shorts/VIDEOID
  let id = '';
  try {
    // youtu.be/VIDEOID
    let match = url.match(/youtu\.be\/([\w-]{11})/);
    if (match) return match[1];
    // youtube.com/watch?v=VIDEOID
    match = url.match(/[?&]v=([\w-]{11})/);
    if (match) return match[1];
    // youtube.com/embed/VIDEOID
    match = url.match(/embed\/([\w-]{11})/);
    if (match) return match[1];
    // youtube.com/v/VIDEOID
    match = url.match(/\/v\/([\w-]{11})/);
    if (match) return match[1];
    // youtube.com/shorts/VIDEOID
    match = url.match(/shorts\/([\w-]{11})/);
    if (match) return match[1];
    // As a last resort, try to find any 11-char id in the url
    match = url.match(/([\w-]{11})/);
    if (match) id = match[1];
  } catch (e) {}
  // Only return if exactly 11 chars
  return id && id.length === 11 ? id : '';
}
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useUser } from '@clerk/clerk-react';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import Footer from '../../components/student/Footer';
import YouTube from 'react-youtube';
import { toast } from 'react-toastify';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null); // { videoId, url }

  const {
    allCourses,
    currency,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    backendUrl,
    userData,
    getToken,
  } = useContext(AppContext);
  const { user } = useUser();

  const fetcheCourseData = async () => {
    // const findCourse = allCourses.find((course) => course._id === id);
    // setCourseData(findCourse);

    try {
      const { data } = await axios.get(backendUrl + '/api/course/' + id);
      if (data.success) {
        setCourseData(data.courseData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const enrollCourse = async () => {
    try {
      if (!user) {
        return toast.warn('Login to Enroll!');
      }
      if (isAlreadyEnrolled) {
        return toast.warn('Already Enrolled');
      }

      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/user/enroll',
        { courseId: courseData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success('Enrolled successfully!');
        setIsAlreadyEnrolled(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetcheCourseData();
  }, []);

  useEffect(() => {
    if (userData && courseData && Array.isArray(userData.enrolledCourses)) {
      setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id));
    } else {
      setIsAlreadyEnrolled(false);
    }
  }, [userData, courseData]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:placeholder-teal-300 pt-20 text-left'>
        <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>

        {/* left column */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>
            {courseData.courseTitle}
          </h1>
          <p
            className='pt-4 md:text-base text-sm'
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* review and rating  */}
          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <img
                  className='w-3.5 h-3.5'
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt='star'
                />
              ))}
            </div>
            <p className='text-blue-600'>
              ({courseData.courseRatings.length}{' '}
              {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})
            </p>

            <p>
              {courseData.enrolledStudents.length}{' '}
              {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}
            </p>
          </div>
          <p className='text-sm'>
            Course by{' '}
            <span className='text-blue-600 underline'>
              {courseData.educator?.name || 'Unknown Educator'}
            </span>
          </p>

          <div className='pt-8 text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
            <div className='pt-5'>
              {courseData.courseContent.map((chapter, index) => (
                <div
                  className='border border-gray-300 bg-white mb-2 rounded'
                  key={index}
                >
                  <div
                    className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'
                    onClick={() => toggleSection(index)}
                  >
                    <div className='flex items-center gap-2'>
                      <img
                        className={`transform transition-transform ${
                          openSections[index] ? 'rotate-180' : ''
                        }`}
                        src={assets.down_arrow_icon}
                        alt='down_arrow_icon'
                      />
                      <p className='font-medium md:text-base text-sm'>
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className='text-sm md:text-default'>
                      {chapter.chapterContent.length} lectures -{' '}
                      {calculateChapterTime(chapter)}{' '}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSections[index] ? 'max-h-9g' : 'max-h-0'
                    }`}
                  >
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className='flex items-start gap-2 py-1'>
                          {/* <img onClick={()=> setPlayerData({
                                  videoId: lecture.lectureUrl.split('/').pop()
                                })}
														className="w-4 h-4 mt-1 cursor-pointer"
														src={assets.play_icon}
														alt="play_icon"
													/> */}

                          {isAlreadyEnrolled || lecture.isPreviewFree ? (
                            <img
                              onClick={() => {
                                const videoId = extractYouTubeId(
                                  lecture.lectureUrl
                                );
                                if (videoId) {
                                  setPlayerData({
                                    videoId,
                                    url: lecture.lectureUrl,
                                  });
                                } else if (lecture.lectureUrl) {
                                  setPlayerData({
                                    videoId: '',
                                    url: lecture.lectureUrl,
                                  });
                                } else {
                                  toast.error('Invalid or missing video URL');
                                }
                              }}
                              className='w-4 h-4 mt-1 cursor-pointer'
                              src={assets.play_icon}
                              alt='play_icon'
                            />
                          ) : (
                            <img
                              className='w-4 h-4 mt-1 opacity-50 cursor-not-allowed'
                              src={assets.play_icon}
                              alt='play_icon'
                            />
                          )}

                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2'>
                              {(isAlreadyEnrolled || lecture.isPreviewFree) && (
                                <p
                                  onClick={() => {
                                    const videoId = extractYouTubeId(
                                      lecture.lectureUrl
                                    );
                                    if (videoId) {
                                      setPlayerData({
                                        videoId,
                                        url: lecture.lectureUrl,
                                      });
                                    } else if (lecture.lectureUrl) {
                                      setPlayerData({
                                        videoId: '',
                                        url: lecture.lectureUrl,
                                      });
                                    } else {
                                      toast.error(
                                        'Invalid or missing video URL'
                                      );
                                    }
                                  }}
                                  className='text-blue-500 cursor-pointer'
                                >
                                  Watch
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ['h', 'm'] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='py-20 text-sm md:text-default'>
            <h3 className='text-xl font-semibold text-gray-800 '>
              Course Description
            </h3>
            <p
              className='pt-3 rich-text'
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
            ></p>
          </div>
        </div>

        {/* right column */}
        <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]'>
          {playerData ? (
            playerData.url ? (
              <iframe
                src={getEmbedUrl(playerData.url)}
                className='w-full aspect-video bg-black rounded'
                allow='autoplay; encrypted-media; fullscreen'
                allowFullScreen
                title='Course Video'
              />
            ) : (
              <div className='w-full aspect-video flex items-center justify-center bg-gray-100 text-red-600 font-semibold'>
                Invalid or missing video. Please contact the course admin.
              </div>
            )
          ) : (
            <img src={courseData.courseThumbnail} alt='courseThumbnail' />
          )}

          <div className='p-5'>
            <div className='flex items-center gap-2'>
              <img
                className='w-3.5'
                src={assets.time_left_clock_icon}
                alt='time_left_clock_icon'
              />

              <p className='text-red-500'>
                <span className='font-medium'>5 days</span> left at this price!
              </p>
            </div>

            <div className='flex gap-3 items-center pt-2'>
              <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>
                Free
              </p>
            </div>

            <div className='flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
              <div className='flex items-center gap-1'>
                <img src={assets.star} alt='star icon' />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.time_clock_icon} alt='time_clock_icon' />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className='h-4 w-px bg-gray-500/40'></div>

              <div className='flex items-center gap-1'>
                <img src={assets.lesson_icon} alt='lesson_icon' />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>

            <div>
              {isAlreadyEnrolled ? (
                <p className='md:mt-6 mt-4 w-full py-3 rounded text-center bg-blue-600 text-white font-medium'>
                  Already Enrolled
                </p>
              ) : !user ? (
                <button
                  disabled
                  className='md:mt-6 mt-4 w-full py-3 rounded text-center bg-gray-400 text-white font-medium cursor-not-allowed'
                >
                  Login to Enroll
                </button>
              ) : (
                <button
                  onClick={enrollCourse}
                  className='md:mt-6 mt-4 w-full py-3 rounded text-center bg-blue-600 text-white font-medium'
                >
                  Join for Free
                </button>
              )}
            </div>

            <div>
              {courseData.coursePrice -
                (courseData.discount * courseData.coursePrice) / 100 ===
              0.0 ? (
                <p className='md:mt-6 mt-4 w-full text-center py-3 rounded  bg-blue-600 text-white font-medium'>
                  Click on Course structure{' '}
                </p>
              ) : isAlreadyEnrolled ? (
                <Link to='/my-enrollments'>
                  <p className='md:mt-6 mt-4 w-full text-center py-3 rounded  bg-blue-600 text-white font-medium'>
                    My Enrollments
                  </p>{' '}
                </Link>
              ) : (
                ''
              )}
            </div>

            <div className='pt-6'>
              <p className='md:text-xl text-lg font-medium text-gray-800'>
                What's in the course?{' '}
              </p>
              <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
                <li>Quizzes to test your knowledge.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
