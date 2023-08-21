import QuackCopyright from "../component/quack-copyright";
import QuackLogo from "../component/quack-logo";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>
      <section className="mb-5">
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <div className="flex items-center">
              <a className="text-primary dark:text-primary-400" href="#!">
                <QuackLogo width={100} height={24} />
              </a>
            </div>

            <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </nav>

        <div className="py-24 px-6 text-center bg-gradient-to-tr from-indigo-800 to-blue-500">
          <h1 className="text-white font-bold text-4xl font-sans p-2">
            Quack Training Note
          </h1>
          <p className="text-white mt-1 p-2">
            筋力トレーニングの記録を付けてモチベーションを維持しよう！
          </p>
        </div>
      </section>
      <section className="mb-5 text-center md:text-left">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <Image
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
                width={100}
                height={100}
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl font-bold">
                  <span className="text-danger dark:text-danger-500">
                    Spicy life
                  </span>{" "}
                  project
                </h2>
                <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                  Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                  neque iaculis malesuada. Aenean gravida magna orci, non
                  efficitur est porta id. Donec magna diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          トレーニング記録を付けよう
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                    className="w-full"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">使い方</h5>
                <p className="mb-6">入力するだけ</p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                    className="w-full"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">利用規約</h5>
                <p className="mb-6">
                  安全に使っていただくために利用規約を設定しています。
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="mb-0">
            <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                    className="w-full"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">有料プラン</h5>
                <p className="mb-6">
                  準備中
                  <br />
                  有料プランとしてグラフ表示を実装予定です。
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="flex justify-center">
          <div className="max-w-[700px] text-center">
            <h2 className="mb-6 text-3xl font-bold">アプリの機能</h2>
            <p className="mb-16 text-neutral-500 dark:text-neutral-300">
              Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
              iaculis malesuada. Aenean gravida magna orci, non efficitur est
              porta id. Donec magna diam.
            </p>
          </div>
        </div>
        <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Support 24/7</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Pellentesque mollis, metus nec fringilla aliquam
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Tracking</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Magna lacus iaculis elit, quis pharetra varius.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Reporting</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Pellentesque varius ex vel consequat quis.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Analytics</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Vestibulum gravida iaculis nisl, vel lobortis eros.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Huge community</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Praesent vulputate lacus bibendum augue .
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Easy to use</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Frequent updates</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Aenean lectus ex, placerat id tellus in eros.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-3 h-5 w-5 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-1 font-bold">Responsive</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Donec consequat orci quis volutpat imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <QuackCopyright />
      </section>
    </main>
  );
}
