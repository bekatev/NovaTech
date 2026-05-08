import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="section-wrap py-16 md:py-20">
      <p class="eyebrow">Contact</p>
      <h1 class="mt-3 text-4xl font-bold text-white md:text-6xl">Let's build something meaningful.</h1>
      <p class="mt-6 max-w-3xl text-lg text-slate-300">
        For partnership opportunities, product information, or support requests, contact NovaTech Technologies.
      </p>
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
        alt="NovaTech office interior"
        class="mt-8 h-72 w-full rounded-3xl object-cover"
      />

      <div class="mt-10 grid gap-8 lg:grid-cols-2">
        <div class="glass-card p-8">
          <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Head Office</p>
          <p class="mt-4 text-slate-200">NovaTech Technologies Group AG</p>
          <p class="mt-2 text-slate-400">Poststrasse 14, 6300, Zug, Switzerland</p>
          <p class="mt-6 text-slate-300">Email: contact&#64;novatech.com</p>
          <p class="mt-1 text-slate-300">LinkedIn: NovaTech Technologies</p>
        </div>

        <div class="glass-card p-8">
          <p class="text-sm uppercase tracking-[0.2em] text-cyan-300">Fast Response</p>
          <h2 class="mt-3 text-2xl font-semibold text-white">Book a discovery call</h2>
          <p class="mt-3 text-slate-300">Tell us your goals and we will connect you with the right product specialist.</p>
          <div class="mt-7 flex flex-wrap gap-4">
            <a href="mailto:contact@novatech.com?subject=Discovery%20Call%20Request" class="btn-primary">Schedule Meeting</a>
            <a href="mailto:contact@novatech.com?subject=Brochure%20Request" class="btn-secondary">Request Brochure</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactPageComponent {}
