export const pricingPlans = [
    {
        title: "On-Demand Expertise",
        link: "/product/hourly",
        price: 125,
        period: "hour",
        description: "Expert assistance when you need it most. Perfect for targeted problems and team training.",
        features: [
            { name: "Expert consultation and implementation", included: true },
            { name: "AI-assisted coding and problem solving", included: true },
            { name: "Team training on AI development", included: true },
            { name: "WhatsApp priority support", included: true },
            { name: "Rapid response times", included: true },
            { name: "Knowledge transfer to your team", included: true },
            { name: "No long-term commitment", included: true },
            { name: "Ad-hoc availability", included: true },
            { name: "Hosting and infrastructure", included: false },
            { name: "AI Agent development", included: false },
            { name: "Continuous development", included: false },
            { name: "Backend system development", included: false },
        ],
        paypalId: "hourly-expertise-btn"
    },
    {
        title: "Weekly Development Sprints",
        link: "/product/weekly",
        price: 2500,
        period: "week",
        isPopular: true,
        description: "Focused development blocks with rapid iteration. Ideal for features and product enhancements.",
        features: [
            { name: "Dedicated weekly development blocks", included: true },
            { name: "Hosting included", included: true },
            { name: "Staging environment with subdomain", included: true },
            { name: "Daily standup meetings", included: true },
            { name: "WhatsApp support", included: true },
            { name: "Weekly planning and review sessions", included: true },
            { name: "AI Agent setup and configuration", included: true },
            { name: "Frontend/UI development", included: true },
            { name: "Progress dashboard access", included: true },
            { name: "Team training included", included: true },
            { name: "Custom AI Agent development", included: false },
            { name: "Enterprise infrastructure", included: false },
            { name: "Backend system architecture", included: false },
        ],
        paypalId: "weekly-sprint-btn"
    },
    {
        title: "Continuous Development Partnership",
        link: "/product/monthly",
        price: 8000,
        period: "month",
        description: "Your dedicated development team. For complex products and enterprise solutions.",
        features: [
            { name: "Dedicated development team", included: true },
            { name: "Full backend/frontend development", included: true },
            { name: "Custom AI Agent development", included: true },
            { name: "Enterprise hosting with scaling", included: true },
            { name: "System architecture and planning", included: true },
            { name: "Daily standups and weekly reviews", included: true },
            { name: "On-call emergency support", included: true },
            { name: "Knowledge transfer sessions", included: true },
            { name: "Unlimited WhatsApp access", included: true },
            { name: "API development and integration", included: true },
            { name: "Product strategy consultation", included: true },
            { name: "Technical co-founder capacity", included: true },
        ],
        paypalId: "monthly-partnership-btn"
    }
];

// Add service details that can be referenced on product pages
export const serviceDetails = {
    hourly: {
        title: "On-Demand Expertise",
        subtitle: "Expert assistance when you need it most",
        description: "Get immediate access to our team of AI-assisted development experts without committing to a long-term contract. Perfect for solving specific challenges, training your team, or getting unstuck on technical problems.",
        useCases: [
            "Solve complex technical problems",
            "Train your team on AI-assisted development",
            "Code reviews and architecture consultation",
            "Emergency technical support"
        ],
        process: [
            "Book a time slot through our calendar",
            "We'll confirm and send a meeting link",
            "Work directly with our experts via screen sharing",
            "Receive follow-up documentation of solutions"
        ]
    },
    weekly: {
        title: "Weekly Development Sprints",
        subtitle: "Focused development with measurable progress",
        description: "Dedicated weekly development sprints that deliver tangible results. We handle the hosting, provide a staging environment, and meet daily to ensure rapid progress on your priorities.",
        useCases: [
            "Build new features for your product",
            "Create an MVP for your startup",
            "Implement AI capabilities in your application",
            "Overhaul existing websites and applications"
        ],
        process: [
            "Monday planning session to set weekly goals",
            "Daily standups to track progress",
            "Continuous deployment to your staging environment",
            "Friday demo and planning for next week"
        ]
    },
    monthly: {
        title: "Continuous Development Partnership",
        subtitle: "Your dedicated technical team",
        description: "A full-service development partnership for businesses that need ongoing technical expertise. We become an extension of your team, handling everything from architecture to implementation while training your internal resources.",
        useCases: [
            "Build complex products and platforms",
            "Serve as technical co-founders for startups",
            "Implement enterprise-grade solutions",
            "Develop and maintain custom AI systems"
        ],
        process: [
            "Initial discovery and architecture planning",
            "Dedicated team assignment",
            "Daily standups and weekly reviews",
            "Monthly strategy sessions and roadmap updates"
        ]
    }
};