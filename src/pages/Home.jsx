import React from "react";
import NavBar from "../layout/NavBar";

const Home = () => {
  return (
    <div>
      {/* <!-- banner area start --> */}
      <div class="bg-[#F1F2F3]">
        <div class="container mx-auto hero">
          <div class="hero-content flex-col lg:flex-row-reverse min-h-[500px]">
            <div class="lg:px-1 xl:px-16">
              <img
                src="./img/banner.jpeg"
                class="rounded-full shadow-2xl w-96 h-96"
              />
            </div>
            <div class="lg:px-1 xl:px-16">
              <span>food blogger</span>
              <h2 class="text-6xl font-semibold">
                Hello, I'm <span class="text-[#5869da]">Steven</span>
              </h2>
              <h3 class="text-5xl font-medium">Welcome to my blog</h3>
              <h5 class="text-xl text-[#687385]">
                Don't miss out on the latest news about Travel tips, <br />
                Hotels review, Food guide...
              </h5>
              <div class="form-control pt-3">
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    class="input input-bordered"
                  />
                  <button class="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner area end --> */}
      {/* <!-- layout area start --> */}
      <main>
        <div class="all-layout py-8 bg-[#F7F8F9]">
          <div class="container mx-auto px-3 flex gap-4 flex-col lg:flex-row">
            <div class="left-area w-full lg:w-3/4">
              {/* <!-- card heading area --> */}
              <div class="flex justify-between py-8">
                <h3 class="font-bold uppercase">UnReading Blog</h3>
                <select class="select select-bordered select-xs w-30 max-w-xs">
                  <option selected>latest upload</option>
                  <option>First Upload</option>
                </select>
              </div>
              {/* <!-- card area --> */}
              <div class="all-card grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div class="bg-base-100 shadow-xl rounded-t-lg">
                  <figure>
                    <img
                      class="w-full rounded-t-lg"
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <div class="card-actions justify-start">
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Fashion
                      </div>
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Products
                      </div>
                    </div>
                    <h2 class="card-title">Foolproof Spatchcock Turkey</h2>
                    <p>
                      Want a beautiful roast turkey in under two hours?
                      Spatchcock turkey is the answer flattening out the bird
                      gives you juicy meat and crispy skin, every time.
                    </p>
                    <div class="text-slate-400">
                      <span>17 August</span>
                      <span>.</span>
                      <span>12 min read</span>
                      <span>.</span>
                      <span>2.1k view</span>
                    </div>
                  </div>
                </div>
                <div class="bg-base-100 shadow-xl rounded-t-lg">
                  <figure>
                    <img
                      class="w-full rounded-t-lg"
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <div class="card-actions justify-start">
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Fashion
                      </div>
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Products
                      </div>
                    </div>
                    <h2 class="card-title">Foolproof Spatchcock Turkey</h2>
                    <p>
                      Want a beautiful roast turkey in under two hours?
                      Spatchcock turkey is the answer flattening out the bird
                      gives you juicy meat and crispy skin, every time.
                    </p>
                    <div class="text-slate-400">
                      <span>17 August</span>
                      <span>.</span>
                      <span>12 min read</span>
                      <span>.</span>
                      <span>2.1k view</span>
                    </div>
                  </div>
                </div>
                <div class="bg-base-100 shadow-xl rounded-t-lg">
                  <figure>
                    <img
                      class="w-full rounded-t-lg"
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <div class="card-actions justify-start">
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Fashion
                      </div>
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Products
                      </div>
                    </div>
                    <h2 class="card-title">Foolproof Spatchcock Turkey</h2>
                    <p>
                      Want a beautiful roast turkey in under two hours?
                      Spatchcock turkey is the answer flattening out the bird
                      gives you juicy meat and crispy skin, every time.
                    </p>
                    <div class="text-slate-400">
                      <span>17 August</span>
                      <span>.</span>
                      <span>12 min read</span>
                      <span>.</span>
                      <span>2.1k view</span>
                    </div>
                  </div>
                </div>
                <div class="bg-base-100 shadow-xl rounded-t-lg">
                  <figure>
                    <img
                      class="w-full rounded-t-lg"
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <div class="card-actions justify-start">
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Fashion
                      </div>
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Products
                      </div>
                    </div>
                    <h2 class="card-title">Foolproof Spatchcock Turkey</h2>
                    <p>
                      Want a beautiful roast turkey in under two hours?
                      Spatchcock turkey is the answer flattening out the bird
                      gives you juicy meat and crispy skin, every time.
                    </p>
                    <div class="text-slate-400">
                      <span>17 August</span>
                      <span>.</span>
                      <span>12 min read</span>
                      <span>.</span>
                      <span>2.1k view</span>
                    </div>
                  </div>
                </div>
                <div class="bg-base-100 shadow-xl rounded-t-lg">
                  <figure>
                    <img
                      class="w-full rounded-t-lg"
                      src="https://placeimg.com/400/225/arch"
                      alt="Shoes"
                    />
                  </figure>
                  <div class="card-body">
                    <div class="card-actions justify-start">
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Fashion
                      </div>
                      <div class="badge badge-outline hover:bg-[#5869DA] hover:text-white cursor-pointer">
                        Products
                      </div>
                    </div>
                    <h2 class="card-title">Foolproof Spatchcock Turkey</h2>
                    <p>
                      Want a beautiful roast turkey in under two hours?
                      Spatchcock turkey is the answer flattening out the bird
                      gives you juicy meat and crispy skin, every time.
                    </p>
                    <div class="text-slate-400">
                      <span>17 August</span>
                      <span>.</span>
                      <span>12 min read</span>
                      <span>.</span>
                      <span>2.1k view</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- pagination --> */}
              <div class="text-center p-8">
                <div class="btn-group">
                  <button class="btn btn-xs hover:bg-[#5869DA]">1</button>
                  <button class="btn btn-xs hover:bg-[#5869DA] bg-[#5869DA]">
                    2
                  </button>
                  <button class="btn btn-xs hover:bg-[#5869DA]">3</button>
                  <button class="btn btn-xs hover:bg-[#5869DA]">4</button>
                  <button class="btn btn-xs hover:bg-[#5869DA]">5</button>
                  <button class="btn btn-xs hover:bg-[#5869DA]">6</button>
                  <button class="btn btn-xs hover:bg-[#5869DA]">7</button>
                </div>
              </div>
            </div>
            <div class="right-area w-full lg:w-1/4">
              {/* <!-- personal information --> */}
              <div class="card w-full bg-base-100 rounded-none border-slate-400">
                <figure class="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    class="rounded-full w-36 h-36 object-cover"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h5>Hello, I'm Steven</h5>
                  <p class="">
                    Hi, I'm Stenven, a Florida native, who left my career in
                    corporate wealth management six years ago to embark on a
                    summer of soul searching that would change the course of my
                    life forever.
                  </p>
                  <div class="flex justify-center justify-items-center">
                    <strong class="py-1">Follow me : </strong>
                    <div class="flex">
                      <div class="bg-red-500 m-1 w-7 h-7 rounded-full flex text-white bg-[#3b5999] cursor-pointer">
                        <i class="fa-brands fa-facebook-f m-auto"></i>
                      </div>
                      <div class="bg-red-500 m-1 w-7 h-7 rounded-full flex text-white bg-[#55acee] cursor-pointer">
                        <i class="fa-brands fa-twitter m-auto"></i>
                      </div>
                      <div class="bg-red-500 m-1 w-7 h-7 rounded-full flex text-white bg-[#bd081c] cursor-pointer">
                        <i class="fa-brands fa-youtube m-auto"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- all reading section --> */}
              <div class="all-content pt-5">
                <h2 class="p-4">All reading content</h2>
                <hr />
                <div class="max-h-[500px] overflow-auto">
                  <div class="card card-side bg-base-100 rounded-none my-2">
                    <div class="p-4">
                      <h2 class="">New movie is released!</h2>
                      <div class="text-slate-400">
                        <span>17 August</span>
                        <span>.</span>
                        <span>12 min read</span>
                        <span>.</span>
                        <span>2.1k view</span>
                      </div>
                    </div>
                    <figure>
                      <img
                        class="w-32 h-32 rounded object-cover"
                        src="https://placeimg.com/200/280/arch"
                        alt="Movie"
                      />
                    </figure>
                  </div>
                  <div class="card card-side bg-base-100 rounded-none my-2">
                    <div class="p-2">
                      <h2 class="">New movie is released!</h2>
                      <div class="text-slate-400">
                        <span>17 August</span>
                        <span>.</span>
                        <span>12 min read</span>
                        <span>.</span>
                        <span>2.1k view</span>
                      </div>
                    </div>
                    <figure>
                      <img
                        class="w-32 h-32 rounded object-cover"
                        src="https://placeimg.com/200/280/arch"
                        alt="Movie"
                      />
                    </figure>
                  </div>
                  <div class="card card-side bg-base-100 rounded-none my-2">
                    <div class="p-2">
                      <h2 class="">New movie is released!</h2>
                      <div class="text-slate-400">
                        <span>17 August</span>
                        <span>.</span>
                        <span>12 min read</span>
                        <span>.</span>
                        <span>2.1k view</span>
                      </div>
                    </div>
                    <figure>
                      <img
                        class="w-32 h-32 rounded object-cover"
                        src="https://placeimg.com/200/280/arch"
                        alt="Movie"
                      />
                    </figure>
                  </div>
                  <div class="card card-side bg-base-100 rounded-none my-2">
                    <div class="p-2">
                      <h2 class="">New movie is released!</h2>
                      <div class="text-slate-400">
                        <span>17 August</span>
                        <span>.</span>
                        <span>12 min read</span>
                        <span>.</span>
                        <span>2.1k view</span>
                      </div>
                    </div>
                    <figure>
                      <img
                        class="w-32 h-32 rounded object-cover"
                        src="https://placeimg.com/200/280/arch"
                        alt="Movie"
                      />
                    </figure>
                  </div>
                  <div class="card card-side bg-base-100 rounded-none my-2">
                    <div class="p-2">
                      <h2 class="">New movie is released!</h2>
                      <div class="text-slate-400">
                        <span>17 August</span>
                        <span>.</span>
                        <span>12 min read</span>
                        <span>.</span>
                        <span>2.1k view</span>
                      </div>
                    </div>
                    <figure>
                      <img
                        class="w-32 h-32 rounded object-cover"
                        src="https://placeimg.com/200/280/arch"
                        alt="Movie"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- layout area end --> */}
      {/* <!-- footer start --> */}

      {/* <!-- footer end --> */}
    </div>
  );
};

export default Home;
