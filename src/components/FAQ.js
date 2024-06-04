import React from "react";
import "./Styles/FAQ.css";

export default function FAQ() {
  const FAQs = [
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.",
      color: "red",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.",
      color: "white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.",
      color: "white",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.",
      color: "red",
    },
    {
        title: "The Best Financial Accounting App Ever!",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.",
        color: "red",
    },
    {
      title: "The Best Financial Accounting App Ever!",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod odio ac.",
      color: "white",
    },
   
  ];

  return (
    <section className="FAQ">
        <div className="FAQHeading">

        <h1>FAQs</h1>
        <h3>
            Frequently Asked Questions
        </h3>
        </div>
      <div className="FAQcontainer">
        <div className="row grid-container">
            {FAQs.map((FAQs, index) => (
                <div
                className={`grid-item FAQs ${FAQs.color}`}
                key={FAQs.title}
              >
                <div className="FAQ-content">
                    <h3>{FAQs.title}</h3>
                    <p>{FAQs.description}</p>
                </div>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
}
