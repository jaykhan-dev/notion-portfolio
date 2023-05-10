import React from "react";

export default function Contact() {
  return (
    <section>
      <div className="h-screen grid place-items-center">
        <div>
          <form action="" className="flex flex-col">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <textarea placeholder="message" />
          </form>
        </div>
      </div>
    </section>
  );
}
