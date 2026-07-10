import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Check,
  ChevronDown,
  Database,
  FileAudio,
  FileText,
  Globe2,
  Languages,
  Mail,
  MessageCircle,
  Menu,
  Mic,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const asset = (name) => `/assets/${name}`;
const refImage = (name) => `/reference/images/${name}`;

const services = [
  {
    slug: 'translation-services',
    label: 'Translation',
    icon: Languages,
    image: asset('services-language-ops.png'),
    title: 'Professional translation services for clear global communication',
    summary: 'Native linguists translate business, legal, research, technical, and marketing content with context, terminology control, and human review.',
    seo: 'Professional translation services by vetted native linguists for business, legal, technical, research, and marketing content.',
    bullets: ['Human translation by native experts', 'Legal, medical, business, and technical specialization', 'Terminology, formatting, and second-review QA', 'Fast project-based and ongoing support'],
    audience: 'Businesses, NGOs, researchers, law firms, healthcare teams, and global operators.'
  },
  {
    slug: 'transcription-services',
    label: 'Transcription',
    icon: FileAudio,
    image: asset('brand-operations-hero.png'),
    title: 'Human-verified transcription for audio, video, and research data',
    summary: 'Accurate transcription across African and global languages, including speaker labels, timestamps, translation, and low-resource language support.',
    seo: 'Human transcription services for audio, video, research, legal, media, and AI datasets across African and global languages.',
    bullets: ['Clean-read and verbatim transcripts', 'Speaker diarization and timestamps', 'Native-speaker verification', 'Translated transcript options'],
    audience: 'Research teams, AI companies, legal teams, media producers, and healthcare documentation teams.'
  },
  {
    slug: 'ai-language-data-annotation',
    label: 'AI Language Data',
    icon: Database,
    image: asset('brand-workflow-infographic.png'),
    title: 'High-quality language data and annotation for smarter AI',
    summary: 'Speech, text, annotation, validation, and multilingual datasets built by vetted native speakers with transparent quality workflows.',
    seo: 'AI language data collection, annotation, validation, and speech datasets by vetted native speakers.',
    bullets: ['Speech and text corpus creation', 'Sentiment, intent, entity, and QA annotation', 'Native-speaker dataset validation', 'Ethical participant sourcing'],
    audience: 'AI labs, NLP teams, speech recognition teams, data operations groups, and product researchers.'
  },
  {
    slug: 'voice-recording-services',
    label: 'Voice Recording',
    icon: Mic,
    image: asset('talent-support-team.png'),
    title: 'Native voice recording services for AI, media, and learning',
    summary: 'Authentic voice recordings from vetted native speakers across languages, accents, regions, and demographic profiles.',
    seo: 'Voice recording services by native speakers for AI speech data, e-learning, media, dubbing, and accessibility projects.',
    bullets: ['Scripted and unscripted audio capture', 'Accent and demographic matching', 'Remote-directed or studio-grade workflows', 'Audio validation, cleaning, and delivery'],
    audience: 'AI speech teams, e-learning platforms, media studios, accessibility teams, and commercial voice projects.'
  },
  {
    slug: 'localization-services',
    label: 'Localization',
    icon: Globe2,
    image: asset('blog-localization-strategy.png'),
    title: 'Localization services that make your brand native everywhere',
    summary: 'Go beyond translation with cultural adaptation for products, websites, apps, campaigns, and customer experiences.',
    seo: 'Localization services for websites, SaaS products, apps, marketing, multimedia, and market entry campaigns.',
    bullets: ['Website and SEO localization', 'Software and app localization', 'Marketing transcreation', 'Cultural and UX review'],
    audience: 'SaaS companies, ecommerce brands, education platforms, NGOs, and market-entry teams.'
  },
  {
    slug: 'multilingual-data-collection',
    label: 'Data Collection',
    icon: FileText,
    image: asset('about-language-qa.png'),
    title: 'Scalable multilingual data collection across language communities',
    summary: 'Primary language data gathered through native speakers, surveys, interviews, digital collection, and field-ready quality controls.',
    seo: 'Multilingual data collection for AI training, market research, surveys, interviews, field research, and global expansion.',
    bullets: ['Speech, text, survey, and interview data', 'Community and participant sourcing', 'Consent-aware collection workflows', 'Validation and structured delivery'],
    audience: 'AI teams, NGOs, research groups, market research teams, and global expansion teams.'
  },
  {
    slug: 'annotation-services',
    label: 'Annotation',
    icon: Database,
    image: asset('brand-workflow-infographic.png'),
    title: 'Annotation services for language, speech, image, and AI datasets',
    summary: 'Structured annotation workflows for AI teams that need native-language judgment, clear guidelines, and reliable reviewer agreement.',
    seo: 'Language annotation, data labeling, QA annotation, and native-speaker validation services for AI datasets.',
    bullets: ['Intent and entity annotation', 'Speech and text labeling', 'Reviewer agreement checks', 'Guideline creation and QA'],
    audience: 'AI teams, NLP teams, data operations teams, and research organizations.'
  },
  {
    slug: 'subtitling-services',
    label: 'Subtitling',
    icon: FileText,
    image: asset('blog-localization-strategy.png'),
    title: 'Subtitling services for multilingual video and media content',
    summary: 'Human-created subtitles with timing, translation, readability checks, and culturally natural phrasing.',
    seo: 'Professional subtitling services for multilingual videos, training content, media, campaigns, and education.',
    bullets: ['Subtitle translation and timing', 'SRT/VTT delivery', 'Readability and tone review', 'Multimedia localization support'],
    audience: 'Media teams, e-learning platforms, marketing teams, NGOs, and accessibility programs.'
  },
  {
    slug: 'interpretation-services',
    label: 'Interpretation',
    icon: Users,
    image: asset('talent-support-team.png'),
    title: 'Interpretation services for meetings, research, support, and field work',
    summary: 'Remote and scheduled interpretation by vetted language professionals for conversations where clarity matters.',
    seo: 'Remote interpretation services for business meetings, support calls, healthcare, research, interviews, and field operations.',
    bullets: ['Consecutive interpretation', 'Remote meeting support', 'Research and interview interpretation', 'Briefed interpreters for sensitive topics'],
    audience: 'Organizations, healthcare teams, research groups, legal teams, and customer support teams.'
  },
  {
    slug: 'language-tutoring',
    label: 'Language Tutoring',
    icon: BookOpen,
    image: asset('about-language-qa.png'),
    title: 'Language tutoring for professionals and teams',
    summary: 'Practical language coaching for teams preparing to work, research, sell, or collaborate across markets.',
    seo: 'Language tutoring and coaching for professionals, business teams, researchers, and market-entry teams.',
    bullets: ['Business language coaching', 'Role-specific learning goals', 'Native-speaker tutors', 'Cultural communication guidance'],
    audience: 'Professionals, global teams, researchers, market-entry teams, and support teams.'
  },
  {
    slug: 'custom-language-projects',
    label: 'Others',
    icon: Sparkles,
    image: asset('brand-operations-hero.png'),
    title: 'Custom language services for complex multilingual projects',
    summary: 'Custom project support when your language work spans services, formats, teams, markets, or data requirements.',
    seo: 'Custom multilingual project support for complex translation, data, localization, interpretation, and language operations.',
    bullets: ['Multi-service project design', 'Dedicated language operations support', 'Custom QA and delivery workflows', 'Scoping for unusual language needs'],
    audience: 'Organizations with complex, recurring, or non-standard multilingual operations.'
  }
];

const audiences = [
  {
    slug: 'for-organizations',
    label: 'For Organizations',
    title: 'Scale global operations with trusted native-language experts',
    image: asset('brand-operations-hero.png'),
    summary: 'Submit a project brief and get the right language team, project management, QA, and delivery plan for your timeline.'
  },
  {
    slug: 'for-language-professionals',
    label: 'For Language Professionals',
    title: 'Turn your language skills into global career opportunities',
    image: asset('talent-support-team.png'),
    summary: 'Join a vetted network of translators, transcribers, voice talent, annotators, reviewers, and language specialists.'
  }
];

const caseStudies = [
  {
    slug: 'speech-data-for-ai-model',
    title: 'Building validated speech data for an AI model',
    category: 'AI Language Data',
    result: '10,000+ hours of validated multilingual speech data',
    image: asset('brand-workflow-infographic.png'),
    challenge: 'The client needed natural speech samples across language communities with clear consent, consistent metadata, and reliable validation.',
    solution: 'Langigs recruited native speakers, managed recording workflows, reviewed files for quality, and delivered structured data ready for model training.',
    context: 'AI teams often underestimate the operational work behind African language datasets. Speaker recruitment, prompt design, consent, accent coverage, background-noise control, metadata, and human validation all affect whether a model learns real language use or simply memorizes clean lab audio.',
    execution: ['Mapped speaker profiles by language, region, age band, and recording condition', 'Built recording instructions that were simple enough for contributors and strict enough for QA', 'Reviewed samples for clarity, consent, duplication, metadata completeness, and language authenticity', 'Delivered batches with issue logs so the client could improve model training without guessing'],
    metrics: [['10k+', 'validated hours'], ['180+', 'language communities supported'], ['2-step', 'native review process']],
    takeaway: 'The strongest AI language datasets are not just collected. They are designed, checked, and documented by people who understand how the language is actually spoken.'
  },
  {
    slug: 'ngo-field-research-transcription',
    title: 'Transcribing multilingual field interviews for an NGO',
    category: 'Transcription',
    result: 'Rapid turnaround across low-resource languages',
    image: asset('services-language-ops.png'),
    challenge: 'A research team had interviews with multiple speakers, dialect shifts, background noise, and strict confidentiality needs.',
    solution: 'Langigs matched native transcribers, added reviewer checks, standardized formatting, and delivered clean transcripts for analysis.',
    context: 'Research transcription becomes risky when language, confidentiality, and field conditions collide. The team needed transcripts that preserved meaning, speaker turns, and local nuance without slowing down analysis.',
    execution: ['Separated interviews by language, audio quality, and sensitivity level', 'Assigned native transcribers with research and NGO context', 'Standardized speaker labels, timestamps, unclear-audio markers, and formatting', 'Added reviewer passes for terminology, names, and meaning-critical passages'],
    metrics: [['48hr', 'pilot review window'], ['3 layers', 'privacy-aware handling'], ['1 workflow', 'for all language batches']],
    takeaway: 'For field research, transcription quality is not just word accuracy. It is the ability to protect context so analysts can trust what they are reading.'
  },
  {
    slug: 'localized-saas-market-entry',
    title: 'Localizing a SaaS launch for a new regional market',
    category: 'Localization',
    result: 'Market-ready website, product copy, and support content',
    image: asset('blog-localization-strategy.png'),
    challenge: 'The client needed product language that felt local, not directly translated from English.',
    solution: 'Langigs localized conversion pages, product strings, onboarding copy, and support content with native market review.',
    context: 'The SaaS team had a strong English product, but direct translation would have carried over the wrong examples, calls to action, support language, and trust signals for the new market.',
    execution: ['Audited high-intent pages, onboarding flows, product strings, and support articles', 'Created localized terminology guidance for product, pricing, and support language', 'Reviewed conversion copy with native market experts', 'Flagged UI text expansion issues before launch'],
    metrics: [['42', 'priority screens reviewed'], ['5', 'content types localized'], ['1', 'market voice guide created']],
    takeaway: 'Localization performs best when language, product UX, and buyer trust are handled together instead of as separate translation tasks.'
  }
];

const blogImagePool = [
  refImage('home-features-list-section-0.jpg'),
  refImage('home-features-list-section-1.jpg'),
  refImage('home-features-list-section-2.jpg'),
  refImage('home-features-list-section-3.jpg'),
  refImage('home-features-list-section-4.jpg'),
  refImage('home-features-list-section-5.jpg'),
  refImage('home-how-it-works-section-0.jpg'),
  refImage('home-how-it-works-section-1.jpg'),
  refImage('home-how-it-works-section-2.jpg'),
  refImage('home-feature-section-2.jpg')
];

