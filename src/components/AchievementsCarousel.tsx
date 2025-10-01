import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, GraduationCap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Item = {
  title: string;
  org: string;
  description: string;
  image?: string; // optional logo path
  certificateUrl?: string; // for certifications
};

const achievements: Item[] = [
  { 
    title: 'Hackathon Finalist', 
    org: 'TechFest', 
    description: 'Built a real-time rescue coordination platform (Rescue Radar).', 
    image: '/images/rescue-radar.png' 
  },
  { 
    title: 'CV Prototype', 
    org: 'Lab Project', 
    description: 'YOLO-based mask/gun detection on Raspberry Pi with web UI.', 
    image: '/images/cv-prototype.png' 
  },
  { 
    title: 'Edge AI Agriculture', 
    org: 'Field Trial', 
    description: 'Crop disease detection using IMX477 camera and onboard inference.', 
    image: '/images/edge-ai.png' 
  },
];

const certifications: Item[] = [
  { 
    title: 'Certified in Data Science', 
    org: 'NPTEL', 
    description: 'Completed NPTEL course in Data Science with certification.', 
    image: '/certificates/nptel-ds.png', 
    certificateUrl: 'https://nptelcertificate-link.com' 
  },
  { 
    title: 'Knowledge Management Certification', 
    org: 'NPTEL', 
    description: 'Certified in Knowledge Management under NPTEL program.', 
    image: '/certificates/nptel-km.png', 
    certificateUrl: 'https://nptelcertificate-link.com' 
  },
  { 
    title: 'DSA Course – Sigma Batch', 
    org: 'Apna College', 
    description: 'Completed Data Structures and Algorithms course (Sigma Batch).', 
    image: '/certificates/apna-dsa.png', 
    certificateUrl: 'https://apnacertificate-link.com' 
  },
  { 
    title: 'AI Foundation Course', 
    org: 'Oracle', 
    description: 'Certified in Oracle Artificial Intelligence Foundation course.', 
    image: '/certificates/oracle-ai.png', 
    certificateUrl: 'https://oraclecertificate-link.com' 
  },
];

const SectionCarousel: React.FC<{ title: string; icon: React.ReactNode; items: Item[]; isCert?: boolean }> = ({ title, icon, items, isCert }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex justify-center gap-2 items-center">
            {icon} {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <button className="swiper-button-prev w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center absolute -left-4 top-1/2 -translate-y-1/2 z-10 border border-white/10">
            <ChevronLeft size={18} />
          </button>
          <button className="swiper-button-next w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 z-10 border border-white/10">
            <ChevronRight size={18} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
            breakpoints={{ 640: { slidesPerView: 1.1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-10"
          >
            {items.map((a, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.25)' }}
                  className="glass-card p-6 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neon-blue/20 flex items-center justify-center">
                      {isCert ? <GraduationCap className="text-neon-blue" size={20} /> : <Award className="text-neon-blue" size={20} />}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{a.title}</h3>
                      <p className="text-xs text-gray-400">{a.org}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{a.description}</p>

                  {isCert && a.certificateUrl && (
                    <a
                      href={a.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block px-4 py-2 rounded-lg bg-neon-blue/20 text-neon-blue font-medium hover:bg-neon-blue/30 transition"
                    >
                      View Certificate
                    </a>
                  )}

                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-neon-blue/40 transition-all pointer-events-none"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const AchievementsCertifications: React.FC = () => {
  return (
    <>
      {/* <SectionCarousel title="Achievements" icon={<Award />} items={achievements} /> */}
      <SectionCarousel title="Certifications" icon={<GraduationCap />} items={certifications} isCert />
    </>
  );
};

export default AchievementsCertifications;
