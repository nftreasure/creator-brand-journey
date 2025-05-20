import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import styles from './navigation.module.css';

interface NavigationProps {
  isExpanded: boolean;
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav class={`${styles.nav} ${props.isExpanded ? styles.expanded : styles.collapsed}`}>
      <ul class={styles.navMenu}>
        <li class={styles.navItem}>
          <A href="/" class={styles.navLink} activeClass={styles.active} end={true}>
            <span class={styles.icon}>🏠</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Home</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/creative-phases" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🔄</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Creative Phases</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/brand-development" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🎨</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Brand Development</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/embodiment" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>✨</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Embodied Journey</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/community-transformation" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>👥</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Community Transformation</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/brand-recognition" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🚀</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Brand Recognition</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/traction-outcomes" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>📊</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Traction Outcomes</span>
            </Show>
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;