'use client'

import Button from '@/components/Button'
import { motion } from 'framer-motion'
import { useState } from 'react'

export type IndustrySlide = {
  title: string
  description?: string
  icon: string,
  list:string[]
}

export type ServicesData = {
  title: string
  gradientTitle: string
  afterGradientTitle?: string,
  description?:string,
  slides: IndustrySlide[]
}

type CoreServicesProps = {
  Services: ServicesData
}

export default function CoreServices({ Services }: CoreServicesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  if (!Services || !Services.slides || Services.slides.length === 0) return null

  return (
    <section className="bg-black text-white ">      
      <div className="max-w-full mx-auto w-full py-16 md:px-10 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <div className="flex flex-col md:flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {Services.title}{' '}
              <span className="gradient-text">{Services.gradientTitle}</span>{' '}
              {Services.afterGradientTitle}
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl text-sm sm:text-base">
           {Services?.description}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              text="View All Services"
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
              href="#"
              variant="glass"
              showIcon={true}
              className="inline-flex w-full md:w-auto justify-center"
            />
          </div>
        </div>

    
      <div className="hidden md:block relative w-full h-[400px] lg:h-[487px] mx-auto overflow-hidden rounded-2xl">
        <div className="absolute inset-0 grid grid-cols-4">
          {Services.slides.map((item, index) => {
            const isActive = activeIndex === index
            const isDimmed = activeIndex !== index

            return (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                onClick={() => setActiveIndex(index)}
                className="relative h-full cursor-pointer"
                animate={{
                  backgroundColor: isDimmed
                    ? 'rgba(0,0,0,0.9)'
                    : 'rgba(0,0,0,0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  {


                  }

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-zinc-300 mb-4">
                      {item.description}
                    </p>
                 
       
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="md:hidden space-y-4">
        {Services.slides.map((item, index) => (
          <motion.div
            key={item.title}
            initial={false}
            animate={{
              backgroundColor: activeIndex === index ? 'rgba(55, 65, 81, 0.3)' : 'rgba(17, 24, 39, 0.8)',
              borderColor: activeIndex === index ? 'rgba(249, 115, 22, 0.3)' : 'rgba(55, 65, 81, 0.5)'
            }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl border p-4 cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >         
            <div className="flex items-start gap-3">
              <div className="text-2xl">{item.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="text-orange-500 text-sm font-medium">
                    {activeIndex === index ? 'Active' : 'Tap to view'}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Explore {item.title} Solutions
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
  
      <div className="md:hidden flex justify-center gap-2 mt-6">
        {Services.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-orange-500 scale-125'
                : 'bg-gray-700'
            }`}
            aria-label={`View ${Services.slides[index].title} industry`}
          />
        ))}
      </div>
            </div>
    </section>
  )
}
