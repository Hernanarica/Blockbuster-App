import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

function Slider() {
	return (
		<>
			<Swiper
			        pagination={ {
						clickable: true,
				        dynamicBullets: true,
					} }
			        spaceBetween={30}
			        autoplay={ {
						delay: 3500,
						disableOnInteraction: false
					} }
			        modules={ [ Pagination, Autoplay ] }
			>
				<SwiperSlide>
					<picture>
						<source media="(min-width: 768px)" srcSet="./src/assets/imgs/sliders/slider__mulan.png" />
						<img src="./src/assets/imgs/sliders/slider__mulan-mob.png" alt="Película de Mulan" className="w-full" />
					</picture>
				</SwiperSlide>
				<SwiperSlide>
					<picture>
						<source media="(min-width: 768px)" srcSet="./src/assets/imgs/sliders/slider__raya.png" />
						<img src="./src/assets/imgs/sliders/slider__raya-mob.png" alt="Película raya y el último dragón" className="w-full"/>
					</picture>
				</SwiperSlide>
				<SwiperSlide>
					<picture>
						<source media="(min-width: 768px)" srcSet="./src/assets/imgs/sliders/slider__onward.png" />
						<img src="./src/assets/imgs/sliders/slider__onward-mob.png" alt="Película onward" className="w-full" />
					</picture>
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default Slider;