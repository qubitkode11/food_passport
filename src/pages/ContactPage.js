import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

// ── Config ──────────────────────────────────────────────────────────
const RECIPIENT_EMAIL = 'tina@foodpassport.com.au';
const WHATSAPP_NUMBER  = '61460019597'; // international format, no +

// ── Send-options Modal ───────────────────────────────────────────────
const SendModal = ({ formData, onClose }) => {
  const { firstName, lastName, company, email, region, message } = formData;
  const fullName = `${firstName} ${lastName}`.trim();

  const handleEmail = () => {
    const subject = encodeURIComponent(
      `Enquiry from ${fullName}${company ? ` — ${company}` : ''}`
    );
    const body = encodeURIComponent(
      `Hello,\n\nYou have a new enquiry from the Food Passport website.\n\n` +
      `Name:     ${fullName}\n` +
      `Company:  ${company || '—'}\n` +
      `Email:    ${email}\n` +
      `Region:   ${region || '—'}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent via foodpassport.com.au contact form`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    onClose('email');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Food Passport! 👋\n\n` +
      `*New Enquiry*\n` +
      `Name: ${fullName}\n` +
      `Company: ${company || '—'}\n` +
      `Email: ${email}\n` +
      `Region: ${region || '—'}\n\n` +
      `Message:\n${message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    onClose('whatsapp');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => onClose(null)}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-[fadeUp_0.3s_ease_forwards]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={() => onClose(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-navy mb-2">How would you like to send?</h3>
          <p className="text-muted text-sm">Choose your preferred channel to reach us.</p>
        </div>

        <div className="space-y-3">
          {/* Email button */}
          <button
            onClick={handleEmail}
            className="group w-full flex items-center gap-4 p-4 border-2 border-border rounded-xl hover:border-navy hover:bg-navy hover:text-white transition-all duration-300"
          >
            <div className="w-12 h-12 bg-navy/8 group-hover:bg-white/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
              <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-navy group-hover:text-white text-sm transition-colors">Send via Email</div>
              <div className="text-xs text-muted group-hover:text-white/70 transition-colors">{RECIPIENT_EMAIL}</div>
            </div>
            <svg className="w-5 h-5 text-muted group-hover:text-white ml-auto transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* WhatsApp button */}
          <button
            onClick={handleWhatsApp}
            className="group w-full flex items-center gap-4 p-4 border-2 border-border rounded-xl hover:border-[#25D366] hover:bg-[#25D366] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#25D366]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center shrink-0 transition-colors">
              <svg className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-navy group-hover:text-white text-sm transition-colors">Send via WhatsApp</div>
              <div className="text-xs text-muted group-hover:text-white/70 transition-colors">+61 460 019 597</div>
            </div>
            <svg className="w-5 h-5 text-muted group-hover:text-white ml-auto transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <p className="text-center text-xs text-muted mt-5">
          Your message will be pre-filled automatically.
        </p>
      </div>
    </div>
  );
};

// ── Success Screen ───────────────────────────────────────────────────
const SuccessScreen = ({ channel, onReset }) => (
  <div className="flex flex-col items-center justify-center text-center py-12 animate-[fadeUp_0.4s_ease_forwards]">
    <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mb-6">
      <svg className="w-10 h-10 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <h3 className="font-serif text-3xl text-navy mb-3">Message Ready!</h3>
    <p className="text-muted text-[15px] mb-2 leading-relaxed max-w-xs">
      {channel === 'email'
        ? 'Your email client has opened with the message pre-filled. Just hit send!'
        : 'WhatsApp has opened with your message pre-filled. Just tap send!'}
    </p>
    <p className="text-muted text-sm mb-8">We typically reply within 24 hours.</p>
    <button
      onClick={onReset}
      className="group relative overflow-hidden bg-navy text-white px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:text-navy"
    >
      <span className="absolute inset-0 bg-green-light transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
      <span className="relative z-10">Send Another Enquiry</span>
    </button>
  </div>
);

// ── Main Page ────────────────────────────────────────────────────────
const ContactPage = () => {
  const cardsRef = useScrollReveal();
  const formRef  = useScrollReveal(0.2);
  const { t }    = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', company: '', email: '', region: '', message: '',
  });
  const [errors,      setErrors]      = useState({});
  const [showModal,   setShowModal]   = useState(false);
  const [submitted,   setSubmitted]   = useState(false);
  const [sentChannel, setSentChannel] = useState(null);

  const update = (field) => (e) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = true;
    if (!formData.lastName.trim())  errs.lastName  = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = true;
    if (!formData.message.trim())   errs.message   = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setShowModal(true);
  };

  const handleModalClose = (channel) => {
    setShowModal(false);
    if (channel) {
      setSentChannel(channel);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ firstName: '', lastName: '', company: '', email: '', region: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setSentChannel(null);
  };

  const inputClass = (field) =>
    `peer w-full border-b bg-transparent py-2 text-navy focus:outline-none transition-colors placeholder-transparent ${
      errors[field] ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-green-light'
    }`;

  const labelClass =
    'absolute left-0 -top-3.5 text-xs font-bold tracking-widest text-muted uppercase transition-all ' +
    'peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal ' +
    'peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:tracking-widest peer-focus:text-green-light';

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Modal */}
      {showModal && <SendModal formData={formData} onClose={handleModalClose} />}

      {/* Cinematic Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[slowZoom_20s_ease-out_forwards]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-8 max-w-4xl animate-[fadeUp_0.8s_ease_forwards] mt-16">
          <div className="flex items-center justify-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-green-light mb-8">
            <div className="w-12 h-[1px] bg-green-light" />
            {t.contact.heroEyebrow}
            <div className="w-12 h-[1px] bg-green-light" />
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight">
            {t.contact.heroHeading1} <span className="italic text-white/50">{t.contact.heroHeadingEm}</span>
          </h1>
          <p className="text-xl text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="w-full bg-off border-b border-border flex-shrink-0">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <div ref={cardsRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.directContact}</div>
              <div className="text-xl font-medium font-serif text-navy">Mrs Tina Koutroumanis</div>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.salesDirector || 'Director of Sales'}</div>
              <div className="text-xl font-medium font-serif text-navy">Photini Drivas</div>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.emailUs}</div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase tracking-wider">Tina</span>
                  <a href="mailto:tina@foodpassport.com.au" className="text-sm md:text-base text-navy font-medium hover:text-green-light transition-colors">tina@foodpassport.com.au</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase tracking-wider">Photini</span>
                  <a href="mailto:photini@foodpassport.com.au" className="text-sm md:text-base text-navy font-medium hover:text-green-light transition-colors">photini@foodpassport.com.au</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-white border border-border shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.callUs}</div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase tracking-wider">Tina</span>
                  <a href="tel:+61460019597" className="text-sm md:text-base text-navy font-medium hover:text-green-light transition-colors">+61 460 019 597</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase tracking-wider">Photini</span>
                  <a href="tel:+61414192536" className="text-sm md:text-base text-navy font-medium hover:text-green-light transition-colors">+61 414 192 536</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 bg-navy shadow-lg rounded-full flex items-center justify-center mb-6 group-hover:bg-green-light transition-colors duration-500">
                <svg className="w-6 h-6 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted uppercase mb-3">{t.contact.headquarters}</div>
              <div className="text-sm text-navy leading-relaxed font-medium">Office 3658, Ground floor,<br/>470 St Kilda Road,<br/>Melbourne VIC 3004</div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content: Form & Map */}
      <div className="w-full flex-grow flex flex-col lg:flex-row mb-16 lg:mb-24">

        {/* Form Side */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div ref={formRef} className="reveal w-full max-w-3xl p-8 md:p-16 lg:py-24 lg:pr-24">

            {submitted ? (
              <SuccessScreen channel={sentChannel} onReset={handleReset} />
            ) : (
              <>
                <div className="mb-12">
                  <h2 className="font-serif text-4xl text-navy mb-4">{t.contact.formHeading}</h2>
                  <p className="text-navy/60 font-sans text-lg">{t.contact.formSubtitle}</p>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="text" id="fname" value={formData.firstName}
                        onChange={update('firstName')}
                        className={inputClass('firstName')}
                        placeholder={t.contact.firstName}
                      />
                      <label htmlFor="fname" className={labelClass}>{t.contact.firstName}</label>
                      {errors.firstName && <p className="text-red-400 text-xs mt-1">Required</p>}
                    </div>
                    <div className="relative">
                      <input
                        type="text" id="lname" value={formData.lastName}
                        onChange={update('lastName')}
                        className={inputClass('lastName')}
                        placeholder={t.contact.lastName}
                      />
                      <label htmlFor="lname" className={labelClass}>{t.contact.lastName}</label>
                      {errors.lastName && <p className="text-red-400 text-xs mt-1">Required</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <input
                      type="text" id="company" value={formData.company}
                      onChange={update('company')}
                      className={inputClass('company')}
                      placeholder={t.contact.company}
                    />
                    <label htmlFor="company" className={labelClass}>{t.contact.company}</label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email" id="email" value={formData.email}
                      onChange={update('email')}
                      className={inputClass('email')}
                      placeholder={t.contact.email}
                    />
                    <label htmlFor="email" className={labelClass}>{t.contact.email}</label>
                    {errors.email && <p className="text-red-400 text-xs mt-1">Valid email required</p>}
                  </div>

                  {/* Region */}
                  <div className="relative">
                    <label className="block text-xs font-bold tracking-widest text-muted uppercase mb-4">{t.contact.regionLabel}</label>
                    <select
                      value={formData.region}
                      onChange={update('region')}
                      className="w-full border-b border-gray-300 bg-transparent py-2 text-navy focus:outline-none focus:border-green-light transition-colors cursor-pointer appearance-none"
                    >
                      <option value="" disabled hidden>{t.contact.regionPlaceholder}</option>
                      {t.contact.regions.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <svg className="absolute right-0 bottom-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>

                  {/* Message */}
                  <div className="relative mt-12">
                    <textarea
                      id="message" rows="4" value={formData.message}
                      onChange={update('message')}
                      className={`${inputClass('message')} resize-none`}
                      placeholder={t.contact.messageLabel}
                    />
                    <label htmlFor="message" className={labelClass}>{t.contact.messageLabel}</label>
                    {errors.message && <p className="text-red-400 text-xs mt-1">Required</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-navy text-white px-10 py-4 font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-navy w-full mt-8 rounded-sm"
                  >
                    <span className="absolute inset-0 bg-green-light transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {t.contact.submit}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </button>

                  {/* Quick-access row */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted uppercase tracking-widest">or reach us directly</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${RECIPIENT_EMAIL}`}
                      className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-sm text-xs font-bold tracking-wider text-navy uppercase hover:bg-navy hover:text-white transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      Email
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-sm text-xs font-bold tracking-wider text-navy uppercase hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map Side */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-off2 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0!2d144.9731!3d-37.8395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667c4e4e1a1a1%3A0x1a1a1a1a1a1a1a1a!2s470%20St%20Kilda%20Rd%2C%20Melbourne%20VIC%203004%2C%20Australia!5e0!3m2!1sen!2sus!4v1714498305886!5m2!1sen!2sus"
            width="100%" height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Food Passport Location"
            className="absolute inset-0 h-full transition-all duration-700 group-hover:filter-none"
          />
          <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md p-6 shadow-2xl z-20 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <h4 className="font-serif text-2xl text-navy mb-2">{t.contact.visitUs}</h4>
            <p className="text-sm font-sans text-navy/70 leading-relaxed">
              Office 3658, Ground floor,<br/>
              470 St Kilda Road,<br/>
              Melbourne VIC 3004
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
