import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lock, Eye, Database, Share2, Cookie, Mail } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "We collect personal information you provide during checkout: name, email, phone number, and shipping address.",
        "We may collect browsing data such as pages visited, time spent, and device information for improving our services.",
        "We do not collect or store any payment card information, as all orders are paid via Cash on Delivery.",
      ],
    },
    {
      icon: Database,
      title: "How We Use Your Data",
      content: [
        "Your personal data is used solely for processing and delivering your orders, and communicating order updates.",
        "We may use your email to send promotional offers and newsletters — you can unsubscribe at any time.",
        "Browsing data is used in aggregate form for analytics to improve the shopping experience.",
      ],
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures to protect your personal information from unauthorized access.",
        "Your data is stored securely and is only accessible to authorized personnel on a need-to-know basis.",
        "We regularly review and update our security practices to ensure your data remains protected.",
      ],
    },
    {
      icon: Share2,
      title: "Third-Party Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share your shipping details with our trusted delivery partners solely for order fulfillment.",
        "We may disclose information if required by law or to protect our rights and safety.",
      ],
    },
    {
      icon: Cookie,
      title: "Cookies",
      content: [
        "Our website uses cookies to enhance your browsing experience and remember your preferences.",
        "You can configure your browser to reject cookies, though some features may not function properly.",
        "We use analytics cookies to understand how visitors interact with our website.",
      ],
    },
    {
      icon: Mail,
      title: "Your Rights",
      content: [
        "You have the right to access, correct, or delete your personal data at any time by contacting us.",
        "You can opt out of marketing communications by clicking the unsubscribe link in any email.",
        "For data-related requests, please email us at info@wahretzmen.com and we will respond within 48 hours.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Last updated: February 2026. Your privacy matters to us — here's how we handle your data.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="animate-fade-in rounded-2xl border border-border/60 bg-card p-6 lg:p-8 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((paragraph, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-muted-foreground">
            <p>Questions about your privacy? Contact us at <span className="text-primary font-medium">info@wahretzmen.com</span></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
