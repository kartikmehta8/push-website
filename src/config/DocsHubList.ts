interface IQuickstartItem {
  title: string;
  codeblock: string;
}

export interface ITechDocItem {
  title: string;
  description: string;
  codeblock?: string;
  srcref?: string;
  alt?: string;
  link?: string;
  target?: string;
};

interface ISdkListItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

export const QuickstartItems: IQuickstartItem[] = [
  {
    title: 'Push Notification Quickstart',
    codeblock: `// Import Push SDK & Ethers
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Using random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

// Send a notification to users of your protocol
const apiResponse = await userAlice.channel.send(['*'], { 
  notification: {
    title: 'Hello World Notification',
    body: 'Web3 native notifications are here!',
  }
});`
  },
  {
    title: 'Push Chat Quickstart',
    codeblock: `// Import Push SDK & Ethers
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Using random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

// Send a message to Bob
const aliceMessagesBob = await userAlice.chat.send(
  '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666', 
  {content: "Gm gm! It's a me... Mario"}
);


`
  },
]

export const TechDocItems: ITechDocItem[] = [
  {
    title: 'Notifications',
    srcref: 'notification',
    alt: 'Logo representing Push Notifications - Push Protocol',
    link: '/docs/notifications',
    target: '_self',
    description: 'Explore different ways of sending and receiving notifications and more.',
    codeblock: `// Initialize wallet user
const userAlice = await PushAPI.initialize(signer);

// Send a notification to users of your protocol
const response = await userAlice.channel.send(['*'], { 
  notification: {
    title: 'Hello World Notification',
    body: 'Web3 native notifications are here!',
  }
});`
  },
  {
    title: 'Push Chat',
    srcref: 'message',
    alt: 'Logo representing Push Chat - Push Protocol',
    link: '/docs/chat',
    target: '_self',
    description: 'Learn about the details of Push Chat and how to do web3 native messaging.',
    codeblock: `// Initialize wallet user
const userAlice = await PushAPI.initialize(signer);

// Send message
const aliceMessagesBob = await userAlice.chat.send(
  '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666', 
  {content: "Gm gm! It's a me... Mario"}
);`
  },
  {
    title: 'Push Spaces',
    srcref: 'spaces',
    alt: 'Logo representing Push Spaces - Push Protocol',
    link: 'https://www.npmjs.com/package/@pushprotocol/restapi#for-spaces',
    target: '_blank',
    description: 'Learn about Push Spaces, the web3 native, token gated way of conducting spaces.',
  },
  {
    title: 'Push Video Calls',
    srcref: 'video',
    alt: 'Logo representing Push Video - Push Protocol',
    link: 'https://docs.push.org/developers/developer-guides/integrating-push-video',
    target: '_blank',
    description: 'Learn about the details of Push Video Calls and how to easily integrate it.',
  },
  {
    title: 'Examples',
    srcref: 'star',
    alt: 'Logo representing examples repo - Push Protocol',
    link: 'https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples',
    target: '_blank',
    description: 'Examples to showcase the power of Push Protocol’s communication stack.',
  },
  {
    title: 'Showrunners',
    srcref: 'showrunners',
    alt: 'Logo representing Showrunners scaffold - Push Protocol',
    link: '/docs/notifications/showrunners-scaffold/',
    target: '_self',
    description: 'Showrunners Framework and how to boost your web3 communications.',
  }
]

export const SdkItemsList: ISdkListItem[] = [
  {
    title: 'SDK Starter Kit',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://github.com/ethereum-push-notification-service/push-sdk',
  },
  {
    title: 'REST API',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/restapi',
  },
  {
    title: 'React Native',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/reactnative',
  },
  {
    title: 'Socket',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/socket',
  },
  {
    title: 'UIWeb',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/uiweb',
  },
  {
    title: 'UI Embed',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/uiembed',
  }
]


export const accordionItems = [
  { title: 'What is Push?', content: 'Content for Section 1' },
  { title: 'How do I contact customer support?', content: 'You can try telekinesis, but we recommend using our contact form instead.' },
  { title: 'What is Push trying to solve?', content: 'Content for Section 3' },
  { title: 'How can I use Push as an end-user?', content: 'Content for Section 3' },
  { title: 'What are the web3 communication products launched by Push?', content: 'Content for Section 3' },
  { title: 'Do I have to pay to send notifications?', content: 'Content for Section 3' },
];