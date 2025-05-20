import { For } from 'solid-js';
import styles from './creator-brand-community.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces for the data
interface Phase {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
  description: string;
  perception: string;
  behavior: string;
  indicators: string[];
}

interface InflectionPoint {
  id: number;
  position: string;
  title: string;
  description: string;
  implications: string;
}

interface Strategy {
  phase: string;
  strategies: string[];
}

const CreatorBrandCommunity = () => {
  // Phase data
  const phases: Phase[] = [
    {
      id: 1,
      title: "Content Consumption",
      subtitle: "Individual Appreciation",
      color: "#FFEDD0",
      textColor: "#d35400",
      description: "The community begins as disconnected individuals who consume your creative work. The relationship is primarily transactional, with people engaging based on immediate appeal rather than deeper connection.",
      perception: "This creator makes things I enjoy consuming",
      behavior: "Passive consumption of creative work",
      indicators: [
        "One-way engagement through likes, views, or purchases",
        "Little to no interaction between audience members",
        "Engagement focused on specific content pieces",
        "Minimal emotional investment beyond immediate consumption",
        "Quick turnover if similar content is available elsewhere"
      ]
    },
    {
      id: 2,
      title: "Creator Connection",
      subtitle: "Personal Relationship",
      color: "#FFDDC5",
      textColor: "#e67e22",
      description: "Audience members begin developing a personal connection with you as the creator. They follow your journey, respond to your personality, and build loyalty based on resonance with your unique voice and perspective.",
      perception: "I feel personally connected to this creator",
      behavior: "Direct engagement with the creator",
      indicators: [
        "Direct communication through comments and messages",
        "Following across multiple platforms and projects",
        "Interest in behind-the-scenes content",
        "Emotional responses to creator's journey and struggles",
        "Regular engagement regardless of specific content",
        "Beginning to recommend creator to others"
      ]
    },
    {
      id: 3,
      title: "Shared Identity",
      subtitle: "Community Formation",
      color: "#FFCBA8",
      textColor: "#d35400",
      description: "Individual fans begin connecting with each other around shared appreciation of your creative expression. They develop collective identity markers and start to build relationships based on common interests and values.",
      perception: "We are the kind of people who love this creator's work",
      behavior: "Connecting with other fans and community members",
      indicators: [
        "Emergence of shared language and references",
        "Fans initiating conversations with each other",
        "Formation of unofficial groups or chats",
        "People identifying themselves through association with your work",
        "Defending or advocating for your creative expression",
        "Community-specific memes or inside jokes developing"
      ]
    },
    {
      id: 4,
      title: "Collaborative Ecosystem",
      subtitle: "Community Contribution",
      color: "#FFB592",
      textColor: "#c0392b",
      description: "The community evolves from appreciation to active participation, with members contributing to the creative ecosystem. Different roles emerge, and the relationship becomes reciprocal rather than one-directional.",
      perception: "I am a contributing member of this creative ecosystem",
      behavior: "Active participation and contribution",
      indicators: [
        "User-generated content expanding on your creative work",
        "Community members taking on specific roles or responsibilities",
        "Organized community events or initiatives",
        "Recognition systems for contribution emerging",
        "Tiered engagement opportunities based on interests and skills",
        "Collaborative projects between community members"
      ]
    },
    {
      id: 5,
      title: "Creative Movement",
      subtitle: "Cultural Shift",
      color: "#FF9E7C",
      textColor: "#a93226",
      description: "The community transcends appreciation of your specific work to embrace broader cultural impact. The creative expression becomes a movement with its own momentum and influence beyond your direct reach.",
      perception: "We are part of something that's changing culture",
      behavior: "Cultural advocacy and expansion",
      indicators: [
        "Community members becoming educators or evangelists",
        "Movement expanding beyond original audience demographics",
        "Impact spreading into adjacent cultural domains",
        "Decentralized leadership emerging within the community",
        "Evolution of the creative expression through collective contribution",
        "Recognizable cultural influence beyond direct community"
      ]
    }
  ];

  // Inflection point data
  const inflectionPoints: InflectionPoint[] = [
    {
      id: 1,
      position: "Between Phase 1 and 2",
      title: "The Personal Connection Threshold",
      description: "This is where audience members shift from consuming content to connecting with the creator. The relationship transforms from transactional to personal. This requires vulnerability and authentic sharing from the creator beyond just the creative work itself.",
      implications: "Creators must balance creative production with relationship building. This requires more direct engagement, personal sharing, and responsiveness to audience communication. The focus shifts from solely creating work to creating connection around the work."
    },
    {
      id: 2,
      position: "Between Phase 2 and 3",
      title: "The Community Formation Point",
      description: "This critical threshold occurs when fans begin connecting with each other, not just with the creator. The community develops its own energy and identity, with relationships forming between members based on shared appreciation and values.",
      implications: "Creators must shift from being the sole focus of audience attention to facilitating connections among community members. This requires creating spaces, prompts, and rituals that encourage interaction, while developing community norms and culture."
    },
    {
      id: 3,
      position: "Between Phase 3 and 4",
      title: "The Contribution Activation Threshold",
      description: "This transition happens when community members move from appreciation to active contribution. The relationship evolves from one-way consumption to multi-directional co-creation, with community members adding their own value to the ecosystem.",
      implications: "Creators must develop clear frameworks for contribution, with systems that enable, recognize, and reward community participation. This requires loosening complete creative control while maintaining the integrity of the core vision."
    },
    {
      id: 4,
      position: "Between Phase 4 and 5",
      title: "The Movement Emergence Point",
      description: "This transformation occurs when the community evolves from a group of fans into a cultural movement with broader impact. The creative expression transcends its original context to influence broader cultural conversations and identities.",
      implications: "Creators must focus on articulating core principles rather than specific expressions, building governance systems that enable distributed leadership while maintaining philosophical alignment. Success means the vision can spread and evolve beyond the creator's direct control."
    }
  ];
  
  // Strategy data
  const strategies: Strategy[] = [
    {
      phase: "Phase 1: Content Consumption",
      strategies: [
        "Create consistent, high-quality content that showcases your unique voice",
        "Develop easy entry points with minimal barriers to consumption",
        "Build content formats that encourage repeat engagement",
        "Establish basic metrics to understand audience preferences",
        "Create clear calls-to-action for deeper engagement"
      ]
    },
    {
      phase: "Phase 2: Creator Connection",
      strategies: [
        "Share authentic behind-the-scenes content and creative process",
        "Respond directly to audience comments and messages",
        "Create Q&A or AMA (Ask Me Anything) opportunities",
        "Develop personal storytelling that connects to your creative work",
        "Show appreciation for audience support in meaningful ways"
      ]
    },
    {
      phase: "Phase 3: Shared Identity",
      strategies: [
        "Create dedicated community spaces (Discord, Telegram, forums)",
        "Develop community-specific language, symbols, or references",
        "Facilitate introductions between community members",
        "Create discussion prompts that encourage member interaction",
        "Recognize and celebrate active community participants"
      ]
    },
    {
      phase: "Phase 4: Collaborative Ecosystem",
      strategies: [
        "Create frameworks for community contribution (UGC, remixes, etc.)",
        "Develop recognition and reward systems for participation",
        "Establish clear roles for community members based on interests",
        "Create collaborative projects that integrate community input",
        "Develop systems for feedback and idea implementation"
      ]
    },
    {
      phase: "Phase 5: Creative Movement",
      strategies: [
        "Articulate core principles rather than just specific expressions",
        "Create leadership development pathways for community members",
        "Develop governance systems for distributed decision-making",
        "Build frameworks for adapting the vision across contexts",
        "Create educational resources that allow others to spread the vision"
      ]
    }
  ];

  // Core Transformations
  const transformations = [
    {
      title: "From Consumption to Contribution",
      description: "The community evolves from passively consuming content to actively contributing to the creative ecosystem."
    },
    {
      title: "From Individual to Collective Identity",
      description: "Members transition from personal appreciation to shared identity through the creative expression."
    },
    {
      title: "From Creator-Centric to Community-Distributed",
      description: "The focus shifts from creator as central figure to community as distributed force."
    },
    {
      title: "From Informal to Structured Engagement",
      description: "Interaction evolves from casual engagement to organized systems for participation."
    },
    {
      title: "From Niche to Cultural Integration",
      description: "The community expands from isolated interest group to broader cultural influence."
    }
  ];

  return (
    <>
      <PageTitle>Community Transformation</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>The Creator Brand Community Transformation</h1>
          <p class={styles.subtitle}>How audiences evolve from casual consumers to co-creators and cultural advocates</p>
        </div>

        <div class={styles.introduction}>
          <p>The creator brand journey isn't just about the evolution of creative expression—it's equally about how the community around that expression transforms. This framework maps the five distinct phases of community development, from individual content consumption to cultural movement, with critical inflection points that signal profound shifts in the community's relationship with the creator and their work.</p>
        </div>
        
        <div class={styles.coreTransformations}>
          <h2 class={styles.sectionTitle}>Core Community Transformations</h2>
          <div class={styles.transformationsContainer}>
            <For each={transformations}>
              {(transform) => (
                <div class={styles.transformationCard}>
                  <h3 class={styles.transformationTitle}>{transform.title}</h3>
                  <p class={styles.transformationDescription}>{transform.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>

        <div class={styles.timelineContainer}>
          <div class={styles.timeline}></div>
          <div class={styles.phases}>
            <For each={phases}>
              {(phase) => (
                <div class={styles.phase} style={{ "background-color": phase.color }}>
                  <h3 class={styles.phaseTitle} style={{ "color": phase.textColor }}>Phase {phase.id}: {phase.title}</h3>
                  <h4 class={styles.phaseSubtitle} style={{ "color": phase.textColor }}>{phase.subtitle}</h4>
                  <p class={styles.description}>{phase.description}</p>
                  
                  <div class={styles.indicators}>
                    <p class={styles.indicatorTitle} style={{ "color": phase.textColor }}>Community Perception:</p>
                    <p class={styles.description}>"{phase.perception}"</p>
                    
                    <p class={styles.indicatorTitle} style={{ "color": phase.textColor }}>Primary Behavior:</p>
                    <p class={styles.description}>{phase.behavior}</p>
                    
                    <p class={styles.indicatorTitle} style={{ "color": phase.textColor }}>Key Indicators:</p>
                    <ul class={styles.indicatorList}>
                      <For each={phase.indicators}>
                        {(indicator) => (
                          <li>{indicator}</li>
                        )}
                      </For>
                    </ul>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        <div class={styles.inflectionPointsContainer}>
          <h2 class={styles.inflectionTitle}>Critical Community Inflection Points</h2>
          
          <For each={inflectionPoints}>
            {(point) => (
              <div class={styles.inflection}>
                <div class={styles.inflectionHeader}>
                  <span class={styles.marker}></span>
                  <span>{point.title} ({point.position})</span>
                </div>
                <p class={styles.description}>{point.description}</p>
                <p class={`${styles.description} ${styles.implications}`}>Implications for Creators:</p>
                <p class={styles.description}>{point.implications}</p>
              </div>
            )}
          </For>
        </div>

        <div class={styles.strategiesContainer}>
          <h2 class={styles.strategiesTitle}>Community-Building Strategies by Phase</h2>
          
          <div class={styles.strategiesGrid}>
            <For each={strategies}>
              {(strategyGroup) => (
                <div class={styles.strategyCard}>
                  <h3 class={styles.strategyPhase}>{strategyGroup.phase}</h3>
                  <ul class={styles.strategyList}>
                    <For each={strategyGroup.strategies}>
                      {(strategy) => <li>{strategy}</li>}
                    </For>
                  </ul>
                </div>
              )}
            </For>
          </div>
        </div>
        
        <div class={styles.communityJourneyMap}>
          <h2 class={styles.sectionTitle}>Community Journey Map</h2>
          <div class={styles.journeyMapContainer}>
            <div class={styles.journeyMapColumn}>
              <div class={styles.journeyMapHeader}>Initial State</div>
              <div class={styles.journeyMapContent}>
                <p><strong>Disconnected Consumers</strong></p>
                <p>Individual appreciation of content without connection to creator or other fans</p>
              </div>
            </div>
            <div class={styles.journeyMapArrow}>→</div>
            <div class={styles.journeyMapColumn}>
              <div class={styles.journeyMapHeader}>Growth Stage</div>
              <div class={styles.journeyMapContent}>
                <p><strong>Connected Audience</strong></p>
                <p>Personal relationship with creator and early connection with other fans</p>
              </div>
            </div>
            <div class={styles.journeyMapArrow}>→</div>
            <div class={styles.journeyMapColumn}>
              <div class={styles.journeyMapHeader}>Maturity Stage</div>
              <div class={styles.journeyMapContent}>
                <p><strong>Active Community</strong></p>
                <p>Shared identity and active contribution to the creative ecosystem</p>
              </div>
            </div>
            <div class={styles.journeyMapArrow}>→</div>
            <div class={styles.journeyMapColumn}>
              <div class={styles.journeyMapHeader}>Evolution Stage</div>
              <div class={styles.journeyMapContent}>
                <p><strong>Cultural Movement</strong></p>
                <p>Distributed leadership and broader cultural impact beyond creator's direct reach</p>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.footnote}>
          <p>Note: This community transformation framework operates in parallel with the creator's personal development stages, brand recognition levels, and IP evolution. These dimensions interlock to create the complete Creator Brand Journey of Influence. The most successful creator brands intentionally nurture community development alongside creative evolution, recognizing that sustainable growth comes from transforming passive consumers into active co-creators and cultural advocates.</p>
        </div>
      </div>
    </>
  );
};

export default CreatorBrandCommunity;