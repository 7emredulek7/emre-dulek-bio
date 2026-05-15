import React from "react";
import { AtSign, ExternalLink, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { email } from "../data/profile.js";

const contactLinks = [
  {
    label: "email",
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    label: "phone",
    value: "+90 535 014 21 36",
    href: "tel:+905350142136",
    icon: Phone,
  },
  {
    label: "linkedin",
    value: "emre-dulek",
    href: "https://www.linkedin.com/in/emre-dulek-982087243/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "github",
    value: "7emredulek7",
    href: "https://github.com/7emredulek7/",
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact" data-section="contact" aria-labelledby="contact-title">
      <div className="section-inner">
        <div className="reveal">
          <p className="section-kicker">
            <AtSign aria-hidden="true" />
            <span>contact.exec</span>
          </p>
          <h2 id="contact-title">Contact</h2>
          <p className="contact-copy">
            For recruiting, engineering conversations, or friend-to-friend catchups, email is the cleanest
            entry point. LinkedIn and GitHub are available for public work history and code.
          </p>
        </div>

        <aside className="contact-card reveal" aria-label="Contact options">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                className="contact-link"
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <span className="contact-label">
                  <Icon aria-hidden="true" />
                  <span>{link.label}</span>
                </span>
                <span className="contact-value">
                  <strong>{link.value}</strong>
                  {link.external && <ExternalLink aria-hidden="true" />}
                </span>
              </a>
            );
          })}
        </aside>
      </div>
    </section>
  );
}
