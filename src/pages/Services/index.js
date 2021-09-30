import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay,  } from 'swiper';
import {motion} from 'framer-motion';


import SkillCard from '../../components/SkillsCard/index';
import 'swiper/swiper-bundle.css';
import './style.scss';

SwiperCore.use([Pagination,Navigation, Scrollbar, A11y, Autoplay]);

export default function Services(){
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
            <div className='page-skills' >
                <div className='container' >
                    <h1 className='page-title'>Minhas habilidades</h1>
                    <div className='items-container'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            slidesPerView={4}
                            spaceBetween={1}
                            autoplay
                            breakpoints={{
                                "320": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 90,
                                },
                                "768": {
                                "slidesPerView": 3,
                                "spaceBetween": 150
                                },
                                "2560": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 400
                                }
                            }}
                            onSlideChange={() => console.log('moveu')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide><SkillCard name={'React'} percentage={'50%'}/></SwiperSlide>
                            <SwiperSlide><SkillCard name={'JavaScript'} percentage={'90%'}/></SwiperSlide>
                            <SwiperSlide><SkillCard name={'HTML'} percentage={'100%'}/></SwiperSlide>
                            <SwiperSlide><SkillCard name={'Sass'} percentage={'80%'}/></SwiperSlide>
                            <SwiperSlide><SkillCard name={'Github'} percentage={'85%'}/></SwiperSlide>
                            <SwiperSlide><SkillCard name={'Figma'} percentage={'95%'}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}