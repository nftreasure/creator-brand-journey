import { For, Show } from 'solid-js';
import styles from './creator-brand-development.module.css';
import PageTitle from '../components/page-title';

// Define TypeScript interfaces
interface StageFocus {
  id: number;
  text: string;
}

interface StageIndicator {
  id: number;
  text: string;
}

interface Stage {
  id: number;
  name: string;
  icon: string;
  iconColor: string;
  textColor: string;
  description: string;
  focus: string[];
  indicators: string[];
  development: string;
}

interface Transition {
  name: string;
  description: string;
  questions: string[];
}

interface Phase {
  id: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  stages: Stage[];
  transition?: Transition;
}

const CreatorBrandDevelopment = () => {
  // Phase and stage data
  const phases: Phase[] = [
    {
      id: 1,
      title: "THE SPARK PHASE",
      description: "Category Brands & Exploratory Expression",
      color: "#FFEDD0",
      textColor: "#d35400",
      stages: [
        {
          id: 0,
          name: "The Dabbler",
          icon: "SPARK",
          iconColor: "#FFE082",
          textColor: "#d35400",
          description: "You're exploring different creative approaches, mediums, and styles without commitment to any. You create primarily for personal expression or skill development, borrowing heavily from existing categories and influences.",
          focus: [
            "Exploring different creative approaches, mediums, and styles",
            "Creating primarily for personal expression or skill development",
            "Testing ideas in low-stakes environments",
            "Learning basic skills and techniques in your creative field",
            "Identifying which creative activities naturally energize you"
          ],
          indicators: [
            "You have a growing portfolio of experimental work",
            "You receive occasional positive feedback on specific pieces",
            "You feel drawn to continue creating even without external validation",
            "You notice patterns in what you enjoy creating most",
            "You find yourself regularly consuming content in specific categories"
          ],
          development: "Focus on volume and variety of creation to discover what resonates both with you and with others. Document your process and audience responses to identify patterns."
        },
        {
          id: 1,
          name: "The Trend Chaser",
          icon: "FLAME",
          iconColor: "#FFD54F",
          textColor: "#d35400",
          description: "You're actively studying what resonates in target categories and with audiences. You rapidly iterate based on metrics and audience response, combining trending elements from multiple categories to find patterns in what connects with audiences.",
          focus: [
            "Studying market trends and audience preferences",
            "Combining elements from different categories in novel ways",
            "Analyzing metrics and feedback to refine creative approach",
            "Building initial audience through category relevance",
            "Testing different creative combinations to find traction"
          ],
          indicators: [
            "Specific content themes consistently generate stronger engagement",
            "You've started to achieve some sales or monetization",
            "You maintain a regular creation schedule based on performance",
            "You're actively tracking metrics across different platforms",
            "You can clearly identify which creative approaches perform better"
          ],
          development: "Develop systems for tracking audience response and look for patterns in what consistently resonates. Begin to identify the unique combinations that could form your distinctive creative voice."
        }
      ],
      transition: {
        name: "FROM MARKET RESPONSIVE TO AUTHENTIC EXPRESSION",
        description: "The critical shift from creating what's trending to developing your authentic creative voice that can sustain long-term growth and loyalty.",
        questions: [
          "Have I identified elements that consistently resonate with a specific audience?",
          "Am I starting to feel constrained by creating only what metrics suggest?",
          "Do I have a clear sense of what makes my creative approach different?",
          "Is there a consistent thread emerging in my most successful work?"
        ]
      }
    },
    {
      id: 2,
      title: "THE IDENTITY PHASE",
      description: "Creator Brands Emerge",
      color: "#FFDDC5",
      textColor: "#e67e22",
      stages: [
        {
          id: 2,
          name: "The Voice Finder",
          icon: "TORCH",
          iconColor: "#FFCA28",
          textColor: "#d35400",
          description: "You're shifting from external inspiration to internal creative vision. You're developing recognizable style elements, themes, or creative approach, and beginning to reject trends that don't align with your emerging creative voice.",
          focus: [
            "Defining and refining your distinctive creative voice",
            "Creating more consistent brand elements and style",
            "Developing deeper narratives or themes in your work",
            "Articulating the values that drive your creative expression",
            "Building direct relationships with your most engaged audience"
          ],
          indicators: [
            "Audience members can identify your work without seeing your name",
            "You're attracting followers specifically interested in your unique approach",
            "You feel increasingly confident rejecting trends that don't fit your vision",
            "Your work shows consistent elements across different pieces",
            "You're developing a clearer sense of your creative 'why'"
          ],
          development: "Document your creative foundations, establish basic style guides, and begin articulating what makes your work distinctive. Focus on consistency while allowing your voice to evolve."
        },
        {
          id: 3,
          name: "The Creator Brand",
          icon: "BEACON",
          iconColor: "#FFC107",
          textColor: "#d35400",
          description: "You've established a clear, consistent creative identity that audiences specifically seek out. You've developed visual identity, tone, and thematic elements that signal your brand, and your audience follows you across platforms and projects.",
          focus: [
            "Establishing consistent brand elements across all touchpoints",
            "Building systems for regular content creation and delivery",
            "Expanding your creative work across multiple platforms",
            "Developing deeper relationships with your audience",
            "Creating strategic collaborations that enhance your brand"
          ],
          indicators: [
            "Your audience follows you when you switch platforms",
            "You can command premium prices for your work",
            "Other creators or brands seek collaborations with you",
            "You have established workflows for consistent creation",
            "Your work receives recognition in relevant publications or channels"
          ],
          development: "Create comprehensive documentation of your creative framework, protect core elements through formal IP registration, and develop systems that allow you to maintain quality while scaling output."
        },
        {
          id: 4,
          name: "The Micro-Community Brand",
          icon: "CAMPFIRE",
          iconColor: "#FFB300",
          textColor: "#d35400",
          description: "Your creative work has inspired a community where audience members connect with each other, not just with you. The community has developed shared language, references, and rituals around your creative expression.",
          focus: [
            "Facilitating connections among community members",
            "Developing community-specific language and rituals",
            "Creating spaces dedicated to community interaction",
            "Balancing creative evolution with community expectations",
            "Establishing roles and recognition within the community"
          ],
          indicators: [
            "Fans connect with each other through shared appreciation of your work",
            "Community members use specific terms or references from your work",
            "Fans identify themselves through association with your brand",
            "Community members organize unofficial gatherings or discussions",
            "Your audience defends or advocates for your work to others"
          ],
          development: "Establish community leadership structures, create opportunities for members to meaningfully contribute, and develop shared experiences that strengthen community bonds while maintaining your creative vision."
        },
        {
          id: 5,
          name: "The Creator Economy Brand",
          icon: "BONFIRE",
          iconColor: "#FFA000",
          textColor: "#d35400",
          description: "You've built systems for consistent production, quality control, and delivery. Your brand supports multiple product/content lines and revenue streams, and you've created clear pathways for community members to contribute and be rewarded.",
          focus: [
            "Developing multiple product lines or content formats",
            "Creating systems that enable consistent scaling",
            "Establishing multiple revenue streams",
            "Building team structures and delegating responsibilities",
            "Creating value exchange systems within your community"
          ],
          indicators: [
            "Community members take on specific roles within your ecosystem",
            "You have multiple established revenue streams",
            "You operate with formalized systems and team support",
            "Your brand has a rich mythology or narrative framework",
            "You're successfully managing multiple product lines"
          ],
          development: "Develop sophisticated IP management systems, create differentiated tiers of creative output, and build legal and operational frameworks for strategic expansion through partnerships and licensing."
        }
      ],
      transition: {
        name: "FROM BRAND TO UNIVERSE",
        description: "Evolving from a personal creative brand to an expansive creative universe that enables broader participation while maintaining your core vision.",
        questions: [
          "Have I developed systems that allow my creative work to scale beyond my personal capacity?",
          "Is there demand for others to create within the framework I've established?",
          "Do I have clear documentation of my creative world and its principles?",
          "Am I ready to transition from primary creator to vision-keeper?"
        ]
      }
    },
    {
      id: 3,
      title: "THE EXPANSION PHASE",
      description: "Community-Owned IP & Global Reach",
      color: "#FFCBA8",
      textColor: "#d35400",
      stages: [
        {
          id: 6,
          name: "The IP Engine Brand",
          icon: "SIGNAL FIRE",
          iconColor: "#FF8F00",
          textColor: "#d35400",
          description: "Your creative work has evolved into a comprehensive world with established rules, aesthetics, and narrative elements. You've developed licensing frameworks that allow others to create within your established universe while maintaining its integrity.",
          focus: [
            "Establishing formal licensing programs",
            "Developing comprehensive world-building documentation",
            "Creating guidelines for different expression formats",
            "Building strategic partnerships for major expansions",
            "Maintaining quality control across all extensions"
          ],
          indicators: [
            "Your IP has expanded into multiple media formats",
            "Others are officially creating within your established framework",
            "Your creative world has detailed, documented principles",
            "Your brand is recognized beyond your immediate audience",
            "You've established legal protection for key IP elements"
          ],
          development: "Establish sophisticated licensing frameworks, develop comprehensive guidelines for different expression formats, and build strategic partnerships that expand your creative universe while maintaining its core integrity."
        },
        {
          id: 7,
          name: "The Decentralized Brand",
          icon: "HEARTH",
          iconColor: "#FF6F00",
          textColor: "#d35400",
          description: "Multiple creators are actively building within your established creative framework. You've transitioned from primary producer to vision-keeper and curator, with governance structures that maintain creative integrity across diverse initiatives.",
          focus: [
            "Developing governance for distributed creation",
            "Transitioning from creator to vision-keeper",
            "Nurturing next-generation creative leadership",
            "Maintaining core values across diverse expressions",
            "Building frameworks for cultural adaptation"
          ],
          indicators: [
            "Multiple official creators extend your creative universe",
            "Formal systems exist for maintaining creative integrity",
            "Your role has evolved from production to stewardship",
            "New leaders are emerging within the creative ecosystem",
            "Your IP has established cultural significance"
          ],
          development: "Develop governance structures for distributed IP management, create systems for canon evolution while maintaining core values, and establish pathways for new creative leadership that can carry your vision forward."
        },
        {
          id: 8,
          name: "The Global Media Brand",
          icon: "CONSTELLATION",
          iconColor: "#E65100",
          textColor: "#fff",
          description: "Your creative expression has mainstream recognition and cross-generational appeal. It exists across multiple media formats, markets, and cultural contexts, and has become an influential cultural framework with independent momentum.",
          focus: [
            "Establishing institutions for long-term stewardship",
            "Creating frameworks for cross-cultural adaptation",
            "Building systems for generational relevance",
            "Developing educational programs around your IP",
            "Maintaining cultural influence across contexts"
          ],
          indicators: [
            "Your IP has mainstream cultural recognition",
            "Multiple business entities operate within your creative ecosystem",
            "Your work influences broader cultural conversations",
            "Your IP appeals across different generations",
            "Your creative framework is studied academically"
          ],
          development: "Establish institutional frameworks for long-term IP stewardship, develop educational programs and archives, and build structures for maintaining relevance while honoring the legacy of your creative expression."
        }
      ]
    }
  ];

  return (
    <>
      <PageTitle>Creator Brand Journey</PageTitle>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1 class={styles.title}>The Creator Brand Developmental Journey</h1>
          <p class={styles.subtitle}>From Dabbler to Global Media Brand: The Complete Evolution of Creative Expression</p>
        </div>

        <div class={styles.introduction}>
          <p>This framework maps the complete evolution of creative expression from initial experimentation to enduring cultural impact across three major phases and nine distinct stages. Each stage represents a qualitative transformation in how creative work manifests, connects with audiences, and influences culture. Understanding your current position provides clarity on both your achievements and your next horizon of growth.</p>
          
          <div class={styles.coreThread}>
            <h2 class={styles.coreThreadTitle}>Core Thread: The Evolution of Creative Expression</h2>
            <p>The fundamental journey from experimental category-mixing to distinctive voice to cultural movement, establishing the natural progression that artistic creators follow as they build global brands.</p>
            
            <div class={styles.threadSteps}>
              <div class={styles.threadStep}>
                <div class={styles.threadStepIcon} style={{ "background-color": "#FFD54F" }}>1</div>
                <div class={styles.threadStepContent}>
                  <h3 class={styles.threadStepTitle}>Experimental Mixing</h3>
                  <p>Testing combinations of existing categories and trends to find a unique mix that resonates</p>
                </div>
              </div>
              <div class={styles.threadStep}>
                <div class={styles.threadStepIcon} style={{ "background-color": "#FFC107" }}>2</div>
                <div class={styles.threadStepContent}>
                  <h3 class={styles.threadStepTitle}>Distinctive Voice</h3>
                  <p>Developing a consistent and authentic creative expression that attracts a dedicated following</p>
                </div>
              </div>
              <div class={styles.threadStep}>
                <div class={styles.threadStepIcon} style={{ "background-color": "#FF8F00" }}>3</div>
                <div class={styles.threadStepContent}>
                  <h3 class={styles.threadStepTitle}>Cultural Movement</h3>
                  <p>Transforming the established creative expression into a widely recognized cultural force</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <For each={phases}>
          {(phase) => (
            <div class={styles.phaseContainer}>
              <div class={styles.phaseHeader} style={{ "background-color": phase.color }}>
                <h2 class={styles.phaseTitle} style={{ "color": phase.textColor }}>PHASE {phase.id}: {phase.title}</h2>
                <p class={styles.phaseDescription} style={{ "color": phase.textColor }}>{phase.description}</p>
              </div>

              <div class={styles.stagesContainer}>
                <For each={phase.stages}>
                  {(stage) => (
                    <div class={styles.stageRow}>
                      <div class={styles.stageIconContainer}>
                        <div class={styles.stageIcon} style={{ "background-color": stage.iconColor }}>
                          <span class={styles.stageIconText} style={{ "color": stage.textColor }}>{stage.icon}</span>
                        </div>
                        <span style={{ "font-size": "12px", "text-align": "center" }}>Stage {stage.id}</span>
                      </div>
                      
                      <div class={styles.stageContent}>
                        <h3 class={styles.stageName}>{stage.name}</h3>
                        <p class={styles.stageDescription}>{stage.description}</p>
                        
                        <div class={styles.stageFocus}>
                          <p class={styles.focusTitle}>Primary Focus:</p>
                          <ul class={styles.focusList}>
                            <For each={stage.focus}>
                              {(item) => <li>{item}</li>}
                            </For>
                          </ul>
                          
                          <p class={styles.focusTitle}>Key Indicators:</p>
                          <ul class={styles.focusList}>
                            <For each={stage.indicators}>
                              {(item) => <li>{item}</li>}
                            </For>
                          </ul>
                          
                          <p class={styles.focusTitle}>Essential Development:</p>
                          <p>{stage.development}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </For>
              </div>

              <Show when={phase.transition}>
                <div 
                  class={styles.transitionContainer} 
                  style={{ 
                    "margin-bottom": "0", 
                    "border-bottom-left-radius": "0", 
                    "border-bottom-right-radius": "0" 
                  }}
                >
                  <h3 class={styles.transitionTitle}>PHASE TRANSITION: {phase.transition?.name}</h3>
                  <p class={styles.transitionDescription}>{phase.transition?.description}</p>
                  
                  <p class={styles.questionsTitle}>Critical Questions:</p>
                  <ul class={styles.questionsList}>
                    <For each={phase.transition?.questions}>
                      {(question) => <li>{question}</li>}
                    </For>
                  </ul>
                </div>
              </Show>
            </div>
          )}
        </For>

        <div class={styles.footnote}>
          <p>Note: This developmental framework represents the evolution of creative expression, from experimental mixing to distinctive voice to cultural movement. The journey isn't necessarily linear—creators may choose to focus at specific stages where they find fulfillment and impact, rather than progressing through all phases.</p>
          <p>Each stage builds upon the previous one, requiring mastery of earlier capabilities before advancing. The transitions between phases represent significant shifts in how creators approach their work and interact with their audience. Success at each stage requires different skills, mindsets, and organizational structures.</p>
        </div>
      </div>
    </>
  );
};

export default CreatorBrandDevelopment;