import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetALLPadact } from "../home/servese/query/useGetALLPadact";
import Hero from "../../layout/hero/hero";
import LeftIcon from "../../assets/icons/leftIcon";
import ReateIcon from "../../assets/icons/reateIcon";
import LocationIcon from "../../assets/icons/locationIcon";
import img from "../../assets/img/location.png";
import LikeIcons from "../../assets/icons/LikeIcons";
import EyeIcon from "../../assets/icons/eyeIcon";
import FlegIcon from "../../assets/icons/flegIcon";
import img2 from "../../assets/img/acsiyaImg.png";
import TelIcon from "../../assets/icons/telIcon";
import AttachmentIcon from "../../assets/icons/attachmentIcon";
import Button from "../../components/button/button";

const ProductInfo = () => {
  const { id, category } = useParams();
  const { data } = useGetALLPadact(category, id);

  return (
    <div>
      <Hero />
      <div className=" container">
        <div className=" flex items-center  mb-6 gap-5">
          <Link to="/" className="  flex items-center gap-1">
            <div>
              <LeftIcon />
            </div>
            <p>Orqaga</p>
          </Link>
          <ul className=" flex items-center gap-2">
            <li className=" text-argent">Barcha e’lonlar</li>
            <li className=" bg-argent w-1 h-1  rounded-full"></li>
            <li className=" text-argent">Elektr jihozlari</li>
            <li className=" bg-argent w-1 h-1  rounded-full"></li>
            <li className=" text-argent">Kompyuterlar</li>
            <li className=" bg-argent w-1 h-1  rounded-full"></li>
            <li className=" text-argent">Kompyuter savdosi-PS4</li>
          </ul>
        </div>
      </div>
      <div className=" pt-3 bg-Secondary">
        <div className=" container">
          <div className=" flex pb-10 justify-between">
            <div>
              {/* img :) */}
              <div>
                <img
                  className=" rounded-md w-[711px] "
                  src={data?.img}
                  alt=""
                />
              </div>
              {/* product title :) */}
              <div className=" w-[711px] pt-6 bg-white rounded-md mt-8    pl-8 pr-8 pb-8">
                <div className=" flex justify-between mb-4">
                  <p>Joylashtirildi bugun 21:22</p>
                  <LikeIcons />
                </div>
                <div className=" flex items-center mb-4 gap-5">
                  <p className=" text-2xl text-vivaldiRed font-bold">
                    {data?.price} UYE
                  </p>
                  <p className=" text-argent">Kelishiladi</p>
                </div>
                <div className=" flex flex-wrap  gap-4">
                  <span className=" rounded border-argent py-0.5 pb-0.5 border pl-3 pr-3">
                    Holati: Yangi
                  </span>
                  <span className=" rounded border-argent py-0.5 pb-0.5 border pl-3 pr-3">
                    Model: PS5 1TB
                  </span>
                  <span className=" rounded border-argent py-0.5 pb-0.5 border pl-3 pr-3">
                    Batareyka: Uzoqqa yetadi
                  </span>
                  <span className=" rounded border-argent py-0.5 pb-0.5 border pl-3 pr-3">
                    Jostik: Bor
                  </span>
                  <span className=" rounded border-argent py-0.5 pb-0.5 border pl-3 pr-3">
                    Rangi: qzil
                  </span>
                </div>
                <div className=" pb-12 border-b-2 border-argent mt-6">
                  <h2 className=" text-2xl font-medium mb-4">Tavsifi</h2>
                  <p className=" mb-2">
                    Assalomu Alaykum. <br /> Elonni Oxirigacha O'qing... <br />{" "}
                    PlayStation 4 ga + 100% ORIGINAL Joystick. ( Yengi + B/u )
                    lariyam Bor.Narxi Xar Xil. <br /> ORIGINAL. Qora Rangi..
                    45$.. dan. Svetnoy.. 55$.. dan. <br /> Xammasi IDEALni..
                    IDEAL..lari. KOREAdan Kegan. ORIGINAL 100% ORIGINAL. <br />{" "}
                    Bemalol Tekshirib Beriladi.
                  </p>
                  <p className=" font-medium text-base">Ba’tafsil</p>
                </div>
                <div className=" flex justify-between items-center mt-5">
                  <p>ID: 41240834</p>
                  <div className=" flex items-center gap-1 ">
                    <EyeIcon /> <p>Ko‘rishlar: 137</p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <FlegIcon />
                    <p className=" text-vivaldiRed">Shikoyat qilish</p>
                  </div>
                </div>
              </div>
              <div className=" w-[711px] pt-6 bg-white rounded-md mt-7    pl-8 pr-8 pb-8">
                {/* user :) */}
                <div className=" flex items-center justify-between mb-3">
                  <div className=" flex  gap-4">
                    <div className="  w-10 h-10 bg-argent rounded-full"></div>
                    <div>
                      <p className=" font-semibold mb-1  text-2xl">
                        Akromova Umida
                      </p>
                      <p className=" mb-2"> Ro’yxatdan o’tgan sanasi 2020</p>

                      <p className=" mb-2 text-argent">Online</p>
                    </div>
                  </div>
                  <div className=" flex items-center gap-5">
                    <div className=" flex items-center gap-3 ">
                      <TelIcon />
                      <p>xxx xxx xxx</p>
                    </div>
                    <span className=" rounded border-argent py-0.5 pb-0.5 border pl-3 pr-3">
                      Ko'rsatish
                    </span>
                  </div>
                </div>
                <textarea
                  className="bg-Secondary w-full p-6 rounded-md "
                  placeholder="Xabaringgizni yozing..."
                  rows="20"
                ></textarea>

                <div className=" flex mt-4  items-start justify-between ">
                  <div className=" flex  gap-3 items-center">
                    <AttachmentIcon />
                    <p>Fayl biriktirish</p>
                  </div>
                  <Button
                    children={"Yuborish"}
                    type={"submit"}
                    variant={"Secondary"}
                  />
                </div>
              </div>
            </div>

            <div className=" pl-6">
              {/* user :) */}
              <div className=" w-[375px] rounded-md pt-6 pb-6 pl-4  bg-white">
                <h2 className=" text-xl font-medium mb-7">Foydalanuvchi</h2>
                <div>
                  <div className=" flex  gap-4">
                    <div className="  w-10 h-10 bg-argent rounded-full"></div>
                    <div>
                      <p className=" font-semibold mb-1  text-2xl">
                        Akromova Umida
                      </p>
                      <p className=" mb-2"> Ro’yxatdan o’tgan sanasi 2020</p>

                      <p className=" mb-2 text-argent">Online</p>
                      <Link className=" flex items-center  gap-2">
                        <p className="text-sm font-semibold">Barcha e’lonlar</p>
                        <ReateIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {/* location :) */}
                <div className="bg-white pt-2 rounded-md  mt-5 pb-4 pl-4 pr-4">
                  <div className=" flex gap-7 mb-4  items-center">
                    <div>
                      <LocationIcon />
                    </div>
                    <div>
                      <p className=" font-semibold text-base  mb-1">Tashkent</p>
                      <p className=" font-normal text-lg mb-1">
                        Mirzo ulug’bek tumani
                      </p>
                      <p className=" text-sm font-normal  text-argent">
                        Sizdan 9 km uzoqlikda
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className=" w-[343px]" src={img} alt="" />
                  </div>
                </div>
                {/* acsiya :) */}
                <div className=" mt-6">
                  <img className="w-[375px]" src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
