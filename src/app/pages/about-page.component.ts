import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="section-wrap py-16 md:py-20">
      <p class="eyebrow">About Us</p>
      <h1 class="mt-3 text-4xl font-bold text-white md:text-6xl">We are NovaTech Technologies</h1>
      <p class="mt-6 max-w-4xl text-lg text-slate-300 leading-relaxed">
        We collaborate with industry experts to create valuable, empathy-led technologies for surveillance and education.
        Our teams combine product innovation, research, and practical domain experience to ship meaningful solutions.
      </p>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
        alt="NovaTech leadership team"
        class="mt-8 h-72 w-full rounded-3xl object-cover"
      />

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div class="glass-card p-6">
          <p class="text-3xl font-bold text-cyan-300">12+</p>
          <p class="mt-2 text-sm text-slate-300">Years advancing video intelligence</p>
        </div>
        <div class="glass-card p-6">
          <p class="text-3xl font-bold text-cyan-300">40+</p>
          <p class="mt-2 text-sm text-slate-300">Global partners and integrations</p>
        </div>
        <div class="glass-card p-6">
          <p class="text-3xl font-bold text-cyan-300">99.9%</p>
          <p class="mt-2 text-sm text-slate-300">Platform reliability target</p>
        </div>
      </div>

      <div class="glass-card mt-10 p-8">
        <h2 class="text-2xl font-semibold text-white">Our Mission</h2>
        <p class="mt-4 text-slate-300 leading-relaxed">
          Build technology that supports people making better decisions, faster, with confidence and context.
        </p>
      </div>
    </section>
  `
})
export class AboutPageComponent {}
