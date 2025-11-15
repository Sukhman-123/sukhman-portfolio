import React from "react";
import { Mail, Github, Linkedin, Instagram, ExternalLink, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sukhman-123",
    color: "hover:text-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sukhman-hundal-3bb584202/",
    color: "hover:text-[#0077b5]"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/sukhman.hundal_/",
    color: "hover:text-[#E4405F]"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sukhmanpreethundal49@gmail.com",
    color: "hover:text-primary"
  },
  {
    icon: Calendar,
    label: "Cal ID",
    href: "https://cal.id/sukhmanpreet-singh",
    color: "hover:text-[#10B981]"
  }
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values
      });

      if (error) {
        console.error('Error sending email:', error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 mb-12 animate-scale-in">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/70 transition-all hover-lift hover-glow card-shine w-[100px]">
                  <social.icon className={`w-6 h-6 text-muted-foreground ${social.color} transition-all group-hover:scale-125 group-hover:rotate-12`} />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{social.label}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 animate-slide-up">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-background" />
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
                        <Input placeholder="your.email@example.com" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="min-h-[150px] bg-background resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all hover:scale-105"
                disabled={form.formState.isSubmitting}
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
