import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log("Form submitted:", formData);
    
    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    
    setFormSubmitted(true);
    
    // Reset form submission state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-white section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a href="mailto:rajarasagnak@gmail.com" className="text-primary hover:underline">rajarasagnak@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone</h4>
                  <a href="tel:+919346952190" className="text-primary hover:underline">+91 9346952190</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Location</h4>
                  <p>Vijayawada, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/kattukolu-rasagna-96a4532a4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/kattukolu-rasagna-96a4532a4
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition duration-300 w-full"
                disabled={formSubmitted}
              >
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
