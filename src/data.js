import {
  faGear,
  faCertificate,
  faCode,
  faPuzzlePiece,
  faMagnifyingGlassChart,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import {} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb,
  faThumbsUp,
  faEye,
} from "@fortawesome/free-regular-svg-icons";

import Rocket from "./Assets/Services/Icons/Rocket.svg";
import Gear from "./Assets/Services/Icons/Gear.svg";
import Book from "./Assets/Services/Icons/Book.svg";

import sarahAvatar from "./Assets/AboutUS/Leaders/Sarah.png";
import michealAvatar  from "./Assets/AboutUS/Leaders/Micheal.png";
import emilyAvatar from "./Assets/AboutUS/Leaders/Emily.png";

const defaultBody = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 'Lorem Ipsum' passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good & Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet…", comes from a line in section 1.10.32.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non–characteristic words etc.

"Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollit anim id est laborum et dolorum fuga"

"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralised by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what you like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
`;

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
  cores: [
    {
      img: Rocket,
      title: "Implementation",
      description:
        "End-to-end Odoo implementation services designed to align with your business objectives.",
    },
    {
      img: Gear,
      title: "Development",
      description:
        "Custom module development and seamless system integration to enhance functionality.",
    },
    {
      img: Book,
      title: "Training",
      description:
        "In-depth training programs to equip your team with the skills needed to maximize Odoo’s potential.",
    },
  ],
  CoreServices: [
    {
      order: "01",
      title: "Analysis",
      description: "Understanding your business needs and goals.",
    },
    {
      order: "02",
      title: "Planning",
      description: "Developing a strategic implementation roadmap.",
    },
    {
      order: "03",
      title: "Execution",
      description: "Deploying and configuring the solution efficiently.",
    },
    {
      order: "04",
      title: "Support",
      description: "Providing ongoing maintenance and assistance.",
    },
  ],

  plans: [
    {
      key: "basic",
      name: "Basic",
      price: "$499",
      features: [
        "Email Support",
        "Email Support",
        "Bug Fixes",
        "Monthly Updates",
      ],
      active: false,
      btnText: "Subscribe Now",
      variantBtn: "",
      className: "plan-basic",
    },
    {
      key: "professional",
      name: "Professional",
      price: "$999",
      features: [
        "Priority Support",
        "24h Response Time",
        "Custom Development",
        "Weekly Updates",
      ],
      active: true, // ← this one is colored differently
      btnText: "Subscribe Now",
      variantBtn: "",
      className: "plan-professional",
    },
    {
      key: "enterprise",
      name: "Enterprise",
      price: "Custom",
      features: [
        "24/7 Support",
        "Immediate Response",
        "Dedicated Team",
        "Custom Solutions",
      ],
      active: false,
      btnText: "Contact Us",
      variantBtn: "outline",
      className: "plan-enterprise",
    },
  ],
  successStories: [
    {
      image: require("./Assets/CaseStudy/success_stories/andrew-power1.png"),
      tag: "Technology",
      title: "TechCorp Solutions",
      description: "Streamlined operations with Odoo Project Management",
    },
    {
      image: require("./Assets/CaseStudy/success_stories/andrew-power2.png"),
      tag: "Retail",
      tagBg: "#E0DEE6",
      title: "Retail Pro",
      description: "Transformed inventory management with Odoo",
    },
    {
      image: require("./Assets/CaseStudy/success_stories/andrew-power3.png"),
      tag: "Healthcare",
      tagBg: "#D1F0F2",
      title: "HealthTech Inc.",
      description: "Improved patient care with Odoo Healthcare",
    },
  ],
  stories: [
    {
      id: 1,
      image: require("./Assets/BlogCard/Blogs/christin-hume1.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
      author: 
        {
          name: "Sarah Chen",
          avatar: sarahAvatar,
        },
      
      date:"Mar 16, 2024",
    },
    {
      id: 2,
      image: require("./Assets/BlogCard/Blogs/pexels-mikhail2.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: 
        {
          name: "Micheal James",
          avatar: michealAvatar,
        },
      
      date:"Aug 12, 2023",
    },
    {
      id: 3,
      image: require("./Assets/BlogCard/Blogs/pexels-fauxel3.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: 
        {
          name: "Emily Rose",
          avatar: emilyAvatar,
        },
      
      date:"Jul 10, 2025",
    },
    {
      id: 4,
      image: require("./Assets/BlogCard/Blogs/pexels-fauxels4.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: 
        {
          name: "Sarah Chen",
          avatar: sarahAvatar,
        },
      
      date:"Jan 16, 2023",
    },
    {
      id: 5,
      image: require("./Assets/BlogCard/Blogs/christina-wocintechchat5.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: 
        {
          name: "Emily Rose",
          avatar: emilyAvatar,
        },
      
      date:"Mar 16, 2024",
    },

    {
      id: 6,
      image: require("./Assets/BlogCard/Blogs/pexels-divinetechygirl6.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: 
        {
          name: "Sarah Chen",
          avatar: sarahAvatar,
        },
      
      date:"Mar 16, 2024",
    },
    {
      id: 7,
      image: require("./Assets/BlogCard/Blogs/jason-goodman7.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: [
        {
          name: "Micheal Smith",
          avatar: michealAvatar,
        }
      ],
      date:"Mar 28, 2023",
    },
    {
      id: 8,
      image: require("./Assets/BlogCard/Blogs/bruce-mars8.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: [
        {
          name: "Sarah Chen",
          avatar: sarahAvatar,
        }
      ],
      date:"Mar 16, 2024",
    },
    {
      id: 9,
      image: require("./Assets/BlogCard/Blogs/pexels-canvastu9.png"),
      tag: "Technology",
      title: "Essential Odoo Implementation Tips",
      description:
        "Key strategies and best practices for a successful Odoo implementation project.Key strategies and best practices for a successful Odoo implementation project.",
      body: defaultBody,
            author: [
        {
          name: "Sarah Chen",
          avatar: sarahAvatar,
        }
      ],
      date:"Mar 16, 2024",
    },
  ],
};

export default data;
