import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Linkedin, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const collaborationOpportunities = [
    "Statistical consulting for research projects",
    "Keynote speaking at conferences", 
    "Joint research publications",
    "Data science training workshops"
  ];

  return (
    <section id="contact" className="pt-4 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-portfolio-primary mb-4">Let's Collaborate</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in statistical consulting, research collaboration, or speaking opportunities? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-portfolio-secondary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-primary mb-2">Email</h3>
                  <p className="text-gray-600">isrs.researchsci@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-portfolio-success h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-primary mb-2">Phone</h3>
                  <p className="text-gray-600">03343660481</p>
                  <p className="text-gray-600">03194071196</p>
                  <p className="text-sm text-gray-500">Available for consultation calls</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-portfolio-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-primary mb-2">Location</h3>
                  <p className="text-gray-600">University of Sindh, Jamshoro, Pakistan</p>
                  <p className="text-sm text-gray-500">Available for remote collaboration</p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-portfolio-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-portfolio-secondary h-6 w-6" />
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-portfolio-primary mb-2">Professional Networks</h3>
                  <div className="space-y-2">
                    <a href="#" className="text-portfolio-secondary hover:text-portfolio-primary block transition-colors duration-200">LinkedIn: /in/sarah-chen-stats</a>
                    <a href="#" className="text-portfolio-secondary hover:text-portfolio-primary block transition-colors duration-200">ResearchGate: Sarah_Chen_Statistics</a>
                    <a href="#" className="text-portfolio-secondary hover:text-portfolio-primary block transition-colors duration-200">ORCID: 0000-0000-0000-0000</a>
                  </div>
                </div> 
              </div> */}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-4">Collaboration Opportunities</h3>
              <ul className="space-y-3">
                {collaborationOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-portfolio-success" />
                    <span className="text-gray-600">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg fade-in">
            <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-portfolio-primary">Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="focus:ring-2 focus:ring-portfolio-secondary focus:border-transparent"
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
                        <FormLabel className="text-sm font-semibold text-portfolio-primary">Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@domain.com" 
                            className="focus:ring-2 focus:ring-portfolio-secondary focus:border-transparent"
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-portfolio-primary">Subject *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-portfolio-secondary focus:border-transparent">
                            <SelectValue placeholder="Select collaboration type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="consulting">Statistical Consulting</SelectItem>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                          <SelectItem value="training">Training Workshop</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-portfolio-primary">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder="Tell me about your project or collaboration idea..." 
                          className="focus:ring-2 focus:ring-portfolio-secondary focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-portfolio-secondary hover:bg-blue-600 text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
