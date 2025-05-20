import { For } from 'solid-js';
import styles from './creator-brand-recognition.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces
interface RecognitionLevel {
  id: number;
  name: string;
  subtitle: string;
  color: string;
  description: string;
  perception: string;
  signals: string[];
  opportunities: string[];
  nextSteps: string[];
}

interface PhaseAlignment {
  phase: string;
  stages: string;
  recognition: string;
  community: string;
  structure: string;
}

const CreatorBrandRecognition = () => {
  // Brand recognition data
  const recognitionLevels: RecognitionLevel[] = [
    {
      id: 1,
      name: "Unknown",
      subtitle: "Pre-recognition Phase",
      color: "#E0E0E0",
      description: "Your creative expression exists, but the market is completely unaware of it. You're experimenting and developing your craft without significant external recognition.",
      perception: "\"I've never heard of this creator or seen this work before.\"",
      signals: [
        "No significant follower growth on platforms",
        "Minimal engagement on shared creations",
        "No organic sharing or recommendation",
        "Low or inconsistent traffic to your channels",
        "No brand mentions in conversations or media"
      ],
      opportunities: [
        "Freedom to experiment without external judgment",
        "Ability to refine your craft through trial and error",
        "Space to develop authentic voice without market pressure",
        "Opportunity to study audience responses objectively"
      ],
      nextSteps: [
        "Focus on volume and variety of creation",
        "Experiment with different styles and approaches",
        "Identify patterns in what you enjoy creating most",
        "Begin tracking metrics to identify what resonates",
        "Develop technical skills in your creative medium"
      ]
    },
    {
      id: 2,
      name: "Discovery",
      subtitle: "Initial Market Awareness",
      color: "#FFEDD0",
      description: "People have begun to encounter your work, but haven't yet formed a clear understanding of your unique value. You're starting to appear on their radar.",
      perception: "\"I've seen some of this creator's work before.\"",
      signals: [
        "Growing follower counts on primary platforms",
        "Increasing engagement on specific content types",
        "Occasional organic sharing of your work",
        "People recognizing your name or handle",
        "Early repeat engagement from the same viewers"
      ],
      opportunities: [
        "Identify patterns in what consistently resonates",
        "Begin building direct relationships with engaged viewers",
        "Test different creation and promotion approaches",
        "Start collecting audience data for future targeting"
      ],
      nextSteps: [
        "Establish consistent posting schedule",
        "Develop basic brand elements for recognition",
        "Create mechanisms to capture audience contact info",
        "Begin direct communication with most engaged viewers",
        "Analyze metrics to identify your most successful work"
      ]
    },
    {
      id: 3,
      name: "Distinctiveness",
      subtitle: "Recognized Creative Voice",
      color: "#FFDDC5",
      description: "Your unique creative approach is becoming recognizable. People can identify specific elements that make your work distinctive from others in your category.",
      perception: "\"I can recognize this creator's style when I see it.\"",
      signals: [
        "Audience can identify your work without seeing your name",
        "Specific elements of your work are frequently mentioned",
        "Consistent engagement across different pieces",
        "People describing what makes your work unique",
        "Growing word-of-mouth discovery"
      ],
      opportunities: [
        "Refine and strengthen your distinctive elements",
        "Begin developing premium offerings based on uniqueness",
        "Attract collaborators who value your specific approach",
        "Build marketing around your unique creative perspective"
      ],
      nextSteps: [
        "Document your creative framework and style guide",
        "Develop consistent application across all touchpoints",
        "Create content that highlights your unique approach",
        "Begin testing premium pricing based on distinctiveness",
        "Seek opportunities to articulate what makes your work unique"
      ]
    },
    {
      id: 4,
      name: "Value Recognition",
      subtitle: "Premium Market Position",
      color: "#FFC9A0",
      description: "The market recognizes the unique value of your creative expression and is willing to pay a premium for it. Your work is sought out specifically for its distinctive qualities.",
      perception: "\"This creator's work is worth paying more for.\"",
      signals: [
        "Successfully charging premium prices",
        "Specific demand for your unique approach",
        "Direct requests for your work or collaborations",
        "Audience following you across platforms",
        "Media coverage mentioning your distinctive qualities",
        "Waitlists or limited availability of your offerings"
      ],
      opportunities: [
        "Develop multiple offerings at different price points",
        "Expand into adjacent categories while maintaining uniqueness",
        "Build systems to scale without diluting quality",
        "Leverage recognition to secure strategic partnerships"
      ],
      nextSteps: [
        "Create tiered offering structure with clear value ladder",
        "Develop systems for consistent creative production",
        "Build team or collaborations to support growth",
        "Formalize your brand guidelines and creative framework",
        "Strengthen IP protection for key distinctive elements"
      ]
    },
    {
      id: 5,
      name: "Creative Identity",
      subtitle: "Community Identification",
      color: "#FFCBA8",
      description: "Your creative expression has evolved into an identity that people connect with personally. Your audience doesn't just consume your work; they see themselves through the lens of your creative vision.",
      perception: "\"I'm the kind of person who loves this creator's work.\"",
      signals: [
        "Fans identifying themselves through your work",
        "Community-specific language and references",
        "People defending or advocating for your work",
        "Unprompted user-generated content related to your brand",
        "Community members connecting with each other",
        "Personal stories about impact of your work"
      ],
      opportunities: [
        "Facilitate deeper connections among community members",
        "Develop exclusive experiences for committed fans",
        "Create frameworks for community contribution",
        "Extend your creative universe through community co-creation"
      ],
      nextSteps: [
        "Establish dedicated community spaces and platforms",
        "Create community rituals and shared experiences",
        "Develop recognition systems for community contribution",
        "Build narrative frameworks that deepen belonging",
        "Create exclusive access or benefits for core community"
      ]
    },
    {
      id: 6,
      name: "Movement",
      subtitle: "Collective Cultural Force",
      color: "#FFB592",
      description: "Your creative expression has evolved into a movement with its own momentum. People actively promote your work and what it represents, becoming evangelists for the creative vision.",
      perception: "\"Everyone should experience this creator's work.\"",
      signals: [
        "Strong community-driven growth and advocacy",
        "Active promotion by fans without prompting",
        "Creation of fan groups, events, or projects",
        "Media coverage of the movement, not just the creator",
        "People teaching or explaining your approach to others",
        "Emergence of community leadership beyond yourself"
      ],
      opportunities: [
        "Develop frameworks for distributed creation",
        "Create systems for maintaining quality at scale",
        "Build governance structures for community participation",
        "Establish educational programs about your creative approach"
      ],
      nextSteps: [
        "Develop formal ambassador or affiliate programs",
        "Create resources that facilitate advocacy",
        "Establish quality standards for expanded creation",
        "Build leadership development pathways for community members",
        "Create systems that reward meaningful contribution"
      ]
    },
    {
      id: 7,
      name: "Category Definition",
      subtitle: "Industry Standard",
      color: "#FFA080",
      description: "Your creative approach has become so influential that it defines a category or sets standards within your field. Others in the industry reference your work as a benchmark or model.",
      perception: "\"This is how things are done in this field now.\"",
      signals: [
        "Industry publications referencing your approach",
        "Competitors adopting elements of your style or method",
        "Educational content teaching your techniques",
        "Your terminology entering industry vocabulary",
        "Awards or recognition from professional organizations",
        "Case studies analyzing your creative approach"
      ],
      opportunities: [
        "Develop comprehensive educational systems",
        "Create certification or training programs",
        "Build licensing frameworks for industry implementation",
        "Establish yourself as the thought leader in your category"
      ],
      nextSteps: [
        "Document your methodology in comprehensive form",
        "Develop professional training or certification programs",
        "Create industry partnership or licensing strategies",
        "Establish formal IP protection for key frameworks",
        "Build systems for maintaining category leadership"
      ]
    },
    {
      id: 8,
      name: "Creative Framework",
      subtitle: "Expandable Universe",
      color: "#FF9E7C",
      description: "Your creative expression has evolved into a comprehensive framework or universe that others can build within. Your original vision enables derivative creation while maintaining its core essence.",
      perception: "\"We're building upon this creative foundation together.\"",
      signals: [
        "Multiple creators working within your established framework",
        "Authorized derivatives or extensions of your work",
        "Formal systems for maintaining universe consistency",
        "Significant licensing or partnership revenue",
        "Evolution of the creative framework beyond your direct control",
        "Multi-format expression of the core creative vision"
      ],
      opportunities: [
        "Develop sophisticated governance for creative evolution",
        "Create systems for canon management across media",
        "Build institutional structures for long-term stewardship",
        "Establish pathways for next-generation creative leadership"
      ],
      nextSteps: [
        "Create comprehensive world bible or creative documentation",
        "Develop licensing frameworks with clear guidelines",
        "Establish governance systems for maintaining integrity",
        "Build quality control mechanisms for expanded creation",
        "Identify and nurture next-generation creative leaders"
      ]
    },
    {
      id: 9,
      name: "Cultural Reference",
      subtitle: "Mainstream Recognition",
      color: "#FF8C66",
      description: "Your creative expression has achieved such widespread recognition that it has become a cultural reference point. People who aren't directly in your audience still recognize elements of your work.",
      perception: "\"This is part of our cultural landscape now.\"",
      signals: [
        "Mainstream media references outside your core category",
        "Recognition from people outside your target audience",
        "Parodies or homages to your work in popular culture",
        "Academic or critical analysis of your cultural impact",
        "Inclusion in broader cultural conversations",
        "Cross-generational awareness and recognition"
      ],
      opportunities: [
        "Leverage cultural position for broader impact",
        "Develop strategic adaptation for diverse audiences",
        "Create frameworks for cultural relevance across generations",
        "Establish institutional legacy planning"
      ],
      nextSteps: [
        "Develop strategic cross-cultural adaptations",
        "Create frameworks for maintaining relevance over time",
        "Establish institutional structures for long-term influence",
        "Build legacy planning and succession frameworks",
        "Document philosophy and principles behind the work"
      ]
    },
    {
      id: 10,
      name: "Cultural Institution",
      subtitle: "Enduring Legacy",
      color: "#FF7A52",
      description: "Your creative expression has become an enduring cultural institution that transcends your personal involvement. It has established permanent cultural impact that will continue beyond your lifetime.",
      perception: "\"This has fundamentally shaped how we see the world.\"",
      signals: [
        "Educational curriculum based on your creative framework",
        "Multiple generations engaging with your work",
        "Institutional structures preserving and extending your vision",
        "Significant influence across different fields and domains",
        "Recognition as a defining cultural contribution",
        "Continued relevance despite changing contexts"
      ],
      opportunities: [
        "Focus on institutional frameworks for permanent impact",
        "Develop systems for multi-generational stewardship",
        "Create educational models for preserving core principles",
        "Establish governance for balancing preservation and evolution"
      ],
      nextSteps: [
        "Establish foundations or institutions for permanent stewardship",
        "Create comprehensive educational systems",
        "Develop governance for long-term cultural integrity",
        "Build frameworks for continuing evolution and relevance",
        "Document philosophical foundations for future generations"
      ]
    }
  ];

  const phaseAlignments: PhaseAlignment[] = [
    {
      phase: "THE SPARK PHASE",
      stages: "0-1 (Spark-Flame)",
      recognition: "Unknown → Discovery → Distinctiveness",
      community: "Individual consumption",
      structure: "Personal creation → Audience building"
    },
    {
      phase: "THE IDENTITY PHASE (EARLY)",
      stages: "2-3 (Torch-Beacon)",
      recognition: "Distinctiveness → Value Recognition → Creative Identity",
      community: "Audience → Fanbase",
      structure: "Creator brand → Brand systems"
    },
    {
      phase: "THE IDENTITY PHASE (LATE)",
      stages: "4-5 (Campfire-Bonfire)",
      recognition: "Creative Identity → Movement → Category Definition",
      community: "Community → Ecosystem",
      structure: "Community infrastructure → Creator economy"
    },
    {
      phase: "THE EXPANSION PHASE",
      stages: "6-8 (Signal Fire-Constellation)",
      recognition: "Creative Framework → Cultural Reference → Cultural Institution",
      community: "Movement → Cultural participation",
      structure: "Distributed creation → Institutional frameworks"
    }
  ];

  return (
    <>
      <PageTitle>Brand Recognition</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>Creator Brand Recognition Lifecycle</h1>
          <p class={styles.subtitle}>How market perception evolves across the Creator Brand Journey</p>
        </div>

        <div class={styles.introduction}>
          <p>Unlike traditional product brands, a creator's brand recognition follows a unique progression that reflects how deeply their creative expression is integrated into audience identity and cultural context. This framework maps ten distinct levels of brand recognition, from complete obscurity to cultural institution, with specific signals that indicate progression from one level to the next.</p>
          <p>Understanding your current position on this recognition spectrum helps identify appropriate next steps and avoid strategies that are misaligned with your current level of influence. Each level builds upon the previous and requires completing specific developmental tasks before moving forward.</p>
        </div>

        <div class={styles.progressContainer}>
          <div class={styles.progressBar}>
            <For each={recognitionLevels}>
              {(level, index) => {
                const position = `${index() * (100 / (recognitionLevels.length - 1))}%`;
                return (
                  <>
                    <div 
                      class={styles.progressPoint} 
                      style={{
                        "left": position,
                        "background-color": level.color
                      }}
                    />
                    <div class={styles.progressLabel} style={{ "left": position }}>{level.name}</div>
                  </>
                );
              }}
            </For>
          </div>
        </div>

        <For each={recognitionLevels}>
          {(level) => (
            <div 
              class={styles.levelContainer} 
              style={{
                "background-color": level.color,
                "opacity": 0.9
              }}
            >
              <div class={styles.levelHeader}>
                <div 
                  class={styles.levelNumber}
                  style={{
                    "background-color": level.color,
                    "filter": "brightness(0.8)"
                  }}
                >
                  {level.id}
                </div>
                <div>
                  <h2 class={styles.levelTitle}>{level.name}</h2>
                  <p class={styles.levelSubtitle}>{level.subtitle}</p>
                </div>
              </div>

              <div class={styles.contentSection}>
                <p class={styles.description}>{level.description}</p>
                
                <p class={styles.sectionTitle}>Typical Audience Perception:</p>
                <p class={styles.description}>{level.perception}</p>
                
                <p class={styles.sectionTitle}>Key Recognition Signals:</p>
                <ul class={styles.list}>
                  <For each={level.signals}>
                    {(signal) => <li class={styles.item}>{signal}</li>}
                  </For>
                </ul>
                
                <p class={styles.sectionTitle}>Strategic Opportunities:</p>
                <ul class={styles.list}>
                  <For each={level.opportunities}>
                    {(opportunity) => <li class={styles.item}>{opportunity}</li>}
                  </For>
                </ul>
                
                <p class={styles.sectionTitle}>Recommended Next Steps:</p>
                <ul class={styles.list}>
                  <For each={level.nextSteps}>
                    {(step) => <li class={styles.item}>{step}</li>}
                  </For>
                </ul>
              </div>
            </div>
          )}
        </For>

        <div class={styles.alignmentSection}>
          <h2 class={styles.alignmentTitle}>Alignment with Creator Brand Journey Phases</h2>
          <p class={styles.description}>This table shows how brand recognition levels align with the other dimensions of the Creator Brand Journey of Influence framework:</p>
          
          <table class={styles.alignmentTable}>
            <thead>
              <tr>
                <th class={styles.tableHeader}>Phase</th>
                <th class={styles.tableHeader}>Stages</th>
                <th class={styles.tableHeader}>Recognition Levels</th>
                <th class={styles.tableHeader}>Community Experience</th>
                <th class={styles.tableHeader}>Organizational Structure</th>
              </tr>
            </thead>
            <tbody>
              <For each={phaseAlignments}>
                {(alignment) => (
                  <tr class={styles.tableRow}>
                    <td class={styles.tableCell}>{alignment.phase}</td>
                    <td class={styles.tableCell}>{alignment.stages}</td>
                    <td class={styles.tableCell}>{alignment.recognition}</td>
                    <td class={styles.tableCell}>{alignment.community}</td>
                    <td class={styles.tableCell}>{alignment.structure}</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>

        <div class={styles.footnote}>
          <p>Note: Brand recognition progression is not strictly linear and may develop unevenly across different audience segments or geographic regions. Some creator brands may achieve high recognition levels in niche markets while remaining unknown in broader contexts. The most sustainable path is to build each level of recognition before attempting to move to the next, as skipping levels often leads to temporary success followed by regression.</p>
        </div>
      </div>
    </>
  );
};

export default CreatorBrandRecognition;