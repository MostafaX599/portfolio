// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu when a link is clicked
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.burger').classList.remove('active');
    });
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'white';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'white';
    }
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Project details data
const projects = {
    sales: {
    title: "Sales Dashboard",
    image: "C:\\Users\\Rw\\Desktop\\my page\\Screenshot 2025-07-07 171117.png",
    description: "Designed and developed an interactive sales dashboard to analyze business performance and KPIs using Power BI.",
    tools: ["Power BI", "Excel", "Python"],
    details: `
        <h3>Project Overview</h3>
        <p>This project involved designing and developing a professional <strong>interactive sales dashboard</strong> that enables businesses to monitor performance, identify trends, and make data-driven decisions with confidence.</p>

        <h4>Key Features & Functionality</h4>
        <ul>
            <li>Transformed raw sales data into dynamic, visually engaging reports using bar charts, pie charts, trend lines, and KPI cards.</li>
            <li>Implemented <strong>advanced slicers and filters</strong> for multi-dimensional analysis (by region, category, customer demographics, and time periods).</li>
            <li>Delivered insights on <strong>transactions, revenue, sales volume, customer age distribution, and category comparisons</strong>.</li>
            <li>Created a clean, modern, and professional design with consistent branding and intuitive navigation.</li>
            <li>Provided output in multiple formats (PBIX, PDF, and high-resolution images) for stakeholder communication.</li>
        </ul>

        <h4>Sample Insights from the Dashboard</h4>
        <ul>
            <li><strong>Total Transactions:</strong> 1,000</li>
            <li><strong>Average Customer Age:</strong> 41.39 years</li>
            <li><strong>Total Sales:</strong> $456K</li>
            <li><strong>Customer Demographics:</strong> Balanced male/female distribution</li>
            <li><strong>Category Insights:</strong> Electronics leading in revenue, Fashion driving higher quantities, Beauty capturing niche markets</li>
            <li><strong>Temporal Trends:</strong> Seasonal and weekly patterns highlighting peak sales periods</li>
        </ul>

        <h4>Business Decisions to Increase Sales</h4>
        <ul>
            <li><strong>Customer Targeting:</strong> Focus marketing on high-value demographics and regions with the strongest purchasing power.</li>
            <li><strong>Category Optimization:</strong> Invest in top-performing categories (e.g., Electronics) and improve promotional strategies for underperforming segments.</li>
            <li><strong>Seasonal Promotions:</strong> Launch tailored campaigns around identified high-demand months and days of the week.</li>
            <li><strong>Personalized Offers:</strong> Design customer retention strategies based on age and gender segmentation.</li>
            <li><strong>Operational Monitoring:</strong> Use real-time KPIs to quickly respond to drops in sales or inventory shortages.</li>
        </ul>

        <h4>Tools & Technologies</h4>
        <ul>
            <li><strong>Power BI:</strong> Advanced data modeling, DAX calculations, and dashboard interactivity</li>
            <li><strong>Excel:</strong> Data preprocessing, pivot tables, and structured data cleaning</li>
            <li><strong>Python:</strong> Automated data preparation and advanced analytics when required</li>
        </ul>

        <p><em>Outcome:</em> The dashboard empowered stakeholders with <strong>real-time visibility</strong> into sales performance across regions and categories, while also enabling <strong>strategic decision-making</strong> to boost sales, improve customer engagement, and optimize operations.</p>
    `
},

   social: {
    title: "Social Media Impact on Students",
    image: "C:\Users\Rw\Desktop\my page\Screenshot 2025-07-07 181617.png",
    description: "Built an interactive dashboard analyzing data from 705 students on mental health, daily usage, and addiction levels.",
    tools: ["Power BI", "Excel", "Python"],
    details: `
        <h3>Project Overview</h3>
        <p>This research-grade interactive dashboard examines how social media usage relates to students' mental health, sleep habits, and academic performance. The dashboard combines descriptive analytics, correlation analysis, and intervention-focused features to identify high-risk cohorts and measure the impact of targeted actions.</p>

        <h4>Key Analytics & Aggregate Findings</h4>
        <ul>
            <li><strong>Dataset:</strong> 705 students</li>
            <li><strong>Average Age:</strong> 21 years</li>
            <li><strong>Average Mental Health Score:</strong> 6.2</li>
            <li><strong>Average Daily Usage:</strong> 5 hours</li>
            <li><strong>Average Addiction Score:</strong> 6.4</li>
        </ul>

        <h4>Visual & Analytical Components</h4>
        <ul>
            <li>Demographic breakdowns: gender, relationship status, and academic level.</li>
            <li>Impact on academic performance: pie and annotated charts showing correlations between usage and study outcomes.</li>
            <li>Platform usage funnel: bar-funnel visualization ranking most-used platforms.</li>
            <li>Platform comparisons: addiction, sleep disruption, and mental-health distributions per platform.</li>
            <li>Scatter analyses: Addiction score vs. sleep hours; Addiction score vs. daily usage (with regression lines and correlation coefficients).</li>
        </ul>

        <h4>Addiction Reduction Insights & Intervention Features</h4>
        <ul>
            <li><strong>Addiction Risk Score:</strong> A composite metric (0–100) combining normalized daily hours, addiction score, night-time activity, and academic decline to classify students into low/medium/high risk cohorts.</li>
            <li><strong>Threshold Alerts & Targeting:</strong> Automated flags for students or groups exceeding critical thresholds (e.g., &gt;6 hrs/day or addiction score &gt;7) to enable early intervention.</li>
            <li><strong>Usage Heatmaps:</strong> Time-of-day analysis to identify late-night usage patterns strongly associated with sleep disruption and poorer academic outcomes.</li>
            <li><strong>Cohort Trend & ROI Tracking:</strong> Before/after comparison for interventions using moving averages and percent-change metrics at cohort level.</li>
            <li><strong>Personalized Nudges & Recommendations:</strong> Contextual messages (e.g., reducing night usage by one hour) that can be exported for targeted outreach or integrated into notification systems.</li>
            <li><strong>Platform Impact Scoring:</strong> Relative contribution of each platform to addiction risk, sleep disruption, and mental-health decline to prioritize intervention efforts.</li>
        </ul>

        <h4>Technical Features</h4>
        <ul>
            <li>Advanced slicers for demographic filtering (gender, relationship status, academic level) and temporal ranges.</li>
            <li>Interactive cross-filtering and variable linking to expose behavioral patterns and correlations.</li>
            <li>Exportable target lists for outreach (CSV/PDF) and integrations with email, Slack, or MS Teams.</li>
            <li>Scalable design suitable for institutional deployment and adaptable to new datasets.</li>
        </ul>

        <h4>Suggested KPIs & Targets</h4>
        <ul>
            <li>Reduce the percentage of high-risk students by 15% within 3 months following targeted interventions.</li>
            <li>Decrease average daily usage by 0.5–1 hour within 2 months for engaged cohorts.</li>
            <li>Increase average sleep duration by 0.5 hours for prioritized cohorts.</li>
            <li>Achieve &gt;30% engagement rate with nudges and awareness content.</li>
        </ul>

        <h4>Use Cases</h4>
        <ul>
            <li>Academic research on the intersection of technology use and student wellbeing.</li>
            <li>University research centers and student welfare units seeking measurable interventions.</li>
            <li>Public-health and community awareness campaigns.</li>
            <li>Capstone projects demonstrating end-to-end analytics, intervention design, and impact measurement.</li>
        </ul>

        <p><em>Note:</em> The dashboard is designed to be actionable—not only surfacing correlations but enabling targeted interventions and measuring their impact over time.</p>
    `
},

    financial: {
    title: "Financial Services Dashboard",
    image: "C:\Users\Rw\Desktop\my page\Screenshot 2025-07-07 172813.png",
    description: "Developed an interactive financial dashboard to analyze service requests, payments, and quotations.",
    tools: ["Power BI", "Excel", "Python"],
    details: `
        <h3>Project Overview</h3>
        <p>This <strong>Financial Services Dashboard</strong> was developed to deliver clear and actionable insights into service requests, payments, quotations, and overall financial performance. It combines advanced Power BI features with professional design to support data-driven financial decision-making.</p>

        <h4>Key Metrics</h4>
        <ul>
            <li><strong>Total Service Requests:</strong> 1,152</li>
            <li><strong>Total Payments:</strong> 562.10K</li>
            <li><strong>Total Quotations:</strong> 483K</li>
            <li><strong>Calculated Orders:</strong> 79.34K</li>
        </ul>

        <h4>Visual & Analytical Features</h4>
        <ul>
            <li>Monthly trend analysis for service requests and payments.</li>
            <li><strong>Paid vs. Quotation Analysis:</strong> Monthly comparisons to evaluate conversion performance.</li>
            <li>Geographical analysis with regional distribution of payments and requests.</li>
            <li><strong>Order Status Tracking:</strong> Completed, Pending, and Canceled orders breakdown.</li>
            <li>Dynamic slicers for filtering by region, province, or service type.</li>
        </ul>

        <h4>Business Value</h4>
        <ul>
            <li><strong>Revenue Optimization:</strong> Identified gaps between quotations and payments to improve conversion rates.</li>
            <li><strong>Regional Strategy:</strong> Highlighted high-performing areas while addressing underperforming ones.</li>
            <li><strong>Operational Efficiency:</strong> Tracked pending and canceled requests to detect bottlenecks and optimize processes.</li>
            <li><strong>Financial Planning:</strong> Enabled forecasting of demand and improved allocation of financial resources.</li>
        </ul>

        <h4>Tools & Technologies</h4>
        <ul>
            <li><strong>Power BI:</strong> Interactive dashboards, DAX calculations, and drill-down features.</li>
            <li><strong>Excel:</strong> Data cleaning, aggregation, and pivot analysis.</li>
            <li><strong>Python:</strong> Automated preprocessing and advanced analytics when required.</li>
        </ul>

        <p><em>Outcome:</em> The dashboard provided <strong>real-time visibility</strong> into financial operations, enabling managers to detect trends, monitor performance, and take strategic actions to optimize revenue and service delivery.</p>
    `
}

};

// Project modal functionality
const modal = document.getElementById('project-modal');
const projectCards = document.querySelectorAll('.project-card');
const closeModal = document.querySelector('.close-modal');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-image').style.backgroundImage = `url('${project.image}')`;
            document.getElementById('modal-description').innerHTML = `<p>${project.description}</p>`;
            
            // Clear and repopulate tools
            const toolsContainer = document.getElementById('modal-tools');
            toolsContainer.innerHTML = '';
            project.tools.forEach(tool => {
                toolsContainer.innerHTML += `<span class="project-tool">${tool}</span>`;
            });
            
            document.getElementById('modal-details').innerHTML = project.details;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    
    // Reset the form
    this.reset();
});