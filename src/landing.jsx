'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, FileText, PieChart, DollarSign, CreditCard, Smartphone, Bell, Shield, Menu, X, ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const TrackMyBillLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const testimonials = [
    { name: "Sarah K.", role: "Small Business Owner", quote: "TrackMyBill has revolutionized how I manage my finances. It's a game-changer!" },
    { name: "Mike R.", role: "Freelance Designer", quote: "The invoice tracking feature saves me hours every week. Highly recommended!" },
    { name: "Emily T.", role: "Startup Founder", quote: "The insights from TrackMyBill have been crucial for our financial planning." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const popUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 10 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-green-900">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/80 backdrop-blur-md z-50 dark:bg-gray-900/80">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrackMyBill-removebg-preview-qDtDizp5SxPc5jPoImELkykEkoKqnk.png"
            alt="TrackMyBill Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="ml-2 text-2xl font-bold text-green-800 dark:text-green-200">TrackMyBill</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#testimonials">
            Testimonials
          </Link>
        </nav>
        <Button className="ml-4 hidden md:flex bg-green-600 hover:bg-green-700 text-white">
          Start Free Trial
        </Button>
        <Button
          className="ml-2 md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16"
          >
            <nav className="flex flex-col items-center gap-4 p-4">
              <Link className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#features" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </Link>
              <Link className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link className="text-lg font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                Start Free Trial
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                variants={fadeInUp}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
                  Simplify Your Finances
                </span>
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400"
                variants={fadeInUp}
              >
                Effortlessly track invoices and expenses. Take control of your financial future with TrackMyBill's powerful and intuitive platform.
              </motion.p>
              <motion.div className="space-x-4" variants={fadeInUp}>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
                <Button variant="outline">Watch Demo</Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-800 dark:text-green-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Powerful Features
            </motion.h2>
            <motion.div 
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: BarChart3, title: "Expense Tracking", description: "Easily log and categorize your expenses for better financial management." },
                { icon: FileText, title: "Invoice Management", description: "Create, send, and track invoices all in one place." },
                { icon: PieChart, title: "Financial Reports", description: "Generate comprehensive reports to gain insights into your finances." },
                { icon: Bell, title: "Bill Reminders", description: "Never miss a payment with customizable bill reminders." },
                { icon: Smartphone, title: "Mobile App", description: "Access your financial data on-the-go with our user-friendly mobile application." },
                { icon: Shield, title: "Secure Encryption", description: "Your financial data is protected with bank-level security." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 bg-green-50 dark:bg-green-900 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                  variants={popUp}
                >
                  <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full">
                    <feature.icon className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-800 dark:text-green-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              How It Works
            </motion.h2>
            <motion.div 
              className="grid gap-10 md:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { step: 1, title: "Sign Up", description: "Create your account in minutes. No credit card required." },
                { step: 2, title: "Connect Your Accounts", description: "Securely link your bank accounts and credit cards." },
                { step: 3, title: "Start Tracking", description: "Automatically categorize expenses and manage your bills." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  variants={fadeInUp}
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-green-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Join Thousands of Satisfied Users
              </motion.h2>
              <motion.p 
                className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Experience the power of TrackMyBill and take control of your finances today.
              </motion.p>
              <motion.div 
                className="w-full max-w-sm space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1 bg-white dark:bg-gray-800" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-white text-green-600 hover:bg-green-100">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-green-100">
                  Start your 14-day free trial. No credit card required.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-800 dark:text-green-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.div 
              className="grid gap-10 md:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Basic", price: "$9.99", features: ["Expense Tracking", "Invoice Management", "Basic Reports", "Email Support"] },
                { name: "Pro", price: "$19.99", features: ["All Basic features", "Advanced Reports", "Bill Reminders", "Priority Support"] },
                { name: "Enterprise", price: "Custom", features: ["All Pro features", "Custom Integrations", "Dedicated Account Manager", "On-premise Deployment"] },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                  variants={popUp}
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">{plan.name}</h3>
                  <span className="text-4xl font-bold mb-6 text-green-600 dark:text-green-400">{plan.price}<span className="text-sm font-normal">/month</span></span>
                  <ul className="mb-6 space-y-2 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto bg-green-600 hover:bg-green-700 text-white">Choose Plan</Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-800 dark:text-green-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Our Customers Say
            </motion.h2>
            <motion.div 
              className="relative h-[400px] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: index === currentTestimonial ? 1 : 0, x: index === currentTestimonial ? 0 : 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl italic mb-4 text-gray-600 dark:text-gray-400">"{testimonial.quote}"</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 dark:bg-green-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ready to Take Control of Your Finances?
              </motion.h2>
              <motion.p 
                className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of satisfied users who have simplified their financial management with TrackMyBill.
              </motion.p>
              <motion.div 
                className="w-full max-w-sm space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1 bg-white dark:bg-gray-800" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-white text-green-600 hover:bg-green-100">
                    Start Free Trial
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-green-100">
                  14-day free trial. No credit card required.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Features</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Integrations</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Blog</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Careers</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Documentation</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Help Center</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">API</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Cookie Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-600 dark:text-gray-400">© 2024 TrackMyBill Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrackMyBillLanding