import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/banner.jpeg";

const BlogPage = () => {
  return (
    <main class="bg-[#F7F8F9]">
      <div class="container mx-auto">
        <h2 class="text-5xl p-6 max-w-5xl text-center mx-auto">
          The effect of livestock on the physiological condition of roe deer is
          modulated by habitat quality
        </h2>

        <div class="flex justify-between items-center py-12 px-2 sm:px-8 lg:px-52">
          <div class="mb-5 flex items-center">
            <Link class="pr-2" href="#">
              <img class="w-10 h-10 rounded-full" src={img} alt="images" />
            </Link>
            <div>
              <Link class="pl-2 block">
                <span class="">Barbara Cartland</span>
              </Link>
              <ul class="list-disc list-inside flex">
                <li class="text-slate-400 px-1">15 April 2020</li>
                <li class="text-slate-400 px-1">8 mins read</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 class="uppercase">
              category :<span class="bg-[#3b5999] p-1 text-white">food</span>
            </h3>
          </div>
        </div>
        <div class="text-center p-8">
          <img class="max-w-3xl mx-auto rounded-lg" src={img} alt="images" />
        </div>

        <p class="text-justify text-lg p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          alias accusamus tempora quia inventore deleniti corporis quasi amet
          deserunt harum praesentium delectus aperiam, saepe rem natus. Maiores
          accusamus impedit qui mollitia quo pariatur dolores facilis velit.
          Excepturi ratione distinctio quam aperiam animi illum! Qui laborum
          neque odio odit eos dolore obcaecati fuga minima blanditiis doloremque
          error distinctio, iste deserunt assumenda maiores sapiente aut
          repellendus laudantium dolorem quisquam debitis rem aspernatur
          delectus. Eveniet ipsa corrupti, iure ex aliquid corporis sunt commodi
          quo expedita, nisi consectetur vel molestias ipsam inventore natus
          perferendis officiis. Praesentium ad dignissimos, quam enim voluptate
          nisi sit modi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sapiente alias accusamus tempora quia inventore deleniti
          corporis quasi amet deserunt harum praesentium delectus aperiam, saepe
          rem natus. Maiores accusamus impedit qui mollitia quo pariatur dolores
          facilis velit. Excepturi ratione distinctio quam aperiam animi illum!
          Qui laborum neque odio odit eos dolore obcaecati fuga minima
          blanditiis doloremque error distinctio, iste deserunt assumenda
          maiores sapiente aut repellendus laudantium dolorem quisquam debitis
          rem aspernatur delectus. Eveniet ipsa corrupti, iure ex aliquid
          corporis sunt commodi quo expedita, nisi consectetur vel molestias
          ipsam inventore natus perferendis officiis. Praesentium ad
          dignissimos, quam enim voluptate nisi sit modi! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sapiente alias accusamus tempora
          quia inventore deleniti corporis quasi amet deserunt harum praesentium
          delectus aperiam, saepe rem natus. Maiores accusamus impedit qui
          mollitia quo pariatur dolores facilis velit. Excepturi ratione
          distinctio quam aperiam animi illum! Qui laborum neque odio odit eos
          dolore obcaecati fuga minima blanditiis doloremque error distinctio,
          iste deserunt assumenda maiores sapiente aut repellendus laudantium
          dolorem quisquam debitis rem aspernatur delectus. Eveniet ipsa
          corrupti, iure ex aliquid corporis sunt commodi quo expedita, nisi
          consectetur vel molestias ipsam inventore natus perferendis officiis.
          Praesentium ad dignissimos, quam enim voluptate nisi sit modi!
        </p>
      </div>
    </main>
  );
};

export default BlogPage;
