// Builds llms.txt / llms-full.txt from the same content the site renders, so AI assistants
// read exactly what humans see. Spec: https://llmstxt.org
import { education, process, profile, projects, proof, record, services } from "./content"
import { SITE_DESCRIPTION, SITE_URL } from "./site"

const contact = [
  `- Email: ${profile.email}`,
  `- LinkedIn: ${profile.links.linkedin}`,
  `- GitHub: ${profile.links.github}`,
  `- X: ${profile.links.x}`,
  `- Based in: ${profile.location} (works remotely with teams anywhere)`,
].join("\n")

export function llmsTxt() {
  return `# ${profile.name}

> ${SITE_DESCRIPTION}

${profile.name} is a freelance developer and student at IIT Mandi (B.Tech 2024 – 2028), currently on an exchange semester at Leibniz Universität Hannover, Germany. Sachit builds AI assistants that answer from a company's own documents, AI agents that act on their own, workflow automations that remove repetitive manual work, and fast websites, then deploys and maintains them on the cloud (AWS, Docker, Linux, Cloudflare, Vercel).

## Services
${services.map((s) => `- **${s.title}**: ${s.body} Example: ${s.proof}.`).join("\n")}

## Selected work
${projects.map((p) => `- **${p.name}** (${p.kind}, ${p.when}): ${p.built} Result: ${p.result}${p.link ? ` Code: ${p.link}` : ""}`).join("\n")}

## Highlights
${proof.map((p) => `- ${p.prefix ?? ""}${p.value}${p.suffix} ${p.label} (${p.note})`).join("\n")}

## Hire or contact
${contact}

## Optional
- [Full profile](${SITE_URL}/llms-full.txt): services, projects, process, education and awards in detail
- [Website](${SITE_URL})
`
}

export function llmsFullTxt() {
  return `# ${profile.name}: full profile

> ${SITE_DESCRIPTION}

Website: ${SITE_URL}

## About
${profile.name} is a developer focused on AI agents, AI assistants and automation. Sachit studies at IIT Mandi, India (B.Tech, 2024 – 2028) and is on an exchange semester in Computer Science & AI at Leibniz Universität Hannover, Germany (Oct 2026 – Mar 2027). Sachit has built 100+ projects since 2018 and keeps 50+ websites running on the cloud for 3,000+ students and staff at IIT Mandi. Sachit is open to freelance projects, internships and Werkstudent roles.

## Services
${services.map((s) => `### ${s.title}\n${s.body}\n- Proof: ${s.proof}\n- Tools: ${s.tools}`).join("\n\n")}

## Projects
${projects
  .map(
    (p) =>
      `### ${p.name}: ${p.kind} (${p.when})\n- Problem: ${p.problem}\n- What was built: ${p.built}\n- Result: ${p.result}\n- Tools: ${p.tools}${p.link ? `\n- Source: ${p.link}` : ""}`,
  )
  .join("\n\n")}

## How a project works
${process.map((s, i) => `${i + 1}. **${s.title}**: ${s.body}`).join("\n")}

## Awards and milestones
${record.map((r) => `### ${r.year}\n${r.items.map((it) => `- ${it.title} (${it.where})`).join("\n")}`).join("\n\n")}

## Education
${education.map((e) => `- ${e.school}: ${e.detail}, ${e.when}`).join("\n")}

## Contact
${contact}
`
}
