<template>
  <div class="services-listing">
    <div v-for="(service, index) in services" :key="index" class="service-category">
      <h1 class="service-title">{{ service.name }}</h1>
      <div class="subservices-wrapper">
        <div v-for="(subservice, subIndex) in service.subservices" :key="subIndex" class="subservice-card">
          <h3 class="subservice-title">{{ subservice.name }}</h3>
          <p class="subservice-description">{{ subservice.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
{
  "name": "Taxes",
  "subservices": [
    {
      "name": "Personal Tax Filing",
      "description": "Expert assistance with individual tax returns, proactive tax planning, and minimizing personal tax liabilities."
    },
    {
      "name": "Corporate Tax Strategy and Compliance",
      "description": "Comprehensive tax strategy, planning, and compliance solutions for businesses of all sizes, focusing on minimizing tax liabilities while ensuring regulatory compliance."
    },
    {
      "name": "International Tax Advisory",
      "description": "Specialized support for businesses and individuals with cross-border interests, navigating complex global tax regulations, treaties, and compliance requirements."
    }
  ]
},
{
  "name": "Immigration",
  "subservices": [
    {
      "name": "Work and Residency Visas",
      "description": "Expert assistance with obtaining work and residency visas in Mexico, ensuring compliance with all relevant immigration laws and policies."
    },
    {
      "name": "Family Reunification Services",
      "description": "Comprehensive support for family reunification in Mexico, guiding clients through the application process to bring family members together."
    },
    {
      "name": "Citizenship and Naturalization",
      "description": "Guidance through the process of applying for Mexican citizenship and naturalization, including preparation for required legal and cultural knowledge."
    }
  ]
},
{
  "name": "Real Estate",
  "subservices": [
    {
      "name": "Property Acquisition and Sales",
      "description": "Strategic support for purchasing and selling residential and commercial properties in Mexico, ensuring compliance with local regulations and maximizing investment potential."
    },
    {
      "name": "Leasing and Tenant Services",
      "description": "Comprehensive assistance with leasing arrangements, including tenant agreements, regulatory compliance, and landlord-tenant dispute resolution."
    },
    {
      "name": "Real Estate Development Advisory",
      "description": "Guidance for property development projects in Mexico, covering zoning, permitting, compliance, and market strategy to ensure successful project execution and value realization."
    }
  ]
},
{
  "name": "Investment Law",
  "subservices": [
    {
      "name": "Fund Formation and Tax Structuring",
      "description": "Expert guidance on establishing investment funds in Mexico, including tax-efficient structures, regulatory compliance, and tailored strategies for capital deployment."
    },
    {
      "name": "Private Equity and Credit Transactions",
      "description": "Comprehensive support for private equity and private credit investments, covering due diligence, transaction structuring, and risk management to optimize investment outcomes."
    },
    {
      "name": "Regulatory Compliance and Financial Restructuring",
      "description": "Advisory services focused on navigating regulatory requirements, managing financial restructurings, and addressing litigation and public policy issues impacting alternative investments."
    }
  ]
},
{
  "name": "Regulatory & Public Policy",
  "subservices": [
    {
      "name": "Industry-Specific Regulatory Compliance",
      "description": "Dedicated regulatory compliance support for heavily regulated sectors, including health care, life sciences, energy, infrastructure, and technology, ensuring adherence to sector-specific laws and standards."
    },
    {
      "name": "Legislative and Policy Advisory",
      "description": "Strategic guidance on navigating legislative and policy landscapes in Mexico, including advocacy support before the Mexican Congress and Executive Branch to address evolving regulations and public policy shifts."
    },
    {
      "name": "Lobbying and Government Relations",
      "description": "Comprehensive lobbying and government relations services to influence policy outcomes, manage interactions with policymakers, and support clients’ interests amidst complex political and procedural dynamics."
    }
  ]
},
{
  "name": "Intellectual Property",
  "subservices": [
    {
      "name": "IP Registration and Portfolio Management",
      "description": "Comprehensive support for the registration of trademarks, copyrights, and patents with IMPI, as well as strategic management of global IP portfolios for businesses and creators."
    },
    {
      "name": "Intellectual Property Litigation and Dispute Resolution",
      "description": "Expert representation in IP litigation, including patent disputes in Mexican federal courts and cases involving trademarks, copyrights, trade secrets, and trade dress."
    },
    {
      "name": "IP Licensing and Transactional Services",
      "description": "Transactional services for the licensing, transfer, and commercialization of IP rights, ensuring that clients maximize the value of their intellectual property assets."
    }
  ]
}
]);
</script>

<style scoped>
.services-listing {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
}

.service-category {
  margin-bottom: 2.5rem;
}

.service-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Marcellus', serif;
}

.subservices-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.subservice-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.subservice-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.subservice-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
}

.subservice-description {
  line-height: 1.6;
}
</style>
