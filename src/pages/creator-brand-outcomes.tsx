import { createSignal, For, Show } from 'solid-js';
import styles from './creator-brand-outcomes.module.css';
import PageTitle from '../components/page-title';

const CreatorBrandTractionOutcomes = () => {
  const [activePhase, setActivePhase] = createSignal<number|null>(null);

  const phases = [
    {
      id: 1,
      title: "THE SPARK PHASE",
      color: "#FFEDD0",
      textColor: "#d35400",
      description: "Experimental mixing and market testing",
      stages: [
        {
          id: 0,
          name: "THE DABBLER",
          icon: "SPARK",
          iconColor: "#FFE082",
          description: "Exploratory creation finding resonance",
          outcomes: [
            "Portfolio of diverse experimental work showing range of creative approaches",
            "Initial audience engagement data showing which specific content generates stronger response",
            "First signs of organic sharing or recommendation of specific works",
            "Identifiable patterns in what aspects of your work consistently connect with viewers",
            "Baseline understanding of relevant platforms and distribution channels",
            "Beginning technical skill development with measurable improvement over time"
          ],
          transitionRequirements: "Before moving to the Flame stage, you must have concrete data showing which specific elements of your creative work consistently generate stronger audience response, with emerging patterns that could guide more strategic creation."
        },
        {
          id: 1,
          name: "THE TREND CHASER",
          icon: "FLAME",
          iconColor: "#FFD54F",
          description: "Market-responsive creation testing for traction",
          outcomes: [
            "Consistent content schedule with measurable growth in audience across at least one platform",
            "Clear metrics showing which content categories and approaches perform best",
            "Initial monetization with measurable conversion rate (even if modest)",
            "Growing library of work with increasingly consistent visual/tonal elements",
            "Basic audience demographics and engagement patterns identified",
            "Established feedback loops for gathering and analyzing audience response",
            "Successful experiments with cross-platform content distribution"
          ],
          transitionRequirements: "Before moving to the Torch stage, you must have established consistent audience growth and initial monetization through strategic content creation, with clear data on what unique combinations of elements connect most strongly with your specific audience segment."
        }
      ]
    },
    {
      id: 2,
      title: "THE IDENTITY PHASE",
      color: "#FFDDC5",
      textColor: "#e67e22",
      description: "Distinctive voice and community building",
      stages: [
        {
          id: 2,
          name: "THE VOICE FINDER",
          icon: "TORCH",
          iconColor: "#FFCA28",
          description: "Authentic expression emerging from market response",
          outcomes: [
            "Documented creative framework with consistent style guidelines",
            "Recognizable visual/tonal elements that appear consistently across works",
            "Growing audience that specifically seeks out your unique creative approach",
            "Direct feedback from audience members citing your distinctive elements",
            "Measurable increase in organic sharing and recommendation",
            "Initial brand assets (logo, color palette, typography) defined and implemented",
            "Content that consistently reflects core values or perspective"
          ],
          transitionRequirements: "Before moving to the Beacon stage, your creative work must show consistent distinctive elements that audiences specifically seek out, with evidence that your uniqueness (rather than trend participation) is driving growth."
        },
        {
          id: 3,
          name: "THE CREATOR BRAND",
          icon: "BEACON",
          iconColor: "#FFC107",
          description: "Established identity with growing recognition",
          outcomes: [
            "Comprehensive brand documentation with clear guidelines for all expressions",
            "Cross-platform presence with audience following you between channels",
            "Premium pricing accepted by market (30-100% above category average)",
            "Media recognition through features or mentions in relevant publications",
            "Strategic collaborations based specifically on your brand alignment",
            "Consistent content systems with documented workflows and standards",
            "Multiple revenue streams tied to your creative identity"
          ],
          transitionRequirements: "Before moving to the Campfire stage, you must have established a recognized brand with consistent expression across platforms, demonstrated through premium pricing acceptance, cross-platform following, and multiple revenue streams tied to your creative identity."
        },
        {
          id: 4,
          name: "THE MICRO-COMMUNITY BRAND",
          icon: "CAMPFIRE",
          iconColor: "#FFB300",
          description: "Creative expression fostering community connection",
          outcomes: [
            "Dedicated community spaces with active member-to-member interaction",
            "Documented community language, references, and shared practices",
            "Community-initiated activities occurring without your direct prompting",
            "Measurable word-of-mouth growth through community advocacy",
            "Clear community roles with members taking on specific functions",
            "Regular community events with established traditions or formats",
            "Community feedback systems that inform creative and business decisions"
          ],
          transitionRequirements: "Before moving to the Bonfire stage, your brand must have fostered a self-identifying community with its own culture, demonstrated through active member-to-member interaction, community-specific language, and measurable community-driven growth."
        },
        {
          id: 5,
          name: "THE CREATOR ECONOMY BRAND",
          icon: "BONFIRE",
          iconColor: "#FFA000",
          description: "Scalable ecosystem with multiple contribution pathways",
          outcomes: [
            "Multiple product/content lines generating significant revenue",
            "Formalized team structure with clear roles and responsibilities",
            "Scalable production systems with documented processes and quality controls",
            "Formal contribution pathways for community members with compensation models",
            "Established partnerships with complementary brands or platforms",
            "Comprehensive brand narrative with rich storytelling elements",
            "Diversified revenue model reducing dependency on any single platform"
          ],
          transitionRequirements: "Before moving to the Signal Fire stage, your brand must have evolved into a functioning ecosystem with multiple revenue streams, formalized production systems, and clear pathways for others to contribute to and benefit from the brand's success."
        }
      ]
    },
    {
      id: 3,
      title: "THE EXPANSION PHASE",
      color: "#FFCBA8",
      textColor: "#d35400",
      description: "Universe building and cultural impact",
      stages: [
        {
          id: 6,
          name: "THE IP ENGINE BRAND",
          icon: "SIGNAL FIRE",
          iconColor: "#FF8F00",
          description: "Creative expression as expandable universe",
          outcomes: [
            "Comprehensive world bible with established creative principles",
            "Successful expansion across multiple media formats or product categories",
            "Formal licensing program with clear guidelines and quality standards",
            "Strategic IP protection with appropriate trademarks and copyrights",
            "Brand recognition extending beyond core audience to broader awareness",
            "Official derivative works that maintain consistent quality and vision",
            "Significant revenue from IP licensing or commissioned expansions"
          ],
          transitionRequirements: "Before moving to the Hearth stage, your creative expression must have evolved into a well-defined universe that enables expansion, demonstrated through successful licensing, multi-format expression, and recognition beyond your core audience."
        },
        {
          id: 7,
          name: "THE DECENTRALIZED BRAND",
          icon: "HEARTH",
          iconColor: "#FF6F00",
          description: "Distributed creation with aligned vision",
          outcomes: [
            "Multiple authorized creation centers successfully extending the IP",
            "Governance framework maintaining creative integrity across expansions",
            "Next-generation creative leadership emerging within the ecosystem",
            "Formal systems for canon management and evolution",
            "Cultural impact measured through references in unaffiliated media",
            "International or cross-cultural adaptations maintaining core essence",
            "Community ownership structures with defined stakeholder rights"
          ],
          transitionRequirements: "Before moving to the Constellation stage, your brand must have successfully distributed creative authority while maintaining integrity, demonstrated through multiple creation centers, established governance, and emerging leadership beyond the original creator."
        },
        {
          id: 8,
          name: "THE GLOBAL MEDIA BRAND",
          icon: "CONSTELLATION",
          iconColor: "#E65100",
          description: "Cultural institution with enduring impact",
          outcomes: [
            "Mainstream recognition with broad cultural awareness",
            "Multi-generational appeal with adaptation for different age groups",
            "Educational programs or curricula based on your creative framework",
            "Multiple business entities operating within the creative ecosystem",
            "Measurable influence on broader cultural aesthetics or practices",
            "International presence with cultural adaptation across markets",
            "Institutional frameworks ensuring long-term stewardship of the IP"
          ],
          transitionRequirements: "At the Constellation stage, your creative expression has achieved cultural staying power and broad recognition, demonstrated through mainstream adoption, multi-generational appeal, and systematic global expansion across media formats and markets."
        }
      ]
    }
  ];

  const handlePhaseClick = (phaseId: number|null) => {
    setActivePhase(activePhase() === phaseId ? null : phaseId);
  };

  return (
    <>
      <PageTitle>Traction-Based Outcomes</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>Traction-Based Outcomes</h1>
          <p class={styles.description}>
            The specific measurable outcomes that signal progression through each 
            phase of the Creator Brand Journey. Each stage represents a distinct level of market impact and 
            requires specific outcomes to be achieved before transitioning to the next phase.
          </p>
        </div>

        {/* Journey Timeline */}
        <div class={styles.journeyTimeline}>
          <div class={styles.timelineLine}></div>
          <div class={styles.phaseContainer}>
            <For each={phases}>
              {(phase) => (
                <div 
                  class={`${styles.phaseMarker} ${activePhase() === phase.id ? styles.activePhase : ''}`}
                  onClick={() => handlePhaseClick(phase.id)}
                >
                  <div 
                    class={styles.phaseCircle}
                    style={{ "background-color": phase.color, "color": phase.textColor }}
                  >
                    {phase.id}
                  </div>
                  <div class={styles.phaseLabel}>
                    <div class={styles.phaseNumber} style={{ "color": phase.textColor }}>PHASE {phase.id}</div>
                    <div class={styles.phaseName}>{phase.title}</div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Phase Details */}
        <For each={phases}>
          {(phase) => (
            <Show when={activePhase() === phase.id}>
              <div class={styles.phaseDetails}>
                <div 
                  class={styles.phaseHeader}
                  style={{ "background-color": `${phase.color}33` /* 20% opacity */ }}
                >
                  <h3 class={styles.phaseTitle} style={{ "color": phase.textColor }}>
                    PHASE {phase.id}: {phase.title}
                  </h3>
                  <p class={styles.phaseDescription}>{phase.description}</p>

                  {/* Stages within the Phase - always expanded */}
                  <div class={styles.stagesGrid}>
                    <For each={phase.stages}>
                      {(stage) => (
                        <div class={styles.stageCard}>
                          <div class={styles.stageHeader}>
                            <div 
                              class={styles.stageIcon}
                              style={{ "background-color": stage.iconColor }}
                            >
                              {stage.id}
                            </div>
                            <div class={styles.stageTitle}>
                              <h4 class={styles.stageName}>{stage.name}</h4>
                              <div class={styles.stageIconName}>{stage.icon}</div>
                            </div>
                          </div>
                          <p class={styles.stageDescription}>{stage.description}</p>
                          
                          {/* Always showing stage details */}
                          <div class={styles.stageDetails}>
                            <h5 class={styles.outcomesTitle}>Key Traction Outcomes:</h5>
                            <ul class={styles.outcomesList}>
                              <For each={stage.outcomes}>
                                {(outcome) => (
                                  <li class={styles.outcomeItem}>{outcome}</li>
                                )}
                              </For>
                            </ul>
                            
                            <h5 class={styles.transitionTitle}>Transition Requirements:</h5>
                            <p class={styles.transitionRequirements}>{stage.transitionRequirements}</p>
                          </div>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </Show>
          )}
        </For>

        <Show when={!activePhase()}>
          <div class={styles.noSelectionContainer}>
            <div class={styles.noSelectionIcon}>👆</div>
            <p class={styles.noSelectionText}>Click on any phase above to explore its stages and outcomes</p>
          </div>
        </Show>

        {/* Implementation Framework */}
        <div class={styles.implementationSection}>
          <h2 class={styles.implementationTitle}>Implementation Framework</h2>
          <p class={styles.implementationIntro}>
            To support creators in achieving these traction-based outcomes, each stage requires:
          </p>
          
          <div class={styles.frameworkGrid}>
            <For each={[
              {
                title: "Creative Expression Tools",
                description: "Resources and techniques for developing your distinctive creative voice"
              },
              {
                title: "Audience Development Systems",
                description: "Frameworks for building and nurturing audience relationships"
              },
              {
                title: "Community Architecture",
                description: "Structures for fostering meaningful connections among community members"
              },
              {
                title: "IP Management Framework",
                description: "Systems for developing and protecting intellectual property"
              },
              {
                title: "Business Models",
                description: "Revenue strategies appropriate to each developmental stage"
              }
            ]}>
              {(item) => (
                <div class={styles.frameworkCard}>
                  <h3 class={styles.frameworkItemTitle}>{item.title}</h3>
                  <p class={styles.frameworkItemDescription}>{item.description}</p>
                </div>
              )}
            </For>
          </div>
          
          <p class={styles.frameworkConclusion}>
            This framework integrates the creative, community, and business aspects of brand development with concrete, 
            measurable outcomes, ensuring that progression through stages is based on actual 
            traction rather than subjective assessment.
          </p>
        </div>
      </div>
    </>
  );
};

export default CreatorBrandTractionOutcomes;