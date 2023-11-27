import { ICvDataWithLang } from "@/vite-env";

export const Languages = {
  es: "Español",
  en: "English",
  pr: "Português",
};

export const CV_DATA: ICvDataWithLang = {
  en: {
    name: "Osmel",
    lastName: "Smith Ruiz",
    profession: "Software Engineer",
    profileImage: "https://avatars.githubusercontent.com/u/51496162?v=4",
    sections: [
      {
        id: "contact",
        title: "Contact",
        items: [
          {
            id: "phone",
            title: "Phone",
            value: "(11) 975979711",
            icon: "phone",
          },
          {
            id: "email",
            title: "Email",
            value: "osmelsr97@gmail.com",
            icon: "email",
            link: "mailto:osmelsr97@gmail.com",
          },
          {
            id: "github",
            title: "Github",
            value: "osmelsr97",
            icon: "github",
            link: "https://github.com/osmelsr97",
          },
          {
            id: "linkedin",
            title: "Linkedin",
            value: "osmelsr97",
            icon: "linkedin",
            link: "https://linkedin.com/in/osmel-smith-ruiz-6b553217a",
          },
          {
            id: "location",
            title: "Location",
            value: "Sao Paulo, Brasil",
            icon: "location",
          },
        ],
      },
      {
        id: "language",
        title: "Language",
        items: [
          {
            id: "es",
            title: "Spanish",
            value: 5,
          },
          {
            id: "en",
            title: "English",
            value: 2,
          },
          {
            id: "pr",
            title: "Portuguese",
            value: 2,
          },
        ],
      },
      {
        id: "skills",
        title: "Skills",
        items: [
          {
            id: "js",
            title: "Javascript",
            value: 5,
          },
        ],
      },
      {
        id: "tech",
        title: "Technologies",
        items: [
          {
            id: "react",
            title: "React",
            value: 5,
          },
          {
            id: "vue",
            title: "Vue",
            value: 3,
          },
        ],
      },
    ],
    contentSections: [
      {
        id: "about-me",
        title: "About me:",
        items: [
          {
            id: "default",
            description:
              "Passionate and highly skilled Senior Software Engineer with 5 years of experience, specializing in the development of exceptional user interfaces. Expert in creating intuitive and engaging user experiences, combining solid technical skills with a user-centric focus. Extensive experience in designing and implementing efficient frontend solutions, using modern technologies such as React, Angular, and Vue.js.",
          },
        ],
      },
      {
        id: "experience",
        title: "Work Experience:",
        items: [
          {
            id: "ninja",
            date: "October 2021 - October 2023",
            title: "NINJARMM",
            description:
              "Led the creation and continuous improvement of user interfaces for our remote monitoring and management software. Developed intuitive and engaging frontend solutions, enhancing the accessibility and usability of the product. Worked closely with interdisciplinary teams to translate design requirements into robust technical implementations.",
          },
          {
            id: "nifty",
            date: "January 2021 - August 2021",
            title: "NIFTY'S",
            description:
              "I actively participated in a project based on React, focused on blockchain technology and Web 3. I contributed to the development of interfaces for the creation and management of NFTs, integrating my experience in React with the innovative principles of blockchain. My work focused on providing an intuitive and engaging user experience.",
          },
          {
            id: "umbrage",
            date: "February 2020 - November 2020",
            title: "UMBRAGE",
            description:
              "I played a key role in a project driven by React and smart contracts. I collaborated in the development of interfaces that interact with smart contracts on a blockchain network, combining the power of React with the secure and transparent execution of smart contracts.",
          },
        ],
      },
    ],
  },
  es: {
    name: "Osmel",
    lastName: "Smith Ruiz",
    profession: "Ingeniero de Software",
    profileImage: "https://avatars.githubusercontent.com/u/51496162?v=4",
    sections: [
      {
        id: "contact",
        title: "Contacto",
        items: [
          {
            id: "phone",
            title: "Teléfono",
            value: "(11) 975979711",
            icon: "phone",
          },
          {
            id: "email",
            title: "Correo",
            value: "osmelsr97@gmail.com",
            icon: "email",
            link: "mailto:osmelsr97@gmail.com",
          },
          {
            id: "github",
            title: "Github",
            value: "osmelsr97",
            icon: "github",
            link: "https://github.com/osmelsr97",
          },
          {
            id: "linkedin",
            title: "Linkedin",
            value: "osmelsr97",
            icon: "linkedin",
            link: "https://linkedin.com/in/osmel-smith-ruiz-6b553217a",
          },
          {
            id: "location",
            title: "Ubicación",
            value: "Sao Paulo, Brasil",
            icon: "location",
          },
        ],
      },
      {
        id: "language",
        title: "Idiomas",
        items: [
          {
            id: "es",
            title: "Español",
            value: 5,
          },
          {
            id: "en",
            title: "Inglés",
            value: 2,
          },
          {
            id: "pr",
            title: "Portugues",
            value: 2,
          },
        ],
      },
      {
        id: "skills",
        title: "Habilidades",
        items: [
          {
            id: "js",
            title: "Javascript",
            value: 5,
          },
        ],
      },
      {
        id: "tech",
        title: "Tecnologías",
        items: [
          {
            id: "react",
            title: "React",
            value: 5,
          },
        ],
      },
    ],
    contentSections: [
      {
        id: "about-me",
        title: "Sobre mi:",
        items: [
          {
            id: "default",
            description:
              "Ingeniero de Software Sénior apasionado y altamente competente, con 5 años de experiencia, especializado en el desarrollo de interfaces de usuario excepcionales. Experto en la creación de experiencias de usuario intuitivas y atractivas, combinando habilidades técnicas sólidas con un enfoque centrado en el usuario. Amplia experiencia en el diseño e implementación de soluciones frontend eficientes, utilizando tecnologías modernas como React, Angular y Vue.js.",
          },
        ],
      },
      {
        id: "experience",
        title: "Experiencia de trabajo:",
        items: [
          {
            id: "ninja",
            date: "Octubre 2021 - Octubre 2023",
            title: "NINJARMM",
            description:
              "Lideró la creación y mejora continua de interfaces de usuario para nuestro software de supervisión y gestión remota. Desarrolló soluciones frontend intuitivas y atractivas, mejorando la accesibilidad y usabilidad del producto. Trabajó de cerca con equipos interdisciplinarios para traducir requisitos de diseño en implementaciones técnicas sólidas.",
          },
          {
            id: "nifty",
            date: "Enero 2021 - Agosto 2021",
            title: "NIFTY'S",
            description:
              "Participé activamente en un proyecto basado en React, centrado en la tecnología blockchain y la Web 3. Contribuí al desarrollo de interfaces para la creación y gestión de NFTs, integrando mi experiencia en React con los principios innovadores de la blockchain. Mi trabajo se centró en proporcionar una experiencia de usuario intuitiva y atractiva.",
          },
          {
            id: "umbrage",
            date: "Febrero 2020 - Noviembre 2020",
            title: "UMBRAGE",
            description:
              "Desempeñé un papel fundamental en un proyecto impulsado por React y contratos inteligentes. Colaboré en el desarrollo de interfaces que interactúan con contratos inteligentes en una red blockchain, combinando la potencia de React con la ejecución segura y transparente de los contratos inteligentes.",
          },
        ],
      },
    ],
  },
  pr: {
    name: "Osmel",
    lastName: "Smith Ruiz",
    profession: "Engenheiro de Software",
    profileImage: "https://avatars.githubusercontent.com/u/51496162?v=4",
    sections: [
      {
        id: "contact",
        title: "Contact",
        items: [
          {
            id: "phone",
            title: "Phone",
            value: "(11) 975979711",
            icon: "phone",
          },
          {
            id: "email",
            title: "Email",
            value: "osmelsr97@gmail.com",
            icon: "email",
            link: "mailto:osmelsr97@gmail.com",
          },
          {
            id: "github",
            title: "Github",
            value: "osmelsr97",
            icon: "github",
            link: "https://github.com/osmelsr97",
          },
          {
            id: "linkedin",
            title: "Linkedin",
            value: "osmelsr97",
            icon: "linkedin",
            link: "https://linkedin.com/in/osmel-smith-ruiz-6b553217a",
          },
          {
            id: "location",
            title: "Location",
            value: "Sao Paulo, Brasil",
            icon: "location",
          },
        ],
      },
      {
        id: "language",
        title: "Language",
        items: [
          {
            id: "es",
            title: "Spanish",
            value: 5,
          },
          {
            id: "en",
            title: "English",
            value: 2,
          },
          {
            id: "pr",
            title: "Portuguese",
            value: 2,
          },
        ],
      },
      {
        id: "skills",
        title: "Skills",
        items: [
          {
            id: "js",
            title: "Javascript",
            value: 5,
          },
        ],
      },
      {
        id: "tech",
        title: "Technologies",
        items: [
          {
            id: "react",
            title: "React",
            value: 5,
          },
        ],
      },
    ],
    contentSections: [
      {
        id: "about-me",
        title: "Sobre mi:",
        items: [
          {
            id: "default",
            description:
              "Engenheiro de Software Sênior apaixonado e altamente competente, com 5 anos de experiência, especializado no desenvolvimento de interfaces de usuário excepcionais. Especialista na criação de experiências de usuário intuitivas e atrativas, combinando habilidades técnicas sólidas com um foco centrado no usuário. Ampla experiência no design e implementação de soluções frontend eficientes, utilizando tecnologias modernas como React, Angular e Vue.js.",
          },
        ],
      },
      {
        id: "experience",
        title: "Experiência de trabalho:",
        items: [
          {
            id: "ninja",
            date: "Outubro 2021 - Outubro 2023",
            title: "NINJARMM",
            description:
              "Liderou a criação e melhoria contínua de interfaces de usuário para nosso software de supervisão e gestão remota. Desenvolveu soluções frontend intuitivas e atrativas, aprimorando a acessibilidade e usabilidade do produto. Trabalhou de perto com equipes interdisciplinares para traduzir requisitos de design em implementações técnicas sólidas",
          },
          {
            id: "nifty",
            date: "Janeiro 2021 - Agosto 2021",
            title: "NIFTY'S",
            description:
              "Participei ativamente em um projeto baseado em React, centrado na tecnologia blockchain e na Web 3. Contribuí para o desenvolvimento de interfaces para a criação e gestão de NFTs, integrando minha experiência em React com os princípios inovadores da blockchain. Meu trabalho concentrou-se em fornecer uma experiência de usuário intuitiva e atrativa.",
          },
          {
            id: "umbrage",
            date: "Fevereiro 2020 - Novembro 2020",
            title: "UMBRAGE",
            description:
              "Desempenhei um papel fundamental em um projeto impulsionado pelo React e contratos inteligentes. Colaborei no desenvolvimento de interfaces que interagem com contratos inteligentes em uma rede blockchain, unindo a potência do React com a execução segura e transparente dos contratos inteligentes.",
          },
        ],
      },
    ],
  },
};
