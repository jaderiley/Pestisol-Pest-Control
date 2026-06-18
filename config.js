/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Pestisol Pest Control",
    phone:     "+27 66 527 8344",
    whatsapp:  "+27 66 527 8344",
    address:   "Johannesburg, South Africa",
    hours:     "Mon–Fri 8am–5pm · Sat 8am–12pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg",
      "Randburg",
      "Sandton",
      "Midrand",
      "Roodepoort",
      "Soweto",
      "Centurion",
      "Pretoria"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Pestisol Pest Control — Pest control in johannesburg",
    description: "Pestisol Pest Control provides professional pest control in Johannesburg. 1 Google review. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Pest control · Johannesburg & surrounds",
    heroTitle:  "Pest problem? <em>We sort it out properly.</em>",
    heroLead:   "Pestisol Pest Control provides effective pest control for homes and businesses across Johannesburg. Cockroaches, rodents, ants, termites — we identify the problem and treat it at the source.",

    googleRating: "5.0",
    reviewsCount: "1",
    featuredQuote: "Cockroach problem sorted within a week. Professional and explained exactly what they were doing and why.",
    featuredQuoteAuthor: "— Fatima A., Google review",

    trustSignals: ["Residential", "Commercial", "Safe treatments", "Guaranteed results"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Professional pest control that actually works.",
    servicesLead:  "We treat the cause, not just what you can see — so the problem does not come back in two weeks.",
    services: [
      {
        icon:  "bug",
        title: "Cockroach treatment",
        desc:  "Gel bait and spray treatments that get into cracks and harbourage areas — not just a surface spray that wears off in a week."
      },
      {
        icon:  "wrench",
        title: "Rodent control",
        desc:  "Bait stations, traps and proofing to stop rats and mice. We track down entry points so they cannot just come back."
      },
      {
        icon:  "broom",
        title: "Ant treatment",
        desc:  "Ant trails treated at the source, not just where you see them. We identify the species and use the right treatment."
      },
      {
        icon:  "shield",
        title: "Termite treatment",
        desc:  "Subterranean and drywood termite treatment before they cause structural damage. Inspection and barrier treatment."
      },
      {
        icon:  "bolt",
        title: "Fly control",
        desc:  "Commercial and residential fly treatments for kitchens, warehouses and food handling areas."
      },
      {
        icon:  "hardhat",
        title: "General pest control contract",
        desc:  "Monthly or quarterly treatment contracts for homes and businesses — keeps the property pest-free year-round."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Cockroach treatment",
        title:   "Treated at the source",
        caption: "Gel bait applied in harbourage areas where cockroaches live and breed — not just where they are spotted."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Rodent control",
        title:   "Bait stations and proofing",
        caption: "Tamper-resistant bait stations placed on runways combined with entry point proofing to stop re-entry."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Ant control",
        title:   "Colony treated, not just the trail",
        caption: "Residual spray and bait treatments that reach the colony rather than just breaking the visible trail temporarily."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Termite inspection",
        title:   "Checked before treatment",
        caption: "Full inspection before any treatment to identify species, entry points and the extent of activity."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Preventive treatment",
        title:   "Contract service",
        caption: "Regular preventive treatment keeps pests from establishing — more cost-effective than emergency treatments after infestation."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Pestisol Pest Control team at work in Johannesburg",
      text:  "Effective pest control — we fix the problem, not just the symptoms."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Serving Johannesburg and surrounds.",
    areasLead:  "We cover residential and commercial properties across Johannesburg CBD, Parktown, Melville and the surrounding areas.",
    areasNote:  "Not on this list? Call us — we cover most of greater Johannesburg.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why people trust us with their properties.",
    why: [
      {
        title: "We treat the cause",
        desc:  "We find out where pests are coming from and treat the source — not just what you can see on the surface."
      },
      {
        title: "Safe for families and pets",
        desc:  "We use registered products applied correctly. We will advise on any preparation needed before and after treatment."
      },
      {
        title: "Follow-up where needed",
        desc:  "If the problem comes back within the treatment period, we come back — no charge."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 1 verified Google review.",
    reviews: [
      {
        body:   "Cockroach problem sorted within a week. Professional and explained exactly what they were doing and why.",
        name:   "Fatima A.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Had rats in the roof — they found the entry points, baited properly and it is been clear for months. Very happy.",
        name:   "Rob S.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Monthly contract for our restaurant. Reliable, professional and no more pest issues since we started.",
        name:   "Claire M.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Pest control questions.",
    faqLead:  "What most people want to know before booking.",
    faq: [
      {
        q: "How long does the treatment take to work?",
        a: "Most treatments start working within 24–72 hours. Some — like cockroach gel bait — take up to two weeks to fully eliminate a colony."
      },
      {
        q: "Is the treatment safe for children and pets?",
        a: "Yes, when applied correctly. We will advise on any preparation needed and how long to stay out of treated areas."
      },
      {
        q: "How do I prepare before the treatment?",
        a: "Usually just clearing countertops and putting food away. We will tell you exactly what is needed when you book."
      },
      {
        q: "Do you offer a guarantee?",
        a: "Yes — if the specific pest we treated returns within the warranty period, we will come back and treat again at no charge."
      },
      {
        q: "Can you do a same-week appointment?",
        a: "Usually yes — call us and we will check availability in your area."
      },
      {
        q: "Do you do commercial properties as well as homes?",
        a: "Yes — we treat offices, restaurants, warehouses, food facilities and more. Contract packages are available."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about the pest problem.",
    contactLead:  "Let us know what you are seeing and we will advise on treatment options and pricing.",
    contactPlaceholder: "e.g. cockroaches in kitchen, rats in roof, ants throughout house"
  }
};
