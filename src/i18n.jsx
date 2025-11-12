import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      header: {
        features: "Xususiyatlar",
        pricing: "Narxlar",
        resources: "Resurslar",
        login: "Kirish",
        signup: "Ro`yxatdan o`tish",
      },
      hero: {
        title: "Faqatgina qisqa havolalar emas",
        text: "Brendingizni taniting va havolalaringiz samaradorligini kuzating.",
        button: "Boshlash",
      },
      advertisement: {
        title: "Rivojlangan statistika",
        text: "Havolalaringiz qayerda va qachon bosilganini kuzating.",
      },
      cta: {
        title: "Bugunoq havolangizni yaxshilang",
        button: "Boshlash",
      },
    },
  },
  ru: {
    translation: {
      header: {
        features: "Функции",
        pricing: "Цены",
        resources: "Ресурсы",
        login: "Войти",
        signup: "Регистрация",
      },
      hero: {
        title: "Больше, чем короткие ссылки",
        text: "Развивайте свой бренд и следите за ссылками.",
        button: "Начать",
      },
      advertisement: {
        title: "Расширенная статистика",
        text: "Следите за тем, как работают ваши ссылки.",
      },
      cta: {
        title: "Улучшите свои ссылки сегодня",
        button: "Начать",
      },
    },
  },
  en: {
    translation: {
      header: {
        features: "Features",
        pricing: "Pricing",
        resources: "Resources",
        login: "Login",
        signup: "Sign up",
      },
      hero: {
        title: "More than just shorter links",
        text: "Build your brand’s recognition and track performance.",
        button: "Get Started",
      },
      advertisement: {
        title: "Advanced Statistics",
        text: "Track how your links perform across the web.",
      },
      cta: {
        title: "Boost your links today",
        button: "Get Started",
      },
    },
  },
  ko: {
    translation: {
      header: {
        features: "기능",
        pricing: "가격",
        resources: "자료",
        login: "로그인",
        signup: "가입하기",
      },
      hero: {
        title: "단순한 짧은 링크 그 이상",
        text: "브랜드 인지도를 높이고 성과를 추적하세요.",
        button: "시작하기",
      },
      advertisement: {
        title: "고급 통계",
        text: "링크 성과를 추적하세요.",
      },
      cta: {
        title: "오늘 링크를 향상시키세요",
        button: "시작하기",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
