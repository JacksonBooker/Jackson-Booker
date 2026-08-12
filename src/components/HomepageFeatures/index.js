import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plex, Media Service',
    Svg: require('/static/img/Plex_logo_2022.svg').default,
    description: (
      <>
        Watch movies and TV from your own physical collection!
      </>
    ),
    link: 'https://watch.plex.tv/account/sign-in?forwardUrl=%2F%3F',
  },
  {
    title: 'Tailscale, Remote Access',
    Svg: require('/static/img/Tailscale-Logo-Black.svg').default,
    description: (
      <>
        Connect securely to your own private network and have remote access to your NAS anywhere.
      </>
    ),
    link: 'https://login.tailscale.com/login',
  },
  {
    title: 'Immitch',
    Svg: require('/static/img/immich-logo.svg').default,
    description: (
      <>
        Keep all your personal and unique images on your own server.
      </>
    ),
    link: 'https://immich.app/',
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
