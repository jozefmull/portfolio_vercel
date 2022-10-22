import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
    imgs: string[]
}

const ImageSlider = ({imgs}: Props) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={15}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        id='quitFadeUp'
      >
        {imgs && imgs.map((img, i) => (
          <SwiperSlide key={`gallery-img-${i}`}><img src={img} alt="gallery-img" width={'100%'}/></SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImageSlider