import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  agreedToTerms: z.boolean().refine(val => val === true, { message: "You must agree to the terms" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      agreedToTerms: false
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: Omit<ContactFormValues, "agreedToTerms">) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you soon.",
        variant: "default",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    const { agreedToTerms, ...contactData } = data;
    submitContactForm.mutate(contactData);
  }

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss Your Security Needs</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our security experts are ready to help you assess your security posture and identify the right solutions for your organization.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-2xl text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-300">contact@aphelioncyber.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-2xl text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (888) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-2xl text-secondary"></i>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-gray-300">123 Security Blvd, Cyber City, CA 94103</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-linkedin-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-twitter-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-facebook-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <i className="ri-github-fill text-xl text-gray-300 hover:text-secondary"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-dark-light p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            {submitted ? (
              <div className="bg-secondary/20 p-6 rounded-lg text-center">
                <i className="ri-check-line text-4xl text-secondary mb-4"></i>
                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-300">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              className="bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            className="bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help..." 
                            className="bg-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary text-white" 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="agreedToTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0 pt-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="bg-dark border-gray-700 rounded data-[state=checked]:bg-secondary"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-300">
                            I agree to the <a href="#" className="text-secondary hover:text-accent">Privacy Policy</a> and <a href="#" className="text-secondary hover:text-accent">Terms of Service</a>.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-[#4f46e5] text-white font-medium py-3 px-4 rounded-lg transition-colors"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