const seedPosts = [
  {
    slug: 'quality-african-language-data-ai',
    title: 'How to Source High-Quality African Language Data for AI',
    category: 'AI Language Data',
    image: blogImagePool[0],
    excerpt: 'A practical guide for AI teams collecting speech, text, and annotation data across diverse African language communities.',
    body: [
      'AI systems are only as strong as the language data behind them. When data is thin, inconsistent, or detached from real communities, models struggle with accents, dialects, code-switching, intent, and cultural context.',
      'High-quality data starts before collection. Teams need to define target languages, speaker profiles, consent rules, file formats, annotation rubrics, review criteria, and the feedback loop between native speakers and model teams.',
      'Langigs supports this process with native participant sourcing, managed data collection, annotation, reviewer validation, and structured delivery so AI teams can train on language that reflects the real world.'
    ]
  },
  {
    slug: 'translation-vs-localization',
    title: 'Translation vs Localization: What Global Teams Should Know',
    category: 'Localization',
    image: blogImagePool[1],
    excerpt: 'Translation carries meaning. Localization makes the experience feel built for the market.',
    body: [
      'Translation changes language. Localization changes experience. A localized product adapts examples, forms, pricing cues, support paths, search intent, visuals, and cultural expectations.',
      'For websites, apps, and campaigns, localization should begin with the buyer journey. Which pages drive trust? Which support flows reduce friction? Which words sound natural in market?',
      'The best localization programs combine native language review, brand voice guidance, local search research, cultural adaptation, and a QA process that catches UI and conversion issues before launch.'
    ]
  },
  {
    slug: 'human-transcription-low-resource-languages',
    title: 'Why Human Transcription Still Matters for Low-Resource Languages',
    category: 'Transcription',
    image: blogImagePool[2],
    excerpt: 'Automated transcription misses context, speakers, and dialect nuance where training data is limited.',
    body: [
      'Low-resource language transcription requires human judgment. Accents, speaker overlap, background noise, dialect shifts, and code-switching can change meaning in ways automated tools often miss.',
      'Native transcribers capture intent, speaker boundaries, cultural references, and unclear segments with useful notes for the client.',
      'Reviewed human transcripts become reliable assets for legal work, research, media production, customer insight, and AI training.'
    ]
  },
  {
    slug: 'voice-recording-for-speech-ai',
    title: 'Planning Voice Recording Projects for Speech AI',
    category: 'Voice Recording',
    image: blogImagePool[3],
    excerpt: 'How to plan speaker profiles, scripts, environment, metadata, and QA before collecting voice data.',
    body: [
      'Voice recording projects succeed when requirements are clear before the first session. Speaker demographics, accent region, recording environment, script style, and metadata must match the model goal.',
      'A good workflow includes recruitment, speaker consent, technical checks, session supervision, file review, noise screening, and structured delivery.',
      'Langigs helps teams collect authentic voice data from native speakers while keeping quality, privacy, and delivery standards visible.'
    ]
  }
];

const additionalBlogIdeas = [
  ['translation-project-brief', 'How to Write a Translation Brief That Prevents Rework', 'Translation', 'A clear brief helps linguists preserve meaning, formatting, terminology, and audience intent from the first pass.'],
  ['certified-translation-checklist', 'Certified Translation Checklist for Business Documents', 'Translation', 'What to prepare before ordering certified translation for legal, business, academic, or immigration files.'],
  ['audio-transcription-quality', 'What Makes a Transcript Reliable Enough for Research?', 'Transcription', 'A research-ready transcript needs speaker clarity, context notes, timestamps, and native-language review.'],
  ['speaker-diarization-guide', 'Speaker Diarization: Why It Matters in Multilingual Transcription', 'Transcription', 'Correct speaker labels make transcripts easier to code, search, analyze, and use as evidence.'],
  ['annotation-guidelines-ai', 'How to Create Better Annotation Guidelines for AI Teams', 'Annotation', 'Strong guidelines reduce ambiguity and improve agreement between annotators and reviewers.'],
  ['native-reviewers-ai-data', 'Why Native Reviewers Improve AI Dataset Quality', 'AI Language Data', 'Native-language reviewers catch edge cases, cultural context, and intent that generic QA often misses.'],
  ['voice-recording-speaker-profiles', 'Planning Speaker Profiles for Voice Recording Projects', 'Voice Recording', 'Speaker demographics, accent, environment, and script style should match the model or media goal.'],
  ['remote-voice-recording-quality', 'How to Keep Remote Voice Recording Quality Consistent', 'Voice Recording', 'Remote sessions need technical checks, script control, file validation, and clear delivery standards.'],
  ['subtitling-readability', 'Subtitling Readability Rules for Global Audiences', 'Subtitling', 'Readable subtitles balance timing, line length, tone, translation, and cultural context.'],
  ['video-localization-workflow', 'A Practical Workflow for Video Localization', 'Localization', 'Video localization brings together transcription, translation, subtitling, voice, timing, and review.'],
  ['interpretation-for-research', 'Using Interpreters in Multilingual Field Research', 'Interpretation', 'Briefed interpreters improve clarity, consent, and trust during interviews and community research.'],
  ['interpretation-customer-support', 'How Interpretation Improves Multilingual Customer Support', 'Interpretation', 'Interpreter access can reduce escalations and help customers explain issues in their strongest language.'],
  ['language-tutoring-teams', 'When Teams Should Invest in Language Tutoring', 'Language Tutoring', 'Tutoring helps teams prepare for market entry, field work, sales, support, and cross-cultural collaboration.'],
  ['localization-market-entry', 'Localization Planning for Market Entry Teams', 'Localization', 'Localization should prioritize conversion paths, product friction, search intent, and support content.'],
  ['seo-localization-keywords', 'Why SEO Localization Starts With Native Keyword Research', 'Localization', 'Search behavior changes across markets, even when the product is the same.'],
  ['multilingual-data-collection-consent', 'Consent and Privacy in Multilingual Data Collection', 'Data Collection', 'Responsible collection requires clear participant communication, metadata discipline, and secure handling.'],
  ['survey-translation-quality', 'Survey Translation Quality for Research Teams', 'Translation', 'Survey translation must preserve intent, response options, and cultural interpretation.'],
  ['rare-language-sourcing', 'How to Source Rare-Language Experts Without Losing Quality', 'Talent Network', 'Rare-language work requires vetting, community awareness, and reviewer redundancy.'],
  ['qa-for-language-projects', 'A Simple QA Framework for Language Projects', 'Quality Assurance', 'QA should check meaning, formatting, terminology, audience fit, and final deliverable requirements.'],
  ['machine-translation-vs-human-review', 'Machine Translation vs Human Review: Where Each Fits', 'Translation', 'Automation can help, but human review protects context, risk, and brand trust.'],
  ['multilingual-support-playbook', 'A Multilingual Support Playbook for Growing Teams', 'Interpretation', 'Support leaders need language coverage, escalation rules, and feedback loops by language.'],
  ['ai-data-validation-metrics', 'AI Data Validation Metrics Language Teams Should Track', 'AI Language Data', 'Track agreement, rejection rates, metadata completeness, speaker fit, and reviewer notes.'],
  ['transcreation-brand-voice', 'Transcreation: Keeping Brand Voice Across Markets', 'Localization', 'Transcreation adapts meaning, tone, emotional intent, and cultural expectations.'],
  ['language-operations-retainer', 'When to Use a Language Operations Retainer', 'Language Operations', 'Recurring language work benefits from retained teams, terminology memory, and predictable QA.'],
  ['field-research-language-support', 'Language Support for Field Research Programs', 'Data Collection', 'Field research needs interpreters, transcribers, translators, and reviewers working from one plan.'],
  ['accessibility-subtitles-captions', 'Subtitles, Captions, and Accessibility: What Teams Miss', 'Subtitling', 'Accessible media requires timing, speaker cues, sound context, and readable delivery formats.'],
  ['translation-memory-for-teams', 'How Translation Memory Helps Growing Teams Move Faster', 'Translation', 'Translation memory improves consistency, protects terminology, and reduces repeated review cycles.'],
  ['multilingual-seo-content-ops', 'Building a Multilingual SEO Content Operation', 'Localization', 'A strong operation connects native keyword research, editorial review, and conversion-focused page planning.'],
  ['data-collection-metadata', 'Metadata That Makes Multilingual Datasets Useful', 'Data Collection', 'Clean metadata helps AI and research teams filter, validate, and reuse language data accurately.'],
  ['voice-data-consent', 'Consent Best Practices for Voice Data Collection', 'Voice Recording', 'Voice projects should explain usage, storage, privacy, compensation, and withdrawal policies clearly.'],
  ['interpreter-briefing-template', 'What to Include in an Interpreter Brief', 'Interpretation', 'A good brief helps interpreters prepare terminology, context, sensitivities, and expected outcomes.'],
  ['subtitling-brand-campaigns', 'Subtitling Brand Campaigns Without Losing Emotion', 'Subtitling', 'Campaign subtitles need timing, tone, cultural adaptation, and concise lines that preserve intent.'],
  ['annotation-review-workflow', 'Designing a Review Workflow for Annotation Projects', 'Annotation', 'Review workflows should include calibration, disagreement handling, spot checks, and feedback loops.'],
  ['language-tutor-market-entry', 'Language Tutoring for Market Entry Teams', 'Language Tutoring', 'Tutoring helps teams understand key phrases, cultural signals, and communication patterns before launch.'],
  ['custom-multilingual-projects', 'When Your Language Project Does Not Fit a Standard Service', 'Language Operations', 'Complex language projects often need a custom mix of talent, QA, data handling, and delivery planning.'],
  ['language-vendor-management', 'How to Manage Language Vendors Without Losing Quality', 'Language Operations', 'Vendor management improves when scopes, quality criteria, ownership, and feedback are visible from the start.']
];

const posts = [
  ...seedPosts,
  ...additionalBlogIdeas.map(([slug, title, category, excerpt], index) => ({
    slug,
    title,
    category,
    image: blogImagePool[index % blogImagePool.length],
    excerpt,
    body: [
      `${excerpt} The strongest teams treat language work as an operational system, not an afterthought.`,
      'Start by defining the audience, risk level, deliverable format, review requirements, and how the content or data will be used after delivery.',
      'Langigs combines vetted native experts, project management, and QA checkpoints so teams can move faster without losing trust.'
    ]
  }))
].slice(0, 40);

const resources = [
  {
    slug: 'african-language-data-guide',
    type: 'Guide',
    title: 'The Guide to Sourcing High-Quality African Language Data',
    summary: 'A downloadable planning guide for AI teams working with multilingual and low-resource language data.',
    image: asset('brand-workflow-infographic.png')
  },
  {
    slug: 'localization-launch-checklist',
    type: 'Checklist',
    title: 'Website Localization Launch Checklist',
    summary: 'A practical checklist for preparing multilingual websites, product flows, and campaign pages.',
    image: asset('blog-localization-strategy.png')
  },
  {
    slug: 'translation-brief-template',
    type: 'Template',
    title: 'Translation Project Brief Template',
    summary: 'A simple briefing format to help teams scope files, languages, timeline, audience, and review requirements.',
    image: asset('services-language-ops.png')
  }
];

const pageMeta = {
  '/': ['Langigs Global | Language Services, AI Data and Localization', 'Langigs Global provides translation, transcription, localization, voice recording, AI language data, and multilingual data collection by vetted native experts.'],
  '/services': ['Language Services | Langigs Global', 'Explore translation, transcription, AI language data, voice recording, localization, and multilingual data collection services.'],
  '/case-studies': ['Case Studies | Langigs Global', 'See how Langigs supports AI data, transcription, localization, and multilingual research projects.'],
  '/resources': ['Resources | Langigs Global', 'Download guides, checklists, templates, and practical resources for language services and AI data projects.'],
  '/blog': ['Blog | Langigs Global', 'Insights on translation, localization, AI language data, voice recording, transcription, and multilingual operations.'],
  '/contact': ['Book a Call | Langigs Global', 'Book a discovery call with Langigs to discuss your language services project.'],
  '/challenge': ['40-Day Client Hunt Challenge | Langigs Global', 'Join the Langigs 40-day challenge for freelance language professionals ready to find better clients, improve positioning, and secure paid opportunities.']
};

