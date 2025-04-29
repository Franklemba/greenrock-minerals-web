
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-greenrock-500" />,
      title: "Administrative Office",
      details: ["Plot 1022 Kasai Avenue", "Quartier Makutano Commune Et Ville", "Lubumbashi"]
    },
    {
      icon: <MapPin className="h-5 w-5 text-greenrock-500" />,
      title: "Site Office",
      details: ["Plot 6322 Prescot Road", "Heavy Industrial Area ", "Kitwe Zambia"]
    },
    {
      icon: <Phone className="h-5 w-5 text-greenrock-500" />,
      title: "Phone",
      details: ["+260 96 655 5566 (Zambia)", "+243 81 919 1916 (DRC)"]
    },
    {
      icon: <Mail className="h-5 w-5 text-greenrock-500" />,
      title: "Email",
      details: ["kh@greenrockminerals.com", "sales@greenrockminerals.com"]
    },
    {
      icon: <Clock className="h-5 w-5 text-greenrock-500" />,
      title: "Working Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-stone-300">
              Reach out to our team for equipment inquiries, service requests, or technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="border-stone-300 focus:border-greenrock-500 focus:ring-greenrock-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-stone-300 focus:border-greenrock-500 focus:ring-greenrock-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="border-stone-300 focus:border-greenrock-500 focus:ring-greenrock-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="border-stone-300 focus:border-greenrock-500 focus:ring-greenrock-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements or questions"
                    className="min-h-[150px] border-stone-300 focus:border-greenrock-500 focus:ring-greenrock-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-greenrock-600 hover:bg-greenrock-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-900">{item.title}</h3>
                      <div className="mt-1 space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-stone-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* WhatsApp Contact */}
              <div className="mt-10 p-6 bg-green-50 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold text-green-700">Contact us on WhatsApp</h3>
                </div>
                <p className="text-green-700 mb-4">
                  For faster responses, reach out to our team directly on WhatsApp for quotes, technical support, or inquiries.
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/260966555566" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="h-4 w-4">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Administrative Office
                  </a>
                </Button>
                <br />
                <br />
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/243819191916" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="h-4 w-4">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Site Office
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-4">
        Our Locations
      </h2>
      <p className="text-lg text-stone-600">
        Visit our offices in Zambia and DRC to explore our equipment and speak with our experts.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-stone-200">
        <iframe
          title="Kitwe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.682716911014!2d28.195902356938122!3d-12.82364028463703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x196c1b4ec31d6c47%3A0x741e6883b01aeef2!2sKitwe!5e0!3m2!1sen!2szm!4v1714389683034!5m2!1sen!2szm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-stone-200">
        <iframe
          title="Lubumbashi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63763.947829402215!2d27.441226705745008!3d-11.668217238473425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19464e76efaff5f5%3A0x8e01d33b2bb85e4f!2sLubumbashi!5e0!3m2!1sen!2szm!4v1714389794393!5m2!1sen!2szm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
