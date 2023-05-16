import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import vector1 from "../../img/vector1.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const Clients = [
        {
            img: vector1,
            review:
                "Surya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa alias explicabo, repellat adipisci placeat velit. Officia, excepturi. At quos necessitatibus veritatis deserunt dolor. Explicabo aspernatur eaque ducimus praesentium sunt velit placeat magni."
        },
        {
            img: vector1,
            review:
                " Consectetur adipisicing elit. Culpa alias explicabo, repellat adipisci placeat velit. Officia, excepturi. At quos necessitatibus veritatis deserunt dolor. Explicabo aspernatur eaque ducimus praesentium sunt velit placeat magni."
        },
        {
            img: vector1,
            review:
                "Repellat adipisci placeat velit. Officia, excepturi. At quos necessitatibus veritatis deserunt dolor. Explicabo aspernatur eaque ducimus praesentium sunt velit placeat magni."
        }
    ];
    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div
                    className="blur t-blur1"
                    style={{ background: "var()--purple" }}
                ></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {Clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Testimonials;