function parseRoute() {
  return (window.location.hash || '#/').replace(/^#/, '') || '/';
}

function App() {
  const [route, setRoute] = useState(parseRoute());
  const [menuOpen, setMenuOpen] = useState(false);
  const [mega, setMega] = useState(null);

  const current = useMemo(() => getCurrent(route), [route]);

  useEffect(() => {
    const onHash = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMega(null);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
  }, [route]);

  useEffect(() => {
    const [title, description] = getMeta(route, current);
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', `${window.location.origin}${asset('brand-operations-hero.png')}`, 'property');
  }, [route, current]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', { y: 28, opacity: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out' });
      gsap.utils.toArray('[data-animate]').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%' }
        });
      });
      gsap.to('.motion-node', {
        y: -12,
        opacity: 1,
        duration: 1.2,
        stagger: 0.16,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.motion-line', {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1.4,
        stagger: 0.16,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, [route]);

  return (
    <>
      <Navbar route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} mega={mega} setMega={setMega} />
      <Page current={current} />
      <WhatsAppSticky />
      <Footer />
    </>
  );
}

function setMeta(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function getCurrent(route) {
  const [first, second] = route.split('/').filter(Boolean);
  if (!first) return { type: 'home' };
  if (first === 'services' && second) return { type: 'service', item: services.find((item) => item.slug === second) };
  if (first === 'case-studies' && second) return { type: 'case', item: caseStudies.find((item) => item.slug === second) };
  if (first === 'blog' && second) return { type: 'post', item: posts.find((item) => item.slug === second) };
  if (first === 'resources' && second) return { type: 'resource', item: resources.find((item) => item.slug === second) };
  if (first === 'for-organizations') return { type: 'audience', item: audiences[0] };
  if (first === 'for-language-professionals') return { type: 'audience', item: audiences[1] };
  return { type: first };
}

function getMeta(route, current) {
  if (current.type === 'service' && current.item) return [`${current.item.label} Services | Langigs Global`, current.item.seo];
  if (current.type === 'post' && current.item) return [`${current.item.title} | Langigs Blog`, current.item.excerpt];
  if (current.type === 'case' && current.item) return [`${current.item.title} | Langigs Case Study`, current.item.result];
  if (current.type === 'resource' && current.item) return [`${current.item.title} | Langigs Resources`, current.item.summary];
  return pageMeta[route] || pageMeta['/'];
}

function isActiveRoute(route, target) {
  if (target === '/') return route === '/';
  return route === target || route.startsWith(`${target}/`);
}

function Navbar({ route, menuOpen, setMenuOpen, mega, setMega }) {
  const activeMega = route.startsWith('/services') ? 'services' : route.startsWith('/for-') || route === '/challenge' ? 'audiences' : route.startsWith('/resources') || route.startsWith('/blog') ? 'resources' : null;
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="logo-link" href="#/" aria-label="Langigs home"><img src="/assets/langigs-logo.png" alt="Langigs" /></a>
        <nav className={menuOpen ? 'nav-menu is-open' : 'nav-menu'}>
          <MegaTrigger id="services" label="Services" mega={mega} setMega={setMega} current={activeMega === 'services'}><ServicesMega /></MegaTrigger>
          <MegaTrigger id="audiences" label="Audiences" mega={mega} setMega={setMega} current={activeMega === 'audiences'}><AudiencesMega /></MegaTrigger>
          <a className={isActiveRoute(route, '/case-studies') ? 'is-current' : ''} href="#/case-studies">Case Studies</a>
          <MegaTrigger id="resources" label="Resources" mega={mega} setMega={setMega} current={activeMega === 'resources'}><ResourcesMega /></MegaTrigger>
          <a className={isActiveRoute(route, '/about') ? 'is-current' : ''} href="#/about">About</a>
        </nav>
        <a className="btn btn-primary nav-cta" href="#/contact">Book a call</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function MegaTrigger({ id, label, mega, setMega, current = false, children }) {
  const closeTimer = useRef(null);
  const open = () => {
    window.clearTimeout(closeTimer.current);
    setMega(id);
  };
  const close = () => {
    closeTimer.current = window.setTimeout(() => setMega(null), 340);
  };
  const toggle = () => {
    window.clearTimeout(closeTimer.current);
    setMega(mega === id ? null : id);
  };
  return (
    <div className={`${mega === id ? 'mega-wrap is-active' : 'mega-wrap'}${current ? ' is-current' : ''}`} onMouseEnter={open} onMouseLeave={close} onFocus={open}>
      <button
        aria-expanded={mega === id}
        aria-haspopup="true"
        onClick={toggle}
        onKeyDown={(event) => event.key === 'Escape' && setMega(null)}
      >
        {label} <ChevronDown size={16} />
      </button>
      {mega === id && <div className={`mega-menu mega-menu-${id}`} onMouseEnter={open} onMouseLeave={close} onClick={(event) => event.target.closest('a') && setMega(null)}>{children}</div>}
    </div>
  );
}

function ServicesMega() {
  const columns = [
    services.slice(0, 4),
    services.slice(4, 8),
    services.slice(8)
  ];
  return (
    <div className="services-mega-panel">
      <div className="mega-panel-kicker">
        <span>Services</span>
        <a href="#/services">View all services <ArrowRight size={15} /></a>
      </div>
      <div className="services-mega-columns">
        {columns.map((column, columnIndex) => (
          <div className="services-mega-column" key={columnIndex}>
            {column.map((service) => {
              const Icon = service.icon;
              return (
                <a className="services-mega-link" key={service.slug} href={`#/services/${service.slug}`}>
                  <Icon />
                  <span>
                    <strong>{service.label} <ArrowRight size={15} /></strong>
                    <small>{service.bullets[0]}</small>
                  </span>
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function AudiencesMega() {
  return (
    <>
      <div className="mega-feature">
        <Users />
        <h3>Two paths, one standard</h3>
        <p>Support for organizations buying language work and professionals joining the Langigs talent network.</p>
      </div>
      <div className="mega-grid two-col">
        {audiences.map((item) => <a key={item.slug} href={`#/${item.slug}`}><Briefcase /><span>{item.label}</span><small>{item.summary}</small></a>)}
        <a href="#/challenge"><Star /><span>40-Day Challenge</span><small>A guided client hunt for language professionals ready to win better work.</small></a>
      </div>
    </>
  );
}

function ResourcesMega() {
  return (
    <>
      <div className="mega-feature">
        <BookOpen />
        <h3>Resources for global teams</h3>
        <p>Blogs, guides, templates, and case studies for AI data, localization, and multilingual operations.</p>
      </div>
      <div className="mega-grid two-col">
        <a href="#/blog"><BookOpen /><span>Blog</span><small>Insights and best practices for language services buyers.</small></a>
        <a href="#/resources"><FileText /><span>Resources</span><small>Guides, checklists, and templates for project planning.</small></a>
        <a href="#/case-studies"><BadgeCheck /><span>Case Studies</span><small>Real project outcomes and delivery examples.</small></a>
        <a href="#/contact"><Mail /><span>Book a Call</span><small>Talk with a Langigs solutions expert.</small></a>
      </div>
    </>
  );
}

function Page({ current }) {
  if (current.type === 'home') return <Home />;
  if (current.type === 'services') return <ServicesIndex />;
  if (current.type === 'service' && current.item) return <ServicePage service={current.item} />;
  if (current.type === 'audience' && current.item) return <AudiencePage audience={current.item} />;
  if (current.type === 'about') return <AboutPage />;
  if (current.type === 'case-studies') return <CaseStudiesIndex />;
  if (current.type === 'case' && current.item) return <CaseStudyPage item={current.item} />;
  if (current.type === 'resources') return <ResourcesIndex />;
  if (current.type === 'resource' && current.item) return <ResourcePage item={current.item} />;
  if (current.type === 'blog') return <BlogIndex />;
  if (current.type === 'post' && current.item) return <BlogPost post={current.item} />;
  if (current.type === 'challenge') return <ChallengePage />;
  if (current.type === 'contact') return <ContactPage />;
  return <NotFound />;
}

function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProofStrip />
      <AudienceSplit />
      <ServicesTabs />
      <AnimatedWorkflow />
      <Benefits />
      <FreelancerTestimonials />
      <CaseStudiesPreview />
      <BlogPreview />
      <StatsSection />
      <CtaSection />
    </main>
  );
}

function Hero() {
  const heroProofRef = useCounterCard('180+');
  return (
    <section className="hero dark-section">
      <img className="hero-bg" src={asset('brand-operations-hero.png')} alt="" />
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="reveal">
          <FreelancerTrust variant="top" />
          <h1>Native-language experts for <mark>global work</mark> that matters</h1>
          <p className="hero-lede">Translation, transcription, AI language data, voice recording, localization, and multilingual data collection delivered by vetted native experts.</p>
          <div className="hero-after-cta">
            <HeroProofCounters />
          </div>
          <div className="button-row hero-final-cta">
            <a className="btn btn-light" href="#/contact">Book a discovery call</a>
            <a className="btn btn-outline-light" href="#/services">Explore services</a>
          </div>
        </div>
        <div className="hero-proof reveal" ref={heroProofRef}>
          <strong data-count="180+">0</strong>
          <span>Languages and dialects supported across Africa and beyond</span>
        </div>
      </div>
    </section>
  );
}

function useCounterCard(value) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    const node = ref.current.querySelector('[data-count]');
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      animateCounterNode(node);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return ref;
}

function animateCounterNode(node, duration = 1400) {
  const raw = node.dataset.count;
  const target = parseFloat(raw.replace(/,/g, ''));
  const suffix = raw.replace(/[0-9,.]/g, '');
  const decimals = raw.includes('.') ? 1 : 0;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    node.textContent = `${decimals ? current.toFixed(decimals) : Math.round(current).toLocaleString()}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      node.textContent = raw;
    }
  };
  requestAnimationFrame(tick);
}

function useCountUp(ref) {
  useEffect(() => {
    const nodes = ref.current?.querySelectorAll('[data-count]');
    if (!nodes?.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      nodes.forEach((node) => animateCounterNode(node));
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

function FreelancerTrust({ variant = '' }) {
  const people = ['blue', 'red', 'gold', 'navy'];
  return (
    <div className={variant ? `freelancer-trust ${variant}` : 'freelancer-trust'} aria-label="Freelancer trust signal">
      <div className="avatar-stack">{people.map((item) => <span className={`avatar-face ${item}`} key={item}><i /><b /><em /></span>)}</div>
      <div>
        <strong>Trusted by 2,400+ language professionals</strong>
        <small><Star size={14} fill="currentColor" /> 5-star rated collaboration, clear briefs, and secure delivery</small>
      </div>
    </div>
  );
}

function HeroProofCounters() {
  const ref = useRef(null);
  useCountUp(ref);

  return (
    <div className="hero-proof-row" aria-label="Langigs social proof" ref={ref}>
      <span><strong data-count="2,400+">0</strong> vetted experts</span>
      <span><strong data-count="180+">0</strong> languages</span>
      <span><strong data-count="99.2%">0</strong> accuracy rating</span>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="trust-bar" data-animate>
      <div className="container trust-grid">
        {['AI research teams', 'Global NGOs', 'SaaS platforms', 'Media teams', 'Market researchers', 'Enterprise operations'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function ProofStrip() {
  const proof = [
    ['Trusted delivery', 'Dedicated PMs, native experts, and reviewer checkpoints.'],
    ['Secure workflows', 'File handling and consent-aware data collection for sensitive projects.'],
    ['Global-ready scope', 'Services built for AI, research, SaaS, NGOs, media, and enterprise teams.']
  ];
  return (
    <section className="proof-strip" data-animate>
      <div className="container proof-grid">
        {proof.map(([title, text]) => <article key={title}><BadgeCheck /><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}

function AudienceSplit() {
  return (
    <section className="section section-soft" data-animate>
      <SectionIntro eyebrow="For" title="Two paths to precision and scale" text="Whether you need language solutions or want to offer them, Langigs Global is built for serious work." center />
      <div className="container audience-grid">
        {audiences.map((item) => <ImageCard key={item.slug} href={`#/${item.slug}`} image={item.image} eyebrow={item.label} title={item.title} text={item.summary} />)}
      </div>
    </section>
  );
}

function ServicesTabs() {
  const [active, setActive] = useState(services[0].slug);
  const service = services.find((item) => item.slug === active);
  return (
    <section className="section" data-animate>
      <SectionIntro eyebrow="Services" title="Language services built for impact" text="Human intelligence and precision for every word, voice file, dataset, and market you need to reach." center />
      <div className="container tabs-card">
        <div className="tab-list">
          {services.map((item) => <button key={item.slug} className={active === item.slug ? 'active' : ''} onClick={() => setActive(item.slug)}>{item.label}</button>)}
        </div>
        <div className="tab-content">
          <img src={service.image} alt="" />
          <div>
            <p className="eyebrow">{service.label}</p>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <ul className="check-list">{service.bullets.slice(0, 3).map((bullet) => <li key={bullet}><Check />{bullet}</li>)}</ul>
            <div className="button-row">
              <a className="btn btn-primary" href={`#/services/${service.slug}`}>Open landing page</a>
              <a className="link-btn" href="#/contact">Request quote <ArrowRight size={17} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedWorkflow({
  eyebrow = 'Workflow',
  title = 'A clear path from brief to reviewed delivery',
  text = 'Every Langigs project moves through a simple operating system: scope the work, match native experts, produce carefully, review against standards, and deliver files ready to use.'
}) {
  const nodes = [
    ['Scope', 'Confirm goals, languages, audience, format, risk, and success criteria.'],
    ['Match', 'Assign vetted native experts with the right market and domain fit.'],
    ['Produce', 'Run the work in managed batches with shared guidelines and PM oversight.'],
    ['Review', 'Check quality, consistency, terminology, timing, metadata, and edge cases.'],
    ['Deliver', 'Send organized files, notes, and next-step recommendations.']
  ];
  return (
    <section className="workflow-section workflow-minimal" data-animate>
      <div className="container workflow-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
      <div className="container workflow-track" aria-label="Langigs workflow animation">
        {nodes.map(([node, copy], index) => (
          <article className="motion-node" key={node} style={{ '--i': index }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{node}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceConversionSection({ service }) {
  const Icon = service.icon;
  const outcomes = [
    ['Faster launch', 'Move from scope to staffed production without hunting for individual freelancers.'],
    ['Lower rework', 'Guidelines, reviewer checks, and clear acceptance criteria reduce expensive back-and-forth.'],
    ['Native confidence', 'Every deliverable is handled by people who understand the language, market, and context.']
  ];
  return (
    <section className="section service-conversion" data-animate>
      <div className="container service-conversion-grid">
        <div>
          <p className="eyebrow">Conversion-focused service page</p>
          <h2>Everything your team needs to buy {service.label.toLowerCase()} with confidence</h2>
          <p className="lead">Langigs combines the flexibility of a talent network with the accountability of a managed language operations partner. You get native expertise, PM ownership, quality gates, and delivery standards in one place.</p>
          <ul className="check-list">
            {service.bullets.map((bullet) => <li key={bullet}><Check />{bullet}</li>)}
          </ul>
        </div>
        <aside className="service-value-card">
          <Icon />
          <h3>Best fit</h3>
          <p>{service.audience}</p>
          <div className="value-stats">
            <span><strong>24-48h</strong> first scope</span>
            <span><strong>2-step</strong> QA review</span>
            <span><strong>180+</strong> languages</span>
          </div>
          <a className="btn btn-primary" href="#/contact">Book a strategy session</a>
        </aside>
      </div>
      <div className="container outcome-grid">
        {outcomes.map(([title, copy]) => <article key={title}><BadgeCheck /><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function ServiceUseCases({ service }) {
  const useCases = [
    ['Project planning', `Turn a rough ${service.label.toLowerCase()} need into a clean scope, language plan, timeline, and delivery checklist.`],
    ['Managed production', 'Give your team one accountable workflow instead of juggling sourcing, instructions, follow-up, and review manually.'],
    ['Quality validation', 'Use native reviewers, structured QA, and acceptance notes to protect accuracy before work reaches your team.']
  ];
  return (
    <section className="section section-soft" data-animate>
      <SectionIntro eyebrow="Use cases" title={`${service.label} programs built around business outcomes`} text="A strong landing page should answer what buyers get, how delivery works, and why Langigs is safer than a generic marketplace." center />
      <div className="container use-case-grid">
        {useCases.map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceProofPanel({ service }) {
  return (
    <section className="section service-proof-panel" data-animate>
      <div className="container service-proof-grid">
        <div>
          <p className="eyebrow light">Why teams choose Langigs</p>
          <h2>Human language work with operational discipline</h2>
          <p>For {service.label.toLowerCase()} work, quality comes from the system around the expert: clear guidelines, native review, organized files, responsive PMs, and proof that every requirement was checked.</p>
        </div>
        <div className="proof-metrics">
          {[
            ['15k+', 'Projects delivered across language, data, and localization workflows'],
            ['99.2%', 'Client accuracy rating across reviewed language deliverables'],
            ['2,400+', 'Vetted professionals ready for specialized scopes']
          ].map(([value, label]) => <span key={label}><strong>{value}</strong>{label}</span>)}
        </div>
      </div>
    </section>
  );
}

function buildBlogSections(post) {
  const topic = post.category.toLowerCase();
  return [
    {
      id: 'overview',
      label: 'Overview',
      title: 'What this means for your team',
      text: [
        post.body[0],
        `For most teams, the real challenge is not finding someone who can work in another language. The challenge is building a reliable process around ${topic}: clear instructions, native judgment, review criteria, security expectations, and delivery formats that fit the way your team already works.`,
        'A strong language operations plan should make decisions easier before production begins. It should define what good looks like, what must be reviewed, which edge cases need escalation, and how the final files will be used by product, research, legal, marketing, or AI teams.'
      ]
    },
    {
      id: 'business-case',
      label: 'Business case',
      title: 'Why the workflow matters more than a single deliverable',
      text: [
        post.body[1],
        'When language work is bought as a one-off task, teams often miss the hidden parts of quality: reviewer agreement, terminology consistency, speaker metadata, transcript notes, cultural adaptation, tone, formatting, and file readiness. These details decide whether the output can be used immediately or needs another round of cleanup.',
        'Langigs treats every project like an operating workflow. That means the brief, talent match, production setup, quality review, and delivery notes are designed together. The result is a cleaner buying experience and a stronger final asset.'
      ]
    },
    {
      id: 'framework',
      label: 'Framework',
      title: 'A practical framework for planning',
      text: [
        'Start with the use case. A translation for a legal document, a transcript for research coding, a voice dataset for a speech model, and localized copy for a SaaS launch all require different instructions and review standards.',
        'Next, define audience and context. Who will read, hear, label, search, or train on the content? Which dialects, registers, cultural cues, or domain terms must be preserved? Which items should be adapted instead of translated directly?',
        'Finally, agree on acceptance criteria. This includes file formats, naming conventions, annotation labels, timestamp style, reviewer notes, glossary handling, confidentiality, and escalation rules for unclear content.'
      ]
    },
    {
      id: 'workflow',
      label: 'Workflow',
      title: 'The Langigs delivery model',
      text: [
        post.body[2],
        'The work moves through five stages: scope, match, produce, review, and deliver. Each stage reduces risk. Scope prevents vague instructions. Matching improves native fit. Production keeps batches moving. Review catches quality issues. Delivery gives your team files that are organized and ready for the next step.',
        'For larger programs, this workflow can be expanded into pilots, calibration rounds, reviewer scorecards, data sampling, glossary governance, and ongoing reporting. The structure stays simple, but the controls become stronger as the project grows.'
      ]
    },
    {
      id: 'quality',
      label: 'Quality checklist',
      title: 'Quality controls to include before launch',
      text: [
        'Quality should be planned before production starts. The strongest projects define who reviews the work, what reviewers are checking, how disagreements are resolved, and what happens when source content is unclear.',
        'For language data projects, quality also includes consent, demographic or regional metadata, file naming, audio conditions, sampling, and validation. For localization projects, it includes UI fit, local search intent, tone, compliance language, and market nuance.',
        'A simple rule helps: if your team will use the output for customer experience, model training, research conclusions, or legal decisions, include a native review loop and a written acceptance checklist.'
      ]
    },
    {
      id: 'metrics',
      label: 'Metrics',
      title: 'Useful metrics and benchmarks',
      text: [
        'The right metrics depend on the project type, but every serious language workflow benefits from tracking turnaround, revision rate, reviewer agreement, completion rate, escalation volume, and delivery readiness.',
        'For AI and data teams, include label agreement, rejected sample percentage, missing metadata, audio quality flags, and guideline exceptions. For localization teams, include page readiness, UI issue count, glossary consistency, and market reviewer comments.',
        'Metrics are not just reporting. They help the team improve instructions, adjust staffing, and identify patterns before small issues become expensive rework.'
      ]
    },
    {
      id: 'implementation',
      label: 'Implementation',
      title: 'How to roll this out without slowing the team down',
      text: [
        'Begin with a pilot batch. Keep it small enough to review quickly, but realistic enough to expose edge cases. Use the pilot to test instructions, delivery format, reviewer notes, and team communication.',
        'After the pilot, update the style guide, glossary, annotation rubric, or transcript standard. Then scale in batches with regular QA checkpoints. This keeps the project moving while preserving space for learning.',
        'Langigs can manage this process end to end or work alongside your existing product, research, marketing, or data operations team.'
      ]
    },
    {
      id: 'mistakes',
      label: 'Common mistakes',
      title: 'Common mistakes to avoid',
      text: [
        'The first mistake is asking for language work without context. Native experts need audience, purpose, tone, domain, and examples to make the right judgment calls.',
        'The second mistake is treating review as optional. Even strong professionals benefit from a second set of native eyes when the work affects customer trust, research validity, or AI performance.',
        'The third mistake is ignoring delivery usability. A technically accurate file still creates friction if it arrives without consistent naming, notes, metadata, timestamps, or formatting.'
      ]
    },
    {
      id: 'langigs',
      label: 'Work with Langigs',
      title: 'How Langigs turns this into a managed project',
      text: [
        'Langigs helps teams move from uncertain language needs to a defined delivery workflow. We clarify the scope, match native experts, create production instructions, manage communication, run review loops, and deliver organized files.',
        'That makes the process easier for buyers and better for language professionals. Experts get clearer expectations, clients get higher confidence, and the final work is easier to use.',
        'If your team is planning translation, transcription, AI language data, localization, interpretation, voice recording, or multilingual research, the best next step is a short strategy session focused on scope, risks, and delivery design.'
      ]
    }
  ];
}

function BlogFigure({ post, index }) {
  const images = [post.image, asset('brand-workflow-infographic.png'), asset('services-language-ops.png'), asset('about-language-qa.png')];
  return (
    <figure className="article-figure">
      <img src={images[index % images.length]} alt="" />
      <figcaption>{post.category} planning visual: scope, people, QA, and delivery decisions mapped before production.</figcaption>
    </figure>
  );
}

function ArticleStats() {
  return (
    <div className="article-stat-grid">
      {[
        ['30%', 'Less rework when briefs include acceptance criteria before production'],
        ['2x', 'More confidence when native review is separated from production'],
        ['5', 'Core stages: scope, match, produce, review, deliver']
      ].map(([value, label]) => <span key={label}><strong>{value}</strong>{label}</span>)}
    </div>
  );
}

function ArticleChart() {
  const rows = [['Brief clarity', '92%'], ['Native matching', '86%'], ['QA readiness', '78%'], ['Delivery usability', '83%']];
  return (
    <div className="article-chart" aria-label="Language project readiness chart">
      <h3>Project readiness signals</h3>
      {rows.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <b style={{ '--bar': value }}>{value}</b>
        </div>
      ))}
    </div>
  );
}

function ArticleChecklistTable() {
  const rows = [
    ['Scope', 'Languages, regions, audience, use case, output format'],
    ['People', 'Native experts, reviewers, PM owner, escalation path'],
    ['Quality', 'Rubric, examples, glossary, acceptance criteria, sampling'],
    ['Delivery', 'Naming, metadata, file type, notes, handoff owner']
  ];
  return (
    <table className="article-table">
      <thead><tr><th>Area</th><th>What to define</th></tr></thead>
      <tbody>{rows.map(([area, copy]) => <tr key={area}><td>{area}</td><td>{copy}</td></tr>)}</tbody>
    </table>
  );
}

function BlogSessionCard({ post }) {
  return (
    <aside className="sticky-prompt book-session-card">
      <div className="session-icon"><Sparkles /></div>
      <p className="eyebrow">Strategy session</p>
      <h2>Need help applying this to your project?</h2>
      <p>You have already done the smart part by learning what matters. We can help you turn that clarity into the right service plan, native team, QA process, and delivery path.</p>
      <ul className="check-list">
        <li><Check />A practical scope for your languages and audience</li>
        <li><Check />Native experts matched to the real context</li>
        <li><Check />Quality checks before the work reaches your team</li>
      </ul>
      <div className="session-note">
        <strong>Good fit if:</strong>
        <span>Your project has nuance, scale, sensitive content, or a deadline where guessing is expensive.</span>
      </div>
      <a className="btn btn-primary" href="#/contact">Book a calm strategy call</a>
    </aside>
  );
}

function Benefits() {
  const items = [
    ['Vetted native experts', 'We test for skill, reliability, cultural fluency, and domain fit before a professional joins the network.', ShieldCheck],
    ['Dedicated project management', 'Your work is scoped, assigned, tracked, reviewed, and delivered through one accountable workflow.', Briefcase],
    ['Quality assurance', 'Second-review checks, terminology control, data validation, and delivery QA keep standards high.', BadgeCheck]
  ];
  return (
    <section className="section section-soft" data-animate>
      <SectionIntro eyebrow="Why Langigs" title="Human intelligence you can trust every time" text="A network where skill meets accountability, supported by systems that keep complex language work moving." center />
      <div className="container feature-grid">
        {items.map(([title, text, Icon]) => <article className="plain-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}

function FreelancerTestimonials() {
  const testimonials = [
    ["Langigs gave our AI team a clearer way to source native-language contributors without losing control of quality, consent, or timelines.", "Data Operations Lead", "AI research company"],
    ["The team understood our field interview context quickly. The transcripts came back clean, consistent, and ready for analysis.", "Research Program Manager", "NGO field project"],
    ["What stood out was the project management. We were not chasing individual freelancers. We had one workflow and clear review notes.", "Localization Manager", "SaaS expansion team"],
    ["Professional support and secure payments make Langigs one of the most serious language platforms I have worked with.", "Li Wei", "Mandarin Translator"],
    ["The challenge helped me position my skills better and understand how to talk to clients with more confidence.", "Ahmed Hassan", "Arabic Transcriptionist"],
    ["Langigs connects professionals with real language opportunities, not just random tasks. That difference matters.", "Maria Gonzalez", "Spanish Translator"]
  ];
  return (
    <section className="section freelancer-testimonials" data-animate>
      <div className="container testimonial-headline">
        <div>
          <p className="eyebrow">Social proof</p>
          <h2>What are they saying about Langigs?</h2>
        </div>
        <p>Buyers need confidence. Professionals need opportunity. Langigs is building trust on both sides of the language-services ecosystem.</p>
        <a className="btn btn-primary" href="#/contact">Book a call</a>
      </div>
      <div className="container testimonial-cards">
        {testimonials.map(([quote, name, role]) => (
          <article key={name}>
            <div className="testimonial-profile"><span>{name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><div><strong>{name}</strong><small>{role}</small></div></div>
            <p>{quote}</p>
            <div className="testimonial-bottom"><div className="stars" aria-label="5 star review">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div><span>5-star review</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  return (
    <section className="section" data-animate>
      <SectionIntro eyebrow="Case Studies" title="Project outcomes across language, data, and localization" text="Show buyers how Langigs handles real delivery problems across AI, research, and global operations." center />
      <div className="container card-grid">{caseStudies.map((item) => <CaseCard key={item.slug} item={item} />)}</div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="section section-soft" data-animate>
      <SectionIntro eyebrow="Blog" title="Insights for global language operations" text="SEO-ready blog content for teams buying language services, AI data, localization, and transcription." center />
      <div className="container card-grid">{posts.slice(0, 3).map((post) => <PostCard key={post.slug} post={post} />)}</div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  useCountUp(ref);

  const stats = [['2,400+', 'Vetted native professionals'], ['180+', 'Languages and dialects'], ['99.2%', 'Client accuracy rating'], ['15,000+', 'Projects delivered']];
  return (
    <section className="stats-section dark-section" ref={ref} data-animate>
      <div className="container stats-grid">
        <div>
          <p className="eyebrow light">Numbers</p>
          <h2>Precision measured in projects delivered on time</h2>
          <p>Every project sharpens the network. Every review raises the bar.</p>
        </div>
        <div className="number-grid">{stats.map(([number, label]) => <div key={label}><strong data-count={number}>0</strong><span>{label}</span></div>)}</div>
      </div>
    </section>
  );
}

function CtaSection({ title = 'Ready for language work that matters?', text = 'Tell us about your project. We will match you with the right native expertise and build a plan that fits.' }) {
  return (
    <section className="section cta-section" data-animate>
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button-row centered"><a className="btn btn-primary" href="#/contact">Book a call</a><a className="btn btn-secondary" href="#/services">View services</a></div>
      </div>
    </section>
  );
}

function ServicesIndex() {
  return (
    <main>
      <PageHeader eyebrow="Services" title="Language services built for global impact" text="A complete service system for translation, transcription, AI data, voice, localization, and multilingual data collection." image={asset('brand-operations-hero.png')} />
      <ServicesOfferList />
      <section className="section"><div className="container card-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section>
      <AnimatedWorkflow />
      <FAQSection eyebrow="Services FAQ" title="Questions teams ask before choosing a language services partner" text="Clear answers about pricing, timelines, quality, language coverage, and managed delivery." items={generalServiceFaq()} />
      <CtaSection title="Find the right service mix" />
    </main>
  );
}

function ServicesOfferList() {
  const required = ['Transcription', 'Voice Recording', 'Annotation', 'Localization', 'Others', 'Translation', 'Subtitling', 'Interpretation', 'Language Tutoring'];
  return (
    <section className="services-offer section-soft" data-animate>
      <div className="container">
        <p className="eyebrow">Services You Offer</p>
        <div className="offer-grid">
          {required.map((item) => <label key={item}><span />{item}</label>)}
        </div>
      </div>
    </section>
  );
}

function ServicePage({ service }) {
  return (
    <main>
      <PageHeader eyebrow={service.label} title={service.title} text={service.summary} image={service.image} />
      <MinimalProof />
      <ServiceConversionSection service={service} />
      <AnimatedWorkflow title={`How ${service.label.toLowerCase()} projects move without confusion`} text="A premium service page has to make the buyer feel the process is already under control. Langigs does that with clear steps, native matching, managed production, and visible QA." />
      <ServiceUseCases service={service} />
      <ServiceProofPanel service={service} />
      <FAQSection items={serviceFaq(service.label)} />
      <RelatedResources />
      <CtaSection title={`Ready to start ${service.label.toLowerCase()} work?`} text="Book a strategy session and we will map your languages, deliverables, quality needs, timeline, and best-fit team." />
    </main>
  );
}

function AudiencePage({ audience }) {
  return (
    <main>
      <PageHeader eyebrow={audience.label} title={audience.title} text={audience.summary} image={audience.image} />
      <MinimalProof />
      <AnimatedWorkflow title="A clear operating system for every engagement" text="Organizations and professionals both need the same thing: clarity, ownership, and a reliable route from brief to paid, reviewed work." />
      <Benefits />
      {audience.slug === 'for-language-professionals' && <FreelancerTestimonials />}
      <FAQSection eyebrow="Audience FAQ" title={audience.slug === 'for-organizations' ? 'Questions organizations ask before starting' : 'Questions language professionals ask before joining'} text="Practical answers for deciding if Langigs is the right path." items={audienceFaq(audience.slug)} />
      <CtaSection title={audience.slug === 'for-organizations' ? 'Book a discovery call' : 'Apply to join the talent network'} />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <section className="section about-partner-section" data-animate>
        <div className="container about-partner-grid">
          <div>
            <h2>We are the dedicated partner behind language work that needs real human judgment.</h2>
            <p>Langigs helps businesses, AI teams, NGOs, researchers, and global operators move from unclear language needs to a managed delivery plan with verified native experts.</p>
            <a className="btn btn-primary" href="#/contact">Book a discovery call</a>
          </div>
          <img src={asset('about-language-qa.png')} alt="Langigs language quality workflow" />
        </div>
      </section>
      <AboutMissionSection />
      <FounderSection />
      <Benefits />
      <AnimatedWorkflow title="How Langigs keeps human language work accountable" text="The workflow is intentionally simple so buyers, project managers, reviewers, and language professionals always know what happens next." />
      <StatsSection />
      <FAQSection eyebrow="About FAQ" title="Questions people ask about Langigs Global" text="How we work, who we serve, and why human language expertise matters." items={aboutFaq()} />
      <CtaSection title="Join the Langigs mission" />
    </main>
  );
}

function AboutHeroSection() {
  const stats = [
    ['2,400+', 'Vetted professionals'],
    ['180+', 'Languages and dialects'],
    ['15k+', 'Projects delivered'],
    ['99.2%', 'Client accuracy rating']
  ];
  return (
    <section className="about-hero-blue" data-animate>
      <div className="container about-hero-grid">
        <div className="about-hero-copy">
          <p className="eyebrow light">About us</p>
          <h1>A trusted language ecosystem for Africa and the world</h1>
          <p>Langigs makes it easier for organizations to access verified native-language experts for translation, transcription, localization, AI data, voice recording, and multilingual research.</p>
          <div className="about-hero-note">
            <span>Built for businesses, AI companies, NGOs, researchers, and language professionals who need trust at scale.</span>
            <a className="btn btn-light" href="#/services">Learn more <ArrowRight size={16} /></a>
          </div>
          <div className="about-hero-stats">
            {stats.map(([number, label]) => <span key={label}><strong>{number}</strong>{label}</span>)}
          </div>
        </div>
        <div className="about-hero-media">
          <img src={asset('jp-hero.jpg')} alt="J.P Williams, Founder and CEO of Langigs Global" />
          <a href="https://ng.linkedin.com/in/james-williams-prince" target="_blank" rel="noreferrer"><img src={asset('linkedin-icon.png')} alt="" /> Connect with J.P</a>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesIndex() {
  return (
    <main>
      <PageHeader eyebrow="Case Studies" title="Proof that complex language work can be managed well" text="Project stories across AI data, transcription, localization, and multilingual research for teams that need native expertise, speed, and quality control." image={asset('brand-workflow-infographic.png')} />
      <section className="section case-index-section" data-animate>
        <div className="container case-index-head">
          <div>
            <p className="eyebrow">Proof in practice</p>
            <h2>Real delivery stories, not generic portfolio cards</h2>
          </div>
          <p>Each story shows how Langigs handles scope, native expertise, project management, review, and handoff for work where quality actually matters.</p>
        </div>
        <div className="container case-feature-grid">{caseStudies.map((item, index) => <CaseCard key={item.slug} item={item} featured={index === 0} />)}</div>
      </section>
      <CaseStudySignals />
      <CaseProofStrip />
      <CaseStudyBuyerGuide />
      <AnimatedWorkflow title="The same delivery discipline behind every case study" text="Each project starts with scope clarity and ends with files, notes, and quality checks your team can trust." />
      <CtaSection />
    </main>
  );
}

function FounderSection() {
  return (
    <section className="section founder-section" data-animate>
      <div className="container founder-grid">
        <img src={asset('jp-portrait.jpg')} alt="J.P Williams, Founder and CEO of Langigs Global" />
        <div>
          <p className="eyebrow">Founder and CEO</p>
          <h2>J.P Williams is building Langigs for trustworthy global language work</h2>
          <p className="lead">Langigs exists to make professional language services easier to buy, easier to manage, and more dignified for the experts doing the work. J.P leads the company with a focus on African language talent, human review, career visibility, and operational clarity for clients.</p>
          <a className="linkedin-link" href="https://ng.linkedin.com/in/james-williams-prince" target="_blank" rel="noreferrer"><img src={asset('linkedin-icon.png')} alt="" /> Connect with J.P on LinkedIn</a>
          <div className="founder-proof">
            <span><strong>2,400+</strong> vetted professionals</span>
            <span><strong>180+</strong> languages and dialects</span>
            <span><strong>15k+</strong> projects delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMissionSection() {
  const pillars = [
    ['For organizations', 'A single place to scope, manage, and deliver translation, transcription, annotation, localization, voice, and multilingual data projects with native experts.'],
    ['For language professionals', 'A trusted route to visibility, training, paid opportunities, and career growth without being treated like anonymous task labor.'],
    ['For African languages', 'A deliberate focus on low-resource and high-context languages where human expertise, culture, and community trust matter most.']
  ];
  return (
    <section className="section about-mission" data-animate>
      <div className="container mission-grid">
        <div>
          <p className="eyebrow">What we believe</p>
          <h2>Language work should be easier to trust, easier to manage, and fairer to the people behind it.</h2>
        </div>
        <div className="mission-cards">
          {pillars.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function CaseStudySignals() {
  const signals = [
    ['AI teams', 'Native speech, text, annotation, validation, and multilingual data pipelines for better model performance.'],
    ['NGOs and researchers', 'Confidential transcription, translation, and field-language support for interviews, surveys, and reports.'],
    ['Growth teams', 'Website, product, support, and campaign localization that respects market context and buyer trust.'],
    ['Talent networks', 'Verified professionals matched by language, domain, reliability, and review needs.']
  ];
  return (
    <section className="section case-signals" data-animate>
      <SectionIntro eyebrow="Who these stories are for" title="The same problem appears in different industries: language work needs accountability" text="Langigs is built for teams that need native expertise at scale without losing quality control." center />
      <div className="container case-signal-grid">
        {signals.map(([title, copy]) => <article key={title}><Sparkles /><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function CaseStudyBuyerGuide() {
  return (
    <section className="section case-buyer-guide" data-animate>
      <div className="container buyer-guide-grid">
        <div>
          <p className="eyebrow">What buyers should notice</p>
          <h2>Strong case studies prove process, not just results.</h2>
        </div>
        <div className="buyer-guide-list">
          {[
            ['Brief quality', 'The scope defines languages, audience, risk, format, deadline, and success criteria before work begins.'],
            ['Native fit', 'Experts are chosen for language, dialect, domain, and reliability, not only availability.'],
            ['Review model', 'The best projects include human QA, issue tracking, metadata, and a delivery handoff your team can use.']
          ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}


function CaseStudyPage({ item }) {
  return (
    <main>
      <PageHeader eyebrow={item.category} title={item.title} text={item.result} image={item.image} />
      <section className="section case-detail-section clean-detail" data-animate>
        <div className="container case-detail-grid">
          <article className="case-story-panel">
            <DetailBlock eyebrow="Overview" title="Why this project mattered" text={item.context} />
            <div className="case-metric-row">
              {item.metrics.map(([number, label]) => <span key={label}><strong>{number}</strong>{label}</span>)}
            </div>
            <CaseGraphic item={item} />
            <DetailBlock eyebrow="Challenge" title="The challenge" text={item.challenge} />
            <DetailBlock eyebrow="Solution" title="The Langigs solution" text={item.solution} />
            <section className="detail-block">
              <p className="eyebrow">Execution</p>
              <h2>What the team actually did</h2>
              <div className="case-execution-list">
                {item.execution.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>)}
              </div>
            </section>
            <DetailBlock eyebrow="Result" title="The result" text={item.result} />
            <DetailBlock eyebrow="Takeaway" title="What this proves" text={item.takeaway} />
            <div className="case-timeline">
              {['Scope and risk review', 'Native expert matching', 'Production and QA', 'Structured delivery'].map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, '0')}</b>{step}</span>)}
            </div>
          </article>
          <aside className="case-result-card sticky-prompt">
            <BadgeCheck />
            <p className="eyebrow">Outcome</p>
            <h3>{item.result}</h3>
            <p>Use this structure for your own project: one brief, one accountable workflow, native delivery, and visible quality checks.</p>
            <div className="mini-outcomes">
              {item.metrics.map(([number, label]) => <span key={label}><strong>{number}</strong>{label}</span>)}
            </div>
            <a className="btn btn-primary" href="#/contact">Discuss a similar project</a>
          </aside>
        </div>
      </section>
      <section className="section case-lessons" data-animate>
        <SectionIntro eyebrow="Lessons" title="How to apply this to your language project" text="Whether you need AI data, research support, localization, or transcription, the same decisions reduce risk." center />
        <div className="container case-lessons-grid">
          {[
            ['Start with the use case', 'Tell the language team what the final content or dataset must help your audience do.'],
            ['Document quality standards', 'Define examples, edge cases, terminology, metadata, and review expectations before production starts.'],
            ['Use native review early', 'A small pilot reviewed by native experts catches issues before they become expensive at scale.']
          ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <AnimatedWorkflow title="The workflow behind this result" text="From sourcing and production to review and handoff, Langigs keeps complex language projects moving through a visible operating model." />
      <CtaSection />
    </main>
  );
}

function CaseProofStrip() {
  return (
    <section className="case-proof-strip" data-animate>
      <div className="container case-proof-grid">
        {[
          ['Scope clarity', 'Every engagement begins with outcomes, languages, risk, and delivery standards.'],
          ['Native review', 'People who know the language and market check the work before it ships.'],
          ['Operational handoff', 'Files, metadata, notes, and next steps arrive ready for the client team.']
        ].map(([title, copy]) => <article key={title}><Sparkles /><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function ResourcesIndex() {
  return (
    <main>
      <PageHeader eyebrow="Resources" title="Guides, checklists, and templates for better language projects" text="Downloadable resources for AI teams, localization managers, researchers, and organizations buying language services." image={asset('brand-workflow-infographic.png')} />
      <section className="section"><div className="container card-grid">{resources.map((item) => <ResourceCard key={item.slug} item={item} />)}</div></section>
      <AnimatedWorkflow title="Use each resource inside a real project workflow" text="The guides are designed to help teams scope, staff, review, and deliver language work with fewer surprises." />
      <FAQSection eyebrow="Resources FAQ" title="Questions about planning language projects" text="Use these answers before downloading a checklist or briefing template." items={resourcesFaq()} />
      <CtaSection />
    </main>
  );
}

function ResourcePage({ item }) {
  return (
    <main>
      <PageHeader eyebrow={item.type} title={item.title} text={item.summary} image={item.image} />
      <section className="section split-section clean-detail">
        <div className="container split-grid">
          <div>
            <h2>What this resource helps you plan</h2>
            <p className="lead">Use this CMS-ready page for a download form, gated content preview, and follow-up CTA.</p>
            <ul className="check-list"><li><Check />Project scope and timeline</li><li><Check />Language and audience requirements</li><li><Check />Quality review and delivery standards</li></ul>
          </div>
          <ContactForm button="Request this resource" compact />
        </div>
      </section>
      <AnimatedWorkflow title="Put this resource into action" text="Use the same five-stage workflow to turn a checklist or guide into a scoped project your team can approve." />
      <FAQSection eyebrow="Resource FAQ" title="How to use this resource well" text="Quick answers for turning a guide or template into a real project plan." items={resourcesFaq()} />
    </main>
  );
}

function BlogIndex() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('All');
  const perPage = 9;
  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];
  const filteredPosts = category === 'All' ? posts : posts.filter((post) => post.category === category);
  const totalPages = Math.ceil(filteredPosts.length / perPage);
  const visiblePosts = filteredPosts.slice((page - 1) * perPage, page * perPage);
  const setBlogCategory = (nextCategory) => {
    setCategory(nextCategory);
    setPage(1);
  };
  return (
    <main>
      <PageHeader eyebrow="Blog" title="Insights on language services and AI data" text="Real content for teams planning translation, transcription, localization, AI language data, voice recording, and multilingual operations." image={asset('blog-localization-strategy.png')} />
      <section className="section">
        <div className="container blog-toolbar">
          <div className="blog-toolbar-copy">
            <p className="eyebrow">Categories</p>
            <h2>Explore practical language operations insights</h2>
            <p>Choose the service area you are planning, then open articles with examples, QA thinking, and buyer-ready next steps.</p>
          </div>
          <div className="category-pills">
            {categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setBlogCategory(item)}>{item}</button>)}
          </div>
        </div>
        <div className="container card-grid blog-grid">{visiblePosts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
        <div className="container pagination" aria-label="Blog pagination">
          <button disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>Previous</button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index + 1} className={page === index + 1 ? 'active' : ''} onClick={() => setPage(index + 1)}>{index + 1}</button>
          ))}
          <button disabled={page === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))}>Next</button>
        </div>
      </section>
      <CtaSection />
    </main>
  );
}

function BlogPost({ post }) {
  const sections = useMemo(() => buildBlogSections(post), [post]);
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-28% 0px -52% 0px', threshold: [0.01, 0.2, 0.45] });
    sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [sections]);
  return (
    <main>
      <PageHeader eyebrow={post.category} title={post.title} text={post.excerpt} image={post.image} />
      <section className="section blog-detail-layout clean-detail">
        <aside className="toc-panel">
          <p className="eyebrow">Reading</p>
          <h3>Article map</h3>
          {sections.map((section) => <a className={activeSection === section.id ? 'current' : ''} key={section.id} href={`#${section.id}`} onClick={(event) => {
            event.preventDefault();
            setActiveSection(section.id);
            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>{section.label}</a>)}
        </aside>
        <article className="blog-article long-form-article">
          <ArticleStats />
          {sections.map((section, index) => (
            <section id={section.id} className="detail-block long-form-section" key={section.id}>
              <p className="eyebrow">{index === 0 ? 'Insight' : `Point ${index + 1}`}</p>
              <h2>{section.title}</h2>
              {section.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 1 && <BlogFigure post={post} index={index} />}
              {index === 3 && <ArticleChecklistTable />}
              {index === 5 && <ArticleChart />}
              {index === 6 && <BlogFigure post={post} index={index} />}
            </section>
          ))}
          <section className="article-summary-box">
            <h2>Executive summary</h2>
            <ul>
              <li>Define the use case before assigning language work.</li>
              <li>Match native experts by language, market, and domain.</li>
              <li>Use review loops and delivery standards to protect quality.</li>
              <li>Start with a pilot batch before scaling production.</li>
              <li>Book a Langigs strategy session when quality, speed, or native nuance matters.</li>
            </ul>
          </section>
        </article>
        <BlogSessionCard post={post} />
      </section>
      <AnimatedWorkflow title="Turn the article into a managed workflow" text="The same planning model in this guide can become a Langigs scope, expert match, QA checklist, and delivery plan." />
      <RelatedResources />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <section className="contact-hero" data-animate>
        <div className="container contact-hero-grid">
          <div className="contact-intro">
            <p className="eyebrow">Contact Langigs</p>
            <h1>Let's start the dialogue now.</h1>
            <p>Tell us what you need, or book a short call. We will help you clarify the right service mix, target languages, quality checks, timeline, and next step.</p>
            <div className="contact-founder-mini">
              <img src={asset('jp-portrait.jpg')} alt="J.P Williams, Founder and CEO of Langigs" />
              <div><strong>J.P Williams</strong><span>Founder and CEO, Langigs Global</span></div>
            </div>
          </div>
          <div className="contact-panel">
            <div className="booking-switch">
              <a className="active" href="#contact-form">Send inquiry</a>
              <a href="#book-call">Book a call</a>
            </div>
            <ContactForm />
            <div id="book-call" className="calendly-card">
              <div>
                <MessageCircle />
                <strong>Prefer a direct conversation?</strong>
                <span>Book a discovery call or talk with us on WhatsApp.</span>
              </div>
              <div className="button-row">
                <a className="btn btn-secondary" href="https://wa.me/2348113575418" target="_blank" rel="noreferrer">WhatsApp us</a>
                <a className="btn btn-primary" href="https://calendly.com/langigs" target="_blank" rel="noreferrer">Open calendar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-dark-band" data-animate>
        <div className="container">
          <h2>Drop us a message to explore project collaboration, language talent, or partnership opportunities.</h2>
          <div className="contact-lines">
            <a href="mailto:hello@langigs.com"><Mail />hello@langigs.com</a>
            <a href="https://wa.me/2348113575418" target="_blank" rel="noreferrer"><MessageCircle />+234 811 357 5418</a>
          </div>
        </div>
      </section>
      <OfficeSection />
      <AnimatedWorkflow title="What happens after you book" text="We clarify the brief, recommend the right service mix, match native expertise, and send a practical next-step plan." />
      <FAQSection eyebrow="Contact FAQ" title="Questions before you book a call" text="What to prepare, who should join, and how fast we can help." items={contactFaq()} />
    </main>
  );
}

function ChallengePage() {
  const outcomes = [
    ['Position your skill', 'Turn translation, transcription, tutoring, voice, or annotation experience into a clearer offer clients can understand.'],
    ['Build client outreach habits', 'Follow a practical 40-day rhythm for finding, tracking, and following up with better-fit opportunities.'],
    ['Get community accountability', 'Stay consistent with prompts, checkpoints, and support designed for freelance language professionals.']
  ];
  const days = [
    ['Days 1-7', 'Offer clarity', 'Choose your service lane, define your strongest audience, and clean up your proof.'],
    ['Days 8-18', 'Client list', 'Build a focused target list and write outreach that sounds human, not desperate.'],
    ['Days 19-30', 'Daily action', 'Send, follow up, improve your pitch, and learn from real responses.'],
    ['Days 31-40', 'Convert and continue', 'Move warm leads into calls, proposals, trials, or Langigs-ready profiles.']
  ];
  return (
    <main>
      <section className="challenge-hero dark-section">
        <div className="container challenge-hero-grid">
          <div className="reveal">
            <p className="eyebrow light">For freelance language professionals</p>
            <h1>Join the 40-day client hunt challenge</h1>
            <p className="hero-lede">A guided sprint for translators, transcribers, tutors, voice artists, interpreters, and annotators who want better clients, clearer positioning, and consistent action.</p>
            <div className="button-row"><a className="btn btn-light" href="#/contact">Secure your seat</a><a className="btn btn-outline-light" href="#/for-language-professionals">Talent network</a></div>
            <div className="challenge-trust"><FreelancerTrust /></div>
          </div>
          <aside className="challenge-seat-card reveal">
            <p className="eyebrow light">Next cohort</p>
            <h2>40 days. Clear steps. Better client conversations.</h2>
            <ul className="check-list">
              <li><Check />Daily action prompts</li>
              <li><Check />Offer and profile refinement</li>
              <li><Check />Client outreach system</li>
              <li><Check />Community accountability</li>
            </ul>
            <a className="btn btn-primary" href="#/contact">Reserve my place</a>
          </aside>
        </div>
      </section>
      <section className="section" data-animate>
        <SectionIntro eyebrow="What you get" title="A practical challenge for people who are ready to do the work" text="This page is built for fast understanding: who it is for, what happens, why it helps, and how to secure a seat." center />
        <div className="container challenge-outcome-grid">
          {outcomes.map(([title, copy]) => <article key={title}><BadgeCheck /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="section section-soft" data-animate>
        <div className="container challenge-plan">
          <div>
            <p className="eyebrow">Challenge plan</p>
            <h2>Simple enough to follow. Structured enough to change behavior.</h2>
            <p className="lead">The goal is not motivational noise. It is a repeatable client-finding system you can keep using after the 40 days end.</p>
          </div>
          <div className="challenge-day-grid">
            {days.map(([period, title, copy]) => <article key={period}><span>{period}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section challenge-fit-section" data-animate>
        <div className="container challenge-fit-grid">
          <div>
            <p className="eyebrow light">Best fit</p>
            <h2>This is for language professionals who want momentum, not magic</h2>
            <p>If you can commit to daily action, honest improvement, and professional follow-up, the challenge gives you structure and support.</p>
          </div>
          <div className="challenge-fit-list">
            {['Freelance translators and localization specialists', 'Transcribers, subtitlers, and interpreters', 'Voice talent and language tutors', 'Annotation and AI language data contributors'].map((item) => <span key={item}><Check />{item}</span>)}
          </div>
        </div>
      </section>
      <FAQSection eyebrow="Challenge FAQ" title="Questions freelancers ask before joining the challenge" text="Who it is for, what you need, and how the 40-day sprint works." items={challengeFaq()} />
      <CtaSection title="Ready to secure your seat?" text="Tell us your language skill, service area, and current client goal. We will help you choose the right next step." />
    </main>
  );
}

function ProcessSection() {
  const steps = ['Submit your brief', 'We match the talent', 'Production starts', 'QA review', 'Delivery and feedback'];
  return (
    <section className="section section-soft" data-animate>
      <SectionIntro eyebrow="Process" title="From brief to delivery in five clear steps" text="A dedicated project lead keeps scope, experts, review, and delivery moving." center />
      <div className="container process-grid">{steps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3><p>Clear ownership and quality checkpoints keep your language work predictable.</p></article>)}</div>
    </section>
  );
}

function FAQSection({ items, eyebrow = 'FAQ', title = 'General questions asked by customers.', text = 'Our team is here to help you with quick, clear, and reliable answers whenever needed.' }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  };
  return (
    <section className="section faq-section" data-animate>
      <div className="container faq-layout">
        <div className="faq-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
          <a className="btn btn-primary" href="#/contact">Contact sales</a>
        </div>
        <div className="faq-list">
          {items.map(([q, a], index) => (
            <details key={q} open={index === 0}>
              <summary><span>{q}</span><b aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}

function RelatedResources() {
  return (
    <section className="section section-soft" data-animate>
      <SectionIntro eyebrow="Related" title="Helpful resources" />
      <div className="container card-grid">{resources.map((item) => <ResourceCard key={item.slug} item={item} />)}</div>
    </section>
  );
}

function PageHeader({ eyebrow, title, text, image }) {
  return (
    <section className="page-header">
      <div className="container page-header-grid">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="button-row"><a className="btn btn-primary" href="#/contact">Book a discovery call</a><a className="btn btn-secondary" href="#/services">View services</a></div>
        </div>
        <img className="reveal rounded-image" src={image} alt="" />
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? 'container section-intro center' : 'container section-intro'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ImageCard({ href, image, eyebrow, title, text }) {
  return (
    <a className="image-card" href={href}>
      <img src={image} alt="" />
      <div className="card-scrim" />
      <div><p>{eyebrow}</p><h3>{title}</h3><span>{text}</span><b>Open page <ArrowRight size={17} /></b></div>
    </a>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <a className="plain-card service-card-modern" href={`#/services/${service.slug}`}>
      <span className="service-icon-wrap"><Icon /></span>
      <small>{service.audience}</small>
      <h3>{service.label}</h3>
      <p>{service.summary}</p>
      <ul>{service.bullets.slice(0, 2).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      <span className="link-btn">Open service page <ArrowRight size={17} /></span>
    </a>
  );
}

function CaseCard({ item, featured = false }) {
  return <a className={featured ? 'media-card case-card featured' : 'media-card case-card'} href={`#/case-studies/${item.slug}`}><CaseGraphic item={item} /><div><span>{item.category}</span><h3>{item.title}</h3><p>{item.result}</p><b>Read case study <ArrowRight size={17} /></b></div></a>;
}

function PostCard({ post }) {
  return <article className="media-card blog-card"><BlogGraphic post={post} /><div><span>{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><a className="link-btn" href={`#/blog/${post.slug}`}>Read article <ArrowRight size={17} /></a></div></article>;
}

function ResourceCard({ item }) {
  return <a className="media-card resource-card" href={`#/resources/${item.slug}`}><ResourceGraphic item={item} /><div><span>{item.type}</span><h3>{item.title}</h3><p>{item.summary}</p><b>Open resource <ArrowRight size={17} /></b></div></a>;
}

function BlogGraphic({ post }) {
  const Icon = services.find((service) => post.category.toLowerCase().includes(service.label.toLowerCase().split(' ')[0]))?.icon || Sparkles;
  const words = post.title
    .replace(/[:?]/g, '')
    .split(' ')
    .filter((word) => word.length > 3)
    .slice(0, 4);
  const palette = graphicPalette(post.category, post.slug);
  return <ContentGraphic title={post.title} label={post.category} Icon={Icon} words={words} motif={graphicMotif(post.category, post.title)} palette={palette} />;
}

function CaseGraphic({ item }) {
  const words = item.title.split(' ').filter((word) => word.length > 3).slice(0, 4);
  return <ContentGraphic title={item.result} label={item.category} Icon={BadgeCheck} words={words} motif={graphicMotif(item.category, item.title)} palette={graphicPalette(item.category, item.slug)} />;
}

function ResourceGraphic({ item }) {
  const words = item.title.split(' ').filter((word) => word.length > 3).slice(0, 4);
  return <ContentGraphic title={item.title} label={item.type} Icon={FileText} words={words} motif="brief" palette={graphicPalette(item.type, item.slug)} />;
}

function graphicPalette(category, seed = '') {
  const palettes = [
    ['#0048ac', '#61f2a3', '#ef3823', '#07111f'],
    ['#061f49', '#ff6b5f', '#14c9d8', '#ffffff'],
    ['#0048ac', '#ffb21a', '#ef3823', '#07111f'],
    ['#ef3823', '#dceaff', '#0048ac', '#07111f'],
    ['#0f766e', '#f8e16c', '#0048ac', '#07111f'],
    ['#6d5dfc', '#b9fbc0', '#ef3823', '#07111f']
  ];
  const base = `${category}${seed}`;
  const index = [...base].reduce((sum, char) => sum + char.charCodeAt(0), 0) % palettes.length;
  return palettes[index];
}

function graphicMotif(category, title = '') {
  const text = `${category} ${title}`.toLowerCase();
  if (text.includes('voice') || text.includes('record')) return 'audio';
  if (text.includes('transcription') || text.includes('subtitle')) return 'transcript';
  if (text.includes('local') || text.includes('website') || text.includes('market')) return 'web';
  if (text.includes('ai') || text.includes('data') || text.includes('annotation')) return 'data';
  if (text.includes('interpret') || text.includes('tutor')) return 'people';
  return 'brief';
}

function ContentGraphic({ title, label, Icon, words, motif, palette }) {
  const [primary, bg, accent, ink] = palette;
  return (
    <div className={`content-graphic motif-${motif}`} style={{ '--graphic-primary': primary, '--graphic-bg': bg, '--graphic-accent': accent, '--graphic-ink': ink }}>
      <div className="content-graphic-top">
        <span>{label}</span>
        <Icon />
      </div>
      <div className="collage-stage">
        <div className="collage-device"><i /><i /><i /></div>
        <div className="collage-paper"><b /><b /><b /></div>
        <div className="collage-hand" />
        <div className="collage-cursor" />
        <div className="collage-badge"><Icon size={15} /></div>
      </div>
      <div className="graphic-keywords">{words.map((word) => <strong key={word}>{word}</strong>)}</div>
      <div className="content-graphic-title">{title}</div>
    </div>
  );
}

function StickyPrompt() {
  return <aside className="sticky-prompt"><BookOpen /><h2>Prompt Langigs</h2><p>Tell us your project type, target languages, audience, deadline, and success criteria.</p><a className="btn btn-primary" href="#/contact">Book a call</a></aside>;
}

function BlogAiPrompt({ post }) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <aside className="sticky-prompt ai-prompt">
      <Search />
      <h2>Use this article</h2>
      <p>Ask Langigs to turn this topic into a project plan, scope, QA checklist, or language workflow.</p>
      <div className="prompt-box">
        Summarize "{post.title}" and recommend the right Langigs service based on this URL: {currentUrl}
      </div>
      <a className="btn btn-primary" href="#/contact">Prompt Langigs</a>
    </aside>
  );
}

function ContactForm({ button = 'Send inquiry', compact = false }) {
  return (
    <form className="contact-form" id="contact-form">
      <label>Full name<input placeholder="Jane Cooper" /></label>
      <label>Work email<input placeholder="you@example.com" type="email" /></label>
      {!compact && <input placeholder="Company" />}
      <label>Service required<select defaultValue=""><option value="" disabled>Select your service</option>{services.map((service) => <option key={service.slug}>{service.label}</option>)}</select></label>
      <label>Target language(s)<input placeholder="Yoruba, French, Arabic..." /></label>
      <label>Project details<textarea placeholder="Tell us more about your scope, audience, deadline, and success criteria"></textarea></label>
      <button className="btn btn-primary" type="button">{button} <Mail size={17} /></button>
    </form>
  );
}

function OfficeSection() {
  return (
    <section className="section office-section" data-animate>
      <div className="container">
        <SectionIntro title="We work across markets, languages, and time zones" text="Talk to Langigs from wherever your team is based. We coordinate projects remotely and keep communication simple." />
        <div className="office-list">
          {[
            ['Lagos', 'West Africa language operations and talent coordination', '+234 811 357 5418'],
            ['Global remote', 'Managed delivery for AI, research, localization, and business teams', 'hello@langigs.com'],
            ['Client calls', 'Discovery, project scoping, QA planning, and delivery reviews', 'Book a call directly']
          ].map(([city, copy, contact]) => (
            <article key={city}>
              <span><Phone size={20} /></span>
              <div><h3>{city}</h3><p>{copy}</p><strong>{contact}</strong></div>
              <a className="btn btn-secondary" href="#/contact">Connect</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppSticky() {
  return (
    <a className="whatsapp-sticky" href="https://wa.me/2348113575418" target="_blank" rel="noreferrer" aria-label="Talk with Langigs on WhatsApp">
      <MessageCircle />
      <span>Talk with us</span>
    </a>
  );
}

function NotFound() {
  return <main><section className="section"><SectionIntro eyebrow="404" title="Page not found" text="This page is not published yet." center /></section></main>;
}

function MinimalProof() {
  return (
    <section className="minimal-proof" data-animate>
      <div className="container">
        <span>2,400+ vetted professionals</span>
        <span>180+ languages and dialects</span>
        <span>15,000+ projects delivered</span>
        <span>99.2% client accuracy rating</span>
      </div>
    </section>
  );
}

function DetailBlock({ eyebrow, title, text }) {
  return (
    <section className="detail-block">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

function serviceFaq(label) {
  const service = label.toLowerCase();
  return [
    [`How much do ${service} services cost?`, `Pricing for ${service} depends on the language pair, volume, complexity, turnaround time, review level, and delivery format. Langigs scopes the work first so you get a practical quote instead of a vague estimate.`],
    [`Can Langigs handle ${service} for African languages and low-resource languages?`, `Yes. Langigs supports African and global languages, including low-resource language needs where native expertise and human review are especially important.`],
    [`How fast can a ${service} project start?`, 'Most projects can be scoped within 24 to 48 hours after we receive the brief, files, language requirements, deadline, and quality expectations.'],
    [`Do you use human experts or AI for ${service}?`, 'Langigs is built around vetted human language professionals. AI tools may support workflow where appropriate, but final quality depends on native experts, reviewer checks, and client-approved standards.'],
    [`How do you check quality for ${service}?`, 'Projects are assigned to native experts and reviewed through quality checkpoints such as terminology checks, formatting review, native-language validation, sample review, and delivery QA.'],
    ['Can you support confidential files and sensitive research data?', 'Yes. We can support confidential business files, research interviews, legal content, health-related material, and AI datasets with controlled access and clear handling expectations.'],
    ['Can I hire Langigs for one project or ongoing monthly work?', 'Yes. Langigs supports one-time projects, recurring monthly work, managed teams, retainers, and enterprise-style language operations.']
  ];
}

function generalServiceFaq() {
  return [
    ['What is the best language services company for African languages?', 'The best partner depends on your project type, timeline, and quality needs. Langigs is a strong fit when you need native African language experts, managed delivery, human review, and support across translation, transcription, voice, localization, and AI data.'],
    ['How do I choose between translation, localization, transcription, and annotation?', 'Start with the final use case. If people need to read content in another language, choose translation or localization. If you have audio or video, choose transcription or subtitling. If you are training AI, choose data collection, annotation, voice recording, or validation.'],
    ['Can Langigs manage multiple languages at the same time?', 'Yes. Langigs can coordinate multilingual projects across several languages, experts, reviewers, and delivery formats with one project workflow.'],
    ['Do you work with startups, NGOs, researchers, and enterprise teams?', 'Yes. Langigs supports AI teams, NGOs, universities, healthcare and legal teams, SaaS companies, market researchers, media teams, and global operations teams.'],
    ['What should I include in a language services brief?', 'Include language pairs, audience, use case, files, volume, deadline, formatting needs, glossary or brand voice, confidentiality requirements, and what success looks like.'],
    ['Can I ask for a sample or pilot before a larger project?', 'Yes. For larger or sensitive work, a pilot batch is often the best way to test instructions, quality expectations, turnaround, and delivery format before scaling.']
  ];
}

function audienceFaq(slug) {
  if (slug === 'for-language-professionals') {
    return [
      ['How can I get freelance translation or transcription jobs with Langigs?', 'Start by joining the Langigs talent path or challenge. We look for language skill, reliability, domain fit, communication, and the ability to follow project instructions.'],
      ['Do I need previous client experience to join?', 'Experience helps, but it is not the only factor. Strong language ability, attention to detail, professionalism, and willingness to learn the workflow also matter.'],
      ['What types of language professionals does Langigs work with?', 'Langigs works with translators, transcribers, subtitlers, interpreters, voice talent, language tutors, annotators, reviewers, and multilingual data contributors.'],
      ['How does Langigs protect freelancers from unclear work?', 'We focus on clearer briefs, defined deliverables, project management, and secure communication so professionals understand what is expected before work begins.']
    ];
  }
  return [
    ['How do organizations start a project with Langigs?', 'Share your brief, language needs, timeline, files, and success criteria. Langigs will recommend the right service mix, team structure, and QA process.'],
    ['Can Langigs replace hiring multiple individual freelancers?', 'Yes. Langigs gives organizations a managed workflow, which reduces the need to source, brief, chase, and review many freelancers separately.'],
    ['Can you support procurement or enterprise review?', 'Yes. Langigs can provide project scope, quote details, delivery expectations, quality process, and communication structure for internal approval.'],
    ['What if we are not sure which service we need?', 'Book a discovery call. We can help separate translation, localization, transcription, data collection, annotation, voice, and review needs into a practical plan.']
  ];
}

function aboutFaq() {
  return [
    ['Is Langigs a marketplace or a managed language services company?', 'Langigs combines vetted language talent with managed project delivery. That means clients get more structure than a basic freelancer marketplace.'],
    ['Why does Langigs focus on human language expertise?', 'Human language work requires context, culture, tone, domain knowledge, and judgment. That is especially important for African languages, low-resource languages, research, and AI training data.'],
    ['Where is Langigs based?', 'Langigs operates with a global remote model and strong roots in African language talent and multilingual project delivery.'],
    ['Who does Langigs help?', 'Langigs helps organizations that need trusted language services and professionals who want better access to serious language work.']
  ];
}

function resourcesFaq() {
  return [
    ['What is a language project brief?', 'A language project brief explains the language pair, audience, files, deadline, subject matter, quality expectations, and final use case so the project can be scoped correctly.'],
    ['Do I need a glossary before translation or localization?', 'A glossary is helpful for brand, technical, medical, legal, product, and recurring work. If you do not have one, Langigs can help build terminology guidance during the project.'],
    ['What checklist should I use before launching a multilingual website?', 'Check translated pages, SEO metadata, forms, buttons, UI fit, local terms, support content, cultural fit, and native reviewer feedback before launch.'],
    ['Can Langigs turn a checklist into a done-for-you project?', 'Yes. You can use any resource as a planning tool, then book a call and Langigs can turn it into a scoped project with experts and QA.']
  ];
}

function contactFaq() {
  return [
    ['What should I prepare before booking a Langigs call?', 'Prepare your project type, target languages, files or volume, audience, deadline, quality expectations, and any security or formatting requirements.'],
    ['Can I contact Langigs on WhatsApp?', 'Yes. You can talk with Langigs on WhatsApp at +234 811 357 5418 for quick project questions and next steps.'],
    ['How soon will Langigs respond after I submit the form?', 'Langigs aims to respond quickly with clarifying questions, a recommended next step, or a request for project materials needed to scope the work.'],
    ['Can I book a call even if my project is not fully defined?', 'Yes. Many clients come with an early idea. The discovery call helps clarify service type, scope, timeline, and possible delivery options.']
  ];
}

function challengeFaq() {
  return [
    ['Who is the 40-day client hunt challenge for?', 'It is for translators, transcribers, subtitlers, interpreters, tutors, voice talent, annotators, and language professionals who want a clearer path to better clients.'],
    ['Will the challenge guarantee clients?', 'No ethical program can guarantee clients. The challenge gives structure, positioning, outreach habits, and accountability so you can improve your chances with consistent action.'],
    ['Do I need to be an experienced freelancer?', 'You should have a real language skill and be ready to improve your offer, profile, and outreach. Both newer and experienced freelancers can benefit if they do the work.'],
    ['How do I secure my seat?', 'Use the contact form or WhatsApp link to tell Langigs your language, service area, current experience, and client goal.']
  ];
}

function Footer() {
  const groups = [
    ['Services', services.map((service) => [service.label, `#/services/${service.slug}`])],
    ['Company', [['About', '#/about'], ['Case Studies', '#/case-studies'], ['Blog', '#/blog'], ['Contact', '#/contact']]],
    ['Resources', resources.map((item) => [item.type, `#/resources/${item.slug}`])],
    ['Audiences', audiences.map((item) => [item.label, `#/${item.slug}`])]
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div><h2>Join our newsletter</h2><p>Get insights on African language data, localization, AI data, and global language operations.</p></div>
          <form><input placeholder="Enter your email" type="email" /><button className="btn btn-light" type="button">Subscribe</button></form>
        </div>
        <div className="footer-rule" />
        <div className="footer-grid">{groups.map(([heading, links]) => <div key={heading}><h3>{heading}</h3>{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>)}</div>
        <div className="footer-rule" />
        <div className="footer-bottom"><img src="/assets/langigs-logo.png" alt="Langigs" /><p>(c) 2026 Langigs Global. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
