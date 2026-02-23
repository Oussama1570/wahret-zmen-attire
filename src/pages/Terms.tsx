import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, FileText, Truck, Banknote, RefreshCw, AlertTriangle } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "General Terms",
      content: [
        "These Terms of Service govern your use of the Wahret Zmen By Sabri website and the purchase of our products.",
        "By placing an order, you confirm that you are at least 18 years old and that the information provided is accurate and complete.",
        "All prices are displayed in USD and are subject to change without prior notice. Prices at the time of order placement will be honored.",
      ],
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      content: [
        "We offer free shipping on all orders within Morocco. Delivery typically takes 3–7 business days depending on your location.",
        "You will receive an Order ID upon checkout to track your order status at any time.",
        "We are not responsible for delays caused by incorrect addresses or circumstances beyond our control.",
      ],
    },
    {
      icon: Banknote,
      title: "Payment — Cash on Delivery",
      content: [
        "All orders are processed using Cash on Delivery (COD). No online payment is required.",
        "The full order amount is due upon delivery. Please ensure you have the exact amount ready.",
        "Refusal to pay upon delivery may result in your account being flagged for future orders.",
      ],
    },
    {
      icon: RefreshCw,
      title: "Returns & Exchanges",
      content: [
        "We accept returns within 14 days of delivery for unused items in their original packaging.",
        "To initiate a return, please contact our support team with your Order ID.",
        "Custom or personalized Jebbas are not eligible for return unless they arrive damaged or defective.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Wahret Zmen By Sabri shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.",
        "Product colors may vary slightly from images due to screen settings and photography lighting.",
        "We reserve the right to refuse or cancel any order at our discretion.",
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Last updated: February 2026. Please read these terms carefully before placing an order.
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
            <p>If you have any questions about these terms, please contact us at <span className="text-primary font-medium">info@wahretzmen.com</span></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
