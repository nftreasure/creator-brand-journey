import { createSignal, For, Show } from 'solid-js';
import styles from './creator-brand-embodied.module.css';
import PageTitle from '../components/page-title';

const CreatorBrandEmbodiedInfluence = () => {
  const [selectedPhase, setSelectedPhase] = createSignal<number | null>(null);
  const [showPersona, setShowPersona] = createSignal<boolean>(false);

  // Define the phases with their data
  const phases = [
    {
      id: 1,
      name: "CREATIVE EXPLORATION",
      subtitle: "The experiential process of discovering your authentic creative voice",
      color: "#FFF2CC",
      darkColor: "#F1C232",
      textColor: "#5B4421",
      iconName: "✨",
      persona: "Maya the Creative Explorer",
      livedExperience: [
        "Excitement when experimenting with different creative approaches",
        "Moments of flow when engaged in certain types of creation",
        "Uncertainty about creative direction and focus",
        "Joy in mastering new techniques and skills",
        "Tension between following trends and personal interests"
      ],
      valueExpression: [
        "Curiosity and openness to different creative possibilities",
        "Playfulness in approaching creative work without judgment",
        "Perseverance through the early stages of skill development",
        "Authenticity in identifying what genuinely resonates"
      ],
      communityExperience: [
        "Early supporters providing encouragement and feedback",
        "Finding like-minded creators at similar stages",
        "Learning from mentors and more established creators",
        "Beginning to recognize patterns in audience response"
      ],
      threshold: "From exploration to intentional creation",
      personaStory: "Maya spent years consuming creative content across various platforms, occasionally sharing her own experiments without any strategic direction. While she dabbled in different styles and mediums, she found herself consistently drawn to creating stylized character illustrations with quirky personalities.\n\nCurrently, Maya posts her illustrations sporadically on Instagram and TikTok, noticing that certain character types consistently generate stronger engagement. She experiences moments of creative flow when developing character backstories and personalities, but hesitates to fully commit to this direction, wondering if she should focus on more trending content instead.\n\nMaya embodies curiosity by experimenting with different artistic styles and techniques, saving inspiration from diverse sources. Her playfulness shows in how she approaches creation without rigid expectations, allowing her characters to evolve organically rather than forcing specific outcomes.\n\nHer community is still nascent—a small group of friends who comment supportively on her work, a few online acquaintances who create similar content, and a slowly growing follower base who respond most enthusiastically to her most distinctive character designs.\n\nMaya struggles with imposter syndrome, questioning whether her work is good enough to share, and feels pulled between creating what personally excites her versus what might gain more immediate traction. Yet she finds herself continually returning to character creation even when trying other approaches.\n\nShe's beginning to notice patterns in which specific elements of her work generate the strongest response, and is considering developing a more consistent posting schedule focused on her character illustrations—the first steps toward crossing the threshold to Distinctive Articulation."
    },
    {
      id: 2,
      name: "DISTINCTIVE ARTICULATION",
      subtitle: "The experiential process of refining and expressing your creative voice",
      color: "#D9EAD3",
      darkColor: "#6AA84F",
      textColor: "#274E13",
      iconName: "🔍",
      persona: "Eliot the Voice Developer",
      livedExperience: [
        "Growing confidence in your distinctive creative approach",
        "Satisfaction when rejecting trends that don't align with your voice",
        "Tension between audience expectations and creative evolution",
        "Recognition of your work's emotional impact on others",
        "Moments of clarity about your creative direction and purpose"
      ],
      valueExpression: [
        "Integrity in staying true to your creative vision",
        "Courage in presenting distinctive work despite market pressure",
        "Consistency in developing recognizable creative elements",
        "Authenticity in ensuring work aligns with personal values"
      ],
      communityExperience: [
        "Direct feedback on your distinctive creative elements",
        "Growing recognition from audience members who value your unique approach",
        "Deeper conversations about the meaning behind your work",
        "Early signs of audience identification with your creative vision"
      ],
      threshold: "From personal voice to brand identity",
      personaStory: "After years of experimenting with different animation styles and content themes, Eliot recognized that his character-driven stop-motion shorts consistently generated the strongest response, particularly those featuring handcrafted miniature woodland creatures navigating human-like emotional challenges.\n\nCurrently, Eliot has committed to a bi-weekly release schedule of short animations in his distinctive style. He's developed a recognizable visual language with consistent color palettes, texturing techniques, and storytelling themes exploring belonging and emotional growth. Though his following is modest, he receives messages from viewers who share personal stories about how his work resonates with their own experiences.\n\nEliot embodies integrity by turning down trending challenges that don't align with his creative vision, even when they might generate quick growth. His courage shows in his willingness to tackle emotional themes that differentiate his work from more conventional animation content, and his consistency appears in the recognizable visual and thematic elements that tie his work together.\n\nHis community is evolving from casual viewers to dedicated fans who discuss the deeper meanings in his animations and sometimes create fan art based on his characters. He's beginning to receive messages from people describing how they recognized his work instantly when scrolling through their feeds.\n\nEliot struggles with balancing creative evolution against the elements his audience has come to expect, sometimes feeling constrained by the style he's developed. He also faces challenges in scaling his labor-intensive creation process while maintaining quality.\n\nHe's beginning to develop more formalized brand elements, including a logo, consistent title cards, and a dedicated website to showcase his growing body of work—essential steps toward crossing the threshold to Brand Embodiment."
    },
    {
      id: 3,
      name: "BRAND EMBODIMENT",
      subtitle: "The experiential process of building systems around your creative identity",
      color: "#D0E0E3",
      darkColor: "#45818E",
      textColor: "#0C343D",
      iconName: "🧪",
      persona: "Nadia the Brand Architect",
      livedExperience: [
        "Satisfaction in seeing your creative vision consistently expressed",
        "Tension between creative work and business development",
        "Pride when others recognize your brand without explanation",
        "Overwhelm from managing growing audience expectations",
        "Excitement when strategic decisions drive meaningful growth"
      ],
      valueExpression: [
        "Professionalism in creating reliable systems and standards",
        "Intentionality in strategic brand development decisions",
        "Adaptability in evolving your creative approach while maintaining core identity",
        "Generosity in creating value beyond immediate transactions"
      ],
      communityExperience: [
        "Growing audience identification with your brand values",
        "More personal investment from dedicated followers",
        "Increasing direct communication and feedback",
        "Early signs of community formation among followers"
      ],
      threshold: "From personal brand to community catalyst",
      personaStory: "Nadia's distinctive approach to sustainable fashion design—merging traditional textile techniques with modern, modular garment systems—gradually evolved from a personal creative exploration to a recognized brand aesthetic. What began as experimental Instagram posts became a consistent creative vision with clear visual, material, and philosophical principles.\n\nCurrently, Nadia runs a small but growing sustainable fashion brand. She's developed comprehensive brand guidelines that inform everything from product design to social media aesthetics. Her creative process has been systematized through seasonal collection frameworks, material sourcing standards, and production workflows that maintain quality while enabling growth. She's established premium pricing based on her brand's recognized distinctiveness and values-alignment.\n\nNadia embodies professionalism through her consistent delivery of high-quality products and content that meet brand standards. Her intentionality shows in strategic decisions about collection themes, collaboration opportunities, and platform focus that align with long-term brand development rather than short-term trends.\n\nHer audience has evolved beyond casual followers to dedicated supporters who specifically seek out her brand for its unique characteristics. Customers frequently message about how they're recognized and asked about her distinctive designs, and some have traveled significant distances to attend pop-up events or studio visits.\n\nNadia struggles with balancing creative evolution against brand consistency, sometimes feeling constrained by the design language she's established. She also faces challenges in delegation, finding it difficult to trust others with executing her vision as the brand grows beyond her personal capacity.\n\nShe's beginning to notice followers connecting with each other at events and in comments, discussing not just her products but the values and lifestyle her brand represents—early signs of community formation that indicate she's approaching the threshold to Community Cultivation."
    },
    {
      id: 4,
      name: "COMMUNITY CULTIVATION",
      subtitle: "The experiential process of fostering connection around your creative brand",
      color: "#CFE2F3",
      darkColor: "#3D85C6",
      textColor: "#0B5394",
      iconName: "🧭",
      persona: "Marcus the Community Builder",
      livedExperience: [
        "Joy in witnessing connections forming among community members",
        "Responsibility for maintaining the community's health and alignment",
        "Tension between creative evolution and community expectations",
        "Excitement when community members contribute meaningfully",
        "Overwhelm from navigating complex interpersonal dynamics"
      ],
      valueExpression: [
        "Empathy in understanding diverse community perspectives",
        "Inclusivity in creating accessible participation pathways",
        "Boundaries in maintaining creative integrity amid community input",
        "Facilitation in enabling meaningful connections without controlling them"
      ],
      communityExperience: [
        "Regular interaction between community members",
        "Development of community-specific language and references",
        "Creation of community rituals and shared experiences",
        "Growing sense of collective identity around the brand"
      ],
      threshold: "From community to creative ecosystem",
      personaStory: "Marcus developed a unique approach to music production that fused electronic elements with traditional instruments from his cultural heritage. What began as personal experimentation evolved into a distinctive sound that attracted a dedicated following. As his audience grew, he noticed listeners connecting over their shared appreciation for his unique musical perspective.\n\nCurrently, Marcus nurtures a thriving community around his music and creative philosophy. He's created dedicated spaces for fans to connect—including an active Discord server, regular livestreams, and in-person listening events—where community members have developed their own language, inside jokes, and rituals. His community management approach balances clear values and guidelines with space for organic interaction and contribution.\n\nMarcus embodies empathy by actively listening to diverse community perspectives and adapting his approach to accommodate different engagement preferences. His inclusive approach creates multiple entry points for participation, from casual listeners to dedicated contributors who help moderate spaces or organize events.\n\nHis community has evolved from isolated fans to interconnected members who maintain relationships independent of his direct involvement. Community-initiated projects have emerged, including fan art collections, collaborative playlists, and even small regional meetups organized without his direct coordination.\n\nMarcus struggles with balancing community expectations against his creative evolution, sometimes feeling pressure to maintain certain elements of his sound that the community particularly values. He also faces challenges in managing conflicts that occasionally arise between community members or sub-groups with different priorities.\n\nHe's beginning to develop more formalized contribution pathways, including a sample pack series featuring community-submitted sounds, a remix initiative that highlights emerging producers from within the community, and a membership program that creates sustainable support—steps toward crossing the threshold to Ecosystem Architecture."
    },
    {
      id: 5,
      name: "ECOSYSTEM ARCHITECTURE",
      subtitle: "The experiential creation of systems for distributed contribution and value",
      color: "#D9D2E9",
      darkColor: "#8E7CC3",
      textColor: "#351C75",
      iconName: "🌐",
      persona: "Amara the System Designer",
      livedExperience: [
        "Satisfaction in seeing others succeed within your creative framework",
        "Letting go of direct control while maintaining vision integrity",
        "Strategic thinking about sustainable value creation and distribution",
        "Balancing structure and flexibility within system design",
        "Pride in creating opportunities for others' creative expression"
      ],
      valueExpression: [
        "Stewardship of the creative vision beyond personal benefit",
        "Generosity in creating value-sharing mechanisms",
        "Transparency in system design and governance",
        "Empowerment in enabling others' creative and economic agency"
      ],
      communityExperience: [
        "Multiple contribution and participation pathways",
        "Clear value exchange systems for different stakeholders",
        "Community members taking on leadership and specialized roles",
        "Tiered engagement opportunities based on interests and skills"
      ],
      threshold: "From ecosystem to movement",
      personaStory: "Amara's distinctive approach to interactive storytelling—combining narrative design, community participation, and emerging technology—evolved from experimental projects to a recognized creative methodology. As her audience grew into an active community, she recognized the need for systems that could enable broader participation while maintaining the integrity of her creative vision.\n\nCurrently, Amara oversees a creative ecosystem with multiple participation pathways. She's developed comprehensive frameworks that enable others to contribute to and benefit from the creative universe she initiated. These include a creator certification program, a marketplace for community-created extensions, and a tiered membership system that powers sustainable funding. Clear contribution guidelines ensure quality and alignment while enabling diverse expression within the established framework.\n\nAmara embodies stewardship by prioritizing the long-term health of the creative ecosystem over short-term personal gain. Her generosity shows in revenue-sharing models that ensure contributors receive fair compensation for their work, and her commitment to transparency appears in open documentation of system mechanics and decision-making processes.\n\nHer ecosystem has evolved to include specialized roles—narrative designers, world-builders, community moderators, technical contributors—each with clear value exchange systems. Regular contributor showcases, development grants, and mentorship programs create pathways for growth and recognition within the ecosystem.\n\nAmara struggles with balancing necessary governance against the risk of over-control, sometimes finding it challenging to determine when to establish new standards versus allowing organic evolution. She also faces the complexity of managing multiple stakeholder groups with occasionally divergent interests and priorities.\n\nShe's beginning to recognize her creative approach spreading beyond her direct ecosystem, with educational institutions teaching her methodology, adjacent creative fields adopting elements of her framework, and broader cultural conversations referencing her approach—signs that she's approaching the threshold to Movement Facilitation."
    },
    {
      id: 6,
      name: "MOVEMENT FACILITATION",
      subtitle: "The experiential guidance of cultural impact beyond direct control",
      color: "#F4CCCC",
      darkColor: "#E06666",
      textColor: "#990000",
      iconName: "🔄",
      persona: "Raymond the Cultural Architect",
      livedExperience: [
        "Pride in seeing your creative vision influence broader culture",
        "Balancing original principles with necessary evolution",
        "Letting go of direct implementation while maintaining philosophical integrity",
        "Strategic thinking about long-term cultural impact",
        "Finding new roles as your creation outgrows your direct control"
      ],
      valueExpression: [
        "Wisdom in distinguishing essential principles from specific expressions",
        "Humility in recognizing the contributions of many to the movement's success",
        "Vision in seeing long-term cultural possibilities",
        "Generativity in nurturing next-generation leadership"
      ],
      communityExperience: [
        "Diverse expressions of core principles across contexts",
        "Multiple leadership centers with aligned vision",
        "Educational systems transmitting core knowledge",
        "Movement identity transcending original creator or brand"
      ],
      threshold: "From movement to institution",
      personaStory: "Raymond's distinctive approach to collaborative game design began as personal experimentation before evolving into a recognized methodology with dedicated community and structured ecosystem. As his framework gained influence beyond direct stakeholders, he recognized it was becoming a movement with broader cultural impact that required different facilitation approaches.\n\nCurrently, Raymond focuses on guiding the philosophical foundation of the movement while empowering others to lead implementation across diverse contexts. He's developed core principle documentation, governance frameworks for distributed leadership, and educational resources that enable others to authentically apply the methodology. Multiple organizations, educational institutions, and creative communities now implement his approach with his guidance but not his direct control.\n\nRaymond embodies wisdom in how he distinguishes between the essential principles that define the movement and the specific implementations that can vary by context. His humility shows in his consistent recognition of how the movement has been shaped by many contributors beyond himself, and his vision appears in strategic decisions that prioritize long-term cultural impact over immediate growth.\n\nThe movement now includes multiple centers of expertise and leadership, with regional chapters, specialized applications in different domains, and next-generation leaders who have developed their own extensions of the core principles. Educational programs, certification systems, and knowledge repositories ensure consistent understanding while enabling contextual adaptation.\n\nRaymond struggles with balancing necessary evolution against dilution of core principles, finding it challenging to determine when adaptations strengthen versus weaken the movement's integrity. He also navigates the complexity of maintaining cultural relevance across different generations, contexts, and applications.\n\nHe's beginning to develop institutional structures that can outlast his personal involvement—including a foundation to steward the core principles, formal succession planning for key leadership roles, and historical documentation of the movement's evolution—essential steps toward crossing the threshold to Legacy Stewardship."
    },
    {
      id: 7,
      name: "LEGACY STEWARDSHIP",
      subtitle: "The experiential creation of enduring cultural impact",
      color: "#EAD1DC",
      darkColor: "#C27BA0",
      textColor: "#85200C",
      iconName: "🌍",
      persona: "Elena the Legacy Builder",
      livedExperience: [
        "Profound satisfaction in creating enduring cultural contribution",
        "Strategic thinking about multi-generational impact",
        "Balancing preservation of core principles with ongoing evolution",
        "Finding meaning in releasing direct control while ensuring lasting influence",
        "Navigating the transition from visible leadership to behind-the-scenes guidance"
      ],
      valueExpression: [
        "Foresight in creating structures for long-term sustainability",
        "Generosity in creating value that extends beyond personal recognition",
        "Wisdom in distilling essential principles for future application",
        "Humility in recognizing your role within larger historical context"
      ],
      communityExperience: [
        "Institutional structures preserving and extending the vision",
        "Educational systems transmitting core knowledge across generations",
        "Diverse expressions and applications across cultural contexts",
        "Continued evolution while maintaining philosophical integrity"
      ],
      threshold: "",
      personaStory: "Elena's distinctive approach to community-centered architecture began as innovative projects before evolving into a recognized methodology, thriving ecosystem, and influential movement. As her framework achieved broad cultural impact, she recognized the need to create institutional structures that would ensure its enduring influence beyond her lifetime.\n\nNow in her later career, Elena focuses on legacy building rather than direct implementation. She established a foundation to steward the core principles, developed comprehensive educational programs to train future practitioners, created extensive documentation of methodological evolution, and implemented governance structures for maintaining integrity across diverse applications. Her approach has become part of architectural curricula, influences policy discussions, and continues evolving through the contributions of multiple generations of practitioners.\n\nElena embodies foresight in how she's created succession planning for key leadership roles, endowment funding for core operations, and adaptable governance that can respond to changing contexts while maintaining essential principles. Her generosity shows in her focus on creating lasting value rather than personal recognition, often deliberately stepping back to highlight the contributions of newer leaders.\n\nWhat began as her personal creative vision now exists as a cultural institution with independent momentum. New generations discover and implement the approach without necessarily knowing its origins, architectural schools teach the principles as fundamental methodology, and diverse applications continue emerging across cultural and geographic contexts.\n\nElena sometimes struggles with the evolution of her methodology in directions she hadn't anticipated, finding it challenging to distinguish between beneficial innovation and concerning dilution. She also navigates the delicate balance between providing wisdom from experience and allowing new leaders the freedom to guide the institution's future.\n\nIn Elena, we see the culmination of the embodied influence journey—where personal creative expression has undergone the complete evolution to become cultural infrastructure with lasting impact. Her experience illustrates how true creative influence ultimately transcends the creator to become part of our collective inheritance, continuing to evolve long after its originator has stepped back from active direction."
    }
  ];

  const Section = (props: any) => (
    <div class={styles.section}>
      <h3 class={styles.sectionTitle}>{props.title}</h3>
      <ul class={styles.sectionList}>
        <For each={props.items}>
          {(item) => (
            <li class={styles.sectionItem}>{item}</li>
          )}
        </For>
      </ul>
    </div>
  );

  const PersonaSection = (props: any) => {
    return (
      <div class={styles.personaContainer}>
        <div class={styles.personaHeader}>
          <div 
            class={styles.personaIcon}
            style={{ "background-color": props.phase.darkColor, "color": 'white' }}
          >
            {props.phase.iconName}
          </div>
          <h3 class={styles.personaTitle}>{props.phase.persona}</h3>
        </div>
        <div class={styles.personaContent}>
          <For each={props.phase.personaStory.split('\n\n')}>
            {(paragraph) => (
              <p class={styles.personaParagraph}>{paragraph}</p>
            )}
          </For>
        </div>
      </div>
    );
  };

  const PhaseDetail = (props: any) => {
    if (!props.phase) return null;
    
    return (
      <div class={styles.phaseDetailContainer}>
        <div class={styles.phaseCard} style={{ "background-color": props.phase.color }}>
          <div class={styles.phaseCardHeader}>
            <div class={styles.phaseCardContent}>
              <h2 class={styles.phaseTitle} style={{ "color": props.phase.textColor }}>
                {props.phase.id}. {props.phase.name}
              </h2>
              <p class={styles.phaseSubtitle} style={{ "color": props.phase.textColor }}>
                {props.phase.subtitle}
              </p>
              
              <Section title="Lived Experience" items={props.phase.livedExperience} />
              <Section title="Value Expression" items={props.phase.valueExpression} />
              <Section title="Community Experience" items={props.phase.communityExperience} />
              
              <Show when={props.phase.threshold}>
                <div class={styles.thresholdContainer}>
                  <h3 class={styles.thresholdTitle}>Transformation Threshold:</h3>
                  <p class={styles.thresholdText}>{props.phase.threshold}</p>
                </div>
              </Show>
            </div>
            <div class={styles.phaseIcon}>{props.phase.iconName}</div>
          </div>
        </div>
        
        <div class={styles.personaButtonContainer}>
          <button
            onClick={() => setShowPersona(!showPersona())}
            class={styles.personaButton}
          >
            {showPersona() ? "Hide Creator Story" : "Show Creator Story"}
          </button>
        </div>
        
        <Show when={showPersona()}>
          <PersonaSection phase={props.phase} />
        </Show>
      </div>
    );
  };

  return (
    <>
      <PageTitle>Embodied Influence Meta-Lifecycle</PageTitle>
      <div class={styles.container}>
        <header class={styles.header}>
          <h1 class={styles.title}>The Creator Brand Embodied Journey</h1>
          <p class={styles.subtitle}>
            An experiential framework mapping the lived experience of creative evolution from
            initial exploration to lasting cultural impact.
          </p>
        </header>

        {/* Horizontal Journey Map */}
        <div class={styles.journeyMapContainer}>
          <div class={styles.journeyLine}></div>
          
          <div class={styles.phasesContainer}>
            <For each={phases}>
              {(phase) => (
                <div 
                  class={`${styles.phaseCircleContainer} ${selectedPhase() === phase.id ? styles.selectedPhase : ''}`}
                  onClick={() => setSelectedPhase(selectedPhase() === phase.id ? null : phase.id)}
                >
                  <div 
                    class={styles.phaseCircle}
                    style={{ "background-color": phase.color }}
                  >
                    {phase.iconName}
                  </div>
                  <div class={styles.phaseNumber} style={{ "color": phase.darkColor }}>{phase.id}</div>
                  <div class={styles.phaseName}>{phase.name}</div>
                </div>
              )}
            </For>
          </div>

          {/* Threshold labels */}
          <div class={styles.thresholdsContainer}>
            <For each={phases}>
              {(phase) => (
                <Show when={phase.id < 7}>
                  <div class={styles.thresholdLabel}>
                    {phase.threshold}
                  </div>
                </Show>
              )}
            </For>
          </div>
        </div>

        {/* Selected Phase Detail */}
        <Show when={selectedPhase()}>
          <PhaseDetail phase={phases.find(p => p.id === selectedPhase())} />
        </Show>

        <Show when={!selectedPhase()}>
          <div class={styles.noSelectionContainer}>
            <div class={styles.noSelectionIcon}>👆</div>
            <p class={styles.noSelectionText}>Click on any phase above to explore its details and creator story</p>
          </div>
        </Show>
        
        <div class={styles.implementationContainer}>
          <h2 class={styles.implementationTitle}>Core Transformations in the Creator Journey</h2>
          <p class={styles.implementationDesc}>Throughout the Creator Brand Embodied Journey, five fundamental transformations occur:</p>
          <div class={styles.implementationGrid}>
            <For each={[
              { 
                title: "From Creation to System", 
                desc: "Evolution from making individual pieces to designing frameworks that enable consistent creation" 
              },
              { 
                title: "From Personal to Collective", 
                desc: "Shift from individual creative expression to facilitating community contribution and co-creation" 
              },
              { 
                title: "From Control to Stewardship", 
                desc: "Transition from direct control to philosophical guidance of distributed creation" 
              },
              { 
                title: "From Content to Culture", 
                desc: "Transformation from producing content to shaping cultural narratives and practices" 
              },
              { 
                title: "From Present to Legacy", 
                desc: "Evolution from immediate impact to designing for multi-generational influence" 
              }
            ]}>
              {(item) => (
                <div class={styles.implementationCard}>
                  <h3 class={styles.implementationCardTitle}>{item.title}</h3>
                  <p class={styles.implementationCardDesc}>{item.desc}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorBrandEmbodiedInfluence;