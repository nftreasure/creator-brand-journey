import { A } from '@solidjs/router';
import styles from './home.module.css';

const Home = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Creator Brand Journey of Influence</h1>
      <p class={styles.subtitle}>A comprehensive framework for mapping creative brand evolution</p>
      
      <p class={styles.intro}>
        This framework maps the complete evolution of creator brands from initial creative exploration to lasting cultural impact.
        It integrates five critical dimensions: the creator's developmental journey, traction-based outcomes, brand recognition lifecycle,
        community transformation, and the lived experience of embodied influence.
      </p>
      
      <div class={styles.cardContainer}>
        <A href="/creative-phases" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#e67e22"}}>Creative Phases</h2>
          <p>
            The three phases of creative evolution from experimental category-mixing to distinctive voice to cultural movement.
          </p>
        </A>
        
        <A href="/creator-brand-development" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#e67e22"}}>Brand Developmental</h2>
          <p>
            The creative evolution through nine distinct stages from Dabbler to Global Media Brand in three major phases.
          </p>
        </A>

        <A href="/creator-brand-embodied" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#4F46E5"}}>Embodied Journey</h2>
          <p>
            An experiential framework mapping the lived experience of creative evolution from initial exploration to lasting cultural impact.
          </p>
        </A>
        
        <A href="/creator-brand-community" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#d35400"}}>Community Transformation</h2>
          <p>
            How audiences evolve from casual consumers to co-creators and cultural advocates across five phases of engagement.
          </p>
        </A>
        
        <A href="/creator-brand-recognition" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#d35400"}}>Brand Recognition</h2>
          <p>
            How market perception progresses from unknown to cultural institution with specific signals at each level.
          </p>
        </A>
        
        <A href="/creator-brand-outcomes" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#3C87D7"}}>Traction Outcomes</h2>
          <p>
            The specific measurable outcomes that signal progression through each phase of the Creator Brand Journey.
          </p>
        </A>
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
    </div>
  );
};

export default Home;