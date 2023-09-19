import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://github.com/sanifmujawar/resume/raw/1965f2f9d70e19c07f0812cf5577b3dc85b75c8e/Sanif%20Resume%20UK.pdf"; // Replace with the actual path or URL to your CV
    downloadLink.download = "Sanif_CV.pdf"; // Rename the downloaded file as desired
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate the form fields for non-empty values
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_1rtd4h3",
        "template_4huzf1b",
        {
          from_name: form.name,
          to_name: "Sanif Mujawar",
          from_email: form.email,
          to_email: "sanifmujawar@gmail.com",
          message: form.message,
        },
        "ozEG3E0plxVWwXHfP"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you. I will get back to you as soon as possible. Meanwhile have a look at my resume!!!"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Trigger the CV download here
          handleDownloadCV();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required // Add the 'required' attribute
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required // Add the 'required' attribute
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required // Add the 'required' attribute
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
