import { createSignal } from 'solid-js';
import styles from './creative-phases.module.css';
import PageTitle from '../components/page-title';

const CreativePhases = () => {
  return (
    <>
      <PageTitle>Three Phases of Creative Evolution</PageTitle>
      <div class={styles.container}>
        <header class={styles.header}>
          <h1 class={styles.title}>The Three Phases of Creative Evolution</h1>
          <p class={styles.subtitle}>
            A comprehensive framework mapping the natural progression of creative expression
          </p>
        </header>

        <div class={styles.phasesContainer}>
          <div class={styles.phaseCard} style={{"background-color": "#FFEDD0"}}>
            <h3 class={styles.phaseTitle} style={{"color": "#d35400"}}>The Spark Phase</h3>
            <p class={styles.phaseDescription}>
              Category Brands & Exploratory Expression. The initial journey from experimentation 
              to finding resonance through category-mixing and market testing.
            </p>
            <div class={styles.stageList}>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FFE082"}}>0</span>
                <span class={styles.stageName}>Dabbler (Spark)</span>
              </div>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FFD54F"}}>1</span>
                <span class={styles.stageName}>Trend Chaser (Flame)</span>
              </div>
            </div>
          </div>
          
          <div class={styles.phaseCard} style={{"background-color": "#FFDDC5"}}>
            <h3 class={styles.phaseTitle} style={{"color": "#e67e22"}}>The Identity Phase</h3>
            <p class={styles.phaseDescription}>
              Creator Brands Emerge. The evolution from responsive creation to 
              developing a distinctive voice that attracts a dedicated community.
            </p>
            <div class={styles.stageList}>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FFCA28"}}>2</span>
                <span class={styles.stageName}>Voice Finder (Torch)</span>
              </div>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FFC107"}}>3</span>
                <span class={styles.stageName}>Creator Brand (Beacon)</span>
              </div>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FFB300"}}>4</span>
                <span class={styles.stageName}>Micro-Community Brand (Campfire)</span>
              </div>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FFA000"}}>5</span>
                <span class={styles.stageName}>Creator Economy Brand (Bonfire)</span>
              </div>
            </div>
          </div>
          
          <div class={styles.phaseCard} style={{"background-color": "#FFCBA8"}}>
            <h3 class={styles.phaseTitle} style={{"color": "#d35400"}}>The Expansion Phase</h3>
            <p class={styles.phaseDescription}>
              Community-Owned IP & Global Reach. The transformation from creator brand 
              to cultural movement with distributed creation and institutional impact.
            </p>
            <div class={styles.stageList}>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FF8F00"}}>6</span>
                <span class={styles.stageName}>IP Engine Brand (Signal Fire)</span>
              </div>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#FF6F00"}}>7</span>
                <span class={styles.stageName}>Decentralized Brand (Hearth)</span>
              </div>
              <div class={styles.stageItem}>
                <span class={styles.stageIcon} style={{"background-color": "#E65100"}}>8</span>
                <span class={styles.stageName}>Global Media Brand (Constellation)</span>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.coreThread}>
          <h2 class={styles.coreThreadTitle}>Core Thread: The Evolution of Creative Expression</h2>
          <p class={styles.coreThreadDescription}>
            The Creator Brand Journey maps how creative expression transforms from experimental category-mixing to distinctive voice 
            to cultural movement, establishing the natural progression that artistic creators follow as they build global brands.
          </p>
          <div class={styles.threadSteps}>
            <div class={styles.threadStep}>
              <div class={styles.threadStepIcon}>1</div>
              <div class={styles.threadStepContent}>
                <h3 class={styles.threadStepTitle}>Experimental Mixing</h3>
                <p>Testing combinations of existing categories and trends to find a unique mix that resonates</p>
              </div>
            </div>
            <div class={styles.threadStep}>
              <div class={styles.threadStepIcon}>2</div>
              <div class={styles.threadStepContent}>
                <h3 class={styles.threadStepTitle}>Distinctive Voice</h3>
                <p>Developing a consistent and authentic creative expression that attracts a dedicated following</p>
              </div>
            </div>
            <div class={styles.threadStep}>
              <div class={styles.threadStepIcon}>3</div>
              <div class={styles.threadStepContent}>
                <h3 class={styles.threadStepTitle}>Cultural Movement</h3>
                <p>Transforming the established creative expression into a widely recognized cultural force</p>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.additionalInfo}>
          <h2 class={styles.additionalInfoTitle}>Understanding the Creative Evolution Journey</h2>
          <p class={styles.additionalInfoText}>
            The three phases of creative evolution represent the natural progression that creators follow as they develop their brand and influence. 
            Each phase builds upon the previous one, with distinct characteristics and challenges.
          </p>
          <div class={styles.infoGrid}>
            <div class={styles.infoCard}>
              <h3 class={styles.infoCardTitle}>Spark Phase Characteristics</h3>
              <ul class={styles.infoList}>
                <li>Experimentation with different creative approaches</li>
                <li>Following and adapting to market trends</li>
                <li>Initial discovery of resonant creative elements</li>
                <li>Building foundational skills and techniques</li>
              </ul>
            </div>
            <div class={styles.infoCard}>
              <h3 class={styles.infoCardTitle}>Identity Phase Characteristics</h3>
              <ul class={styles.infoList}>
                <li>Development of a distinctive creative voice</li>
                <li>Consistent expression of core values and style</li>
                <li>Formation of dedicated audience communities</li>
                <li>Establishment of sustainable creative systems</li>
              </ul>
            </div>
            <div class={styles.infoCard}>
              <h3 class={styles.infoCardTitle}>Expansion Phase Characteristics</h3>
              <ul class={styles.infoList}>
                <li>Creation of intellectual property ecosystems</li>
                <li>Distributed creation and community contribution</li>
                <li>Cultural impact beyond direct audience</li>
                <li>Institutional recognition and influence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativePhases;