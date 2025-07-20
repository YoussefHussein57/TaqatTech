import {
  faGear,
  faCertificate,
  faCode,
  faPuzzlePiece,
  faMagnifyingGlassChart,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb,
  faThumbsUp,
  faEye,
} from "@fortawesome/free-regular-svg-icons";

const data = {
  services: [
    {
      icon: faCertificate,
      title: "Odoo Licenses",
      description:
        "Get official Odoo licenses with premium support and regular updates.",
    },
    {
      icon: faGear,
      title: "Implementation",
      description:
        "Expert implementation services tailored to your business needs.",
    },
    {
      icon: faCode,
      title: "Custom Development",
      description:
        "Custom modules and features development to match your requirements.",
    },
    {
      icon: faPuzzlePiece,
      title: "Integration",
      description:
        "Seamless integration with your existing systems and third-party apps.",
    },
    {
      icon: faMagnifyingGlassChart,
      title: "Business Analysis",
      description: "Comprehensive business analysis and process optimization.",
    },
    {
      icon: faHeadset,
      title: "Support & Training",
      description:
        "24/7 technical support and comprehensive training programs.",
    },
  ],

  values: [
    {
      icon: faLightbulb,
      title: "Innovation",
      description:
        "We continuously push boundaries to deliver cutting-edge, future-ready solutions.",
    },
    {
      icon: faThumbsUp,
      title: "Excellence",
      description:
        "Quality is at the heart of everything we do, ensuring seamless implementation and ongoing support.",
    },
    {
      icon: faEye,
      title: "Client Focus",
      description:
        "Your success is our priority. We work closely with you to maximize the value of your digital transformation.",
    },
  ],
  leaders: [
    {
      name: "Sarah Chen",
      title: "CEO & Founder",
      image: require("./Assets/AboutUS/Leaders/Sarah.png"),
    },
    {
      name: "Michael Rodriguez",
      title: "CTO",
      image: require("./Assets/AboutUS/Leaders/Micheal.png"),
    },
    {
      name: "Emily Thompson",
      title: "Head of Operations",
      image: require("./Assets/AboutUS/Leaders/Emily.png"),
    },
  ],
  certificates: [
    {
      title: "Odoo Gold Partner",
      image: require("./Assets/AboutUS/Certitfications/ODOO.png"),
      description:
        "Recognized for excellence in Odoo implementation and support",
    },
    {
      title: "ISO 9001:2015",
      image: require("./Assets/AboutUS/Certitfications/ISO.png"),
      description: "Certified for quality management systems",
    },
    {
      title: "ISO 27001",
      image: require("./Assets/AboutUS/Certitfications/ISO2.png"),
      description: "Information security management certification",
    },
  ],
};

export default data;
