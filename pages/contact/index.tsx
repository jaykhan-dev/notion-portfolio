import React from "react";

const URL =
  "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//media.graphassets.com/8Ppuml3vQ6ZbwCu6Sqrw&autoLoad=true&autoRotate=5";

const links = [
  {
    name: "Email",
    link: "mailto:",
  },
  {
    name: "Phone",
    link: "tel:613-707-0696",
  },
  {
    name: "Instagram",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jay-khan-1b1b1b1b/",
  },
];

export default function Contact() {
  return (
    <section className="bg-purple-500 relative">
      <iframe
        width="100%"
        height="100%"
        allowFullScreen
        src={URL}
        className="h-screen"
      ></iframe>

      <div className="w-full h-full bg-gradient-to-r from-black/20 via-purple/700 to-blue-900 z-0 absolute top-0">
        <div className="lg:w-2/3 mx-auto grid lg:grid-cols-2 place-items-center h-full">
          <div>
            <h1 className="lg:text-6xl font-black">Contact</h1>
            <h2 className="text-3xl font-bold my-4 lg:w-2/3">
              Feel free to use the following channels to talk to do business
            </h2>
            <div className="flex flex-col space-y-4 text-xl">
              <p>jaykhan.sound@gmail.com</p>
              <p>613-707-0696</p>
              <p>@j__khan</p>
              <p>Linkedin</p>
              <p>khan@getalby.com</p>
            </div>
          </div>
          <div className="p-4 w-full py-20">
            <form action="" className="mono flex flex-col space-y-4">
              <input
                type="text"
                placeholder="name"
                className="bg-black/0 text-white p-4 border border-white rounded-xl"
              />
              <input
                type="text"
                placeholder="email"
                className="bg-black/0 text-white p-4 border border-white rounded-xl"
              />
              <textarea
                placeholder="message"
                rows={10}
                className="bg-black/0 text-white p-4 border border-white rounded-xl"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
