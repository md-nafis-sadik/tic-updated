"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <div className="my-6 mx-auto max-w-xl font-[sans-serif]">
      <h1 className="text-3xl text-[#333] font-extrabold text-center">
        Get In Touch !
      </h1>
      <form className="mt-8 space-y-4">
        <Input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm"
        />
        <Input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm "
        />
        <Input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm "
        />
        <Textarea
          placeholder="Type your message here."
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm"
        />

        <button
          type="button"
          className="text-white bg-orange-500 hover:bg-black font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
