import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-neutral-900">
  <header className="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative">
  </header>

  <article className="font-fira mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
    <h1 className="font-fira mb-8 text-4xl font-bold dark:text-white sm:mt-16">About Me</h1>

    <img className="float-right w-44 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aGVhZHNob3R8ZW58MHwxfHx8MTY5MDI3MTY4Nnww&ixlib=rb-4.0.3&q=80&w=1080" />

    <p className="text-lg dark:text-neutral-200">Thanks for dropping by! My name’s Aleksandr—and yes, that’s spelled without
      an <kbd className="rounded bg-neutral-200/50 p-1">e</kbd> between the
      <kbd className="rounded bg-neutral-200/50 p-1">d</kbd> and the <kbd className="rounded bg-neutral-200/50 p-1">r</kbd>,
      pronounced just like Alexander. Don’t worry about my last name, though; it’s quite long, and most people butcher
      it anyway.</p>

    <p className="mt-10 text-lg dark:text-neutral-200">Speaking of last names, if mine hasn’t already betrayed me, I was
      originally born in Armenia, a beautiful country nestled between Europe, Asia, and a bunch of biblically old
      mountains. You can almost spot it on a world map if you squint hard enough.</p>

    <p className="mt-10 text-lg dark:text-neutral-200">Long story short, I moved to the U.S. when I was little and have
      lived in the states for most of my life. I currently reside in Florida, home to plenty of friendly gators,
      lovebugs whose carcasses will eat away at your car’s paint, and the infamous Florida Man.</p>

    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white">Work Experience</h2>
      <p className="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        aspernatur numquam suscipit. Quae, itaque veritatis. Mollitia sunt consequatur a. Id, quia fuga laudantium enim
        illo deserunt minima pariatur soluta veniam!</p>
    </section>

    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white">Software Projects</h2>
      <p className="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        aspernatur numquam suscipit. Quae, itaque veritatis. Mollitia sunt consequatur a. Id, quia fuga laudantium enim
        illo deserunt minima pariatur soluta veniam!</p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <section
          className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header className="flex items-center justify-between dark:text-gray-50">
            <h3 className="text-lg font-bold">Fluid-type-scale.com</h3>
            <span>123</span>
          </header>
          <div className="mt-2 dark:text-gray-300">Generate font size variables for a fluid type scale with CSS clamp.</div>

          <footer className="my-4 flex gap-1">
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">nextjs</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">typescript</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sass</span>
          </footer>
        </section>

        <section
          className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header className="flex items-center justify-between dark:text-gray-50">
            <h3 className="text-lg font-bold">This Website!</h3>
            <span>67</span>
          </header>
          <div className="mt-2 dark:text-gray-300">My online resume and blog, created with 11ty, Sass, and JavaScript.</div>

          <footer className="my-4 flex gap-1">
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">11ty</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sass</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">javascript</span>
          </footer>
        </section>

        <section
          className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header className="flex items-center justify-between dark:text-gray-50">
            <h3 className="text-lg font-bold">Scribe</h3>
            <span>20</span>
          </header>
          <div className="mt-2 dark:text-gray-300">Text editor developed with the Qt framework. Features standard fie
            operations, syntax highlighting, brace autocomplete, and auto-indentation.</div>

          <footer className="my-4 flex gap-1">
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">c++</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">qt5</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">qtcreator</span>
          </footer>
        </section>

        <section
          className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header className="flex items-center justify-between dark:text-gray-50">
            <h3 className="text-lg font-bold">U.S. Gun Crimes</h3>
            <span>6</span>
          </header>
          <div className="mt-2 dark:text-gray-300">A database-driven web app that allows you to visualize U.S. gun crime
            statistics and trends for the period of 2013-2018.</div>

          <footer className="my-4 flex gap-1">
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">react</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">typescript</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">express</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sql</span>
          </footer>
        </section>

        <section
          className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header className="flex items-center justify-between dark:text-gray-50">
            <h3 className="text-lg font-bold">Embody</h3>
            <span>3</span>
          </header>
          <div className="mt-2 dark:text-gray-300">Embody is a dungeon crawler inspired by the Binding of Isaac that lets
            you possess dead enemies.</div>

          <footer className="my-4 flex gap-1">
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">C#</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">unity</span>
            <span className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">game-ai</span>
          </footer>
        </section>

        <section className="flex flex-col items-center justify-center">
          <header>
            <h3 className="text-xl font-bold dark:text-white">Want to see more of my work</h3>
            <h4 className="text-center text-lg dark:text-neutral-200">Check out my other repos:</h4>
          </header>
          <div className="mt-4">
            <a href="#">
              <svg className="h-12 text-black dark:text-white" role="img" classNameName="" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                </path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </section>

    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white">Hobbies and Interests</h2>
      <p className="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga
        omnis porro molestias placeat animi officiis commodi soluta? Autem praesentium quaerat quasi, aut nostrum
        maiores voluptatibus omnis ratione voluptatem ad odio possimus rerum ullam, excepturi eos perferendis. Dolor
        sapiente dicta consequatur corporis, expedita doloribus magnam asperiores nemo illo at repellat quis quos
        consequuntur eum laborum voluptates ea. Nisi quia corrupti dolore eaque, cum sint animi suscipit iste voluptate,
        veritatis ratione quo laudantium, adipisci dolores hic perspiciatis doloribus accusantium quibusdam voluptatum?
      </p>
      <p className="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga
        omnis porro molestias placeat animi officiis commodi soluta? Autem praesentium quaerat quasi, aut nostrum
        maiores voluptatibus omnis ratione voluptatem ad odio possimus rerum ullam, excepturi eos perferendis. Dolor
        sapiente dicta consequatur corporis, expedita doloribus magnam asperiores nemo illo at repellat quis quos
        consequuntur eum laborum voluptates ea. Nisi quia corrupti dolore eaque, cum sint animi suscipit iste voluptate,
        veritatis ratione quo laudantium, adipisci dolores hic perspiciatis doloribus accusantium quibusdam voluptatum?
      </p>
    </section>

    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white">So, Yeah... That's Me!</h2>
      <p className="mt-6 text-lg dark:text-neutral-200">Anyway, this is probably a good place to stop. There’s more to my
        life than what I feel comfortable sharing here, but that’s about the gist of my background and interests. If you
        made it this far, cool! You’re still awake! Maybe we can chat sometime and get to know each other.</p>
      <p className="mt-6 text-lg dark:text-neutral-200">At the end of the day, I’m just a Real Human Bean who enjoys doing
        real human things. If that sounds like your cup of tea, get in touch—I’d love to hear from you!</p>
    </section>
  </article>

  <section className="font-fira mt-10 bg-neutral-800 p-8 pb-20 sm:pb-8">
    <div className="mx-auto flex flex-col sm:max-w-4xl sm:flex-row sm:justify-between">
      <div className="flex flex-col items-center sm:items-start">
        <h3 className="text-2xl font-bold text-white">Thanks for reading!</h3>
        <p className="mt-2 text-neutral-200">© Aleksandr Hovhannisyan, 2019–Present</p>
        <p className="mt-2 text-sm text-neutral-200">Last built on Tuesday, October 4, 2022 at 10:28 PM UTC</p>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <a href="#" className="text-white hover:underline sm:text-lg">Twitter</a>
        <a href="#" className="text-white hover:underline sm:text-lg">GitHub</a>
        <a href="#" className="text-white hover:underline sm:text-lg">LinkedIn</a>
        <a href="#" className="text-white hover:underline sm:text-lg">Sitemap</a>
        <a href="#" className="text-white hover:underline sm:text-lg">RSS</a>
      </div>
    </div>
  </section>
</div>
  );
}
