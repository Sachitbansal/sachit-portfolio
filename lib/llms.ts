// Builds llms.txt / llms-full.txt from the same content the site renders, so AI assistants
// read exactly what humans see. Spec: https://llmstxt.org
import { achievements, education, identity, journey, leadership, process, profile, projects, proof, services, thinking } from "./content"
import { SITE_DESCRIPTION, SITE_URL } from "./site"

const contact = [
  `- Email: ${profile.email}`,
  `- LinkedIn: ${profile.links.linkedin}`,
  `- GitHub: ${profile.links.github}`,
  `- X: ${profile.links.x}`,
  `- Based in: ${profile.location} (available for remote collaboration internationally)`,
].join("\n")

export function llmsTxt() {
  return `# ${profile.name}

> ${SITE_DESCRIPTION}

${profile.name}: ${identity}. Studies at IIT Mandi (B.Tech 2024 – 2028, AI & Robotics) and is on an exchange semester at Leibniz University Hannover, Germany. Builds agentic AI systems, intelligent automations and AI-powered applications, and takes them from concept to deployment.

## Why work with Sachit
${thinking.intro}
${thinking.points.map((p) => `- **${p.title}**: ${p.body}`).join("\n")}

## Services
${services.map((s) => `- **${s.title}**: ${s.tagline} ${s.bullets.join("; ")}.`).join("\n")}

## Selected engineering work
${projects.map((p) => `- **${p.name}** (${p.kind}, ${p.when}): ${p.headline} ${p.engineered}${p.validation ? ` Validation: ${p.validation.join("; ")}.` : ""}${p.link ? ` Code: ${p.link}` : ""}`).join("\n")}

## Highlights
${proof.map((p) => `- ${p.prefix ?? ""}${p.value}${p.suffix} ${p.label} (${p.note})`).join("\n")}

## Hire or contact
${contact}

## Optional
- [Full profile](${SITE_URL}/llms-full.txt): services, case studies, journey, credentials and process in detail
- [Website](${SITE_URL})
`
}

export function llmsFullTxt() {
  return `# ${profile.name}: full profile

> ${SITE_DESCRIPTION}

Website: ${SITE_URL}
Role: ${identity}

## Why work with Sachit: ${thinking.title}
${thinking.intro}
${thinking.points.map((p, i) => `${i + 1}. **${p.title}**: ${p.body}`).join("\n")}

${thinking.closing}

## Services
${services.map((s) => `### ${s.title}\n${s.tagline}\n${s.bullets.map((b) => `- ${b}`).join("\n")}\n- Example: ${s.example}`).join("\n\n")}

## Engineering case studies
${projects
  .map(
    (p) =>
      `### ${p.name}: ${p.headline}\n${p.kind}, ${p.when}\n- Challenge: ${p.challenge}\n- What was engineered: ${p.engineered}\n${p.components.map((c) => `  - ${c}`).join("\n")}${p.validation ? `\n- Validation: ${p.validation.join("; ")}` : ""}\n- What it demonstrates: ${p.demonstrates}\n- Technology: ${p.tools}${p.link ? `\n- Source: ${p.link}` : ""}`,
  )
  .join("\n\n")}

## Journey
${journey.map((j) => `- **${j.when}, ${j.title}**: ${j.body}`).join("\n")}

## Education
${education.map((e) => `- ${e.school}: ${e.detail}, ${e.when}`).join("\n")}

## Achievements
${achievements.map((a) => `- ${a.title} (${a.where})`).join("\n")}

## Leadership and contribution
${leadership.map((l) => `- **${l.role}, ${l.org}**: ${l.body}`).join("\n")}

## How a project works
${process.map((s, i) => `${i + 1}. **${s.title}**: ${s.body}`).join("\n")}

## Contact
${contact}
`
}
