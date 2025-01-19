export const pricingPlans = [
    {
        title: "FREE WEBSITE with HOSTING PLAN",
        link: "/product/free",
        price: 49,
        features: [
            { name: "Your Website will be built for FREE", included: true },
            { name: "Choose your colour scheme", included: true },
            { name: "Start with five basic pages", included: true },
            { name: "Add a page each month", included: true },
            { name: "Blog post as often as you like", included: true },
            { name: "Continuous Improvement", included: true },
            { name: "Email support", included: true },
            { name: "Instant analytics", included: false },
            { name: "Website Integration", included: false },
            { name: "API connection to Cadence-CRM", included: false }
        ],
        paypalId: "basic-paypal-btn"
    },
    {
        title: "Professional Wesbite with CRM Integration",
        link: "/product/professional",
        price: 97,
        isPopular: true,
        features: [
            { name: "Website with Sales Funnel Integration", included: true },
            { name: "Chose your colour scheme", included: true },
            { name: "Additional team members", included: true },
            { name: "API connection to Cadence-CRM", included: true },
            { name: "Continuous Improvement", included: true },
            { name: "Instant analytics", included: true },
            { name: "Email support", included: true },
            { name: "SEO ready", included: true },
            { name: "API access", included: true },
            { name: "Website Integration", included: true },
            { name: "Build your custom online application", included: false },
            { name: "Software Development Team", included: false }
        ],
        paypalId: "pro-paypal-btn"
    },
    {
        title: "Enterprise Develoment",
        link: "/product/enterprise",
        price: 4000,
        features: [
            { name: "Build your custom online application", included: true },
            { name: "Software Development Team", included: true },
            { name: "Productized Service", included: true },
            { name: "Custom Development", included: true },
            { name: "Fixed Monthly Fee", included: true },
            { name: "Predictable Cost", included: true },
            { name: "Agile/Scrum or 37signals methodology ", included: true },
            { name: "Continuous Improvement", included: true },
            { name: "Clean Modular Design", included: true },
            { name: "Cloud hosted servers", included: true },
            { name: "API Integrations", included: true },
            { name: "Clean Code", included: true },
            { name: "SEO Ready", included: true },
            { name: "AI Integration", included: true },
            { name: "AI Phone Sales or Support Integration", included: true },
        ],
        paypalId: "enterprise-paypal-btn"
    }
];