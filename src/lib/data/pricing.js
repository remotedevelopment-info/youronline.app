export const pricingPlans = [
    {
        title: "Basic",
        price: 29,
        features: [
            { name: "Full CRM features", included: true },
            { name: "250 prospects, 500 customers and contacts", included: true },
            { name: "25 Events and Unlimited Bookings", included: true },
            { name: "Email support", included: true },
            { name: "API access", included: false },
            { name: "Continuous Improvement", included: true },
            { name: "Instant analytics", included: true },
            { name: "Website Integration", included: false }
        ],
        paypalId: "basic-paypal-btn"
    },
    {
        title: "Professional",
        price: 97,
        isPopular: true,
        features: [
            { name: "Additional team members", included: true },
            { name: "Full CRM features", included: true },
            { name: "1000 prospects, 5000 customers and contacts", included: true },
            { name: "100 Events and Unlimited Bookings", included: true },
            { name: "Email support", included: true },
            { name: "API access", included: true },
            { name: "Continuous Improvement", included: true },
            { name: "Instant analytics", included: true },
            { name: "Website Integration", included: true }
        ],
        paypalId: "pro-paypal-btn"
    },
    {
        title: "Enterprise",
        price: 297,
        features: [
            { name: "Unlimited team members", included: true },
            { name: "Full CRM features", included: true },
            { name: "Unlimited prospects, customers and contacts", included: true },
            { name: "Unlimited Events and Unlimited Bookings", included: true },
            { name: "Custom Website Integration", included: true },
            { name: "Chat support available", included: true },
            { name: "API access", included: true },
            { name: "Continuous Improvement", included: true },
            { name: "Instant analytics", included: true }
        ],
        paypalId: "enterprise-paypal-btn"
    }
];