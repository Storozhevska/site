import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  currentPage?: 'home' | 'rules';
}

export function SEOHead({ 
  title = "Юлія Сторожевська - Гештальт-психотерапевт | Групова та індивідуальна терапія",
  description = "Сертифікований гештальт-психотерапевт Юлія Сторожевська. Групові та індивідуальні сесії для особистісного зростання, самопізнання та психологічної підтримки. Онлайн консультації.",
  keywords = "гештальт-психотерапевт, психотерапія, групова терапія, індивідуальна терапія, психологічна допомога, особистісне зростання, самопізнання, Юлія Сторожевська, онлайн психотерапія, психотерапевтична група, психологічна підтримка, емоційне здоров'я",
  canonicalUrl = "https://yulia-storozhevska.com/",
  ogImage = "https://yulia-storozhevska.com/og-image.jpg",
  currentPage = 'home'
}: SEOHeadProps) {
  
  useEffect(() => {
    // Оновлюємо title
    document.title = title;
    
    // Функція для оновлення мета тегу
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };
    
    // Оновлюємо основні мета теги
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph теги
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    
    // Twitter теги
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
    
    // Структуровані дані для конкретних сторінок
    if (currentPage === 'rules') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Правила психотерапевтичної групи",
        "description": "Правила участі в груповій психотерапії - етичні норми, конфіденційність, безпека учасників",
        "author": {
          "@type": "Person",
          "name": "Юлія Сторожевська",
          "jobTitle": "Гештальт-психотерапевт"
        },
        "publisher": {
          "@type": "Person",
          "name": "Юлія Сторожевська"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      };
      
      let script = document.querySelector('script[type="application/ld+json"][data-page="rules"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-page', 'rules');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
    
  }, [title, description, keywords, canonicalUrl, ogImage, currentPage]);

  return null;
}